import Image from "next/image";
import octoCatSecurity from "@/assets/octocatTarget.png";

export default function TargetAudienceComponent() {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-around items-center gap-5 p-2 md:flex-row md:justify-around">
        <Image
          className="no-drag w-[90%] max-w-[241px] p-5 md:max-w-[100%] md:w-[341px]"
          src={octoCatSecurity}
          alt="Octocat Security"
        />
        <div className="flex flex-col justify-center items-center">
          <h2
            id="otherTitle"
            className="mb-10 font-extrabold text-2xl md:text-4xl lg:text-5xl"
          >
            Não definido
          </h2>
          <p className="font-normal text-[#FEDEFB] text-[14px] text-justify max-w-[350px] md:max-w-[300px] md:text-xl lg:max-w-[400px]">
            O <span className="font-bold text-[#A486FF]">GITHUB</span> é uma plataforma acessível para pessoas de todas as idades
            interessadas em programação. No entanto, seu uso por crianças com
            menos de 13 anos é menos comum, devido à complexidade das
            ferramentas e à necessidade de compreensão de conceitos técnicos.
          </p>
        </div>
      </div>
    </>
  );
}
