import Content from "@/components/layout-elements/Content";
import List from "@/components/layout-elements/List";
import Paragraph from "@/components/layout-elements/Paragraph";
import Title from "@/components/layout-elements/Title";
import ListItem from "@/components/layout-elements/ListItem";
import Image from "@/components/Image";
import cpa from "@/assets/planning.png";
import TopicContent from "@/components/layout-elements/TopicContent";

export default function Page() {
  return (
    <>
      <Title>Código, Planejamento e Automação</Title>
      <Content>
        <Image width={256} id="navbar" src={cpa} alt="Profile Page" />
        <TopicContent>
          <Paragraph>
            Essa seção reúne configurações voltadas para código, automação e
            produtividade, permitindo gerenciar desde repositórios até respostas
            rápidas. Aqui estão os detalhes de cada opção:
          </Paragraph>
          <List type="decimal">
            <ListItem title="Repositories">
              <br />
              <List compact type="disc" spacer>
                <ListItem>
                  Exibe todos os seus repositórios públicos e privados.
                </ListItem>
                <ListItem>
                  Permite alterar configurações padrões, como visibilidade,
                  licenciamento e permissões.
                </ListItem>
                <ListItem>
                  Você pode definir templates para novos repositórios e
                  gerenciar padrões de nomenclatura.
                </ListItem>
              </List>
            </ListItem>
            <ListItem title="Codespaces">
              <br />
              <List compact type="disc" spacer>
                <ListItem>
                  Configura ambientes de desenvolvimento na nuvem do GitHub.
                </ListItem>
                <ListItem>
                  Define máquinas virtuais pré-configuradas para abrir projetos
                  rapidamente sem precisar de um ambiente local.
                </ListItem>
                <ListItem>
                  Gerencia custos e tempo limite de inatividade dos Codespaces.
                </ListItem>
              </List>
            </ListItem>
            <ListItem title="Packages">
              <br />
              <List compact type="disc" spacer>
                <ListItem>
                  Mostra pacotes publicados no GitHub Packages, como NPM, Docker
                  e Maven.
                </ListItem>
                <ListItem>
                  Permite configurar permissões de acesso a pacotes.
                </ListItem>
                <ListItem>
                  Você pode excluir pacotes antigos e gerenciar versões
                  publicadas.
                </ListItem>
              </List>
            </ListItem>
            <ListItem title="Copilot">
              <br />
              <List compact type="disc" spacer>
                <ListItem>
                  Gerencia o acesso e configurações do GitHub Copilot, a
                  ferramenta de sugestão de código por IA.
                </ListItem>
                <ListItem>
                  Ativa ou desativa o Copilot em diferentes IDEs, como VS Code.
                </ListItem>
                <ListItem>
                  Ajusta preferências de sugestões de código e uso de dados para
                  aprendizado de IA.
                </ListItem>
              </List>
            </ListItem>
            <ListItem title="Pages">
              <br />
              <List compact type="disc" spacer>
                <ListItem>
                  Permite ativar e configurar o GitHub Pages, que hospeda sites
                  estáticos diretamente de um repositório.
                </ListItem>
                <ListItem>
                  Define o domínio do site e configura permissões de acesso.
                </ListItem>
                <ListItem>
                  Escolhe a branch e diretório onde os arquivos do site estão
                  armazenados.
                </ListItem>
              </List>
            </ListItem>
            <ListItem title="Saved replies">
              <br />
              <List compact type="disc" spacer>
                <ListItem>
                  Ferramenta para criar e gerenciar respostas rápidas e
                  personalizadas.
                </ListItem>
                <ListItem>
                  Útil para quem responde issues e pull requests com frequência.
                </ListItem>
                <ListItem>
                  Permite salvar mensagens comuns e usá-las rapidamente ao
                  interagir com a comunidade.
                </ListItem>
              </List>
            </ListItem>
          </List>
        </TopicContent>
      </Content>
    </>
  );
}
