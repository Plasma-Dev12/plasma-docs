import Atalho from "@/components/Atalho";
import atalhos from "@/content/atalhos.json";
import Content from "@/components/layout-elements/Content";
import Title from "@/components/layout-elements/Title";
import Paragraph from "@/components/layout-elements/Paragraph";
import TopicTitle from "@/components/layout-elements/TopicTitle";
import TopicContent from "@/components/layout-elements/TopicContent";

export default function GithubDocs() {
  return (
    <>
      <Title>Atalhos</Title>
      <Content>
        <TopicContent>
          <Paragraph>
            Ao executar o comando shift + ? em qualquer parte do GitHub, ao
            estar logado, uma tela listando alguns atalhos principais do GitHub
            surgirá. Esta tela também tem a opção de clicar para mostrar todos
            os atalhos do GitHub.
          </Paragraph>

          <Paragraph>
            O GitHub possui diversos atalhos de teclado para agilizar a
            navegação e o uso da plataforma. Aqui estão alguns dos mais úteis:
          </Paragraph>
        </TopicContent>
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
