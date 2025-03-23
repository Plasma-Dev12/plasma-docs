"use client";
import { CopyIcon } from "lucide-react";
import React, { useState } from "react";

interface CodeSpaceProps {
  children: string[];
  space?: boolean;
}

export default function CodeSpace({ children, space }: CodeSpaceProps) {
  const [isCopy, setIsCopy] = useState(false);

  const copyToClipboard = () => {
    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, 3000);

    const plainText = children
      .join("\n")
      .replace(/&space&/g, "\n")
      .replace(/&--&/g, "")
      .replace(/&f&/g, "")
      .replace(/&tab&/g, "  ");

    navigator.clipboard.writeText(plainText).then(
      () => {},
      () => {}
    );
  };

  const keywords = new Set(["if","else","return","function","const","let","var","for","while","switch","case","break","continue","default","try","catch","finally","throw","new","typeof","instanceof","this","class","extends","super","import","export","await","async","yield","true","false","null","undefined",]);

  const highlightCode = (code: string) => {
    const regex = /(&f&.*?&f&)|(&--&.*?&--&)|(&tab&)|(&space&)|(\/\/.*|#.*)|(\b\d+\b)|(["'`].*?["'`])|(\b\w+\b(?=\())|(\b\w+\b)/g;

    return code.split(regex).map((part, index) => {
      if (!part) return null;

      if (part.match(/^&tab&$/)) {
        return (
          <span key={index} className="text-[#42f58d]">
            {"  "}
          </span>
        );
      }

      if (part.match(/^&space&$/)) {
        return (
          <span key={index} className="text-[#42f58d]">
            {" "}
          </span>
        );
      }

      if (part.match(/^&f&.*&f&$/)) {
        return (
          <span key={index} className="text-[#42f58d] font-bold">
            {part.replace(/&f&/g, "")}
          </span>
        );
      }

      if (part.match(/^&--&.*&--&$/)) {
        return (
          <span key={index} className="text-[#ffffff62] font-bold">
            {part.replace(/&--&/g, "")}
          </span>
        );
      }

      if (part.match(/^["'`].*["'`]$/)) {
        return (
          <span key={index} className="text-[#FFD700]">
            {part}
          </span>
        );
      }

      if (part.match(/^\/\/.*|^#.*$/)) {
        return (
          <span key={index} className="text-[#999999] italic">
            {part}
          </span>
        );
      }

      if (part.match(/^\d+$/)) {
        return (
          <span key={index} className="text-[#FFA07A]">
            {part}
          </span>
        );
      }

      if (part.match(/^\b\w+\b(?=\()/)) {
        return (
          <span key={index} className="text-[#f5a742]">
            {part}
          </span>
        );
      }

      if (keywords.has(part)) {
        return (
          <span key={index} className="text-[#569CD6] font-bold">
            {part}
          </span>
        );
      }

      return <span key={index}>{part}</span>;
    });
  };

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

      return (
        <div key={index} className="whitespace-pre-wrap">
          {highlightCode(indentedLine)}
        </div>
      );
    });
  };

  return (
    <div
      className={`${
        space ? "my-4" : " "
      } relative w-full bg-[#271d41] text-[#c76af1] text-[16px] font-bold rounded-xl p-2 px-5 font-mono`}
    >
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 w-[100px] h-10 flex justify-center items-center gap-3 hover:cursor-pointer bg-[#c76af1]/20 text-[#c76af1] rounded hover:bg-[#a55ec4] transition-colors"
      >
        <CopyIcon className="cursor-pointer" />
        {isCopy ? (
          <p className="text-sm font-bold">Copiado</p>
        ) : (
          <p className="text-sm font-bold">Copiar</p>
        )}
      </button>
      {parseCode(children)}
    </div>
  );
}
