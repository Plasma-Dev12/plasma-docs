import Content from "@/components/layout-elements/Content";
import List from "@/components/layout-elements/List";
import Title from "@/components/layout-elements/Title";
import ListItem from "@/components/layout-elements/ListItem";
import TopicContent from "@/components/layout-elements/TopicContent";

//This defines the order in the sidebar, if not defined, 
//it will be in alphabetical order by the folders name, 
//and the order attribute will be 999
//orderInTheSideBar=6

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
