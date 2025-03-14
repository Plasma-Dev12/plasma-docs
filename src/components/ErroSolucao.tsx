"use client";

import { useState } from "react";
import { LuChevronDown, LuChevronRight } from "react-icons/lu";

interface ErrosSolucoesProps {
  content: {
    erro: string;
    descricaoErro: string;
    solucoes: string[];
  };
}

export default function ErroSolucao({ content }: ErrosSolucoesProps) {
  const [mostrarSolucoes, setMostrarSolucoes] = useState(false);

  return (
    <article className="flex flex-col items-center justify-center border-2 border-[#8C93FB] bg-[#100d26] rounded-2xl text-center gap-y-2 shadow-lg shadow-[#342C80]">
      <div
        className="flex flex-row items-center justify-between w-full p-4 cursor-pointer hover:bg-[#171439] rounded-2xl gap-4"
        onClick={() => setMostrarSolucoes(!mostrarSolucoes)}
      >
        <div className="flex flex-col items-start gap-1">
          <h4 className="text-red-300 font-mono text-xl text-start font-bold">
            {content.erro}
          </h4>
          <p className="text-white text-justify text">
            {content.descricaoErro}
          </p>
        </div>
        {mostrarSolucoes ? (
          <LuChevronDown className="text-[#8C93FB] w-6 h-6" />
        ) : (
          <LuChevronRight className="text-[#8C93FB] w-6 h-6" />
        )}
      </div>
      <div
        className={` ${
          mostrarSolucoes ? "" : "hidden"
        } flex flex-col items-start gap-2 w-full p-4 pt-0`}
      >
        <h4 className="text-green-300 font-mono text-xl self-start font-bold">
          Soluções:
        </h4>
        {content.solucoes.map((solucao, index) => (
          <div key={index} className="flex items-start gap-2">
            <span className="bg-white rounded-full min-w-2 h-2 mt-2"></span>
            <p className="text-white text-start">{solucao}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
