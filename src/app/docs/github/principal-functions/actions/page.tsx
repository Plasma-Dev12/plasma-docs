import CodeHighlight from "@/components/layout-elements/CodeHighlight";
import Content from "@/components/layout-elements/Content";
import List from "@/components/layout-elements/List";
import ListItem from "@/components/layout-elements/ListItem";
import Paragraph from "@/components/layout-elements/Paragraph";
import Title from "@/components/layout-elements/Title";
import TopicContent from "@/components/layout-elements/TopicContent";
import TopicTitle from "@/components/layout-elements/TopicTitle";
import CodeSpace from "@/components/layout-elements/CodeSpace";

//This defines the order in the sidebar, if not defined, 
//it will be in alphabetical order by the folders name, 
//and the order attribute will be 999
//orderInTheSideBar=4

export default function Page() {
  return (
    <>
      <Content>
        <Title>Actions</Title>
        <Paragraph>
          A seção Actions do GitHub permite configurar e gerenciar fluxos de
          trabalho de automação, como testes, builds e deploys, diretamente no
          repositório. Ela utiliza o conceito de integração contínua/entrega
          contínua (CI/CD), ajudando desenvolvedores a simplificar e automatizar
          processos repetitivos. Aqui está uma visão detalhada dessa página:
        </Paragraph>
        <TopicContent>
          <TopicTitle>Visão Geral da Página Actions</TopicTitle>
          <List type="disc">
            <ListItem title="Descrição">
              Exibe todos os fluxos de trabalho configurados no repositório.
            </ListItem>
            <ListItem title="Finalidade">
              Permite visualizar, executar, monitorar e gerenciar os pipelines
              configurados usando o GitHub Actions.
            </ListItem>
          </List>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Elementos da Página</TopicTitle>
          <List type="decimal">
            <ListItem title="Lista de Workflows">
              <List type="disc">
                <ListItem>
                  <Paragraph>Localizada no painel lateral esquerdo.</Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    Exibe todos os fluxos de trabalho disponíveis no
                    repositório, como:
                  </Paragraph>
                </ListItem>
                <List type="disc">
                  <ListItem>
                    <Paragraph>Testes automatizados.</Paragraph>
                  </ListItem>
                  <ListItem>
                    <Paragraph>Build de aplicação.</Paragraph>
                  </ListItem>
                  <ListItem>
                    <Paragraph>
                      Deploy para servidores ou serviços na nuvem.
                    </Paragraph>
                  </ListItem>
                </List>
                <ListItem>
                  <Paragraph>
                    Cada workflow possui um nome configurado no arquivo YAML.
                  </Paragraph>
                </ListItem>
              </List>
            </ListItem>
            <ListItem title="Histórico de Execuções">
              <List type="disc">
                <ListItem>
                  <Paragraph>
                    Lista todas as execuções recentes dos workflows.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>Detalhes exibidos incluem:</Paragraph>
                </ListItem>
                <List type="disc">
                  <ListItem>
                    <Paragraph>Nome do workflow.</Paragraph>
                  </ListItem>
                  <ListItem>
                    <Paragraph>Branch ou commit associado.</Paragraph>
                  </ListItem>
                  <ListItem>
                    <Paragraph>
                      Status da execução (ex.: success, failure, in progress).
                    </Paragraph>
                  </ListItem>
                  <ListItem>
                    <Paragraph>Data e hora da execução.</Paragraph>
                  </ListItem>
                </List>
              </List>
            </ListItem>
          </List>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Detalhes de um Workflow</TopicTitle>
          <Paragraph>
            Ao selecionar um workflow ou uma execução específica, a página exibe
            informações detalhadas, como:
          </Paragraph>
          <List type="disc">
            <ListItem title="Resumo do Workflow">
              <Paragraph>
                Mostra qual branch disparou o workflow e os eventos associados
                (ex.: push, pull request).
              </Paragraph>
            </ListItem>
            <ListItem title="Jobs e Etapas">
              <List type="disc">
                <ListItem>
                  <Paragraph>Divide o fluxo em jobs específicos.</Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    Cada job é composto de múltiplas etapas, com logs detalhados
                    para cada uma delas.
                  </Paragraph>
                </ListItem>
                <ListItem title="Exemplo">
                  <List type="disc">
                    <ListItem title="Setup environment">
                      <Paragraph>Instala dependências.</Paragraph>
                    </ListItem>
                    <ListItem title="Run tests">
                      <Paragraph>Executa testes automatizados.</Paragraph>
                    </ListItem>
                  </List>
                </ListItem>
                <ListItem>
                  <Paragraph>Data e hora da execução.</Paragraph>
                </ListItem>
              </List>
            </ListItem>
            <ListItem title="Logs e Depuração">
              <List type="disc">
                <ListItem>
                  <Paragraph>
                    Permite inspecionar os logs de cada etapa para identificar
                    falhas ou erros.
                  </Paragraph>
                </ListItem>
              </List>
            </ListItem>
          </List>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Criar e Configurar Workflows</TopicTitle>
          <Paragraph>
            Ao clicar no botão <b>New Workflow</b>, o GitHub oferece duas
            opções:
          </Paragraph>
          <List type="disc">
            <ListItem title="Modelos Padrão">
              <List type="disc">
                <ListItem>
                  <Paragraph>
                    Modelos pré-configurados para linguagens populares (ex:{" "}
                    <b>Node.js, Python, Java</b>) e plataformas (ex:{" "}
                    <b>deploy em AWS, Azure, ou Google Cloud</b>).
                  </Paragraph>
                </ListItem>
              </List>
            </ListItem>
            <ListItem title="Configuração Personalizada">
              <List type="disc">
                <ListItem>
                  <Paragraph>
                    Criação de um arquivo <CodeHighlight>YAML</CodeHighlight>{" "}
                    diretamente no diretório{" "}
                    <CodeHighlight>github/workflows/</CodeHighlight>.
                  </Paragraph>
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <Paragraph>Exemplo básico de arquivo YAML:</Paragraph>
              <CodeSpace space={true}>
                {[
                  "name: CI/CD Pipeline",
                  "on: [push]",
                  "jobs:",
                  "  &tab&build:",
                  "    &tab&&tab&runs-on: ubuntu-latest",
                  "    &tab&&tab&steps:",
                  "    &tab&&tab&&tab&- name: Checkout code",
                  "    &tab&&tab&&tab&- uses: actions/checkout@v2",
                  "    &tab&&tab&&tab&- name: Run tests",
                  "    &tab&&tab&&tab&  run: npm test",
                ]}
              </CodeSpace>
            </ListItem>
          </List>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Funcionalidades Avançadas</TopicTitle>
          <List type="decimal">
            <ListItem title="Gatilhos (Triggers)">
              <List type="disc">
                <ListItem>
                  <Paragraph>
                    Workflows podem ser acionados por eventos como:
                  </Paragraph>
                  <List type="disc">
                    <ListItem>
                      <Paragraph>push para uma branch.</Paragraph>
                    </ListItem>
                    <ListItem>
                      <Paragraph>Abertura de um pull request.</Paragraph>
                    </ListItem>
                    <ListItem>
                      <Paragraph>Tarefas agendadas (ex.: cron jobs).</Paragraph>
                    </ListItem>
                  </List>
                </ListItem>
              </List>
            </ListItem>
            <ListItem title="Reutilização de Workflows">
              <List type="disc">
                <ListItem>
                  <Paragraph>
                    Repositórios podem reutilizar workflows definidos em outros
                    projetos, economizando tempo.
                  </Paragraph>
                </ListItem>
              </List>
            </ListItem>
            <ListItem title="Secrets e Configurações">
              <List type="disc">
                <ListItem>
                  <Paragraph>
                    Permite configurar variáveis de ambiente e secrets ex:
                    <CodeHighlight>tokens de acesso</CodeHighlight> para
                    proteger informações sensíveis.
                  </Paragraph>
                </ListItem>
              </List>
            </ListItem>
            <ListItem title="Marketplace">
              <List type="disc">
                <ListItem>
                  <Paragraph>
                    Integrações com ações do GitHub Marketplace, como serviços
                    de <CodeHighlight>deploy</CodeHighlight>, análise estática
                    de código, entre outros.
                  </Paragraph>
                </ListItem>
              </List>
            </ListItem>
          </List>
        </TopicContent>
      </Content>
    </>
  );
}
