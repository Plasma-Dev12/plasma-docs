import Image from "next/image";
import octoCatTeacher from "@/assets/OctoCat.png";

export default function IntroductionComponent() {
  return (
    <div className="w-full h-full flex flex-col justify-around items-center gap-5 p-2 md:flex-row md:justify-around">
      <Image
        className="no-drag w-[90%] max-w-[241px] p-5 md:max-w-[100%] md:w-[341px]"
        src={octoCatTeacher}
        alt="Octocat teacher"
      />
      <p className="font-normal text-[#FEDEFB] text-[14px] text-justify max-w-[350px] md:max-w-[300px] md:text-xl lg:max-w-[400px]">
        Nesta documentação, você aprenderá desde as funcionalidades básicas até
        os recursos mais avançados do <span className="font-bold text-[#A486FF]">GITHUB</span>. Exploraremos atalhos que podem
        otimizar seu tempo, além de estratégias para usar a plataforma de forma
        mais eficiente. Também abordaremos o <span className="font-bold text-[#A486FF]">Github CLI (gh)</span> e como ele pode
        facilitar seu fluxo de trabalho.
      </p>
    </div>
  );
}
