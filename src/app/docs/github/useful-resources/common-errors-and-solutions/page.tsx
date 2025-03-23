import errosSolucoes from "@/content/errosSolucoes.json";
import ErroSolucao from "@/components/ErroSolucao";
import Content from "@/components/layout-elements/Content";
import Title from "@/components/layout-elements/Title";
import Paragraph from "@/components/layout-elements/Paragraph";

//This defines the order in the sidebar, if not defined, 
//it will be in alphabetical order by the folders name, 
//and the order attribute will be 999
//orderInTheSideBar=1

export default function ErrosSolucoesPage() {
  return (
    <Content>
      <Title>Erros comuns e soluções</Title>
      <Paragraph indent={false}>
        Ao utilizar o Git e o GitHub, alguns erros podem ocorrer com frequência.
        Abaixo, listamos alguns dos problemas mais comuns e suas soluções:
      </Paragraph>
      {errosSolucoes.map((erroSolucao, index) => (
        <ErroSolucao key={index} content={erroSolucao} />
      ))}
      {/* <ErrosSolucoes content={errosSolucoes[0]} /> */}
    </Content>
  );
}
