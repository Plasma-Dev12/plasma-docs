import Image from "next/image";
import Content from "@/components/layout-elements/Content";
import TopicContent from "@/components/layout-elements/TopicContent";
import TopicTitle from "@/components/layout-elements/TopicTitle";
import Paragraph from "@/components/layout-elements/Paragraph";
import List from "@/components/layout-elements/List";
import ListItem from "@/components/layout-elements/ListItem";
import Title from "@/components/layout-elements/Title";
import CodeHighlight from "@/components/layout-elements/CodeHighlight";
import searchBarImage from "@/assets/search-bar.png";
import Spacer from "@/components/layout-elements/Spacer";
import Topic from "@/components/layout-elements/Topic";

//This defines the order in the sidebar, if not defined, 
//it will be in alphabetical order by the folders name, 
//and the order attribute will be 999
//orderInTheSideBar=2

export default function SearchFunctionalityPage() {
  return (
    <>
      <Title>Barra de pesquisa</Title>
      <Content>
        <Content>
          <Image
            className="w-full image-shadow"
            src={searchBarImage}
            alt="Header image"
          />
          <Paragraph>
            A funcionalidade de busca no GitHub é uma ferramenta poderosa que
            permite localizar uma vasta gama de informações, como repositórios,
            usuários, commits, issues, pull requests e mais. Com suporte a busca
            avançada, ela pode ser personalizada por meio de operadores de
            pesquisa para encontrar exatamente o que você precisa.
          </Paragraph>
        </Content>
        <TopicContent>
          <TopicTitle>Localização da Ferramenta de Busca</TopicTitle>
          <Paragraph>
            A barra de busca está sempre disponível no topo da interface do
            GitHub. Você pode acessá-la rapidamente pressionando a tecla{" "}
            <CodeHighlight>/</CodeHighlight> no teclado para começar a digitar.
          </Paragraph>
        </TopicContent>

        <TopicContent>
          <TopicTitle>Tipos de Busca Disponíveis</TopicTitle>
          <List type="decimal">
            <ListItem title="Repositórios">
              <Paragraph>
                Encontre repositórios públicos ou privados que contenham
                palavras-chave específicas.
              </Paragraph>
              <Spacer>
                Exemplo:{" "}
                <CodeHighlight>machine learning language:python</CodeHighlight>{" "}
                → Retorna repositórios sobre machine learning que usam Python
                como linguagem de criação.
              </Spacer>
            </ListItem>
            <ListItem title="Commits">
              <Paragraph>
                Localize commits específicos com base em mensagens, autores ou
                hash.
              </Paragraph>
              <Spacer>
                Exemplo: <CodeHighlight>author:usuario123 fix</CodeHighlight> →
                Lista commits que contêm &quot;fix&quot; feitos pelo autor
                &quot;usuario123&quot;.
              </Spacer>
            </ListItem>
            <ListItem title="Issues e Pull Requests">
              <Paragraph>
                Encontre issues ou pull requests abertas ou fechadas.
              </Paragraph>
              <Spacer>
                Exemplo: <CodeHighlight>is:open label:bug</CodeHighlight> →
                Exibe issues abertas com o rótulo &quot;bug&quot;.
              </Spacer>
            </ListItem>
            <ListItem title="Usuários">
              <Paragraph>
                Localize perfis de usuários por nome ou localização.
              </Paragraph>
              <Spacer>
                Exemplo: <CodeHighlight>location:Brazil</CodeHighlight> → Exibe
                usuários cadastrados no Brasil.
              </Spacer>
            </ListItem>
            <ListItem title="Código">
              <Paragraph>
                Busque trechos específicos de código em repositórios públicos.
              </Paragraph>
              <Spacer>
                Exemplo: <CodeHighlight>filename:README.md</CodeHighlight> →
                Mostra arquivos chamados &quot;README.md&quot;.
              </Spacer>
            </ListItem>
          </List>
        </TopicContent>

        <TopicContent>
          <TopicTitle>Operadores de Pesquisa Avançada</TopicTitle>
          <Paragraph>
            A busca avançada no GitHub suporta uma série de operadores que
            refinam os resultados. Aqui estão os principais:
          </Paragraph>
          <List type="disc">
            <ListItem>
              <Paragraph>
                <CodeHighlight>repo:</CodeHighlight> Limita a busca a um
                repositório específico. Exemplo:{" "}
                <CodeHighlight>repo:usuario/repo issue</CodeHighlight>
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                <CodeHighlight>user:</CodeHighlight> Limita a busca a um usuário
                específico. Exemplo:{" "}
                <CodeHighlight>user:usuario123</CodeHighlight>
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                <CodeHighlight>language:</CodeHighlight> Filtra por linguagem de
                programação. Exemplo:{" "}
                <CodeHighlight>language:javascript</CodeHighlight>
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                <CodeHighlight>is:</CodeHighlight> Define o status (open,
                closed, etc.). Exemplo: <CodeHighlight>is:closed</CodeHighlight>
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                <CodeHighlight>label:</CodeHighlight> Busca por etiquetas
                específicas em issues ou pull requests. Exemplo:{" "}
                <CodeHighlight>label:enhancement</CodeHighlight>
              </Paragraph>
            </ListItem>
          </List>
        </TopicContent>

        <TopicContent>
          <TopicTitle>Benefícios da Busca Avançada</TopicTitle>
          <List type="disc">
            <ListItem>
              <Topic title="Precisão">
                Economiza tempo ao refinar os resultados de forma específica.
              </Topic>
            </ListItem>
            <ListItem>
              <Topic title="Escalabilidade">
                Funciona em projetos pequenos e grandes.
              </Topic>
            </ListItem>
            <ListItem>
              <Topic title="Colaboração">
                Facilita encontrar trabalho em andamento ou histórico.
              </Topic>
            </ListItem>
          </List>
        </TopicContent>
      </Content>
    </>
  );
}
