"use client";
import Image from "next/image";
import plasmaDocsLogo from "@/assets/Logo plasma docs.svg";
import { FaAngleDown } from "react-icons/fa";
import React, { useState } from "react";
import GithubLoginComponent from "@/components/GithubLoginComponent";
import IntroductionComponent from "@/components/IntroductionComponent";
import TargetAudienceComponent from "@/components/TargetAudienceComponent";
import ObjectivesComponent from "@/components/ObjectivesComponent";
import DevelopersComponent from "@/components/DevelopersComponent";

export default function Home() {
  const options = [
    {
      name: "Introdução",
      component: <IntroductionComponent />,
    },
    {
      name: "Público Alvo",
      component: <TargetAudienceComponent />,
    },
    {
      name: "Objetivo do Manual",
      component: <ObjectivesComponent />,
    },
    {
      name: "Desenvolvedores",
      component: <DevelopersComponent />,
    },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: {
    name: string;
    component: React.ReactElement;
  }) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <>
      <div
        id="bgbanner"
        className="bg-gradient-to-b from-[#28225F] to-[#0D1117] h-screen p-5 md:relative"
      >
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
        <div className="max-w-[1044px] h-full w-full border-2 border-[#8C93FB] bg-[#26215b94] p-[5px] md:p-[12] lg:p-[16] rounded-[16px] shadow-[0px_0px_149.8px_-31px_#6D60C1]">
          <div className="bg-[#0D1117] rounded-[16px] h-[349px] p-2 flex justify-center items-center">
            {selectedOption.component}
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center gap-[12px] border-1 border-[#434A53] p-[12px] rounded-[36px] mt-5">
          {options.map((option) => (
            <button
              key={option.name}
              className={`lg:text-[20px] lg:px-[18px] lg:py-0 lg:h-[50px] cursor-pointer border-2 font-bold p-[12px] rounded-[36px] ${
                selectedOption.name === option.name
                  ? "border-[#caa9ec] bg-[#252731] text-[#CCA9EC]"
                  : "border-[#3C3C45] text-[#806C98]"
              }`}
              onClick={() => handleSelect(option)}
            >
              {option.name}
            </button>
          ))}
        </div>
        <div className="relative mt-5 md:hidden">
          <button
            className="flex items-center justify-around gap-10 border-[1px] border-[#F6E5F8] rounded-[24px] p-[12px] text-[#CCA9EC] font-bold w-auto"
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedOption.name} <FaAngleDown className="text-[#F6E5F8]" />
          </button>
          {isOpen && (
            <div className="absolute top-0 w-full bg-[#0D1117] border border-[#8C93FB] rounded-[16px] shadow-lg z-10">
              {options.map((option) => (
                <div
                  key={option.name}
                  className={`p-2 cursor-pointer text-center ${
                    selectedOption.name === option.name
                      ? "text-[#CCA9EC] font-bold underline"
                      : "text-[#CCA9EC] opacity-[60%]"
                  } hover:bg-[#28225F]`}
                  onClick={() => handleSelect(option)}
                >
                  {option.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <h1
        id="title"
        className="mt-14 md:mt-32 md:mb-10 font-extrabold text-sm text-center md:text-xl xl:text-2xl 2xl:text-3xl"
      >
        Pré requisitos para o uso do sistema
      </h1>
      <div className="flex flex-col justify-center items-center p-[32px] md:pt-[-150px]">
        <div className="max-w-[1044px] h-full w-full border-2 border-[#8C93FB] bg-[#26215b94] p-[5px] md:p-[12] lg:p-[16] rounded-[16px] shadow-[0px_0px_149.8px_-31px_#6D60C1]">
          <GithubLoginComponent />
        </div>
      </div>
    </>
  );
}
