import Content from "@/components/layout-elements/Content";
import Paragraph from "@/components/layout-elements/Paragraph";
import Title from "@/components/layout-elements/Title";
import TopicContent from "@/components/layout-elements/TopicContent";
import TopicTitle from "@/components/layout-elements/TopicTitle";
import wiki from "@/assets/wiki.png";
import Image from "@/components/Image";
import List from "@/components/layout-elements/List";
import ListItem from "@/components/layout-elements/ListItem";
import CodeHighlight from "@/components/layout-elements/CodeHighlight";
import Spacer from "@/components/layout-elements/Spacer";

export default function Page() {
  return (
    <>
      <Content>
        <Title>Wiki</Title>
        <Content>
          <Paragraph>
            A seção Wiki do GitHub permite criar e gerenciar documentações
            diretamente dentro de um repositório, funcionando como um espaço
            colaborativo para armazenar informações importantes do projeto. É
            ideal para guias, manuais de instalação, descrições de arquitetura
            de software e outros recursos técnicos. Aqui está uma descrição
            detalhada da página e suas funcionalidades:
          </Paragraph>
          <Image src={wiki} alt="wiki image" />
        </Content>
        <TopicContent>
          <TopicTitle>Visão Geral da Página Wiki</TopicTitle>
          <List type="disc">
            <ListItem title="Descrição">
              Um repositório Wiki é um espaço dedicado para documentação,
              separado do repositório principal de código.
            </ListItem>
            <ListItem title="Finalidade">
              Facilitar a criação e edição de páginas estruturadas que ajudam a
              descrever e contextualizar o projeto.
            </ListItem>
          </List>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Elementos da Página</TopicTitle>
          <List type="disc">
            <ListItem title="Página Inicial (Home)">
              <List type="disc">
                <ListItem>
                  A primeira página criada automaticamente ao configurar o Wiki.
                </ListItem>
                <ListItem>
                  Geralmente usada como ponto de partida, com links para outras
                  páginas e uma visão geral do repositório.
                </ListItem>
              </List>
            </ListItem>
            <ListItem title="Barra Lateral (Sidebar)">
              <List type="disc">
                <ListItem>Exibe uma lista de páginas organizadas.</ListItem>
                <ListItem>
                  Pode ser personalizada para destacar links importantes e
                  organizar o conteúdo de forma hierárquica.
                </ListItem>
              </List>
            </ListItem>
            <ListItem title="Barra de Navegação Superior">
              <List type="disc">
                <ListItem>Botões como:</ListItem>
                <List type="disc">
                  <ListItem title="Edit">
                    Permite editar a página Wiki atual.
                  </ListItem>
                  <ListItem title="History">
                    Exibe o histórico de edições para a página atual.
                  </ListItem>
                  <ListItem title="New Page">
                    Criação de uma nova página.
                  </ListItem>
                </List>
              </List>
            </ListItem>
          </List>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Funcionalidades Principais</TopicTitle>
          <List type="disc">
            <ListItem title="Criação de Páginas">
              <List type="disc">
                <ListItem>
                  Qualquer usuário com permissão pode criar novas páginas.
                </ListItem>
                <ListItem>
                  Páginas são editáveis diretamente pelo navegador usando um
                  editor rico com suporte a{" "}
                  <CodeHighlight>Markdown</CodeHighlight>.
                </ListItem>
              </List>
            </ListItem>
            <ListItem title="Edição Colaborativa">
              <List type="disc">
                <ListItem>
                  Todos os colaboradores do repositório podem sugerir edições.
                </ListItem>
                <ListItem>
                  Histórico detalhado de versões está disponível, permitindo
                  reverter alterações, se necessário.
                </ListItem>
              </List>
            </ListItem>
            <ListItem title="Links e Organização">
              <List type="disc">
                <ListItem>
                  Fácil de criar links entre páginas utilizando a sintaxe de
                  <CodeHighlight>Markdown</CodeHighlight>.
                </ListItem>
                <ListItem>
                  Suporte para incluir imagens, tabelas e código, tornando a
                  Wiki rica em conteúdo.
                </ListItem>
              </List>
            </ListItem>
            <ListItem title="Histórico de Edições">
              <List type="disc">
                <ListItem>
                  Cada página possui um registro completo de alterações,
                  mostrando o autor, a data e o tipo de edição realizada.
                </ListItem>
              </List>
            </ListItem>
            <ListItem title="Clone do Repositório Wiki">
              <List type="disc">
                <ListItem>
                  As Wikis são armazenadas em um repositório Git separado, que
                  pode ser clonado para edição local.
                </ListItem>
                <ListItem title="Exemplo de comando">
                  <br></br>
                  <Spacer>
                    <CodeHighlight>
                      git clone https://github.com/usuario/repositorio.wiki.git
                    </CodeHighlight>
                  </Spacer>
                </ListItem>
              </List>
            </ListItem>
          </List>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Exemplos de Uso</TopicTitle>
          <List type="disc">
            <ListItem title="Guia de Contribuição">
              Explicar como outros desenvolvedores podem contribuir para o
              projeto.
            </ListItem>
            <ListItem title="Documentação Técnica">
              Descrever a arquitetura do software, diagramas ou fluxos de
              trabalho.
            </ListItem>
            <ListItem title="Manuais do Usuário">
              Criar tutoriais e instruções para usuários finais do software.
            </ListItem>
          </List>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Configuração Inicial</TopicTitle>
          <List type="disc">
            <ListItem title="Ativar a Wiki">
              <List type="disc">
                <ListItem>Clique na aba Wiki no repositório.</ListItem>
                <ListItem>
                  Caso ainda não esteja configurada, selecione a opção para
                  criar a primeira página.
                </ListItem>
              </List>
            </ListItem>
            <ListItem title="Personalização">
              <List type="disc">
                <ListItem>
                  Configure uma sidebar e página inicial para organizar o
                  conteúdo.
                </ListItem>
                <ListItem>
                  Utilize boas práticas de nomenclatura para facilitar a
                  navegação.
                </ListItem>
              </List>
            </ListItem>
          </List>
        </TopicContent>
      </Content>
    </>
  );
}
