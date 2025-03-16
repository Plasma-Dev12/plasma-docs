import Atalho from "@/components/Atalho";
import Dica from "@/components/Dica";
import dicas from "@/content/dicas.json";
import atalhos from "@/content/atalhos.json";

export default function GithubDocs() {
  return (
    <>
      <main className="flex flex-row w-screen">
        <section className="w-[300px] bg-slate-950"></section>
        <section className=" hidden mx-auto w-3/5 overflow-y-auto">
          <div className="grid grid-cols-3 gap-8 items-stretch p-4 justify-center w-full ">
            {dicas.map((dica, index) => (
              <Dica key={index} content={dica} />
            ))}
            {/* <ErrosSolucoes content={errosSolucoes[0]} /> */}
          </div>
        </section>
        <section className="mx-auto w-3/5 overflow-y-auto">
          <div className="grid grid-cols-1 gap-8 items-stretch p-4 justify-center w-full ">
            {Object.entries(atalhos).map(([key, value], index) => (
              <div key={index} className="flex flex-col gap-4">
                <h2 className="text-2xl text-white font-bold">{key}</h2>
                {value.map((atalho, index) => (
                  <Atalho key={index} content={atalho} />
                ))}
              </div>
            ))}
            {/* <ErrosSolucoes content={errosSolucoes[0]} /> */}
          </div>
        </section>
      </main>
    </>
  );
}
