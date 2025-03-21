import CodeSpace from "@/components/layout-elements/CodeSpace";
import Content from "@/components/layout-elements/Content";
import Title from "@/components/layout-elements/Title";

export default function GithubDocs() {
  return (
    <Content>
      <Title>GitHub CLI</Title>
      <CodeSpace>
        {[
          "// Instale o GitHub CLI usando Chocolatey",
          "choco install gh",
          "# Ou use outro gerenciador de pacotes",
          "Testando o codigo.teste(() => {",
          "  console.log('Hello, world!');",
          "  if (true) {",
          "    console.log('Indentação automática!');",
          "  }",
          "})",
        ]}
      </CodeSpace>
    </Content>
  );
}