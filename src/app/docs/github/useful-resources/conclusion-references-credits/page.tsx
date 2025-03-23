import Title from "@/components/layout-elements/Title";
import Paragraph from "@/components/layout-elements/Paragraph";

//This defines the order in the sidebar, if not defined, 
//it will be in alphabetical order by the folders name, 
//and the order attribute will be 999
//orderInTheSideBar=5

export default function Page() {
  return (
    <>
      <Title>Conclusão, Referências e Créditos</Title>
      <Paragraph>
        Com esta documentação, esperamos ter fornecido uma visão clara e
        objetiva das principais funcionalidades do GitHub, além de dicas e
        atalhos para facilitar sua utilização. Ao dominar essas ferramentas,
        você estará mais preparado para gerenciar e colaborar em projetos de
        software de forma eficiente e produtiva. O GitHub é uma plataforma
        poderosa, e entender suas funcionalidades é fundamental para aproveitar
        todo o seu potencial no desenvolvimento de software.
      </Paragraph>
    </>
  );
}
