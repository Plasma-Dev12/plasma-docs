import Content from "@/components/layout-elements/Content";
import Title from "@/components/layout-elements/Title";
import Image from "@/components/Image";
import IssuesImage from "@/assets/issues.png";
import Paragraph from "@/components/layout-elements/Paragraph";
import TopicContent from "@/components/layout-elements/TopicContent";
import TopicTitle from "@/components/layout-elements/TopicTitle";
import List from "@/components/layout-elements/List";
import ListItem from "@/components/layout-elements/ListItem";
import CodeHighlight from "@/components/layout-elements/CodeHighlight";
import Topic from "@/components/layout-elements/Topic";

//This defines the order in the sidebar, if not defined, 
//it will be in alphabetical order by the folders name, 
//and the order attribute will be 999
//orderInTheSideBar=2

export default function Page() {
  return (
    <>
      <Title>Issues</Title>
      <Content>
        <Content>
          <Image
            src={IssuesImage}
            alt="Issues image"
          />
          <Paragraph>
            A seção Issues é uma das funcionalidades mais importantes do GitHub
            para acompanhamento e gerenciamento de tarefas, bugs, sugestões e
            outros tópicos dentro de um repositório.
          </Paragraph>
        </Content>
        <TopicContent>
          <TopicTitle>Visão Geral da Página de Issues</TopicTitle>
          <Paragraph>
            O recurso permite exibir todas as issues existentes no repositório,
            que podem ser organizadas em categorias como abertas e fechadas ou
            filtradas com base em critérios específicos. Sua finalidade é atuar
            como um sistema de acompanhamento colaborativo, possibilitando que
            as equipes rastreiem tarefas pendentes, relatem problemas e discutam
            soluções de forma eficiente.
          </Paragraph>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Elementos da Página</TopicTitle>
          <List type="topics">
            <ListItem title="Barra Superior">
              <List type="disc">
                <ListItem title="Filtros padrão">
                  Botões de seleção rápida para visualizar issues abertas ou
                  fechadas.
                </ListItem>
                <ListItem title="Barra de busca">
                  Permite localizar issues por palavras-chave ou utilizando
                  operadores avançados (ex.:{" "}
                  <CodeHighlight>is:open</CodeHighlight>{" "}
                  <CodeHighlight>label:bug</CodeHighlight>).
                </ListItem>
                <ListItem title="Botão 'New Issue'">
                  Localizado no canto superior direito da página. Inicia a
                  criação de uma nova issue (veja mais abaixo na seção &quot;Criar
                  Nova Issue&quot;).
                </ListItem>
              </List>
            </ListItem>
            <ListItem title="Lista de Issues">
              <List type="topics">
                <ListItem>
                  Exibe as issues com as seguintes informações:
                  <List type="disc">
                    <ListItem title="Título">
                      Resume o conteúdo da issue.
                    </ListItem>
                    <ListItem title="Labels">
                      Etiquetas coloridas que classificam a issue (ex.:{" "}
                      <CodeHighlight>bug</CodeHighlight>,
                      <CodeHighlight>enhancement</CodeHighlight>,{" "}
                      <CodeHighlight>question</CodeHighlight>).
                    </ListItem>
                    <ListItem title="Autor">
                      Usuário que criou a issue.
                    </ListItem>
                    <ListItem title="Nº de Comentários">
                      Indicado por um ícone de balão de diálogo.
                    </ListItem>
                    <ListItem title="Data">
                      Mostra quando a issue foi criada ou atualizada pela última
                      vez.
                    </ListItem>
                  </List>
                </ListItem>
              </List>
            </ListItem>
          </List>
        </TopicContent>

        <TopicContent>
          <TopicTitle>Detalhes de Uma Issue</TopicTitle>
          <Paragraph>
            Ao clicar em uma issue, o usuário é redirecionado para a página
            específica com mais detalhes.
          </Paragraph>
          <List type="disc">
            <ListItem title="Descrição Inicial">
              Texto e anexos adicionados pelo autor para descrever o problema ou
              solicitação. Suporta Markdown, permitindo formatação rica, como
              listas, tabelas e imagens.
            </ListItem>
            <ListItem title="Comentários">
              Seção para discussões colaborativas. Outros membros do projeto
              podem adicionar comentários, sugerir mudanças ou oferecer
              soluções.
            </ListItem>
            <ListItem title="Assignees">
              Permite atribuir responsáveis para resolver a issue.
            </ListItem>
            <ListItem title="Labels">
              Organiza e categoriza a issue para facil identificação.
            </ListItem>
            <ListItem title="Milestones">
              Associa a issue a um marco especifico do projeto, como uma versao
              de lancamento.
            </ListItem>
          </List>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Funcionalidades Avançadas</TopicTitle>
          <Topic title="Templates de Issues">
            Repositórios podem configurar templates personalizados para orientar
            os colaboradores na criação de issues.
          </Topic>
          <Topic title="Automatizações com GitHub Actions">
            Possível configurar automações para fechar issues automaticamente ao
            realizar merges em Pull Requests relacionados.
          </Topic>
          <Topic title="Filtragem e Organização">
            Além da barra de busca, é possível utilizar filtros avançados como:
            <List type="disc">
              <ListItem title="is:open"> filtro por issues abertas</ListItem>
              <ListItem title="is:closed"> filtro por issues fechadas</ListItem>
              <ListItem title="author:usuário"> filtro por autor</ListItem>
            </List>
          </Topic>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Criar Nova Issue</TopicTitle>
          <Paragraph>Ao clicar no botão &quot;New Issue&quot;, o usuário pode:</Paragraph>
          <List type="disc">
            <ListItem>
              Definir um título descritivo e preencher o corpo da issue.
            </ListItem>
            <ListItem>
              Adicionar labels, assignees e milestones diretamente no momento da
              criação.
            </ListItem>
            <ListItem>
              Enviar anexos ou links úteis como parte da descrição.
            </ListItem>
          </List>
        </TopicContent>
      </Content>
    </>
  );
}
