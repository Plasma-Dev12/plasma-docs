import Content from "@/components/layout-elements/Content";
import List from "@/components/layout-elements/List";
import Paragraph from "@/components/layout-elements/Paragraph";
import Title from "@/components/layout-elements/Title";
import ListItem from "@/components/layout-elements/ListItem";
import Image from "next/image";
import cpa from "@/assets/planning.png";
import CodeHighlight from "@/components/layout-elements/CodeHighlight";
import LearnMoreLink from "@/components/layout-elements/LearnMoreLink";
import TopicTitle from "@/components/layout-elements/TopicTitle";
import TopicContent from "@/components/layout-elements/TopicContent";
import Topic from "@/components/layout-elements/Topic";

export default function Page() {
  return (
    <>
      <Title>Integrações</Title>
      <Content>
        <TopicContent>
          <List type="decimal">
            <ListItem title="Applications">
              <br />
              <List compact type="disc" spacer>
                <ListItem>
                  Lista aplicativos conectados à sua conta do GitHub.
                </ListItem>
                <ListItem>
                  Permite revogar acessos de aplicativos terceiros.
                </ListItem>
                <ListItem>
                  Gerencia permissões para ferramentas como CI/CD e editores de
                  código online.
                </ListItem>
              </List>
            </ListItem>
            <ListItem title="Scheduled Reminders">
              <br />
              <List compact type="disc" spacer>
                <ListItem>
                  Configuração de lembretes automáticos para notificações e
                  tarefas dentro do GitHub.
                </ListItem>
                <ListItem>
                  Útil para equipes acompanharem pull requests e issues
                  pendentes.
                </ListItem>
              </List>
            </ListItem>
          </List>
        </TopicContent>
      </Content>
    </>
  );
}
