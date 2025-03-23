import Content from "@/components/layout-elements/Content";
import Paragraph from "@/components/layout-elements/Paragraph";
import Title from "@/components/layout-elements/Title";
import code from "@/assets/code.png";
import Image from "@/components/Image";
import TopicContent from "@/components/layout-elements/TopicContent";
import TopicTitle from "@/components/layout-elements/TopicTitle";
import List from "@/components/layout-elements/List";
import ListItem from "@/components/layout-elements/ListItem";
import Topic from "@/components/layout-elements/Topic";
import CodeHighlight from "@/components/layout-elements/CodeHighlight";
import SubTopic from "@/components/layout-elements/SubTopic";
import LearnMoreLink from "@/components/layout-elements/LearnMoreLink";

export default function Page() {
  return (
    <>
      <Title>Code</Title>
      <Content>
        <Content>
          <Image id="navbar" className="w-full" src={code} alt="Code image" />
          <Paragraph>
            A seção <b>Code</b> de um repositório no GitHub é o coração do
            projeto, onde estão armazenados os arquivos do código-fonte,
            estrutura e histórico do repositório. Essa seção permite navegar
            pela estrutura do código, visualizar commits recentes, acessar
            informações do repositório e realizar diversas ações. Além disso,
            oferece uma interface interativa e intuitiva, permitindo que
            usuários explorem facilmente o conteúdo do projeto, contribuam com
            alterações e acompanhem o desenvolvimento ao longo do tempo. Abaixo
            está um detalhamento completo dos elementos e funcionalidades desta
            página.
          </Paragraph>
        </Content>
        <TopicContent>
          <TopicTitle>Barra Superior (Top Bar)</TopicTitle>
          <Paragraph>
            A barra superior contém elementos essenciais para a navegação e
            manipulação do repositório:
          </Paragraph>
          <List type="decimal">
            <ListItem>
              <Topic title="Branch">
                Exibe a branch atualmente selecionada (ex: <b>main</b> ou{" "}
                <b>dev</b>).
                <List type="disc">
                  <ListItem>
                    <Topic>
                      Possibilita trocar de branch ou criar novas. Ao digitar o
                      nome da branch, caso ela não exista aparecerá uma opção
                      para cria-la.
                    </Topic>
                  </ListItem>
                </List>
              </Topic>
            </ListItem>
            <ListItem>
              <Topic title="Tags">
                Indica as versões do projeto disponíveis por meio de tags.
              </Topic>
            </ListItem>
            <ListItem>
              <Topic title="Commits Recentes">
                Mostra o autor e a mensagem do commit mais recente.
                <List type="disc">
                  <ListItem>
                    <Topic>
                      Acesso rápido ao histórico completo de commits, permitindo
                      visualizar detalhes e alterações de cada um.
                    </Topic>
                  </ListItem>
                </List>
              </Topic>
            </ListItem>
            <ListItem>
              <Topic title="Botões de Interação">
                Dependendo das permissões do usuário, podem estar disponíveis
                opções como criar pull requests, editar arquivos diretamente e
                visualizar histórico de alterações.
              </Topic>
            </ListItem>
          </List>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Estrutura de Arquivos e Pastas</TopicTitle>
          <Paragraph>
            A lista hierárquica de arquivos e pastas do repositório é
            apresentada de forma interativa, facilitando a navegação e
            compreensão da organização do código:
          </Paragraph>
          <List type="decimal">
            <ListItem title="Pastas">
              <List type="disc">
                <ListItem>
                  <Paragraph>
                    Podem ser expandidas para explorar o conteúdo de maneira
                    interativa.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    Estruturam o projeto de forma modular, agrupando arquivos
                    relacionados.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    O usuário pode navegar por subdiretórios clicando nas
                    pastas, facilitando a visualização de sua organização
                    interna.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    Algumas pastas podem conter arquivos ocultos ou específicos
                    de determinadas configurações, como{" "}
                    <CodeHighlight>.github</CodeHighlight> (para workflows e
                    templates) ou <CodeHighlight>node_modules</CodeHighlight>{" "}
                    (dependências do projeto).
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    A hierarquia das pastas influencia a importação e referência
                    de arquivos dentro do código, especialmente em projetos
                    grandes.
                  </Paragraph>
                </ListItem>
              </List>
            </ListItem>
            <ListItem title="Arquivos">
              <List type="disc">
                <ListItem>
                  <Paragraph>
                    Ao clicar, exibe o conteúdo em um viewer integrado.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    Podem ser editados diretamente no GitHub, caso o usuário
                    tenha permissões.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    Suportam diferentes tipos de formatação, como Markdown, JSON
                    e código-fonte em diversas linguagens.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    Alguns arquivos podem ser visualizados com destaque
                    especial, como <CodeHighlight>README.md</CodeHighlight>, que
                    aparece renderizado automaticamente.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    Arquivos podem ter histórico de alterações acessível,
                    permitindo comparar versões anteriores.
                  </Paragraph>
                </ListItem>
              </List>
            </ListItem>
            <ListItem title="Indicadores Importantes">
              <List type="disc">
                <ListItem title="README.md">
                  <Paragraph>
                    Aparece renderizado abaixo da lista de arquivos quando
                    presente, geralmente contendo informações sobre o projeto.
                  </Paragraph>
                </ListItem>
                <ListItem title=".gitignore">
                  <Paragraph>
                    Define arquivos ou padrões ignorados pelo Git, evitando que
                    arquivos desnecessários sejam versionados.
                  </Paragraph>
                </ListItem>
                <ListItem title="LICENSE">
                  <Paragraph>
                    Exibe informações sobre a licença do projeto, especificando
                    permissões e restrições de uso.
                  </Paragraph>
                </ListItem>
                <ListItem title="CONTRIBUTING.md">
                  <Paragraph>
                    Documento opcional com diretrizes para contribuições,
                    instruções sobre como relatar problemas e sugerir melhorias.
                  </Paragraph>
                </ListItem>
                <ListItem title="CONTRIBUTING.md">
                  <Paragraph>
                    Documento opcional com diretrizes para contribuições,
                    instruções sobre como relatar problemas e sugerir melhorias.
                  </Paragraph>
                </ListItem>
                <ListItem title="SECURITY.md">
                  <Paragraph>
                    Documento opcional que fornece diretrizes sobre como relatar
                    vulnerabilidades de segurança no projeto.
                  </Paragraph>
                </ListItem>
                <ListItem title="CHANGELOG.md">
                  <Paragraph>
                    Lista mudanças significativas entre versões do projeto,
                    ajudando desenvolvedores e usuários a acompanharem
                    evoluções.
                  </Paragraph>
                </ListItem>
                <ListItem title="Dockerfile">
                  <Paragraph>
                    Se presente, indica que o projeto pode ser containerizado
                    usando Docker.
                  </Paragraph>
                </ListItem>
              </List>
            </ListItem>
          </List>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Ações Principais (Botões)</TopicTitle>
          <Paragraph>
            A página Code possui vários botões para interação com o repositório,
            permitindo desde a clonagem do código até a criação de novos
            arquivos e a abertura de pull requests. Esses botões oferecem
            flexibilidade para desenvolvedores trabalharem diretamente na
            plataforma sem a necessidade de utilizar ferramentas externas.
          </Paragraph>
          <SubTopic>Code Button</SubTopic>
          <List type="disc">
            <ListItem title="Clone">
              Copia o URL do repositório para clonar via:{" "}
              <List type="disc">
                <ListItem title="HTTPS">
                  <Paragraph>
                    Quando você escolhe a opção <b>HTTPS</b> e clica em{" "}
                    <b>Copiar URL</b>, ele copia o link do repositório no
                    formato HTTPS, que pode ser usado para clonar o projeto via
                    Git (o sistema de controle de versão). E porque escolher o
                    HTTPS?
                  </Paragraph>
                  <List type="disc">
                    <ListItem title="Acessivel">
                      <Paragraph>
                        Não exige configuração prévia de chaves SSH.
                      </Paragraph>
                    </ListItem>
                    <ListItem title="Versátil">
                      <Paragraph>
                        Funciona com nome de usuário e senha ou token de acesso
                        pessoal para autenticar alterações, se necessário.
                      </Paragraph>
                    </ListItem>
                  </List>
                </ListItem>
                <ListItem title="SSH">
                  <Paragraph>
                    SSH é um protocolo usado para acessar e gerenciar sistemas
                    remotamente com segurança. No GitHub, ele permite a
                    autenticação usando chaves SSH, em vez de nome de usuário e
                    senha. No contexto do GitHub, é uma alternativa ao HTTPS
                    para clonar e interagir com repositórios. SSH (Secure Shell)
                    oferece mais segurança e conveniência para quem trabalha
                    frequentemente com repositórios, evitando a necessidade de
                    inserir credenciais toda vez. E porque escolher o HTTPS?
                  </Paragraph>
                  <List type="disc">
                    <ListItem>
                      <Paragraph>
                        Não precisa digitar senhas repetidamente.
                      </Paragraph>
                    </ListItem>
                    <ListItem>
                      <Paragraph>
                        Mais seguro e prático para desenvolvedores regulares.
                      </Paragraph>
                    </ListItem>
                    <ListItem>
                      <Paragraph>Ideal para automatizar tarefas.</Paragraph>
                    </ListItem>
                  </List>
                </ListItem>
                <ListItem title="Github CLI">
                  <Paragraph>
                    A opção GitHub CLI (Command Line Interface) permite que você
                    gerencie repositórios, crie issues, revise pull requests e
                    muito mais, sem precisar abrir a interface gráfica do GitHub
                    em um navegador. E porque escolher esta opção?
                  </Paragraph>
                </ListItem>
                <LearnMoreLink link="/docs/useful-resources/github-cli">
                  GitHub CLI
                </LearnMoreLink>
                <ListItem title="Github CLI">
                  <List type="disc">
                    <ListItem title="Produtividade">
                      <Paragraph>
                        Evita a necessidade de alternar entre o terminal e o
                        navegador.
                      </Paragraph>
                    </ListItem>
                    <ListItem title="Automatização">
                      <Paragraph>
                        Ideal para integrar em scripts e fluxos de trabalho.
                      </Paragraph>
                    </ListItem>
                    <ListItem title="Flexibilidade">
                      <Paragraph>
                        Disponível para diferentes sistemas operacionais.
                      </Paragraph>
                    </ListItem>
                  </List>
                </ListItem>
              </List>
            </ListItem>
            <ListItem title="Download ZIP">
              <Paragraph>
                Permite baixar todos os arquivos do repositório compactados em
                um arquivo ZIP.
              </Paragraph>
            </ListItem>
          </List>
          <SubTopic>Add File</SubTopic>
          <List type="disc">
            <ListItem>
              <Paragraph>
                Adicionar novos arquivos diretamente no repositório por meio do
                editor integrado ou carregando arquivos.
              </Paragraph>
            </ListItem>
          </List>
          <SubTopic>Go to File</SubTopic>
          <List type="disc">
            <ListItem>
              <Paragraph>
                Acesso rápido a arquivos específicos por meio de busca pelo
                nome.
              </Paragraph>
            </ListItem>
          </List>
          <SubTopic>Pull Reqests e Issues</SubTopic>
          <Paragraph indent={false}>
            Se o usuário tiver permissões apropriadas, pode:
          </Paragraph>
          <List type="disc">
            <ListItem>
              <Paragraph>Criar pull requests.</Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>Abrir issues relacionadas ao projeto.</Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>Acompanhar discussões e sugestões.</Paragraph>
            </ListItem>
          </List>
          <Paragraph indent={false}>
            Caso queira saber mais sobre issues clique abaixo:
          </Paragraph>
          <LearnMoreLink link="/docs/principal-functions/issues">
            Issues
          </LearnMoreLink>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Informações Sobre o Repositório</TopicTitle>
          <Paragraph>
            A seção <b>About</b> exibe informações importantes sobre o
            repositório:
          </Paragraph>
          <List type="disc">
            <ListItem title="Descrição">
              <Paragraph>
                Texto curto sobre o objetivo do repositório.
              </Paragraph>
            </ListItem>
            <ListItem title="Links úteis">
              <Paragraph>
                Pode incluir links para sites relacionados, documentação e
                deploy do projeto.
              </Paragraph>
            </ListItem>
            <ListItem title="Estatísticas">
              <List type="disc">
                <ListItem>
                  Número de <b>stars</b> (usuários que favoritaram o
                  repositório).
                </ListItem>
                <ListItem>
                  Quantidade de <b>forks</b> (cópias do repositório feitas por
                  outros desenvolvedores).
                </ListItem>
                <ListItem>
                  Contagem de <b>watchers</b> (usuários acompanhando
                  atualizações do repositório).
                </ListItem>
              </List>
            </ListItem>
          </List>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Histórico e Contribuição</TopicTitle>
          <List type="disc">
            <ListItem title="Commits">
              <List type="disc">
                <ListItem>
                  Lista histórica completa de alterações feitas no repositório.
                </ListItem>
                <ListItem>Links diretos para detalhes dos commits.</ListItem>
              </List>
            </ListItem>
            <ListItem title="Insights de Linguagem">
              <List type="disc">
                <ListItem>
                  Exibe um gráfico com a proporção das linguagens utilizadas no
                  projeto (ex: TypeScript, CSS, JavaScript).
                </ListItem>
              </List>
            </ListItem>
            <ListItem title="Contribuidores">
              <List type="disc">
                <ListItem>
                  Lista dos principais contribuidores do repositório.
                </ListItem>
                <ListItem>
                  Exibição do número de commits por contribuidor.
                </ListItem>
              </List>
            </ListItem>
          </List>
        </TopicContent>
        <TopicContent>
          <TopicTitle>README Renderizado</TopicTitle>
          <Paragraph>
            Se o repositório possuir um arquivo{" "}
            <CodeHighlight>README.md</CodeHighlight>, seu conteúdo é
            automaticamente exibido ao final da página <b>Code</b>.
          </Paragraph>
          <List type="disc">
            <ListItem title="Normalmente usado para">
              <List type="disc">
                <ListItem>Apresentar o projeto.</ListItem>
                <ListItem>Fornecer instruções de instalação e uso.</ListItem>
                <ListItem>Explicar a estrutura do código.</ListItem>
                <ListItem>Listar contribuidores e referências.</ListItem>
              </List>
            </ListItem>
            <ListItem>
              <Paragraph>
                Suporta markdown, permitindo formatações como títulos, listas,
                links e imagens.
              </Paragraph>
            </ListItem>
          </List>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Conclusão</TopicTitle>
          <Paragraph>
            Conclusão A seção Code no GitHub é um ponto central para
            desenvolvedores e colaboradores explorarem o projeto. Com uma
            interface intuitiva e diversas funcionalidades, permite gestão
            eficiente do código, colaboração e histórico detalhado do
            repositório
          </Paragraph>
        </TopicContent>
      </Content>
    </>
  );
}
