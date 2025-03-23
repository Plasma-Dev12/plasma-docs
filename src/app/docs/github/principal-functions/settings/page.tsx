import Content from "@/components/layout-elements/Content";
import Paragraph from "@/components/layout-elements/Paragraph";
import Title from "@/components/layout-elements/Title";
import TopicContent from "@/components/layout-elements/TopicContent";
import TopicTitle from "@/components/layout-elements/TopicTitle";
import Image from "@/components/Image";
import List from "@/components/layout-elements/List";
import ListItem from "@/components/layout-elements/ListItem";
import settings from "@/assets/settings.png";
import SubTopic from "@/components/layout-elements/SubTopic";

//This defines the order in the sidebar, if not defined, 
//it will be in alphabetical order by the folders name, 
//and the order attribute will be 999
//orderInTheSideBar=8

export default function Page() {
  return (
    <>
      <Title>Settings</Title>
      <Content>
        <Content>
          <Paragraph>
            A seção Settings no GitHub é onde administradores e colaboradores
            podem personalizar e configurar vários aspectos de um repositório.
            Desde permissões e visibilidade até integrações e configurações
            avançadas, essa aba oferece controle total sobre como o repositório
            opera. Aqui está uma visão detalhada dos elementos e funcionalidades
            dessa página:
          </Paragraph>
          <Image
            src={settings}
            alt="wiki image"
          />
        </Content>
        <TopicContent>
          <TopicTitle>Visão Geral da Página Settings</TopicTitle>
          <List type="disc">
            <ListItem title="Descrição">
              Central de configurações do repositório.
            </ListItem>
            <ListItem title="Finalidade">
              Ajustar opções fundamentais, gerenciar acessos, configurar
              automações e personalizar o comportamento do repositório.
            </ListItem>
          </List>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Principais Seções e Funcionalidades</TopicTitle>
          <Paragraph>
            A página é organizada em diversas subseções, cada uma com um foco
            específico. Vamos detalhá-las:
          </Paragraph>

          <List type="disc">
            <SubTopic>General (Geral)</SubTopic>
            <ListItem title="Descrição">
              Configurações básicas do repositório.
            </ListItem>
            <ListItem title="Funcionalidades Importantes">
              <List type="disc" compact>
                <ListItem>
                  Alterar o nome e a descrição do repositório.
                </ListItem>
                <ListItem>
                  Atualizar a URL do repositório (caso seja um site, como no
                  GitHub Pages).
                </ListItem>
                <ListItem>
                  Configurar o nível de visibilidade do repositório (public,
                  private, ou internal).
                </ListItem>
                <ListItem>Configurações de branch padrão.</ListItem>
              </List>
            </ListItem>
            <SubTopic>Access (Acesso)</SubTopic>
            <ListItem title="Descrição">
              Gestão de permissões e equipes.
            </ListItem>
            <ListItem title="Funcionalidades">
              <List type="disc" compact>
                <ListItem>Adicionar ou remover colaboradores.</ListItem>
                <ListItem>
                  Definir permissões específicas para colaboradores (leitura,
                  escrita, administração).
                </ListItem>
                <ListItem>
                  Gerenciamento de equipes dentro de organizações.
                </ListItem>
              </List>
            </ListItem>

            <SubTopic>Security & Analysis (Segurança e Análise)</SubTopic>
            <ListItem title="Descrição">
              Ferramentas de segurança para manter o repositório protegido.
            </ListItem>
            <ListItem title="Funcionalidades Importantes">
              <List type="disc" compact>
                <ListItem>
                  Ativação de branch protection rules para impedir commits
                  diretos em branches principais.
                </ListItem>
                <ListItem>
                  Configuração de Dependabot para detecção de vulnerabilidades
                  em dependências.
                </ListItem>
                <ListItem>
                  Permitir ou bloquear GitHub Actions para fluxos de trabalho
                  externos.
                </ListItem>
              </List>
            </ListItem>

            <SubTopic>Branches</SubTopic>
            <ListItem title="Descrição">
              Configurações para gerenciar branches.
            </ListItem>
            <ListItem title="Funcionalidades">
              <List type="disc" compact>
                <ListItem>Escolher a branch padrão.</ListItem>
                <ListItem>Configurar regras de proteção, como:</ListItem>
                <List type="disc" compact>
                  <ListItem>
                    Exigir revisões para aprovar Pull Requests.
                  </ListItem>
                  <ListItem>
                    Impedir merges sem testes automatizados aprovados.
                  </ListItem>
                </List>
              </List>
            </ListItem>

            <SubTopic>Webhooks</SubTopic>
            <ListItem title="Descrição">
              Configuração de integrações externas.
            </ListItem>
            <ListItem title="Funcionalidades">
              <List type="disc" compact>
                <ListItem>
                  Criar webhooks para enviar eventos do repositório (como
                  commits ou Pull Requests) para serviços externos.
                </ListItem>
                <ListItem>
                  Personalizar os gatilhos que ativam os webhooks.
                </ListItem>
              </List>
            </ListItem>

            <SubTopic>Pages (GitHub Pages)</SubTopic>
            <ListItem title="Descrição">
              Configuração para hospedar sites estáticos diretamente no GitHub.
            </ListItem>
            <ListItem title="Funcionalidades">
              <List type="disc" compact>
                <ListItem>
                  Escolher a branch e pasta fonte para o site.
                </ListItem>
                <ListItem>Configurar o domínio personalizado.</ListItem>
                <ListItem>Monitorar o status de publicação do site.</ListItem>
              </List>
            </ListItem>

            <SubTopic>Integrations & Services</SubTopic>
            <ListItem title="Descrição">
              Configuração de integrações com aplicativos ou serviços externos.
            </ListItem>
            <ListItem title="Funcionalidades">
              <List type="disc" compact>
                <ListItem>
                  Permitir integrações com ferramentas como Slack, Jira, ou
                  plataformas de CI/CD externas.
                </ListItem>
                <ListItem>
                  Gerenciar acessos de aplicativos conectados.
                </ListItem>
              </List>
            </ListItem>

            <SubTopic>Advanced Settings</SubTopic>
            <ListItem title="Descrição">
              Configurações avançadas do repositório.
            </ListItem>
            <ListItem title="Funcionalidades">
              <List type="disc" compact>
                <ListItem>
                  Transferir a propriedade do repositório para outro usuário ou
                  organização.
                </ListItem>
                <ListItem>Arquivar ou deletar o repositório.</ListItem>
                <ListItem>
                  Ativar o modo &quot;Git Large File Storage (LFS)&quot; para gerenciar
                  arquivos grandes.
                </ListItem>
              </List>
            </ListItem>
          </List>
        </TopicContent>
        <TopicContent>
          <TopicTitle>
            Como Utilizar a Página Settings Eficientemente
          </TopicTitle>
          <List type="disc">
            <ListItem title="Personalização do Repositório">
              Certifique-se de preencher a descrição, URL e definições de
              visibilidade.
            </ListItem>
            <ListItem title="Segurança">
              Ative regras de proteção de branch para evitar alterações
              acidentais.
            </ListItem>
            <ListItem title="Colaboração">
              Garanta que permissões sejam atribuídas corretamente a
              colaboradores e equipes.
            </ListItem>
            <ListItem title="Automação">
              Configure webhooks e GitHub Actions para fluxos de trabalho
              otimizados.
            </ListItem>
          </List>
        </TopicContent>
      </Content>
    </>
  );
}
