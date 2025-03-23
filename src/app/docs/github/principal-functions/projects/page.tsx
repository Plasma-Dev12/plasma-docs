import Content from "@/components/layout-elements/Content";
import Paragraph from "@/components/layout-elements/Paragraph";
import Title from "@/components/layout-elements/Title";
import Image from "@/components/Image";
import ProjectsImage from "@/assets/projects.png";
import TopicContent from "@/components/layout-elements/TopicContent";
import TopicTitle from "@/components/layout-elements/TopicTitle";
import List from "@/components/layout-elements/List";
import ListItem from "@/components/layout-elements/ListItem";
import ProjectsKanbanImage from "@/assets/projects-kanban.png";
import ProjectsWorkflows from "@/assets/projects-workflows.png";
import Topic from "@/components/layout-elements/Topic";

export default function Page() {
  return (
    <>
      <Title>Projects</Title>
      <Content>
        <Content>
          <Image
            className="w-full image-shadow"
            src={ProjectsImage}
            alt="Projects image"
          />
          <Paragraph>
            A seção Projects no GitHub é uma ferramenta poderosa para
            gerenciamento de tarefas e organização de trabalho em equipe.
            Inspirada em sistemas como Kanban, a página permite visualizar,
            planejar e acompanhar o progresso de projetos dentro do repositório.
          </Paragraph>
        </Content>
        <TopicContent>
          <TopicTitle>Visão geral da página de Projects</TopicTitle>
          <Paragraph>
            Trata-se de uma página centralizada destinada ao gerenciamento de
            quadros de projetos, permitindo que tarefas, como issues e pull
            requests, sejam categorizadas, organizadas e monitoradas de maneira
            eficiente. Sua finalidade é auxiliar as equipes no planejamento e na
            execução de trabalhos, proporcionando uma visão clara do progresso
            das atividades e das prioridades estabelecidas.
          </Paragraph>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Elementos Principais</TopicTitle>
          <List type="topics">
            <ListItem title="Lista de Projetos Ativos">
              Apresenta todos os projetos ativos no repositório ou organização.
              Cada item na lista inclui:
              <List type="disc">
                <ListItem>Nome do projeto.</ListItem>
                <ListItem>Descrição (se configurada).</ListItem>
                <ListItem>
                  Quantidade de tarefas ou cartões associados ao projeto.
                </ListItem>
              </List>
            </ListItem>
            <ListItem title="Botão 'New Project'">
              Localizado no canto superior direito da página. Permite criar um
              novo projeto com opções de personalização, como:
              <List type="disc">
                <ListItem>Nome do projeto.</ListItem>
                <ListItem>Descrição.</ListItem>
                <ListItem>
                  Template inicial (ex.: Kanban, cronograma, ou layout vazio).
                </ListItem>
              </List>
            </ListItem>
          </List>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Elementos dentro de um Project</TopicTitle>
          <Content>
            <Image
              className="w-full mt-10 image-shadow"
              src={ProjectsKanbanImage}
              alt="Projects Kanban Image"
            />
            <Paragraph>
              Ao acessar um projeto específico, a página exibe um layout
              detalhado.
            </Paragraph>
          </Content>
          <Topic title="Visão do Quadro (Board View)">
            <List type="disc">
              <ListItem>
                Apresenta tarefas organizadas em colunas, representando estágios
                do fluxo de trabalho (ex.: To Do, In Progress, Done).
              </ListItem>
              <ListItem>
                Tarefas: Cada cartão no quadro representa uma tarefa, issue ou
                pull request. Exibindo o título, descrição, labels e assignees
                associados.
              </ListItem>
            </List>
          </Topic>
          <Topic title="Visão de Cronograma (Timeline View)">
            <List type="disc">
              <ListItem>
                Permite visualizar o progresso das tarefas em um formato de
                linha do tempo.
              </ListItem>
              <ListItem>
                Útil para planejamento de entregas e acompanhamento de prazos.
              </ListItem>
            </List>
          </Topic>
          <Topic title="Configuração de Colunas">
            <List type="disc">
              <ListItem>Personalização das colunas no quadro.</ListItem>
              <ListItem>
                Adicione, remova ou reorganize colunas conforme o fluxo de
                trabalho da equipe.
              </ListItem>
            </List>
          </Topic>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Funcionalidades Avançadas</TopicTitle>
          <Content>
            <Image
              className="w-full mt-10 image-shadow"
              src={ProjectsWorkflows}
              alt="Projects Workflows Image"
            />
            <Paragraph>
              Ao acessar um projeto, a página exibe um layout detalhado sobre
              todos os workflows do repositório.
            </Paragraph>
          </Content>
          <Topic title="Automação">
            Configuração de regras automatizadas (ex.: mover tarefas para outra
            coluna ao fechar uma issue). Integrado ao GitHub Actions para
            executar ações personalizadas.
          </Topic>
          <Topic title="Custom Fields">
            Adicione campos personalizados às tarefas para incluir informações
            específicas do projeto.
          </Topic>
          <Topic title="Filtros e Busca">
            Permite localizar tarefas rapidamente, utilizando filtros por
            labels, assignees ou status.
          </Topic>
          <Topic title="Integração com Issues e Pull Requests">
            Relaciona diretamente issues e pull requests ao projeto, permitindo
            acompanhamento em tempo real do progresso.
          </Topic>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Criar e Gerenciar um Projeto</TopicTitle>
          <List type="disc">
            <ListItem title="Criar Novo Projeto">
              Clique em &quot;New Project&quot; e selecione um modelo apropriado.
              Configure colunas e automações conforme o fluxo de trabalho.
            </ListItem>
            <ListItem title="Adicionar Tarefas">
              Adicione issues existentes ou crie novas diretamente no quadro.
              Arraste e solte tarefas entre colunas para indicar progresso.
            </ListItem>
            <ListItem title="Acompanhamento">
              Use gráficos e métricas disponíveis no projeto para acompanhar
              produtividade e progresso.
            </ListItem>
          </List>
        </TopicContent>
      </Content>
    </>
  );
}
