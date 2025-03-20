import Atalho from "@/components/Atalho";
import atalhos from "@/content/atalhos.json";
import Content from "@/components/layout-elements/Content";
import Title from "@/components/layout-elements/Title";
import Paragraph from "@/components/layout-elements/Paragraph";
import TopicTitle from "@/components/layout-elements/TopicTitle";

export default function GithubDocs() {
  return (
    <>
      <Content>
        <Title>Atalhos</Title>
        <Paragraph indent={false}>
          Ao usar o Git e o GitHub, alguns atalhos podem acelerar seu fluxo de
          trabalho e aumentar a produtividade. Confira abaixo alguns dos mais
          úteis:
        </Paragraph>
        {Object.entries(atalhos).map(([key, value], index) => (
          <div className="flex flex-col gap-4" key={index}>
            <TopicTitle>{key}</TopicTitle>
            {value.map((atalho, index) => (
              <Atalho key={index} content={atalho} />
            ))}
          </div>
        ))}
      </Content>
    </>
  );
}
