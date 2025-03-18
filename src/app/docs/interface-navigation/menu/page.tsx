import Content from "@/components/layout-elements/Content";
import Paragraph from "@/components/layout-elements/Paragraph";
import Title from "@/components/layout-elements/Title";
import Image from "next/image";
import TopicContent from "@/components/layout-elements/TopicContent";
import TopicTitle from "@/components/layout-elements/TopicTitle";
import CodeHighlight from "@/components/layout-elements/CodeHighlight";
import Spacer from "@/components/layout-elements/Spacer";
import ListItem from "@/components/layout-elements/ListItem";
import List from "@/components/layout-elements/List";
import Topic from "@/components/layout-elements/Topic";
import menu from "@/assets/menu-sidebar.png";

export default function Page() {
  return (
    <>
      <Title>Menu</Title>
      <Content>
        <Content>
          <Paragraph>
            Ao clicar no botão de menu lateral hamburguer bar
            <CodeHighlight>≡</CodeHighlight>, um menu flutuante aparece no lado
            esquerdo da tela, oferecendo acesso rápido a diversas páginas e
            funcionalidades. Abaixo está a descrição detalhada de cada opção
            disponível:
          </Paragraph>
          <Image id="navbar" className="w-full" src={menu} alt="Menu image" />
        </Content>
        <TopicContent>
          <TopicTitle>Home</TopicTitle>
          <Spacer>
            <List type="disc">
              <ListItem>
                <Topic title="Função">
                  A página inicial do GitHub serve como um painel central para
                  os usuários acompanharem suas atividades e descobrirem novos
                  conteúdos. Ela apresenta um feed personalizado com
                  atualizações de repositórios seguidos, interações em issues e
                  pull requests, além de sugestões de projetos populares e
                  recomendados.
                </Topic>
              </ListItem>
              <ListItem>
                <Topic title="Descrição">
                  Além das atividades recentes, a página inicial exibe
                  repositórios frequentemente acessados e permite ao usuário
                  navegar rapidamente por seus projetos em andamento. O feed é
                  dinâmico e se adapta às interações do usuário, ajudando a
                  manter o fluxo de trabalho organizado e atualizado.
                </Topic>
              </ListItem>
            </List>
          </Spacer>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Issues</TopicTitle>
          <Spacer>
            <List type="disc">
              <ListItem>
                <Topic title="Função">
                  A seção de Issues permite aos usuários criar, visualizar e
                  gerenciar problemas e tarefas dentro dos repositórios. É uma
                  ferramenta essencial para o controle de bugs, sugestões de
                  melhorias e acompanhamento do progresso de um projeto.
                </Topic>
              </ListItem>
              <ListItem>
                <Topic title="Descrição">
                  Cada issue pode conter descrições detalhadas, imagens, código,
                  etiquetas <CodeHighlight>labels</CodeHighlight> para
                  categorização, responsáveis
                  <CodeHighlight>assignees</CodeHighlight> e marcos
                  <CodeHighlight>milestones</CodeHighlight> para melhor
                  organização. Os usuários podem comentar, sugerir soluções e
                  fechar issues conforme são resolvidas. Essa funcionalidade é
                  amplamente utilizada em projetos open source e ambientes
                  corporativos para gerenciamento ágil.
                </Topic>
              </ListItem>
            </List>
          </Spacer>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Pull Requests</TopicTitle>
          <Spacer>
            <List type="disc">
              <ListItem>
                <Topic title="Função">
                  A página de Pull Requests gerencia as solicitações de
                  mesclagem de código entre diferentes branches. Seu objetivo é
                  garantir que as alterações sejam revisadas e aprovadas antes
                  de serem incorporadas ao código principal.
                </Topic>
              </ListItem>
              <ListItem>
                <Topic title="Descrição">
                  Os desenvolvedores podem criar um
                  <CodeHighlight>pull request (PR)</CodeHighlight> para sugerir
                  mudanças, anexando comentários e justificativas. Revisores
                  podem analisar as alterações, sugerir edições e aprovar ou
                  rejeitar o merge. A interface permite visualizar diferenças
                  entre arquivos, histórico de commits e discussões sobre
                  melhorias. Essa prática é fundamental para garantir qualidade
                  e colaboração eficiente no desenvolvimento de software.
                </Topic>
              </ListItem>
            </List>
          </Spacer>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Projects</TopicTitle>
          <Spacer>
            <List type="disc">
              <ListItem>
                <Topic title="Função">
                  Projects oferece uma abordagem visual para a gestão de tarefas
                  e fluxos de trabalho. Ele permite que equipes organizem
                  atividades em quadros interativos e acompanhem o progresso de
                  cada etapa do projeto.
                </Topic>
              </ListItem>
              <ListItem>
                <Topic title="Descrição">
                  Utilizando um sistema similar ao Kanban, os usuários podem
                  criar colunas personalizadas para diferentes fases do
                  desenvolvimento, como <CodeHighlight>A Fazer</CodeHighlight>,{" "}
                  <CodeHighlight>Em Andamento</CodeHighlight> e
                  <CodeHighlight>Concluído</CodeHighlight>. As tarefas podem ser
                  movidas entre colunas, ter responsáveis atribuídos e incluir
                  prazos. Essa funcionalidade é amplamente utilizada para
                  planejamento de sprints, controle de demandas e coordenação de
                  equipes.
                </Topic>
              </ListItem>
            </List>
          </Spacer>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Discussions</TopicTitle>
          <Spacer>
            <List type="disc">
              <ListItem>
                <Topic title="Função">
                  A seção de Discussions cria um espaço para debates e trocas de
                  conhecimento dentro da plataforma, permitindo que
                  desenvolvedores interajam, tirem dúvidas e compartilhem ideias
                  sobre projetos específicos.
                </Topic>
              </ListItem>
              <ListItem>
                <Topic title="Descrição">
                  Diferente das Issues, que são voltadas para a resolução de
                  problemas técnicos e tarefas, as Discussions são projetadas
                  para conversas abertas e engajamento da comunidade. Os tópicos
                  podem ser categorizados, receber votos e contar com a
                  participação de diversos usuários. Essa ferramenta facilita o
                  aprendizado colaborativo e a construção de comunidades ativas
                  em torno de um repositório.
                </Topic>
              </ListItem>
            </List>
          </Spacer>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Codespaces</TopicTitle>
          <Spacer>
            <List type="disc">
              <ListItem>
                <Topic title="Função">
                  Codespaces é um ambiente de desenvolvimento baseado na nuvem
                  que permite iniciar rapidamente um workspace sem necessidade
                  de configurar localmente um projeto.
                </Topic>
              </ListItem>
              <ListItem>
                <Topic title="Descrição">
                  Utilizando infraestrutura do GitHub e da Microsoft, Codespaces
                  oferece uma máquina virtual com suporte para diversas
                  linguagens e ferramentas de desenvolvimento. O usuário pode
                  editar código diretamente no navegador, acessar extensões do
                  VS Code e integrar facilmente com o repositório do GitHub.
                  Isso é útil para colaboradores novos em um projeto ou para
                  desenvolvimento remoto sem depender de configurações locais.
                </Topic>
              </ListItem>
            </List>
          </Spacer>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Copilot</TopicTitle>
          <Spacer>
            <List type="disc">
              <ListItem>
                <Topic title="Função">
                  O GitHub Copilot é uma inteligência artificial que auxilia
                  desenvolvedores sugerindo trechos de código, completando
                  funções e acelerando a escrita de programas.
                </Topic>
              </ListItem>
              <ListItem>
                <Topic title="Descrição">
                  Treinado em milhões de linhas de código, o Copilot pode prever
                  e sugerir comandos enquanto o usuário programa, oferecendo
                  desde simples autocompletar até trechos complexos de código.
                  Ele suporta diversas linguagens e se integra diretamente ao VS
                  Code e IDEs compatíveis. Seu uso é especialmente vantajoso
                  para automatizar tarefas repetitivas, aprender novas sintaxes
                  e melhorar a produtividade no desenvolvimento de software.
                </Topic>
              </ListItem>
            </List>
          </Spacer>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Explore</TopicTitle>
          <Spacer>
            <List type="disc">
              <ListItem>
                <Topic title="Função">
                  A página Explore permite aos usuários descobrir repositórios,
                  projetos open source e tendências tecnológicas, fornecendo
                  insights sobre novas ferramentas e inovações.
                </Topic>
              </ListItem>
              <ListItem>
                <Topic title="Descrição">
                  Com base nas preferências do usuário e no que está em alta na
                  comunidade, a seção Explore exibe uma seleção de projetos
                  populares, contribuidores de destaque e repositórios
                  recomendados. Ela é ideal para quem deseja encontrar
                  inspiração, explorar tecnologias emergentes ou contribuir para
                  novos projetos.
                </Topic>
              </ListItem>
            </List>
          </Spacer>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Marketplace</TopicTitle>
          <Spacer>
            <List type="disc">
              <ListItem>
                <Topic title="Função">
                  O Marketplace do GitHub é um hub de extensões e ferramentas
                  que ampliam as funcionalidades da plataforma, permitindo a
                  integração com diversos serviços de terceiros.
                </Topic>
              </ListItem>
              <ListItem>
                <Topic title="Descrição">
                  Os usuários podem procurar e instalar plugins que auxiliam no
                  desenvolvimento, automação de tarefas, segurança,=
                  <CodeHighlight>
                    CI/CD Integração e Entrega Contínua
                  </CodeHighlight>
                  e muito mais. Entre os serviços disponíveis estão
                  monitoramento de código, análise de vulnerabilidades e
                  automação de processos. Empresas também podem disponibilizar
                  suas próprias soluções, tornando o GitHub um ambiente ainda
                  mais completo para desenvolvimento de software.
                </Topic>
              </ListItem>
            </List>
          </Spacer>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Repositories</TopicTitle>
          <Spacer>
            <List type="disc">
              <ListItem>
                <Topic title="Função">
                  Esta seção exibe os repositórios nos quais você mais
                  contribuiu, destacando aqueles considerados mais relevantes ou
                  populares com base em suas interações.
                </Topic>
              </ListItem>
              <ListItem>
                <Topic title="Descrição">
                  Aqui são listados seus ou repositórios que você contribuiu
                  recentemente, permitindo acesso rápido a cada um deles. Você
                  pode visualizar informações como nome do repositório e quem é
                  o dono dele.
                </Topic>
              </ListItem>
            </List>
          </Spacer>
        </TopicContent>
      </Content>
    </>
  );
}
