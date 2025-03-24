import CodeSpace from "@/components/layout-elements/CodeSpace";
import Content from "@/components/layout-elements/Content";
import Paragraph from "@/components/layout-elements/Paragraph";
import Title from "@/components/layout-elements/Title";
import githubcli from "@/assets/githubcli.png";
import Image from "@/components/Image";
import TopicContent from "@/components/layout-elements/TopicContent";
import TopicTitle from "@/components/layout-elements/TopicTitle";
import SubTopic from "@/components/layout-elements/SubTopic";
import LearnMoreLink from "@/components/layout-elements/LearnMoreLink";
import Spacer from "@/components/layout-elements/Spacer";
import List from "@/components/layout-elements/List";
import ListItem from "@/components/layout-elements/ListItem";
import CodeHighlight from "@/components/layout-elements/CodeHighlight";

//This defines the order in the sidebar, if not defined,
//it will be in alphabetical order by the folders name,
//and the order attribute will be 999
//orderInTheSideBar=4

export default function GithubDocs() {
  return (
    <Content>
      <Title>GitHub CLI</Title>
      <Content>
        <Paragraph>
          O GitHub CLI (gh) é uma ferramenta de linha de comando que permite
          interagir com o GitHub diretamente do terminal. Com ele, é possível
          criar, gerenciar e revisar issues, pull requests, repositórios e
          outras funcionalidades sem precisar acessar a interface web do GitHub.
        </Paragraph>
        <Image src={githubcli} alt="Github CLI" />
      </Content>
      <TopicContent>
        <TopicTitle>Instalação</TopicTitle>
        <Paragraph>
          O GitHub CLI pode ser instalado em diferentes sistemas operacionais:
        </Paragraph>
        <Spacer>
          <SubTopic>Windows</SubTopic>
          <LearnMoreLink
            text="Instale o GitHub CLI usando"
            link="https://chocolatey.org/"
            _blank
          >
            Chocolatey
          </LearnMoreLink>
          <CodeSpace space={true}>
            {["# Instalação via Chocolatey", "choco install gh"]}
          </CodeSpace>
          <LearnMoreLink text="Ou instale via" _blank link="https://scoop.sh/">
            Scoop
          </LearnMoreLink>
          <CodeSpace space={true}>
            {["# Instalação via Scoop", "scoop install gh"]}
          </CodeSpace>
        </Spacer>
        <Spacer>
          <SubTopic>MacOS</SubTopic>
          <LearnMoreLink text="Instale via" _blank link="https://brew.sh/">
            Homebrew
          </LearnMoreLink>
          <CodeSpace space={true}>
            {["# Instalação via Homebrew", "brew install gh"]}
          </CodeSpace>
        </Spacer>
        <Spacer>
          <SubTopic>Linux</SubTopic>
          <Paragraph indent={false}>
            Instale via o gerenciador de pacotes:
          </Paragraph>
          <CodeSpace space={true}>
            {[
              "# Debian/Ubuntu",
              "sudo apt install gh",
              "&space&",
              "# Fedora",
              "sudo dnf install gh",
              "&space&",
              "# Arch Linux",
              "sudo pacman -S github-cli",
            ]}
          </CodeSpace>
        </Spacer>
        <Spacer>
          <SubTopic>Instalar Pelo Site</SubTopic>
          <LearnMoreLink
            text="Ou instale pelo próprio site do"
            link="https://cli.github.com/"
            _blank
          >
            GithubCLI
          </LearnMoreLink>
        </Spacer>
      </TopicContent>
      <TopicContent>
        <TopicTitle>Configuração inicial</TopicTitle>
        <Paragraph>
          Após a instalação, faça login na sua conta do GitHub:
        </Paragraph>
        <CodeSpace space={true}>
          {["# Fazer login no github via terminal", "gh auth login"]}
        </CodeSpace>
        <Paragraph indent={false}>
          Escolha o método de autenticação (HTTPS ou SSH) e siga as instruções
          para conceder acesso.
        </Paragraph>
      </TopicContent>
      <TopicContent>
        <TopicTitle>Comandos Principais</TopicTitle>
        <Spacer>
          <SubTopic>Gerenciamento de Repositórios</SubTopic>
          <List type="disc">
            <ListItem title="Criar um repositório">
              <Paragraph>
                O comando{" "}
                <CodeHighlight>gh repo create nome-do-repo</CodeHighlight> no
                GitHub CLI é usado para criar um novo repositório no GitHub
                diretamente a partir do terminal. Ele permite configurar
                rapidamente um repositório sem precisar acessar a interface web
                do GitHub.
              </Paragraph>
              <CodeSpace space={true}>
                {[
                  "# Comando para criar um novo repositório público",
                  "gh repo create nome-do-repo &--&--public&--&",
                  "&space&",
                  "# Comando para criar um novo repositório privado",
                  "gh repo create nome-do-repo &--&--private&--&",
                ]}
              </CodeSpace>
              <List type="disc">
                <ListItem title="Observação">
                  <Paragraph>
                    Para criar repositórios organizacionais, basta especificar o
                    nome da organização antes do nome do repositório, como em:
                  </Paragraph>
                  <CodeSpace space={true}>
                    {[
                      "#Criar repositório organizacional",
                      "gh repo create minha-organizacao/novo-repo &--&--private&--&",
                    ]}
                  </CodeSpace>
                </ListItem>
              </List>
            </ListItem>
            <ListItem title="Clonar um repositório">
              <Paragraph>
                O comando gh repo clone dono-do-repo/nome-do-repo no GitHub CLI
                é usado para clonar um repositório do GitHub no seu computador
                local. Ele é uma forma simplificada de utilizar o comando git
                clone e faz parte da interface da CLI do GitHub. <br /> <br />
              </Paragraph>
              <Paragraph>
                <b>Exemplo: </b>Se o dono do repositório for microsoft e o nome
                do repositório for vscode, você pode executar:
              </Paragraph>
              <CodeSpace space={true}>
                {[
                  "# Comando para clonar repositório existente",
                  "gh repo clone microsoft/vscode",
                ]}
              </CodeSpace>
              <Paragraph>
                Este Comando:
                <List type="disc">
                  <ListItem>
                    <Paragraph>
                      Cria uma nova pasta chamada <b>vscode</b> no diretório
                      atual.
                    </Paragraph>
                  </ListItem>
                  <ListItem>
                    <Paragraph>
                      Baixa todos os arquivos do repositório público{" "}
                      <b>microsoft/vscode</b>.
                    </Paragraph>
                  </ListItem>
                </List>
              </Paragraph>
            </ListItem>
            <ListItem title="Difereças entre">
              <Paragraph>
                <CodeHighlight>gh clone</CodeHighlight> e{" "}
                <CodeHighlight>git clone</CodeHighlight>
              </Paragraph>
              <List type="disc">
                <Paragraph indent={false}>
                  Embora seja semelhante ao <b>git clone</b>, o{" "}
                  <b>GitHub CLI</b> facilita o uso, pois combina outras funções
                  GitHub no mesmo ambiente. Além disso:
                </Paragraph>
                <ListItem>
                  <Paragraph>
                    Ele autentica automaticamente (se você já estiver logado com
                    gh auth login).
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    Permite trabalhar diretamente com repositórios privados
                    associados à sua conta, se permitido.
                  </Paragraph>
                </ListItem>
              </List>
            </ListItem>
            <ListItem title="Listar repositórios">
              <Paragraph>
                O comando <CodeHighlight>gh repo list</CodeHighlight> é usado
                para listar os repositórios associados à sua conta no GitHub.
                Ele retorna uma lista de todos os repositórios aos quais você
                tem acesso, seja como proprietário ou colaborador.
              </Paragraph>
              <CodeSpace space={true}>
                {[
                  "# Comando para listar todos seus repositorios",
                  "gh repo list",
                  "&space&",
                  "# Comando para listar todos os repositorios de uma organização",
                  "gh repo list <nome-da-organizacao>",
                  "&space&",
                  "# Você pode formatar como a saída é exibida",
                  "gh repo list &--&--json&--& name,description &--&--limit 10&--&",
                ]}
              </CodeSpace>
            </ListItem>
            <ListItem title="Visualizar detalhes de um repositório">
              <Paragraph>
                O comando <CodeHighlight>gh repo view</CodeHighlight> no GitHub
                CLI é usado para visualizar informações detalhadas sobre um
                repositório específico no GitHub. Ele exibe detalhes do
                repositório, como descrição, informações sobre o dono, número de
                stars, forks, e outros metadados diretamente no terminal.
              </Paragraph>
              <CodeSpace space={true}>
                {[
                  "# Exibir informações básicas de um repositório",
                  "gh repo view nome-do-repo",
                  "&space&",
                  "# Abrir o repositório no navegador",
                  "gh repo view nome-do-repo &--&--web&--&",
                ]}
              </CodeSpace>
              <List type="disc">
                <ListItem title="Retorna detalhes como">
                  <List type="disc">
                    <ListItem>
                      <Paragraph>Nome do repositório</Paragraph>
                    </ListItem>
                    <ListItem>
                      <Paragraph>Descrição</Paragraph>
                    </ListItem>
                    <ListItem>
                      <Paragraph>URL</Paragraph>
                    </ListItem>
                    <ListItem>
                      <Paragraph>Número de stars, forks e watchers</Paragraph>
                    </ListItem>
                  </List>
                </ListItem>
              </List>
            </ListItem>
          </List>
        </Spacer>
        <Spacer>
          <SubTopic>Gerenciamento de Issues</SubTopic>
          <Spacer>
            <LearnMoreLink link="/docs/github/principal-functions/issues">
              Issues
            </LearnMoreLink>
          </Spacer>
          <List type="disc">
            <ListItem title="Criar uma issue">
              <Paragraph indent={true}>
                O comando <CodeHighlight>gh issue create</CodeHighlight> no
                GitHub CLI é usado para criar uma nova Issue em um repositório
                GitHub diretamente pelo terminal. As Issues são úteis para
                rastrear tarefas, bugs, ideias ou qualquer coisa que precisa ser
                trabalhada no projeto.
              </Paragraph>
              <CodeSpace space={true}>
                {[
                  "# Comando em si",
                  "gh issue create &--&--title&--& 'Título da Issue' &--&--body&--& 'Descrição detalhada'",
                  "&space&",
                  "# Exemplo prático",
                  "gh issue create &--&--title&--& 'Erro ao carregar página inicial' &--&--body&--& 'Ao acessar a página inicial, ocorre um erro 404. Isso precisa ser corrigido.'",
                ]}
              </CodeSpace>
            </ListItem>
            <ListItem title="Listar issues">
              <Paragraph indent={true}>
                O comando <CodeHighlight>gh issue list</CodeHighlight> no GitHub
                CLI é utilizado para listar todas as Issues de um repositório
                específico. Ele exibe uma lista de Issues abertas, fechadas ou
                filtradas com base em critérios fornecidos, diretamente no
                terminal.
              </Paragraph>
              <CodeSpace space={true}>
                {[
                  "# Comando em si",
                  "gh issue list",
                  "&space&",
                  "# Listar Issues de um repositório específico",
                  "gh issue list &--&--repo&--& dono-do-repo/nome-do-repo",
                  "&space&",
                  "# Exemplo prático",
                  "gh issue list &--&--repo&--& microsoft/vscode",
                  "&space&",
                  "# Filtrar por estado",
                  "gh issue list &--&--state&--& closed",
                  "gh issue list &--&--state&--& all",
                  "&space&",
                  "# Limitar número de Issues exibidas",
                  "gh issue list &--&--limit&--& 5",
                  "&space&",
                  "# Filtrar com base em etiquetas específicas",
                  "gh issue list &--&--label&--& 'bug'",
                  "&space&",
                  "# Exemplo de uso combinando tudo",
                  "gh issue list &--&--repo&--& microsoft/vscode &--&--state&--& open &--&--limit&--& 10 &--&--label&--& 'enhancement'",
                ]}
              </CodeSpace>
            </ListItem>
            <ListItem title="Listar issues">
              <Paragraph indent={true}>
                O comando <CodeHighlight>gh issue close</CodeHighlight> no
                GitHub CLI é usado para fechar uma Issue em um repositório
                GitHub. Isso é útil quando uma tarefa foi concluída, um problema
                foi resolvido, ou a Issue não é mais relevante. Você consegue
                encrontrar o ID da Issue através do <b>gh issue list</b>
              </Paragraph>
              <CodeSpace space={true}>
                {[
                  "# Comando em si",
                  "gh issue close <ID_DA_ISSUE>",
                  "&space&",
                  "# Exemplo prático",
                  "gh issue close 42",
                  "&space&",
                  "# Fechar uma Issue de um repositório especifico",
                  "gh issue close 42 &--&--repo&--& dono-do-repo/nome-do-repo",
                ]}
              </CodeSpace>
            </ListItem>
          </List>
        </Spacer>
        <Spacer>
          <SubTopic>Gerenciamento Pull Requests</SubTopic>
          <Spacer>
            <LearnMoreLink link="/docs/github/principal-functions/pull-requests">
              Pull Requests
            </LearnMoreLink>
          </Spacer>
          <List type="disc">
            <ListItem title="Criar um pull request">
              <Paragraph indent={true}>
                O comando <CodeHighlight>gh pr create</CodeHighlight> no GitHub
                CLI é utilizado para criar uma Pull Request no repositório
                atual. Este comando facilita o envio de alterações feitas em um
                branch para serem revisadas e mescladas em um branch principal,
                como <b>main</b>.
              </Paragraph>
              <CodeSpace space={true}>
                {[
                  "# Comando em si",
                  "gh pr create &--&--title&--& 'Título do PR' &--&--body&--& 'Descrição' &--&--base&--& main",
                  "&space&",
                  "# Exemplo prático",
                  "gh pr create &--&--title&--& 'Corrigir bug na interface' &--&--body&--& 'Este PR resolve um problema que ocorria ao carregar a página principal.' &--&--base&--& main",
                  "# Para arir o PR no navegador basta adicionar um --web ao final do comando",
                ]}
              </CodeSpace>
            </ListItem>
            <ListItem title="Listar pull requests">
              <Paragraph indent={true}>
                O comando <CodeHighlight>gh pr list</CodeHighlight> no GitHub
                CLI é usado para listar todas as Pull Requests (PRs) em um
                repositório. Ele ajuda a visualizar as PRs que estão abertas,
                fechadas ou mescladas, fornecendo um resumo útil diretamente no
                terminal.
              </Paragraph>
              <CodeSpace space={true}>
                {[
                  "# Listar PRs abertas",
                  "gh pr list",
                  "&space&",
                  "# Filtrar por estado",
                  "gh pr list &--&--state&--& closed",
                  "gh pr list &--&--state&--& all",
                  "&space&",
                  "# Limitar a Quantidade de PRs",
                  "gh pr list &--&--limit&--& 5",
                  "&space&",
                  "# Filtrar por autor (quem criou o PR)",
                  "gh pr list &--&--author&--& nome-do-autor",
                ]}
              </CodeSpace>
            </ListItem>
            <ListItem title="Visualizar detalhes de um pull request">
              <Paragraph indent={true}>
                O comando <CodeHighlight>gh pr view</CodeHighlight> no GitHub
                CLI é usado para visualizar detalhes de uma Pull Request
                específica em um repositório. Ele fornece informações úteis como
                título, descrição, status, autor, commits associados, arquivos
                alterados, revisores e muito mais.
              </Paragraph>
              <CodeSpace space={true}>
                {[
                  "# Visualizar os detalhes de um PR específico",
                  "gh pr view ID-do-PR",
                  "&space&",
                  "# Abrir a Pull Request no navegador",
                  "gh pr view ID-do-PR &--&--web&--&",
                  "&space&",
                  "# Exibir commits da PR",
                  "gh pr view ID-do-PR &--&--files&--&",
                ]}
              </CodeSpace>
            </ListItem>
            <ListItem title="Mesclar um pull request">
              <Paragraph indent={true}>
                O comando <CodeHighlight>gh pr merge</CodeHighlight> no GitHub
                CLI é usado para mesclar uma Pull Request no branch principal do
                repositório, utilizando o método de mesclagem padrão chamado
                Merge Commit. Ele combina o conteúdo do branch da Pull Request
                com o branch base, criando um commit adicional que registra a
                mesclagem.
              </Paragraph>
              <CodeSpace space={true}>
                {[
                  "# Código em si",
                  "gh pr merge ID-do-PR &--&--merge&--&",
                  "&space&",
                  "# Abrir a Pull Request no navegador",
                  "gh pr merge 42 &--&--merge&--&",
                ]}
              </CodeSpace>
              <Paragraph>
                Além do <CodeHighlight>--merge</CodeHighlight>, você pode usar
                outras estratégias:
              </Paragraph>
              <List type="decimal">
                <ListItem title="Squash Merge">
                  <List type="disc">
                    <ListItem>
                      <Paragraph>
                        Combina todos os commits da Pull Request em um único
                        commit no branch base.
                      </Paragraph>
                    </ListItem>
                    <ListItem>
                      <Paragraph>Exemplo:</Paragraph>
                      <CodeSpace space={true}>
                        {[
                          "# Exemlo prático",
                          "gh pr merge 42 &--&--squash&--&",
                        ]}
                      </CodeSpace>
                    </ListItem>
                  </List>
                </ListItem>
                <ListItem title="Rebase Merge">
                  <List type="disc">
                    <ListItem>
                      <Paragraph>
                        Aplica cada commit do branch da Pull Request diretamente
                        no branch base, sem criar um commit de mesclagem.
                      </Paragraph>
                    </ListItem>
                    <ListItem>
                      <Paragraph>Exemplo:</Paragraph>
                      <CodeSpace space={true}>
                        {[
                          "# Exemlo prático",
                          "gh pr merge 42 &--&--rebase&--&",
                        ]}
                      </CodeSpace>
                    </ListItem>
                  </List>
                </ListItem>
              </List>
            </ListItem>
          </List>
        </Spacer>
        <Spacer>
          <SubTopic>Gerenciamento de Releases</SubTopic>
          <Spacer>
            <Paragraph>
              No contexto do GitHub, um release é uma versão de um projeto que é
              publicada oficialmente, geralmente associada a uma tag no
              repositório. Releases são usadas para distribuir versões
              específicas de um software, incluindo binários, notas de versão e
              outros arquivos relevantes.
            </Paragraph>
          </Spacer>
          <List type="disc">
            <ListItem title="Criar um release">
              <Paragraph indent={true}>
                O comando <CodeHighlight>gh release create</CodeHighlight> no
                GitHub CLI é usado para criar uma nova release em um repositório
                do GitHub. Uma release no GitHub é uma versão específica do
                código-fonte que normalmente está vinculada a uma tag do Git e
                inclui informações como notas da versão (changelog), binários
                compilados, ou outros arquivos anexados.
              </Paragraph>
              <CodeSpace space={true}>
                {[
                  "# Exemplo prático",
                  "gh release create v1.0.0 &--&--title&--& 'Lançamento Inicial' &--&--notes&--& 'Esta é a primeira versão oficial do projeto'",
                  "&space&",
                  "# Se você precisar anexar um arquivo (como binários ou instaladores), basta especificar o caminho do arquivo",
                  "gh release create v1.0.0 &--&--title&--& 'Lançamento Inicial' &--&--notes&--& 'Primeira versão com todos os recursos principais.' arquivo.zip",
                ]}
              </CodeSpace>
            </ListItem>
            <ListItem title="Listar releases">
              <Paragraph indent={true}>
                O comando <CodeHighlight>gh release list</CodeHighlight> no
                GitHub CLI é usado para listar todas as releases (lançamentos)
                de um repositório no GitHub. Ele retorna informações como as
                tags das versões, títulos, descrições e status (se foram
                retiradas ou ainda estão ativas).
              </Paragraph>
              <CodeSpace space={true}>
                {[
                  "# Listar todas as releases do repositório atual",
                  "gh release list",
                  "&space&",
                  "# Listar releases de um repositório específico",
                  "gh release list &--&--repo&--& dono-do-repo/nome-do-repo",
                  "&space&",
                  "# Limitar o número de releases retornadas",
                  "gh release list &--&--limit&--& 5",
                ]}
              </CodeSpace>
            </ListItem>
            <ListItem title="Baixar um release">
              <Paragraph indent={true}>
                O comando <CodeHighlight>gh release download</CodeHighlight> no
                GitHub CLI é usado para baixar os arquivos anexados a uma
                release específica de um repositório no GitHub. Ele facilita o
                download de binários, instaladores ou outros ativos associados a
                uma versão marcada no GitHub.
              </Paragraph>
              <CodeSpace space={true}>
                {[
                  "# Baixar todos os ativos anexados à release",
                  "gh release download v1.0.0",
                  "&space&",
                  "# Baixar arquivos de uma release em um repositório específico",
                  "gh release download v1.0.0 &--&--repo&--& dono-do-repo/nome-do-repo",
                  "&space&",
                  "# Especificar um diretório para salvar os arquivos",
                  "gh release download v1.0.0 &--&--dir&--& /caminho/destino",
                ]}
              </CodeSpace>
            </ListItem>
          </List>
        </Spacer>
        <Spacer>
          <SubTopic>Gerenciamento de Gists</SubTopic>
          <Spacer>
            <Paragraph>
              <b>Gists</b> são pequenos trechos de código ou arquivos que podem
              ser compartilhados publicamente ou mantidos privados no GitHub.
              Eles são úteis para armazenar anotações, trechos de código
              reutilizáveis e compartilhar rapidamente informações com outras
              pessoas.
            </Paragraph>
          </Spacer>
          <List type="disc">
            <ListItem title="Criar um release">
              <Paragraph indent={true}>
                O comando <CodeHighlight>gh gist create</CodeHighlight> cria um
                novo gist no GitHub utilizando a CLI (Command Line Interface) do
                GitHub. Aqui está uma explicação detalhada:
              </Paragraph>
              <CodeSpace space={true}>
                {[
                  "# Exemplo prático",
                  "gh gist create 'arquivo.txt' &--&--public&--&",
                ]}
              </CodeSpace>
            </ListItem>
            <ListItem title="Listar gists">
              <Paragraph indent={true}>
                O comando <CodeHighlight>gh gist list</CodeHighlight> na CLI do
                GitHub lista todos os <b>gists</b> associados à sua conta do
                GitHub. Por padrão, ele mostra tanto os públicos quanto os
                privados, facilitando a visualização e o gerenciamento de seus
                gists.
              </Paragraph>
              <CodeSpace space={true}>
                {[
                  "# Comando para listar seus gists",
                  "gh gist list",
                  "&space&",
                  "# Para listar apenas gists públicos",
                  "gh gist list  &--&--public&--&",
                  "&space&",
                  "# Para listar apenas gists privados",
                  "gh gist list  &--&--secret&--&",
                  "&space&",
                  "# Para filtrar por palavras-chave, como um título específico",
                  "gh gist list | grep 'palavra-chave'",
                ]}
              </CodeSpace>
            </ListItem>
            <ListItem title="Visualizar um gist">
              <Paragraph indent={true}>
                O comando <CodeHighlight>gh gist view</CodeHighlight> na CLI do
                GitHub exibe o conteúdo e detalhes de um gist específico,
                identificado pelo seu ID único. Isso permite que você visualize
                rapidamente o que está no gist sem precisar acessar o site do
                GitHub.
              </Paragraph>
              <CodeSpace space={true}>
                {[
                  "# Comando para visualizar um gist",
                  "gh gist view 'ID-do-Gist'",
                ]}
              </CodeSpace>
            </ListItem>
          </List>
        </Spacer>
      </TopicContent>
      <TopicContent>
        <TopicTitle>Integração com Workflows do GitHub Actions</TopicTitle>
        <Paragraph>
          O GitHub CLI (Command Line Interface) é uma ferramenta poderosa que
          permite aos desenvolvedores interagir com workflows do GitHub Actions
          diretamente pelo terminal. Com ele, é possível gerenciar processos
          automatizados de CI/CD (Integração Contínua e Entrega Contínua),
          listar, executar, monitorar e até mesmo cancelar workflows sem a
          necessidade de acessar a interface gráfica do GitHub. Essa
          funcionalidade oferece agilidade, eficiência e controle aos usuários,
          facilitando a integração das ações automatizadas em fluxos de trabalho
          do dia a dia.
        </Paragraph>
        <LearnMoreLink link="/docs/github/principal-functions/actions">
          Actions
        </LearnMoreLink>
        <Spacer>
          <SubTopic>Listar execuções</SubTopic>
          <List type="disc">
            <ListItem title="Listar execuções">
              <Paragraph>
                O comando <CodeHighlight>gh run list</CodeHighlight> na CLI do
                GitHub lista todas as execuções recentes de workflows do GitHub
                Actions associadas a um repositório. Ele exibe informações como
                o estado da execução (concluído, em andamento, falhou), o número
                da execução, o branch em que foi executada, entre outros
                detalhes úteis.
              </Paragraph>
              <CodeSpace space={true}>
                {["# Comando para listar suas execuções", "gh run list"]}
              </CodeSpace>
            </ListItem>
            <ListItem title="Listar execuções">
              <Paragraph>
                O comando <CodeHighlight>gh run view</CodeHighlight> exibe
                detalhes completos de uma execução específica de workflow no
                GitHub Actions, identificada pelo seu ID único. Com o parâmetro{" "}
                <b>--log</b>, ele também mostra os logs gerados durante a
                execução, permitindo que você analise o progresso e depure
                possíveis problemas diretamente pelo terminal. detalhes úteis.
              </Paragraph>
              <CodeSpace space={true}>
                {[
                  "# Comando para visualizar uma execução",
                  "gh run view 'ID-da-Execução' &--&--log&--&",
                ]}
              </CodeSpace>
            </ListItem>
            <ListItem title="Listar execuções">
              <Paragraph>
                O comando <CodeHighlight>gh run rerun</CodeHighlight> reexecuta
                uma execução específica de um workflow no GitHub Actions,
                identificada pelo seu ID único. Isso é útil quando você deseja
                corrigir erros ou verificar novamente a execução do workflow sem
                precisar dispará-lo manualmente desde o início.
              </Paragraph>
              <CodeSpace space={true}>
                {[
                  "# Comando para reexecutar uma execução",
                  "gh run rerun 'ID-da-Execução'",
                ]}
              </CodeSpace>
            </ListItem>
          </List>
        </Spacer>
      </TopicContent>
      <TopicContent>
        <TopicTitle>Benefícios do GitHub CLI</TopicTitle>
        <List type="disc">
          <ListItem>
            <Paragraph>
              Reduz a necessidade de acessar a interface web.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>Automatiza tarefas comuns com scripts. </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Acelera o fluxo de trabalho para desenvolvedores.{" "}
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Maior controle e agilidade na gestão de repositórios e PRs.{" "}
            </Paragraph>
          </ListItem>
        </List>
      </TopicContent>
      <TopicContent>
        <TopicTitle>Conclusão</TopicTitle>
        <Paragraph>
          O <b>GitHub CLI</b> é uma ferramenta poderosa que melhora a
          experiência de desenvolvimento e gestão de projetos no GitHub. Com sua
          interface intuitiva e comandos práticos, permite que desenvolvedores
          interajam com o GitHub diretamente do terminal, economizando tempo e
          tornando os fluxos de trabalho mais eficientes.
        </Paragraph>
      </TopicContent>
    </Content>
  );
}
