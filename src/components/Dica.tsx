import { LuLightbulb } from "react-icons/lu";

interface DicasProps {
  content: {
    titulo: string;
    descricao: string;
  };
}

export default function Dica({ content }: DicasProps) {
  return (
    <article className="flex flex-col justify-center border-2 border-[#8C93FB] bg-[#100d26] rounded-2xl text-center gap-y-1 px-4 pb-3 pt-2 shadow-lg shadow-[#342C80]">
      <div className="flex flex-row items-center gap-2 py-1">
        <LuLightbulb className="text-yellow-400 size-6" />
        <h3 className="text-yellow-400 font-mono text-xl text-start font-bold">
          {content.titulo}
        </h3>
      </div>
      <p className="text-white text-justify text">{content.descricao}</p>
    </article>
  );
}
