import CodeSpace from "@/components/layout-elements/CodeSpace";
import Content from "@/components/layout-elements/Content";
import Title from "@/components/layout-elements/Title";

export default function GithubDocs() {
  return (
    <Content>
      <Title>GitHub CLI</Title>
      <CodeSpace>
        {`// Instale o GitHub CLI usando Chocolatey choco install gh`}
        <br />
        {`# Ou use outro gerenciador de pacotes`}
        <br />
        {`Testando o código`}
      </CodeSpace>
    </Content>
  );
}
