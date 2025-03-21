import Dica from "@/components/Dica";
import Content from "@/components/layout-elements/Content";
import Paragraph from "@/components/layout-elements/Paragraph";
import Title from "@/components/layout-elements/Title";
import dicas from "@/content/dicas.json";

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
