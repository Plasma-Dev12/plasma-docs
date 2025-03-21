import React from "react";

interface CodeSpaceProps {
  children: React.ReactNode;
}

export default function CodeSpace({ children }: CodeSpaceProps) {
  // Processa o children
  const elements = React.Children.toArray(children);

  return (
    <div className="w-full bg-[#271d41] text-[#c76af1] leading-10 font-bold rounded-xl p-2 px-5 font-mono">
      {elements.map((element, index) => {
        if (typeof element === "string") {
          // Estiliza linhas de texto
          const isComment =
            element.trim().startsWith("//") || element.trim().startsWith("#");

          return (
            <div
              key={index}
              className={isComment ? "text-[#6baab6]" : "text-[#c76af1]"}
            >
              {element}
            </div>
          );
        }
        // Renderiza qualquer outro elemento JSX
        return <React.Fragment key={index}>{element}</React.Fragment>;
      })}
    </div>
  );
}
