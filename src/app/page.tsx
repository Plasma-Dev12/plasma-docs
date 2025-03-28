"use client";
import Image from "next/image";
import plasmaDocsLogo from "@/assets/Logo plasma docs.svg";
import DevelopersComponent from "@/components/DevelopersComponent";
import Button from "@/components/Button";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
export default function Home() {

  const handleScroll = () => {
    const down = document.getElementById("down");
    if (down) {
      const position = down.getBoundingClientRect().top;
      console.log(position);

      down.style.opacity = `${
        position > 750 ? 1 : position > 600 ? 0.7 : position > 400 ? 0.4 : 0
      }`;
    }
  };

  return (
    <>
      <div onWheel={() => handleScroll()}>
        <div className="bg-gradient-to-b from-[#28225F] to-[#0D1117] min-h-[600px] h-screen p-5 md:relative">
          <div className="h-full mt-10 flex flex-col-reverse justify-center gap-12 pb-20 items-center md:h-72 md:w-auto md:mx-auto lg:h-[550px] 2xl:h-[750px]">
            <div className="md:mt-72 xl:mt-14 flex flex-col items-center text-center md:w-[500px] md:ml-[10%] xl:w-[600px] 2xl:w-[720px]">
              <h1
                id="title"
                className="font-extrabold text-6xl lg:text-7xl 2xl:text-8xl"
              >
                Plasma Docs
              </h1>
              <p className="text-[#FEDEFB] md:w-auto w-2/3 mt-4 text-center text-xl xl:mt-5 2xl:text-2xl">
                Descubra todas as funcionalidades dos seus sistemas favoritos
              </p>
            </div>
            <div className="md:absolute md:left-[-180px] xl:top-12 md:top-36 lg:left-[-280px] 2xl:left-[-385px]">
              <Image
                src={plasmaDocsLogo}
                alt="Plasma logo"
                id="logoPlasmaDocs"
                className="select-none pointer-events-none w-[350px] mt-10 md:mt-0 lg:w-[550px] 2xl:w-[750px]"
              />
            </div>
          </div>
          <span className="animate-pulse duration-75">
            <ChevronDown
              size={32}
              id="down"
              className="absolute top-[90%] left-1/2 animate-bounce duration-1000 text-[#FEDEFB]"
            />
          </span>
        </div>
        <div className="flex flex-col justify-center items-center p-[32px] md:pt-[150px]">
          <div className="mb-20">
            <div
              key={"Desenvolvedores"}
              className={`text-4xl lg:text-5xl lg:px-[18px] lg:py-0 lg:h-[50px] font-bold p-[12px] rounded-[36px] text-[#CCA9EC]`}
            >
              Desenvolvedores
            </div>
          </div>
          <div className="max-w-[1044px] h-full w-full border-2 border-[#8C93FB] bg-[#26215b94] p-[5px] md:p-[12] lg:p-[16] rounded-[16px] shadow-[0px_0px_149.8px_-31px_#6D60C1]">
            <div className="bg-[#0D1117] rounded-[16px] h-[530px] md:h-[515px] p-2 flex justify-center items-center">
              <DevelopersComponent />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full my-56">
        <span id="buttonGradient" className="mx-10">
          <Link href={"/docs"}>
            <Button variant="primary" outline={false}>
              <p id="title">Ir para a documentação</p>
            </Button>
          </Link>
        </span>
      </div>
    </>
  );
}
