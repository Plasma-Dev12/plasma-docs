import Dica from "@/components/Dica";
import Content from "@/components/layout-elements/Content";
import Paragraph from "@/components/layout-elements/Paragraph";
import Title from "@/components/layout-elements/Title";
import dicas from "@/content/dicas.json";

//This defines the order in the sidebar, if not defined, 
//it will be in alphabetical order by the folders name, 
//and the order attribute will be 999
//orderInTheSideBar=2

export default function DicasPage() {
  return (
    <>
      <Title>Dicas</Title>
      <Content>
        <Paragraph indent={false}>
          Ao utilizar o Git e o GitHub, boas práticas podem melhorar seu fluxo
          de trabalho e evitar problemas. Abaixo, listamos algumas dicas
          essenciais para um uso mais eficiente:
        </Paragraph>
        {dicas.map((dica) => (
          <Dica content={dica} key={dica.titulo} />
        ))}
      </Content>
    </>
  );
}
