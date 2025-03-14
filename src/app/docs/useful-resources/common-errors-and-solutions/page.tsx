import errosSolucoes from "@/content/errosSolucoes.json";
import ErroSolucao from "@/components/ErroSolucao";

export default function ErrosSolucoesPage() {
  return (
    <section className="flex flex-row text-[#F5F5F5]">
      <div className=" mx-auto flex flex-col">
        <span className="text-4xl font-bold pb-4">Erros comuns e soluções</span>

        <div className="grid grid-cols-1 gap-8 items-stretch justify-center ">
          <p className="text-lg">
            Ao utilizar o Git e o GitHub, alguns erros podem ocorrer com
            frequência. Abaixo, listamos alguns dos problemas mais comuns e suas
            soluções:
          </p>
          {errosSolucoes.map((erroSolucao, index) => (
            <ErroSolucao key={index} content={erroSolucao} />
          ))}
          {/* <ErrosSolucoes content={errosSolucoes[0]} /> */}
        </div>
      </div>
    </section>
  );
}
