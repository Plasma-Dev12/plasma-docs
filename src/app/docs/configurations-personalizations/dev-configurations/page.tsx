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
      <Title>Configurações de desenvolvedor</Title>
      <Content>
        <TopicContent>
          <List type="topics">
            <ListItem>
              <br />
              <List compact type="disc" spacer>
                <ListItem>
                  Configurações avançadas para desenvolvedores e integração com
                  APIs.
                </ListItem>
                <ListItem>
                  Gerencia tokens de acesso, webhooks e OAuth apps.
                </ListItem>
                <ListItem>
                  Essencial para quem cria aplicações que interagem com o
                  GitHub.
                </ListItem>
              </List>
            </ListItem>
          </List>
        </TopicContent>
      </Content>
    </>
  );
}
