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
        Nesta documentação você irá aprender algumas funcionalidades básicas e
        avançadas do <span className="font-bold">github</span>, algum atalhos
        que podem te ajudar a economizar tempo, como utilizar a plataforma de
        uma maneira inteligente e iremos abordar um pouco sobre o{" "}
        <span className="font-bold text-[#A486FF]">github cli (gh)</span>.
      </p>
    </div>
  );
}
