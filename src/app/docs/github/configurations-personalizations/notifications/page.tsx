import Content from "@/components/layout-elements/Content";
import Paragraph from "@/components/layout-elements/Paragraph";
import Title from "@/components/layout-elements/Title";
import Image from "@/components/Image";
import notif from "@/assets/notif.png";
import TopicTitle from "@/components/layout-elements/TopicTitle";
import TopicContent from "@/components/layout-elements/TopicContent";
import SubTopic from "@/components/layout-elements/SubTopic";
import Dica from "@/components/Dica";

//This defines the order in the sidebar, if not defined, 
//it will be in alphabetical order by the folders name, 
//and the order attribute will be 999
//orderInTheSideBar=3

export default function Page() {
  const dica1 = {
    titulo: "Dica",
    descricao:
      "Configure um email principal e, caso participe de muitas organizações, " +
      "crie regras personalizadas para manter sua caixa de entrada organizada.",
  };
  const dica2 = {
    titulo: "Dica",
    descricao:
      "Se você é colaborador em muitos projetos, talvez prefira manter isso desativado para evitar excesso de notificações.",
  };
  const dica3 = {
    titulo: "Dica",
    descricao:
      "Isso é útil para equipes com comunicação intensa via GitHub, mas pode gerar muitas notificações em times grandes.      ",
  };
  const dica4 = {
    titulo: "Dica",
    descricao:
      "Recomendado para repositórios ou projetos críticos onde você precisa acompanhar todas as mudanças.      ",
  };
  const dica5 = {
    titulo: "Dica",
    descricao:
      "Ideal para acompanhar apenas interações relevantes sem excesso de notificações.      ",
  };
  const dica6 = {
    titulo: "Dica",
    descricao:
      "Caso utilize muitos Actions, limitar notificações para apenas workflows com falha é uma boa prática.",
  };

  return (
    <>
      <Title>Notificações</Title>
      <Content>
        <Paragraph>
          A seção de notificações do GitHub permite controlar como e quando você
          recebe atualizações sobre atividades relevantes nos repositórios,
          organizações e times que você participa.
        </Paragraph>
        <Image src={notif} alt="Profile Page" />
        <TopicContent>
          <TopicTitle>Gerais</TopicTitle>
          <Paragraph>
            Nessa área, você pode definir qual email será utilizado para o envio
            de notificações, podendo adicionar múltiplos e-mails à sua conta e
            direcionar notificações de organizações específicas para emails
            diferentes.
          </Paragraph>
          <Dica content={dica1}></Dica>
        </TopicContent>
        <TopicContent>
          <SubTopic>Notificações de repositórios</SubTopic>
          <Paragraph>
            Com a opção &quot;Automatically watch repositories&quot; ativada, sempre que
            você receber permissão de push em um repositório, o GitHub
            automaticamente te inscreve nas notificações dele.
          </Paragraph>
          <Dica content={dica2}></Dica>
        </TopicContent>
        <TopicContent>
          <SubTopic>Notificações de times</SubTopic>
          <Paragraph>
            Se a opção &quot;Automatically watch teams&quot; estiver ativada, por sua vez,
            você será automaticamente inscrito nas notificações de atualizações
            e menções (@mentions) de qualquer time do qual você for membro.
          </Paragraph>
          <Dica content={dica3}></Dica>
        </TopicContent>
        <TopicTitle>Seções de Subscriptions (Inscrições)</TopicTitle>

        <TopicContent>
          <SubTopic> Watching (Observando)</SubTopic>
          <Paragraph>
            Controle as notificações de todos os repositórios, times ou
            conversas que você está acompanhando.
            <br />
            <b>Notificações disponíveis:</b> Somente no GitHub ou no GitHub +
            Email
          </Paragraph>
          <Dica content={dica4}></Dica>
        </TopicContent>
        <TopicContent>
          <SubTopic> Participating, @mentions e custom</SubTopic>
          <Paragraph>
            Notificações para conversas onde você está participando ativamente
            ou é mencionado diretamente com @.
            <br />
            <b>Notificações disponíveis:</b> Somente no GitHub ou no GitHub +
            Email
          </Paragraph>
          <Dica content={dica5}></Dica>
        </TopicContent>

        <TopicContent>
          <SubTopic>
            {" "}
            Customize email updates (Personalizar atualizações por email)
          </SubTopic>
          <Paragraph>
            Permite escolher eventos específicos que você deseja ser notificado,
            como:
            <br />
            <b>Reviews</b> (Revisões de Pull Requests)
            <br />
            <b>Pushes</b> (Commits enviados)
            <br />
            <b>Comments</b> (Comentários em issues ou Pull Requests)
          </Paragraph>
        </TopicContent>

        <TopicContent>
          <SubTopic> Ignored repositories (Repositórios ignorados)</SubTopic>
          <Paragraph>
            Você pode configurar repositórios específicos para nunca receber
            notificações.
          </Paragraph>
        </TopicContent>

        <TopicTitle>Sistema (System)</TopicTitle>

        <TopicContent>
          <SubTopic> Actions</SubTopic>
          <Paragraph>
            Notificações sobre execuções de workflows criados com{" "}
            <b>GitHub Actions.</b>
            <br />
            <b>Notificações disponíveis:</b> Somente no GitHub ou no GitHub +
            Email (possível definir também para notificar apenas workflows com
            falha).
          </Paragraph>
          <Dica content={dica6}></Dica>
        </TopicContent>

        <TopicContent>
          <SubTopic> Dependabot alerts: New vulnerabilities</SubTopic>
          <Paragraph>
            Notificações automáticas sempre que novas vulnerabilidades são
            identificadas em suas dependências monitoradas pelo{" "}
            <b>Dependabot.</b>
            <br />
            <b>Notificações disponíveis:</b> GitHub, Email e CLI.
          </Paragraph>
        </TopicContent>
        <TopicContent>
          <SubTopic> Email weekly digest (Resumo semanal por email)</SubTopic>
          <Paragraph>
            Receba um resumo semanal com alertas de segurança e atualizações
            sobre até 10 dos seus repositórios.
            <br />
            <b>Opções:</b> Enviar semanalmente, diariamente ou desativar.
          </Paragraph>
        </TopicContent>
        <TopicContent>
          <SubTopic> &apos;Deploy key&apos; alert email</SubTopic>
          <Paragraph>
            Receba uma notificação automática por email sempre que uma nova
            <b>Deploy Key</b> for adicionada a uma organização onde você tem
            permissões de administrador.
            <b>Opções:</b> On ou Off.
          </Paragraph>
        </TopicContent>
      </Content>
    </>
  );
}
