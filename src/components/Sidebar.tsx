"use client";
import Image from "next/image";
import plasmaDocsLogo from "@/assets/Logo plasma docs.svg";
import DropdownListTitle from "./DropdownListTitle";
import SidebarItemLink from "./SidebarItemLink";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="z-10 2xl:w-[350px] 2xl:block">
      <div className="2xl:w-[350px] fixed 2xl:bg-[#1A193B] 2xl:h-screen max-h-screen 2xl:overflow-y-auto 2xl:overflow-x-hidden">
        <div className={` bg-[#1A193B] py-6 shadow-[0px_0px_24px_#8c93fb44] `}>
          <div className="flex relative w-[100vw] 2xl:w-[350px] px-4 md:px-8 flex-row items-center justify-between">
            <Link href={"/"}>
              <div className="flex flex-row items-center gap-2">
                <Image
                  src={plasmaDocsLogo}
                  alt="Plasma logo"
                  id="logoPlasmaDocs"
                  className="no-drag w-14 md:w-20"
                />
                <span className="text-2xl md:text-3xl font-bold" id="title">
                  Plasma Docs
                </span>
              </div>
            </Link>
            <Menu
              color={"#f5f5f5"}
              onClick={() => setIsOpen(true)}
              className={
                `transition-all hover:scale-105 cursor-pointer 2xl:hidden size-10 ` +
                (isOpen ? "hidden" : "block")
              }
            />
            <X
              color={"#f5f5f5"}
              onClick={() => setIsOpen(false)}
              className={
                `transition-all hover:scale-105 cursor-pointer 2xl:hidden size-10 ` +
                (isOpen ? "block" : "hidden")
              }
            />
          </div>
        </div>
        <div
          className={
            `text-white w-full sm:w-[350px] bg-[#1A193B] h-[calc(100vh-80px)] md:h-[calc(100vh-120px)] 2xl:h-auto px-4 md:px-8 py-8 overflow-y-auto    2xl:block ` +
            (isOpen ? "block" : "hidden")
          }
        >
          <span className="font-bold text-xl">Github</span>
          <details className="cursor-pointer my-4">
            <DropdownListTitle name="Interface e navegação" />
            <div>
              <ul className="pl-4 mt-2">
                <SidebarItemLink
                  name="Navbar"
                  link="/docs/github/interface-navigation/navbar"
                  onClick={() => setIsOpen(false)}
                />
                <SidebarItemLink
                  name="Barra de pesquisa"
                  link="/docs/github/interface-navigation/search"
                  onClick={() => setIsOpen(false)}
                />
                <SidebarItemLink
                  name="Perfil"
                  link="/docs/github/interface-navigation/profile"
                  onClick={() => setIsOpen(false)}
                />
                <SidebarItemLink
                  name="Menu"
                  link="/docs/github/interface-navigation/menu"
                  onClick={() => setIsOpen(false)}
                />
              </ul>
            </div>
          </details>
          <details className="cursor-pointer my-4">
            <DropdownListTitle name="Funcionalidades Principais" />
            <div>
              <ul className="pl-4">
                <SidebarItemLink
                  name="Code"
                  link="/docs/github/principal-functions/code"
                  onClick={() => setIsOpen(false)}
                />
                <SidebarItemLink
                  name="Issues"
                  link="/docs/github/principal-functions/issues"
                  onClick={() => setIsOpen(false)}
                />
                <SidebarItemLink
                  name="Pull requests"
                  link="/docs/github/principal-functions/pull-requests"
                  onClick={() => setIsOpen(false)}
                />
                <SidebarItemLink
                  name="Actions"
                  link="/docs/github/principal-functions/actions"
                  onClick={() => setIsOpen(false)}
                />
                <SidebarItemLink
                  name="Projects"
                  link="/docs/github/principal-functions/projects"
                  onClick={() => setIsOpen(false)}
                />
                <SidebarItemLink
                  name="Wiki"
                  link="/docs/github/principal-functions/wiki"
                  onClick={() => setIsOpen(false)}
                />
                <SidebarItemLink
                  name="Insights"
                  link="/docs/github/principal-functions/insights"
                  onClick={() => setIsOpen(false)}
                />
                <SidebarItemLink
                  name="Settings"
                  link="/docs/github/principal-functions/settings"
                  onClick={() => setIsOpen(false)}
                />
              </ul>
            </div>
          </details>
          <details className="cursor-pointer my-4">
            <DropdownListTitle name="Configurações e Personalização" />
            <div>
              <ul className="pl-4">
                <SidebarItemLink
                  name="Perfil público e conta"
                  link="/docs/github/configurations-personalizations/public-profile-acount"
                  onClick={() => setIsOpen(false)}
                />
                <SidebarItemLink
                  name="Personalização e acessibilidade"
                  link="/docs/github/configurations-personalizations/personalization-accessibility"
                  onClick={() => setIsOpen(false)}
                />
                <SidebarItemLink
                  name="Notificações"
                  link="/docs/github/configurations-personalizations/notifications"
                  onClick={() => setIsOpen(false)}
                />
                <SidebarItemLink
                  name="Acesso"
                  link="/docs/github/configurations-personalizations/access"
                  onClick={() => setIsOpen(false)}
                />
                <SidebarItemLink
                  name="Código, planejamento e automação"
                  link="/docs/github/configurations-personalizations/code-planning-automation"
                  onClick={() => setIsOpen(false)}
                />
                <SidebarItemLink
                  name="Segurança"
                  link="/docs/github/configurations-personalizations/security"
                  onClick={() => setIsOpen(false)}
                />
                <SidebarItemLink
                  name="Integrações"
                  link="/docs/github/configurations-personalizations/integration"
                  onClick={() => setIsOpen(false)}
                />
                <SidebarItemLink
                  name="Arquivos"
                  link="/docs/github/configurations-personalizations/archives"
                  onClick={() => setIsOpen(false)}
                />
                <SidebarItemLink
                  name="Configurações de desenvolvedor"
                  link="/docs/github/configurations-personalizations/dev-configurations"
                  onClick={() => setIsOpen(false)}
                />
              </ul>
            </div>
          </details>
          <details className="cursor-pointer my-4">
            <DropdownListTitle name="Recursos Úteis" />
            <div>
              <ul className="pl-4">
                <SidebarItemLink
                  name="Erros comuns e soluções"
                  link="/docs/github/useful-resources/common-errors-and-solutions"
                  onClick={() => setIsOpen(false)}
                />
                <SidebarItemLink
                  name="Dicas"
                  link="/docs/github/useful-resources/tips"
                  onClick={() => setIsOpen(false)}
                />
                <SidebarItemLink
                  name="Atalhos"
                  link="/docs/github/useful-resources/shortcuts"
                  onClick={() => setIsOpen(false)}
                />
                <SidebarItemLink
                  name="Github CLI"
                  link="/docs/github/useful-resources/github-cli"
                  onClick={() => setIsOpen(false)}
                />
                <SidebarItemLink
                  name="Conclusão, referências e créditos"
                  link="/docs/github/useful-resources/conclusion-references-credits"
                  onClick={() => setIsOpen(false)}
                />
              </ul>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
