import Image from "next/image";
import headerExample from "@/assets/navbarImage.png";
import githubIcon from "@/assets/githubLogo.png";
import plusOptions from "@/assets/plusFunctions.png";
import Content from "@/components/layout-elements/Content";
import TopicContent from "@/components/layout-elements/TopicContent";
import TopicTitle from "@/components/layout-elements/TopicTitle";
import List from "@/components/layout-elements/List";
import ListItem from "@/components/layout-elements/ListItem";
import Spacer from "@/components/layout-elements/Spacer";
import Topic from "@/components/layout-elements/Topic";
import Paragraph from "@/components/layout-elements/Paragraph";
import Title from "@/components/layout-elements/Title";
import CodeHighlight from "@/components/layout-elements/CodeHighlight";
import LearnMoreLink from "@/components/layout-elements/LearnMoreLink";

export default function NavbarPage() {
  return (
    <>    
      <Title>Navbar</Title>
      <Content>
        <Content>
          <Image
            id="navbar"
            className="md:min-w-[800px]"
            src={headerExample}
            alt="Header image"
          />
        </Content>
        <TopicContent>
            <TopicTitle>
              <div className="flex items-center gap-4">
                Logotipo do GitHub
                <Image
                  src={githubIcon}
                  alt="Github logo"
                  className="w-[60px]"
                />
              </div>
            </TopicTitle>
          <Paragraph>
            Um clique no logotipo leva o usuário diretamente para o painel
            principal (Dashboard), onde é possível visualizar repositórios
            recentes, atividades e recomendações personalizadas
          </Paragraph>
        </TopicContent>      
      <TopicContent>
        <TopicTitle>Titulo</TopicTitle>
        <Paragraph>
          Indica em que página o usuário está atualmente. Muda de acordo com a
          navegação realizada pelo usuário. Podendo ter um título encadeado por breadcrumbs
          (exemplo: Área / Sub-área / Tópico), em caso de navegação complexa.
        </Paragraph>
      </TopicContent>
      <TopicContent>
        <TopicTitle>
          Barra de Pesquisa
        </TopicTitle>
        <Topic title="Aparência">
          Exibe um espaço para busca com o texto placeholder <CodeHighlight>Type / to search</CodeHighlight>.
        </Topic>
        <Topic title="Função">
          Permite ao usuário realizar pesquisas avançadas por repositórios,
          usuários, commits e mais. Suporta operadores de busca como 
          <CodeHighlight>author:</CodeHighlight>, <CodeHighlight>is:open</CodeHighlight>, entre outros. 
        </Topic>
        <LearnMoreLink link="/docs/interface-navigation/search">Barra de pesquisa</LearnMoreLink>
      </TopicContent>
        <TopicContent>
          <TopicTitle>Ícones Funcionais (lado direito da barra)</TopicTitle>
          <List type="decimal">
            <ListItem title="Sino de Notificações">
              <Spacer>
                <Topic title="Função">
                  exibe notificações relacionadas a issues, pull requests e outros
                  eventos dos repositórios acompanhados. Quando há notificações
                  pendentes, um contador aparece indicando o número de itens não
                  lidos.
                </Topic>
              </Spacer>
            </ListItem>
            <ListItem title={`Ícone de "+"`}>
              <Spacer>
                <Topic title="Função">
                  Abre um menu suspenso com opções para criar:
                </Topic>
                <Spacer>
                  <Image className="no-drag ml-10" alt="Icons" src={plusOptions} />
                </Spacer>
                <Spacer>              
                  <List type="disc">
                    <ListItem>
                      <Topic title="New repository">
                        Cria um novo repositório para armazenar e gerenciar código. É
                        possível configurar a visibilidade (público ou privado) e
                        adicionar arquivos iniciais, como um README ou .gitignore.
                      </Topic>
                    </ListItem>
                    <ListItem>
                      <Topic title="Import repository">
                        Permite importar um repositório externo para o GitHub, útil para
                        migrar projetos hospedados em outros serviços ou servidores Git.
                      </Topic>
                    </ListItem>
                    <ListItem>
                      <Topic title="New codespace">
                        Inicia um novo ambiente de desenvolvimento remoto usando GitHub
                        Codespaces, permitindo editar código diretamente no navegador com
                        um ambiente pré-configurado.
                      </Topic>
                    </ListItem>
                    <ListItem>
                      <Topic title="New gist">
                        Cria um novo Gist, que pode ser público ou secreto. Gists são
                        trechos de código compartilháveis, úteis para armazenar scripts,
                        notas e exemplos rápidos.
                      </Topic>
                    </ListItem>
                    <ListItem>
                      <Topic title="New organization">
                        Cria uma nova organização no GitHub, que permite gerenciar
                        repositórios, permissões e equipes de forma colaborativa.
                      </Topic>
                    </ListItem>
                    <ListItem>
                      <Topic title="New project">
                        Cria um novo projeto no GitHub Projects, permitindo organizar
                        tarefas e acompanhar o progresso usando quadros, listas e tabelas.
                      </Topic>
                    </ListItem>
                  </List>
                </Spacer>
              </Spacer>
            </ListItem>
          </List>          
          <Paragraph>
            Essa seção facilita a criação e organização de novos conteúdos
            diretamente pelo header do GitHub.
          </Paragraph>
        </TopicContent>
        <TopicContent>
          <TopicTitle>
            Icone de Perfil do Usuáro
          </TopicTitle>
          <Topic title="Função">
            Abre um menu suspenso com opções como:
          </Topic>
          <List type="disc">
            <ListItem>
              Configurações da conta;
            </ListItem>
            <ListItem>
              Alternar entre diferentes organizações ou equipe;
            </ListItem>
            <ListItem>
              Sair da conta.
            </ListItem>
          </List>
        </TopicContent>
      </Content>
    </>
  );
}
