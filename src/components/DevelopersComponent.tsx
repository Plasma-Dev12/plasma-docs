import Image from "next/image";
import pedroPanstein from "@/assets/Pedro P.png";
import plasmaDocsLogo from "@/assets/Logo plasma docs.svg";

interface DeveloperProps {
  image: any;
  name: string;
  description: string;
}

export default function DevelopersComponent() {
  const developers = [
    {
      image: pedroPanstein,
      name: "Pedro Henrique Panstein",
      description: "Fullstack developer",
    },
    // {
    //   image: pedroAugusto,
    //   name: "Pedro Augusto Wilhelm",
    //   description: "Fullstack developer",
    // },
    // {
    //   image: arturNeves,
    //   name: "Artur Neves Höpner",
    //   description: "Fullstack developer",
    // },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 lg:flex-row lg:gap-[10%] lg:w-full">
        <div className="relative flex flex-col justify-center items-center gap-10">
          <Image
            id="plasmaLogoDevelopers"
            className="no-drag opacity-60 w-[80%] max-w-[300px] lg:w-[320px] lg:max-w-full"
            src={plasmaDocsLogo}
            alt="Plasma logo"
          />
          {developers.map((option) => (
            <div
              key={option.name}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-[35%] max-w-[120px]"
            >
              <Image
                id="imageDeveloper"
                className="no-drag w-full"
                src={option.image}
                alt={`${option.name}`}
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          {developers.map((option) => (
            <>
              <h2 id="title" className="font-bold text-2xl md:text-4xl">
                {option.name}
              </h2>
              <p className="text-[#FEDEFB] mt-5 md:text-xl">
                {option.description}
              </p>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
