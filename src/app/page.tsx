"use client";
import Image from "next/image";
import plasmaDocsLogo from "@/assets/Logo plasma docs.svg";
import DevelopersComponent from "@/components/DevelopersComponent";
import Button from "@/components/Button";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { BookOpen, Code } from "lucide-react";

export default function Home() {
  const handleScroll = () => {
    const down = document.getElementById("down");
    if (down) {
      const position = down.getBoundingClientRect().top;
      console.log(position);

      down.style.opacity = `${position > 750 ? 1 : position > 600 ? 0.7 : 0}`;
    }
  };

  return (
    <>
      <div onWheel={() => handleScroll()}>
        <header className="bg-gradient-to-b from-[#28225F] to-[#0D1117] min-h-[600px] h-screen p-5 md:relative">
          <div className="h-full mt-10 flex flex-col-reverse justify-center gap-12 pb-20 items-center md:h-72 md:w-auto md:mx-auto lg:h-[550px] 2xl:h-[750px]">
            <div className="md:mt-72 xl:mt-1 flex flex-col items-center text-center md:w-[500px] md:ml-[10%] xl:w-[600px] 2xl:w-[720px]">
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
        </header>
        <section className="flex flex-col justify-center items-center p-8 pb-56 md:pt-[150px]">
          <h2
            key={"Desenvolvedores"}
            className={`mb-20 text-4xl lg:text-5xl lg:px-[18px] lg:py-0 lg:h-[50px] font-bold p-[12px] rounded-[36px] text-[#CCA9EC]`}
          >
            Desenvolvedores
          </h2>
          <article className="max-w-6xl h-full w-full border-2 border-[#b78cfb] bg-[#26215b94] p-[5px] md:p-[12] lg:p-[16] rounded-[16px] shadow-[0px_0px_149.8px_-31px_#6D60C1]">
            <div className="bg-[#0D1117] rounded-[16px] h-[530px] md:h-[515px] p-2 flex justify-center items-center">
              <DevelopersComponent />
            </div>
          </article>
        </section>
        <section className="text-white w-full flex flex-col items-center pb-16 px-8 relative overflow-hidden">
          <h2
            key={"Explorar"}
            className={`mb-16 text-4xl lg:text-5xl lg:px-[18px] lg:py-0 lg:h-[50px] font-bold p-[12px] rounded-[36px] text-[#CCA9EC]`}
          >
            Explorar
          </h2>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 opacity-20">
            <Image
              src={plasmaDocsLogo}
              alt="Plasma logo"
              id="logoPlasmaDocs"
              className="select-none pointer-events-none w-[350px] mt-10 md:mt-0 lg:w-[550px] 2xl:w-[750px]"
            />
          </div>
          <div className="max-w-6xl w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
              <CallToAction
                title="Documentação Completa"
                description="Acesse guias detalhados e tutoriais de diversas ferramentas incríveis."
                urlLink="/docs"
                buttonText="Ver documentação"
              >
                <BookOpen className="size-6" />
              </CallToAction>
              <CallToAction
                title="Visite a Plasma"
                description="Visite a nossa landing page e conheça os desenvolvedores e nossos projetos."
                urlLink="https://devplasma.vercel.app/"
                buttonText="Acessar a Plasma Dev"
              >
                <Code className="size-6" />
              </CallToAction>
            </div>
          </div>
        </section>
      </div>

      <footer className="text-white w-full py-6 bg-[#0A071A]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Plasma Docs. Todos os direitos
              reservados.
            </p>
          </div>
          <Link
            href="#"
            className="inline-flex items-center text-[#A78BFF] hover:text-[#C4B0FF] transition-colors"
          >
            Acesse nossa landing page
          </Link>
        </div>
      </footer>
    </>
  );
}

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  urlLink: string;
  children: React.ReactNode;
}

function CallToAction({
  title,
  description,
  buttonText,
  children: icon,
  urlLink,
}: CallToActionProps) {
  return (
    <article className="flex flex-col items-end bg-[#26215b94] rounded-xl p-8 gap-6 border-2 border-[#b78cfb]">
      <div className="self-start flex items-center justify-center text-[#b78cfb]">
        <span className="p-3 bg-[#3c2669] rounded-xl mr-4">{icon}</span>

        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <p className="text-muted-foreground self-start">{description}</p>
      <Link
        href={urlLink}
        className="text-purple-100 hover:text-[#C4B0FF] transition-colors"
      >
        <Button variant="primary">{buttonText}</Button>
      </Link>
    </article>
  );
}
