import Dica from "@/components/Dica";
import dicas from "@/content/dicas.json";
export default function GithubDocs() {
  return (
    <>
      <main className="flex flex-row w-screen">
        <section className="w-[300px] bg-slate-950"></section>
        <section className="mx-auto w-3/5 overflow-y-auto">
          <div className="grid grid-cols-3 gap-8 items-stretch p-4 justify-center w-full ">
            {dicas.map((dica, index) => (
              <Dica key={index} content={dica} />
            ))}
            {/* <ErrosSolucoes content={errosSolucoes[0]} /> */}
          </div>
        </section>
      </main>
    </>
  );
}
