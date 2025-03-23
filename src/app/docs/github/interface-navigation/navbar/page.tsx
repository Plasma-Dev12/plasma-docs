import Image from "@/components/Image";
import SecondImage from "next/image";
import headerExample from "@/assets/navbar.png";
import githubIcon from "@/assets/githubLogo.png";
import plusOptions from "@/assets/plusFunctions.png";
import plusOptionsMoblie from "@/assets/mobile functions.png";
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

//This defines the order in the sidebar, if not defined, 
//it will be in alphabetical order by the folders name, 
//and the order attribute will be 999
//orderInTheSideBar=1

export default function NavbarPage() {
  return (
    <>
      <Title>Navbar</Title>
      <Content>
        <Content>
          <Image
            className="w-full image-shadow"
            src={headerExample}
            alt="Header image"
          />
        </Content>
        <TopicContent>
          <TopicTitle>
            <div className="flex items-center gap-4">
              Logotipo do GitHub
              <SecondImage src={githubIcon} alt="Github logo" className="w-[60px]" />
            </div>
          </TopicTitle>
          <Paragraph>
            Um clique no logotipo leva o usuário diretamente para o painel
            principal (Dashboard), onde é possível visualizar repositórios
            recentes, atividades e recomendações personalizadas
          </Paragraph>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Título</TopicTitle>
          <Paragraph>
            Indica em que página o usuário está atualmente. Muda de acordo com a
            navegação realizada pelo usuário. Podendo ter um título encadeado
            por breadcrumbs (exemplo: Área / Sub-área / Tópico), em caso de
            navegação complexa.
          </Paragraph>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Barra de Pesquisa</TopicTitle>
          <Topic title="Aparência">
            Exibe um espaço para busca com o texto placeholder{" "}
            <CodeHighlight>Type / to search</CodeHighlight>.
          </Topic>
          <Topic title="Função">
            Permite ao usuário realizar pesquisas avançadas por repositórios,
            usuários, commits e mais. Suporta operadores de busca como
            <CodeHighlight>author:</CodeHighlight>,{" "}
            <CodeHighlight>is:open</CodeHighlight>, entre outros.
          </Topic>
          <LearnMoreLink link="/docs/interface-navigation/search">
            Barra de pesquisa
          </LearnMoreLink>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Ícones Funcionais</TopicTitle>
          <List type="decimal">
            <ListItem title="Chat com Copilot">
              <Topic title="Função">
                disponibiliza um assistente inteligente integrado diretamente ao
                GitHub, ajudando os usuários a aumentar sua produtividade e
                resolver dúvidas em tempo real.
              </Topic>
              <List type="disc">
                <ListItem>
                  <Topic title="Sugestões de Código">
                    Gera trechos de código baseados em descrições ou comandos
                    fornecidos pelo usuário, agilizando o desenvolvimento e
                    evitando erros comuns.
                  </Topic>
                </ListItem>
                <ListItem>
                  <Topic title="Auxílio nas Pull Requests">
                    Oferece sugestões para melhorar o código, resolve conflitos
                    e explica trechos para facilitar revisões detalhadas ou
                    colaborações no projeto.
                  </Topic>
                </ListItem>
                <ListItem>
                  <Topic title="Documentação Simplificada">
                    Responde perguntas e traz insights diretamente da
                    documentação relevante do GitHub, ajudando o usuário a
                    encontrar soluções rapidamente.
                  </Topic>
                </ListItem>
                <ListItem>
                  <Topic title="Facilidade de Acesso">
                    O Chat com o Copilot está integrado diretamente na
                    interface, oferecendo assistência de forma rápida e
                    acessível na barra de navegação.
                  </Topic>
                </ListItem>
              </List>
            </ListItem>
            <ListItem title={`Ícone de "+"`}>
              <Topic title="Função">
                Abre um menu suspenso com opções para criar:
              </Topic>
              <Spacer>
                <SecondImage
                  className="md:hidden no-drag pl-10"
                  alt="Icons"
                  src={plusOptionsMoblie}
                />
                <SecondImage
                  className="hidden md:block no-drag pl-10"
                  alt="Icons"
                  src={plusOptions}
                />
              </Spacer>
              <List type="disc">
                <ListItem>
                  <Topic title="New repository">
                    Cria um novo repositório para armazenar e gerenciar código.
                    É possível configurar a visibilidade (público ou privado) e
                    adicionar arquivos iniciais, como um README ou .gitignore.
                  </Topic>
                </ListItem>
                <ListItem>
                  <Topic title="Import repository">
                    Permite importar um repositório externo para o GitHub, útil
                    para migrar projetos hospedados em outros serviços ou
                    servidores Git.
                  </Topic>
                </ListItem>
                <ListItem>
                  <Topic title="New codespace">
                    Inicia um novo ambiente de desenvolvimento remoto usando
                    GitHub Codespaces, permitindo editar código diretamente no
                    navegador com um ambiente pré-configurado.
                  </Topic>
                </ListItem>
                <ListItem>
                  <Topic title="New gist">
                    Cria um novo Gist, que pode ser público ou secreto. Gists
                    são trechos de código compartilháveis, úteis para armazenar
                    scripts, notas e exemplos rápidos.
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
                    Cria um novo projeto no GitHub Projects, permitindo
                    organizar tarefas e acompanhar o progresso usando quadros,
                    listas e tabelas.
                  </Topic>
                </ListItem>
              </List>
            </ListItem>
            <ListItem title="Your issues">
              <Spacer>
                <Topic title="Função">
                  direciona o usuário para uma página personalizada que exibe
                  todas as issues criadas ou atribuídas ao usuário.
                </Topic>
                <List type="disc">
                  <ListItem>
                    Facilita o gerenciamento das tarefas ou problemas
                    relacionados aos repositórios.
                  </ListItem>
                  <ListItem>
                    Inclui filtros como status (abertas ou fechadas) e
                    prioridade, permitindo acompanhar o progresso e resolver
                    pendências de forma eficiente.
                  </ListItem>
                </List>
              </Spacer>
            </ListItem>
            <ListItem title="Your pull requests">
              <Spacer>
                <Topic title="Função">
                  leva o usuário a uma página que lista todas as pull requests
                  associadas ao perfil.
                </Topic>
                <Spacer>
                  <List type="disc">
                    <ListItem>
                      Mostra as pull requests criadas pelo usuário, atribuídas a
                      ele ou que exigem revisão.
                    </ListItem>
                    <ListItem>
                      Permite visualizar o status de cada solicitação (exemplo:
                      aberta, em merge, ou fechada) e tomar ações como revisar
                      código, discutir mudanças ou resolver conflitos.
                    </ListItem>
                  </List>
                </Spacer>
              </Spacer>
            </ListItem>
            <ListItem title="Notificações">
              <Spacer>
                <Topic title="Função">
                  exibe notificações relacionadas a issues, pull requests e
                  outros eventos dos repositórios acompanhados. Quando há
                  notificações pendentes, um contador aparece indicando o número
                  de itens não lidos.
                </Topic>
              </Spacer>
            </ListItem>
          </List>
          <Paragraph>
            Essa seção facilita a criação e organização de novos conteúdos
            diretamente pelo header do GitHub.
          </Paragraph>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Ícone de Perfil do Usuário</TopicTitle>
          <Topic title="Função">Abre um menu suspenso com opções como:</Topic>
          <List type="disc">
            <ListItem>Configurações da conta;</ListItem>
            <ListItem>
              Alternar entre diferentes organizações ou equipe;
            </ListItem>
            <ListItem>Sair da conta.</ListItem>
          </List>
        </TopicContent>
      </Content>
    </>
  );
}
