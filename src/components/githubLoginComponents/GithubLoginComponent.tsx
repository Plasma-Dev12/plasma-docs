import { useState, useEffect } from "react";
import FirstBlock from "./FirstBlock";
import SecondBlock from "./SecondBlock";
import ThirdBlock from "./ThirdBlock";
import FourthBlock from "./FourthBlock";
import FifthBlock from "./FifthBlock";

export default function GithubLoginComponent() {
  const [activeBlock, setActiveBlock] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBlock((prev) => (prev + 1) % 8);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative bg-[#040642] crusor-default rounded-[16px]">
        {/* Bloco principal com transição */}
        <div
          className={`transition-opacity duration-1000 ${
            activeBlock === 0 ? "opacity-100" : "opacity-0"
          }`}
        >
          <FirstBlock />
        </div>
        {/* Bloco adicional com transição */}
        <div
          className={`absolute w-full h-full inset-0 bg-black/80 flex items-start pt-[45px] pr-[23px] justify-end rounded-[16px] crusor-default transition-opacity duration-1000 ${
            activeBlock === 1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <SecondBlock
            arrow={true}
            text="Para começar abra o site github.com no seu navegador e
        clique em sign up."
          />
        </div>
        {/* Terceiro bloco com transição */}
        <div
          className={`transition-opacity duration-1000 absolute inset-0 w-full h-full flex justify-center items-center crusor-default ${
            activeBlock === 2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <ThirdBlock />
        </div>
        <div
          className={`absolute w-full h-full inset-0 bg-black/80 flex items-start pt-[45px] pr-[23px] justify-end rounded-[16px] crusor-default transition-opacity duration-1000 ${
            activeBlock === 3 ? "opacity-100" : "opacity-0"
          }`}
        >
          <SecondBlock
            arrow={false}
            text="Agora basta você realizar o login com as informações que o github pedir."
          />
        </div>
        <div
          className={`transition-opacity duration-1000 absolute inset-0 w-full h-full flex justify-center items-center crusor-default ${
            activeBlock === 4 ? "opacity-100" : "opacity-0"
          }`}
        >
          <FourthBlock />
        </div>
        <div
          className={`absolute w-full h-full inset-0 bg-black/80 flex items-start pt-[45px] pr-[23px] justify-end rounded-[16px] crusor-default transition-opacity duration-1000 ${
            activeBlock === 5 ? "opacity-100" : "opacity-0"
          }`}
        >
          <SecondBlock
            arrow={false}
            text="E por final, complete a verificação que for designada a você"
          />
        </div>
        <div
          className={`transition-opacity duration-1000 absolute inset-0 w-full h-full flex justify-center items-center crusor-default ${
            activeBlock === 6 ? "opacity-100" : "opacity-0"
          }`}
        >
          <FifthBlock />
        </div>
        <div
          className={`absolute w-full h-full inset-0 bg-black/80 flex items-start pt-[45px] pr-[23px] justify-end rounded-[16px] crusor-default transition-opacity duration-1000 ${
            activeBlock === 7 ? "opacity-100" : "opacity-0"
          }`}
        >
          <SecondBlock
            arrow={false}
            text="PRONTO!! Agora você pode utilizar o github livremente"
          />
        </div>
      </div>
    </>
  );
}
