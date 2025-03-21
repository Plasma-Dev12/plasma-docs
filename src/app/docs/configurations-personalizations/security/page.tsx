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
      <Title>Segurança</Title>
      <Content>
        <TopicContent>
          <List type="decimal">
            <ListItem title="Code Security">
              <br />
              <List compact type="disc" spacer>
                <ListItem>
                  Gerencia ferramentas de segurança de código, como verificação
                  de vulnerabilidades e dependabot.
                </ListItem>
                <ListItem>
                  Configura análises de código automatizadas para encontrar
                  possíveis falhas.
                </ListItem>
                <ListItem>
                  Permite ajustar permissões e ativar alertas de segurança nos
                  repositórios.
                </ListItem>
              </List>
            </ListItem>
          </List>
        </TopicContent>
      </Content>
    </>
  );
}
