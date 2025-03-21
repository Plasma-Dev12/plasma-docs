"use client";
import GithubLoginComponent from "@/components/githubLoginComponents/GithubLoginComponent";
import IntroductionComponent from "@/components/IntroductionComponent";
import Title from "@/components/layout-elements/Title";
import ObjectivesComponent from "@/components/ObjectivesComponent";
import TargetAudienceComponent from "@/components/TargetAudienceComponent";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

export default function Page() {
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
      <span className="mt-16 ml-7">
        <Title>GitHub</Title>
      </span>
      <div className="flex flex-col justify-center items-center p-[32px] md:pt-[150px]">
        <div className="max-w-[1044px] h-full w-full border-2 border-[#8C93FB] bg-[#26215b94] p-[5px] md:p-[12] lg:p-[16] rounded-[16px] shadow-[0px_0px_149.8px_-31px_#6D60C1]">
          <div className="bg-[#0D1117] rounded-[16px] h-[530px] md:h-[515px] p-2 flex justify-center items-center">
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
      <div className="flex flex-col justify-center items-center p-[32px] md:pt-[-150px] mb-40">
        <div className="max-w-[1044px] h-full w-full border-2 border-[#8C93FB] bg-[#26215b94] p-[5px] md:p-[12] lg:p-[16] rounded-[16px] shadow-[0px_0px_149.8px_-31px_#6D60C1]">
          <GithubLoginComponent />
        </div>
      </div>
    </>
  );
}
