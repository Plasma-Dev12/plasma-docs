import atalhos from "@/content/atalhos.json";

interface AtalhosProps {
  content: {
    atalho: string;
    descricao: string;
  };
}

export default function Atalho({ content }: AtalhosProps) {
  return (
    <article className="flex flex-col justify-center border-2 border-[#8C93FB] bg-[#100d26] rounded-2xl text-center gap-y-1 px-4 pb-3 pt-2 shadow-lg shadow-[#342C80]">
      <div className="flex flex-row items-center gap-4 py-1">
        <h3 className="text-green-800 bg-green-200 text-start font-semibold font-mono p-1 px-2 rounded-sm">
          {content.atalho}
        </h3>
        <p className="text-white text-justify text">{content.descricao}</p>
      </div>
    </article>
  );
}
