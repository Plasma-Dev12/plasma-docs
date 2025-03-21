import Content from "@/components/layout-elements/Content";
import List from "@/components/layout-elements/List";
import Paragraph from "@/components/layout-elements/Paragraph";
import Title from "@/components/layout-elements/Title";
import ListItem from "@/components/layout-elements/ListItem";
import Image from "next/image";
import settingsAccount from "@/assets/settingsAccount.png";
import settingsProfile from "@/assets/settingsProfile.png";
import TopicTitle from "@/components/layout-elements/TopicTitle";
import TopicContent from "@/components/layout-elements/TopicContent";

export default function Page() {
  return (
    <>
      <Title>Perfil Público e Conta</Title>
      <Content>
        <Image id="navbar" src={settingsProfile} alt="Profile Page" />
        <TopicContent>
          <TopicTitle>Perfil Público</TopicTitle>
          <Paragraph>
            Ao entrar nas configurações você irá se deparar com as opções de seu
            perfil público, permitindo que sejam modificadas informações como:
          </Paragraph>

          <List type="disc" compact>
            <ListItem>Nome;</ListItem>
            <ListItem>Foto de perfil;</ListItem>
            <ListItem>
              Email visível (apenas se o e-mail for verificado);
            </ListItem>
            <ListItem>
              Definir a sua bio (que é uma descrição curta sobre você e o que
              você faz);
            </ListItem>
            <ListItem>Pronomes pessoais;</ListItem>
            <ListItem>Links sociais;</ListItem>
            <ListItem>Organização/empresa;</ListItem>
            <ListItem>Localização;</ListItem>
          </List>
          <Paragraph>
            E outras informações mais específicas, como definir que você está
            disponível para contratação, sua língua preferida para entrar em
            contato, entre outros.
          </Paragraph>
        </TopicContent>

        <Paragraph indent={false}>
          <span className="text-[#A486FF]">
            <b>OBS:</b> O GitHub não tem suporte para outras línguas, estando
            disponível apenas no inglês.
          </span>
        </Paragraph>

        <Image id="navbar" src={settingsAccount} alt="Profile Page" />

        <TopicContent>
          <TopicTitle>Conta</TopicTitle>
          <Paragraph>
            Abaixo, na aba de conta, há configurações como mudar o nome da
            mesma, definir link com o Patreon, exportar dados da conta e até
            definir herdeiros da conta, em caso de falecimento. Por último e não
            menos importante, você pode{" "}
            <span className="font-bold text-red-500">DELETAR</span> sua conta,
            mas o GitHub te avisa algumas vezes antes para não cometer nenhum
            erro.
          </Paragraph>
        </TopicContent>
      </Content>
    </>
  );
}
