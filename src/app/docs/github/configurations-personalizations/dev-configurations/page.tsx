import Content from "@/components/layout-elements/Content";
import List from "@/components/layout-elements/List";
import Title from "@/components/layout-elements/Title";
import ListItem from "@/components/layout-elements/ListItem";
import TopicContent from "@/components/layout-elements/TopicContent";

//This defines the order in the sidebar, if not defined, 
//it will be in alphabetical order by the folders name, 
//and the order attribute will be 999
//orderInTheSideBar=9

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
