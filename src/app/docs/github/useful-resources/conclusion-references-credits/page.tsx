import Title from "@/components/layout-elements/Title";
import Paragraph from "@/components/layout-elements/Paragraph";
import List from "@/components/layout-elements/List";
import ListItem from "@/components/layout-elements/ListItem";
import Link from "next/link";
import { Link2Icon } from "lucide-react";
import TopicTitle from "@/components/layout-elements/TopicTitle";
import Topic from "@/components/layout-elements/Topic";
import Content from "@/components/layout-elements/Content";

//This defines the order in the sidebar, if not defined,
//it will be in alphabetical order by the folders name,
//and the order attribute will be 999
//orderInTheSideBar=5

export default function Page() {
  return (
    <Content>
      <Title>Conclusão, Referências e Créditos</Title>
      <Topic>
        <TopicTitle>Conclusão</TopicTitle>
        <Paragraph>
          Com esta documentação, esperamos ter fornecido uma visão clara e
          objetiva das principais funcionalidades do GitHub, além de dicas e
          atalhos para facilitar sua utilização. Ao dominar essas ferramentas,
          você estará mais preparado para gerenciar e colaborar em projetos de
          software de forma eficiente e produtiva. O GitHub é uma plataforma
          poderosa, e entender suas funcionalidades é fundamental para
          aproveitar todo o seu potencial no desenvolvimento de software.
        </Paragraph>
      </Topic>
      <Topic>
        <TopicTitle>Referências</TopicTitle>
        <List type="disc">
          <ListItem>
            Documentação baseada no:
            <div className="flex items-center gap-2 text-[#b78cfb]">
              <Link2Icon />
              <Link href={"https://github.com/"} target={"_blank"}>
                github.com
              </Link>
            </div>
          </ListItem>
        </List>
      </Topic>
      <Topic>
        <TopicTitle>Créditos</TopicTitle>

        <Paragraph>
          Esta documentação é de propriedade da{" "}
          <b>Plasma Dev &copy; {new Date().getFullYear()}</b> e pode ser
          acessada gratuitamente no website Plasma Docs. Quaisquer reproduções,
          distribuições ou modificações deste documento devem ser feitas com o
          consentimento prévio da Plasma Dev.
        </Paragraph>
      </Topic>
    </Content>
  );
}
