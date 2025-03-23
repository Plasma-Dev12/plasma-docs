import Content from "@/components/layout-elements/Content";
import List from "@/components/layout-elements/List";
import Paragraph from "@/components/layout-elements/Paragraph";
import Title from "@/components/layout-elements/Title";
import ListItem from "@/components/layout-elements/ListItem";
import Image from "@/components/Image";
import personalizacao from "@/assets/personalizacao.gif";
import CodeHighlight from "@/components/layout-elements/CodeHighlight";
import TopicTitle from "@/components/layout-elements/TopicTitle";
import TopicContent from "@/components/layout-elements/TopicContent";
import SubTopic from "@/components/layout-elements/SubTopic";

export default function Page() {
  return (
    <>
      <Title>Personalização e Acessibilidade</Title>
      <Content>
        <Image id="navbar" src={personalizacao} alt="Profile Page" />
        <TopicContent>
          <TopicTitle>Aparência</TopicTitle>
          <Paragraph>
            Em aparência você irá encontrar, dentre outras várias opções, a
            possibilidade de editar o tema do GitHub, o tom de pele dos emojis,
            quantos espaços a tecla tab dará no editor interno e preferências do
            Markdown.
          </Paragraph>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Acessibilidade no GitHub</TopicTitle>
          <Paragraph>
            O GitHub oferece configurações de acessibilidade para melhorar a
            experiência do usuário. Essas opções estão disponíveis na aba{" "}
            <b> Accessibility</b> dentro das configurações.
          </Paragraph>
        </TopicContent>
        <TopicContent>
          <SubTopic>Atalhos de Teclado</SubTopic>
          <ListItem title="Character keys">
            Atalhos que não exigem teclas modificadoras, como e{" "}
            <CodeHighlight>g + n</CodeHighlight> para navegação,{" "}
            <CodeHighlight>g + p</CodeHighlight> para repositórios,{" "}
            <CodeHighlight>g + n</CodeHighlight> para notificações.
          </ListItem>
        </TopicContent>
        <TopicContent>
          <SubTopic>Animações</SubTopic>
          <List type="disc">
            <ListItem title="Sync with system">
              Segue as preferências do sistema para animações.
            </ListItem>
            <ListItem title="Enabled">
              Animações são reproduzidas automaticamente.
            </ListItem>
            <ListItem title="Disabled">
              Impede que imagens animadas sejam reproduzidas.
            </ListItem>
          </List>
        </TopicContent>

        <TopicContent>
          <SubTopic>Conteúdo</SubTopic>
          <List type="disc">
            <ListItem title="Link underlines">
              Permite ativar ou ocultar sublinhados em links adjacentes ao
              texto.
            </ListItem>
            <ListItem title="Hovercards">
              Exibe informações detalhadas ao passar o mouse ou navegar com o
              teclado.
            </ListItem>
          </List>
        </TopicContent>

        <TopicContent>
          <SubTopic>Editor</SubTopic>
          <List type="disc">
            <ListItem title="URL paste behavior">
              Define como links colados serão formatados:
              <List type="disc" compact>
                <ListItem title="Formatted link">
                  Transforma URLs em links Markdown.
                </ListItem>
                <ListItem title="Plain text">
                  Substitui o texto selecionado pela URL.
                </ListItem>
              </List>
            </ListItem>
          </List>
        </TopicContent>
      </Content>
    </>
  );
}
