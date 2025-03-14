import Atalho from "@/components/Atalho";

import atalhos from "@/content/atalhos.json";

export default function GithubDocs() {
  return (
    <section className="flex flex-row text-[#F5F5F5]">
      <div className=" mx-auto flex flex-col">
        <span className="text-4xl font-bold mb-4">Atalhos</span>

        <div className="grid grid-cols-1 gap-8 items-stretch justify-center ">
          <p className="text-lg">
            Ao utilizar o Git e o GitHub, alguns erros podem ocorrer com
            frequência. Abaixo, listamos alguns dos problemas mais comuns e suas
            soluções:
          </p>
          {Object.entries(atalhos).map(([key, value], index) => (
            <div className="flex flex-col gap-4" key={index}>
              <h2 className="text-2xl text-white font-bold">{key}</h2>
              {value.map((atalho, index) => (
                <Atalho key={index} content={atalho} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  {
  }
}
