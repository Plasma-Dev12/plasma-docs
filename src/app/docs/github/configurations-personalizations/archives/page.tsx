import Content from "@/components/layout-elements/Content";
import List from "@/components/layout-elements/List";
import Title from "@/components/layout-elements/Title";
import ListItem from "@/components/layout-elements/ListItem";
import TopicContent from "@/components/layout-elements/TopicContent";

export default function Page() {
  return (
    <>
      <Title>Arquivos</Title>
      <Content>
        <TopicContent>
          <List type="decimal">
            <ListItem title="Security Log">
              <br />
              <List compact type="disc" spacer>
                <ListItem>
                  Histórico detalhado de todas as atividades de segurança na
                  conta.
                </ListItem>
                <ListItem>
                  Mostra logins, alterações de senha e acessos suspeitos.
                </ListItem>
                <ListItem>
                  Ajuda a monitorar ações incomuns e manter a conta protegida.
                </ListItem>
              </List>
            </ListItem>
            <ListItem title="Sponsorship Log">
              <br />
              <List compact type="disc" spacer>
                <ListItem>
                  Registra todas as doações e patrocínios recebidos ou feitos
                  via GitHub Sponsors.
                </ListItem>
                <ListItem>
                  Permite gerenciar pagamentos, assinaturas e histórico de apoio
                  a desenvolvedores.
                </ListItem>
              </List>
            </ListItem>
          </List>
        </TopicContent>
      </Content>
    </>
  );
}
