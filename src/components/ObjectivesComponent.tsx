import Image from "next/image";
import octocatObjective from "@/assets/octocat objectives.png";

export default function ObjectivesComponent() {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-around items-center gap-5 p-2 md:flex-row md:justify-around">
        <Image
          className="no-drag w-[90%] max-w-[241px] p-5 md:max-w-[100%] md:w-[341px]"
          src={octocatObjective}
          alt="Octocat Objective"
        />
        <p className="font-normal text-[#FEDEFB] text-[14px] text-justify max-w-[350px] md:max-w-[300px] md:text-xl lg:max-w-[400px]">
          Esta documentação tem como objetivo proporcionar um entendimento sobre
          as principais funcionalidades e características do{" "}
          <span className="font-bold text-[#A486FF]">GITHUB</span>. Aqui, você
          aprenderá a utilizar a plataforma de forma eficiente, aproveitando
          seus recursos para versionamento de código, colaboração e automação de
          tarefas, além de boas práticas para otimizar seu fluxo de trabalho.
        </p>
      </div>
    </>
  );
}
