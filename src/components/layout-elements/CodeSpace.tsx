"use client";
import { CopyIcon } from "lucide-react";
import React, { useState } from "react";

interface CodeSpaceProps {
  children: string[]; // Agora você passa o código como um array de linhas
}

export default function CodeSpace({ children }: CodeSpaceProps) {
  const [isCopy, setIsCopy] = useState(false);

  // Função para copiar o código
  const copyToClipboard = () => {
    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, 3000);
    const code = children.join("\n");
    navigator.clipboard.writeText(code).then(
      () => {},
      () => {}
    );
  };

  // Função para auto-indentação do código
  const autoIndent = (line: string, indentLevel: number) => {
    const spaces = "  ".repeat(indentLevel);
    return spaces + line;
  };

  // Função para processar cada linha de código com auto-indentação e estilização
  const parseCode = (lines: string[]) => {
    let indentLevel = 0;

    return lines.map((line, index) => {
      const trimmedLine = line.trim();

      if (trimmedLine.endsWith("}") || trimmedLine.startsWith("}")) {
        indentLevel = Math.max(0, indentLevel - 1);
      }

      const indentedLine = "  ".repeat(indentLevel) + trimmedLine;

      if (trimmedLine.endsWith("{")) {
        indentLevel += 1;
      }

      // Identificar comentários
      if (trimmedLine.startsWith("//") || trimmedLine.startsWith("#")) {
        return (
          <div key={index} className="text-[#6baab6] whitespace-pre-wrap">
            {indentedLine}
          </div>
        );
      }

      // Regex melhorado para capturar cada parte corretamente
      const regex = /(console\.|log|\(|\)|;|["'`].*?["'`])/g;

      const parts = indentedLine.split(regex).map((part, partIndex) => {
        if (!part) return null;

        if (part.match(/^["'`].*["'`]$/)) {
          return (
            <span key={partIndex} className="text-[#FFD700]">
              {part}
            </span>
          );
        }

        if (part === "console.") {
          return (
            <span key={partIndex} className="text-[#c76af1]">
              {part}
            </span>
          );
        }

        if (part === "log") {
          return (
            <span key={partIndex} className="text-[#42f58d]">
              {part}
            </span>
          );
        }

        if (["(", ")", ";"].includes(part)) {
          return (
            <span key={partIndex} className="text-[#42f58d]">
              {part}
            </span>
          );
        }

        return <span key={partIndex}>{part}</span>;
      });

      return (
        <div key={index} className="whitespace-pre-wrap">
          {parts}
        </div>
      );
    });
  };

  return (
    <div className="relative w-full bg-[#271d41] text-[#c76af1] font-bold rounded-xl p-2 px-5 font-mono">
      {/* Botão para copiar */}
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 w-[120px] h-10 flex justify-center items-center gap-3 hover:cursor-pointer bg-[#c76af1]/20 text-[#c76af1] rounded hover:bg-[#a55ec4] transition-colors"
      >
        <CopyIcon className="cursor-pointer" />
        {isCopy ? <p>Copiado</p> : <p>Copiar</p>}
      </button>

      {/* Renderizar as linhas de código com estilização */}
      {parseCode(children)}
    </div>
  );
}
