import errosSolucoes from "@/content/errosSolucoes.json";
import ErroSolucao from "@/components/ErroSolucao";

export default function ErrosSolucoesPage() {
  return (
    <main className="flex flex-row">
      <section className=" mx-auto w-3/5">
        <div className="grid grid-cols-1 gap-8 items-stretch p-4 justify-center w-full ">
          {errosSolucoes.map((erroSolucao, index) => (
            <ErroSolucao key={index} content={erroSolucao} />
          ))}
          {/* <ErrosSolucoes content={errosSolucoes[0]} /> */}
        </div>
      </section>
    </main>
  );
}
