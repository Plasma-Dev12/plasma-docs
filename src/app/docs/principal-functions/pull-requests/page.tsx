import Content from "@/components/layout-elements/Content";
import Paragraph from "@/components/layout-elements/Paragraph";
import Title from "@/components/layout-elements/Title";
import Image from "next/image";
import PullRequestImage from "@/assets/pull-requests.png";
import TopicContent from "@/components/layout-elements/TopicContent";
import TopicTitle from "@/components/layout-elements/TopicTitle";
import List from "@/components/layout-elements/List";
import ListItem from "@/components/layout-elements/ListItem";
import CodeHighlight from "@/components/layout-elements/CodeHighlight";
import Topic from "@/components/layout-elements/Topic";

export default function Page() {
  return (
    <>
      <Title>Pull requests</Title>
      <Content>
        <Content>
          <Image
            className="w-full image-shadow"
            src={PullRequestImage}
            alt="Pull request image"
          />
          <Paragraph>
            A seção Pull Requests é fundamental para a colaboração no
            desenvolvimento de software. É nela que desenvolvedores revisam,
            discutem e integram alterações de código propostas em um
            repositório.
          </Paragraph>
        </Content>
        <TopicContent>
          <TopicTitle>Visão geral da página de Pull Requests</TopicTitle>
          <Paragraph>
            Esse recurso exibe uma lista de Pull Requests disponíveis no
            repositório. Sua finalidade é possibilitar que colaboradores
            proponham alterações no código, acompanhem as revisões realizadas e
            integrem branches, facilitando o fluxo de trabalho colaborativo.
          </Paragraph>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Elementos Principais</TopicTitle>
          <List type="topics">
            <ListItem title="Barra Superior">
              <List type="disc">
                <ListItem title="Filtros padrão">
                  Botões para visualizar Pull Requests abertas, fechadas ou
                  mescladas.
                </ListItem>
                <ListItem title="Barra de busca">
                  Facilita a localização de Pull Requests específicas usando
                  palavras-chave operadores avançados (ex.:{" "}
                  <CodeHighlight>is:open</CodeHighlight>{" "}
                  <CodeHighlight>author:usuário</CodeHighlight>).
                </ListItem>
                <ListItem title="Botão 'New Pull Request'">
                  Permite criar uma nova Pull Request para propor alterações
                  entre duas branches.
                </ListItem>
              </List>
            </ListItem>
            <ListItem title="Lista de Pull Requests">
              <List type="topics">
                <ListItem>
                  Exibe informações básicas para cada Pull Request
                  <List type="disc">
                    <ListItem title="Título">
                      Resume as mudanças propostas.
                    </ListItem>
                    <ListItem title="Estado">
                      Indica se a Pull Request está aberta, fechada ou mesclada.
                    </ListItem>
                    <ListItem title="Labels">
                      Etiquetas que categorizam a Pull Request (ex.:{" "}
                      <CodeHighlight>bugfix</CodeHighlight>,
                      <CodeHighlight>enhancement</CodeHighlight>).
                    </ListItem>
                    <ListItem title="Autor e Data">
                      Mostra quem criou a Pull Request e a última atualização.
                    </ListItem>
                    <ListItem title="Comentários e Revisões">
                      Indicado por um ícone que exibe o número de interações.
                    </ListItem>
                  </List>
                </ListItem>
              </List>
            </ListItem>
          </List>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Detalhes de uma Pull Request</TopicTitle>
          <Paragraph>
            Ao clicar em uma Pull Request, você é direcionado para uma página
            com detalhes completos.
          </Paragraph>
          <List type="disc">
            <ListItem title="Descrição">
              Apresenta o texto e os anexos adicionados pelo autor para
              descrever as alterações. Suporta Markdown, permitindo formatações
              detalhadas.
            </ListItem>
            <ListItem title="Comparação de Branches">
              Mostra a branch de origem (source branch) e a branch de destino
              (target branch) para o merge. Indicadores visuais exibem se há
              conflitos entre as branches.
            </ListItem>
            <ListItem title="Alterações no Código">
              Apresenta um diff detalhado das alterações feitas no código,
              destacando linhas adicionadas (em verde) e removidas (em
              vermelho).
            </ListItem>
            <ListItem title="Revisões">
              Comentários linha a linha diretamente no código, com possibilidade
              de solicitar alterações ou aprovar a Pull Request.
            </ListItem>
            <ListItem title="Checks e Automatizações">
              Resultados de testes automatizados ou pipelines (via GitHub
              Actions) aparecem nesta seção, exibindo o status dos checks, como
              passed, failed ou in progress.
            </ListItem>
          </List>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Funcionalidades Avançadas</TopicTitle>
          <Topic title="Draft Pull Requests">
            Permite criar Pull Requests em estado de rascunho, indicando que
            ainda estão em desenvolvimento e não estão prontas para revisão.
          </Topic>
          <Topic title="Assignees e Reviewers">
            <List type="disc">
              <ListItem title="Assignees">
                Define quem será responsável por gerenciar a Pull Request.
              </ListItem>
              <ListItem title="Reviewers">
                Especifica os revisores que devem avaliar o código.
              </ListItem>
            </List>
          </Topic>
          <Topic title="Linked Issues">
            Relaciona a Pull Request a uma issue específica para rastrear o
            progresso do trabalho.
          </Topic>
          <Topic title="Merge Options">
            Várias opções de merge, incluindo
            <List type="disc">
              <ListItem title="Merge Commit">
                Cria um commit adicional ao mesclar.
              </ListItem>
              <ListItem title="Squash and Merge">
                Compacta os commits da Pull Request em um único commit.
              </ListItem>
              <ListItem title="Rebase and Merge">
                Reaplica os commits da Pull Request na branch de destino.
              </ListItem>
            </List>
          </Topic>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Criar nova Pull Request</TopicTitle>
          <Paragraph>
            Ao clicar em "New Pull Request", o fluxo segue estas etapas:
          </Paragraph>

          <ListItem title="Selecionar Branches">
            Escolha a branch de origem e a branch de destino.
          </ListItem>
          <ListItem title="Revisar Alterações">
            Visualize o diff antes de prosseguir.
          </ListItem>
          <ListItem title="Adicionar Detalhes">
            Preencha o título, a descrição e selecione reviewers, assignees ou
            labels.
          </ListItem>
          <ListItem title="Criar Pull Request">
            Envie a proposta para revisão.
          </ListItem>
        </TopicContent>
      </Content>
    </>
  );
}
