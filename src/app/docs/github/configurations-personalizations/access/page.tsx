import Content from "@/components/layout-elements/Content";
import List from "@/components/layout-elements/List";
import Paragraph from "@/components/layout-elements/Paragraph";
import Title from "@/components/layout-elements/Title";
import ListItem from "@/components/layout-elements/ListItem";
import Image from "next/image";
import acesso from "@/assets/acesso.png";
import TopicContent from "@/components/layout-elements/TopicContent";

//This defines the order in the sidebar, if not defined, 
//it will be in alphabetical order by the folders name, 
//and the order attribute will be 999
//orderInTheSideBar=4

export default function Page() {
  return (
    <>
      <Title>Acesso</Title>
      <Content>
        <Image width={256} id="navbar" src={acesso} alt="Profile Page" />
        <TopicContent>
          <Paragraph>
            A seção Access no GitHub contém configurações essenciais para
            gerenciar acesso, segurança e controle da conta. Aqui estão as
            principais opções dentro dessa seção:
          </Paragraph>
          <List type="decimal">
            <ListItem title="Billing and plans">
              <br />
              Permite gerenciar planos pagos, como GitHub Pro e GitHub Copilot.
              Aqui você pode atualizar, cancelar ou modificar seu plano de
              assinatura.
            </ListItem>
            <ListItem title="Emails">
              <br />
              Mostra os e-mails associados à sua conta. Permite adicionar ou
              remover e-mails e definir qual será o principal. Você pode
              escolher se quer manter seu e-mail privado ao fazer commits.
            </ListItem>
            <ListItem title="Password and authentication">
              <br />
              Onde você pode mudar sua senha e configurar opções extras de
              segurança, como autenticação em dois fatores (2FA). Também é
              possível gerenciar tokens de acesso pessoal e logins autorizados
              por aplicativos.
            </ListItem>
            <ListItem title="Sessions">
              <br />
              Lista todos os dispositivos conectados à sua conta do GitHub.
              Permite encerrar sessões antigas ou suspeitas para maior
              segurança.
            </ListItem>
            <ListItem title="SSH and GPG keys">
              <br />
              Mostra as chaves SSH e GPG vinculadas à sua conta. Aqui você pode
              adicionar ou remover chaves para facilitar a autenticação segura
              ao interagir com repositórios.
            </ListItem>
            <ListItem title="Organizations">
              <br />
              Exibe as organizações das quais você faz parte. Permite sair de
              uma organização ou alterar permissões de acesso.
            </ListItem>
            <ListItem title="Enterprises">
              <br />
              Se sua conta estiver vinculada a uma empresa no GitHub Enterprise,
              esta aba permite gerenciar permissões e configurações
              corporativas.
            </ListItem>
            <ListItem title="Moderation">
              <br />
              Para usuários que gerenciam comunidades no GitHub, essa opção
              permite configurar ferramentas de moderação e bloqueio de usuários
              em repositórios.
            </ListItem>
          </List>
        </TopicContent>
      </Content>
    </>
  );
}
