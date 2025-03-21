"use client";
import Image from "next/image";
import plasmaDocsLogo from "@/assets/Logo plasma docs.svg";
import React, { useState } from "react";
import DevelopersComponent from "@/components/DevelopersComponent";
import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  const options = [
    {
      name: "Desenvolvedores",
      component: <DevelopersComponent />,
    },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (option: {
    name: string;
    component: React.ReactElement;
  }) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className="bg-gradient-to-b from-[#28225F] to-[#0D1117] h-[600px] min-h-[600px] md:h-screen p-5 md:relative">
        <div className="mt-10 flex flex-col justify-center items-center md:h-[350px] md:w-auto md:mx-auto lg:h-[550px] 2xl:h-[750px]">
          <div className="text-center md:w-[500px] md:ml-[10%] xl:w-[600px] 2xl:w-[720px]">
            <h1
              id="title"
              className="font-extrabold text-4xl md:text-5xl xl:text-7xl 2xl:text-8xl"
            >
              Plasma Docs
            </h1>
            <p className="text-[#FEDEFB] mt-2 text-[10px] text-center md:text-[14px] xl:text-xl xl:mt-5 2xl:text-2xl">
              Descubra todas as funcionalidades dos seus sistemas favoritos
            </p>
          </div>
          <div className="md:absolute md:left-[-180px] md:top-[60px] lg:left-[-280px] 2xl:left-[-385px]">
            <Image
              src={plasmaDocsLogo}
              alt="Plasma logo"
              id="logoPlasmaDocs"
              className="select-none pointer-events-none w-[220px] mt-10 md:mt-0 md:w-[350px] lg:w-[550px] 2xl:w-[750px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-[32px] md:pt-[150px]">
        <div className="mb-20">
          {options.map((option) => (
            <button
              key={option.name}
              className={`lg:text-5xl lg:px-[18px] lg:py-0 lg:h-[50px] font-bold p-[12px] rounded-[36px] text-[#CCA9EC]`}
              onClick={() => handleSelect(option)}
            >
              {option.name}
            </button>
          ))}
        </div>
        <div className="max-w-[1044px] h-full w-full border-2 border-[#8C93FB] bg-[#26215b94] p-[5px] md:p-[12] lg:p-[16] rounded-[16px] shadow-[0px_0px_149.8px_-31px_#6D60C1]">
          <div className="bg-[#0D1117] rounded-[16px] h-[530px] md:h-[515px] p-2 flex justify-center items-center">
            {selectedOption.component}
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
