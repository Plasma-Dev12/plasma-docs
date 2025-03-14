"use client";
import Image from "next/image";
import plasmaDocsLogo from "@/assets/Logo plasma docs.svg";
import DropdownListTitle from "./DropdownListTitle";
import SidebarItemLink from "./SidebarItemLink";
import Link from "next/link";
import { div } from "framer-motion/client";

export default function Sidebar() {
  return (
    <div className="w-[350px]">
      <div className="w-[350px] fixed h-screen max-h-screen overflow-y-auto bg-[#28225F]/50 px-4 py-6 shadow-[0px_0px_24px_#8c93fb44]">
        <Link href={"/"}>
          <div className="flex flex-row items-center gap-2">
            <Image
              src={plasmaDocsLogo}
              alt="Plasma logo"
              id="logoPlasmaDocs"
              className="max-w-1/4"
            />
            <span className="text-3xl font-bold" id="title">
              Plasma Docs
            </span>
          </div>
        </Link>
        <div className="text-white mt-8">
          <span className="font-bold text-xl">Github</span>
          <details className="cursor-pointer my-4">
            <DropdownListTitle name="Interface e navegação" />
            <div>
              <ul className="pl-4 mt-2">
                <SidebarItemLink
                  name="Navbar"
                  link="/docs/interface-navigation/navbar"
                />
                <SidebarItemLink
                  name="Busca"
                  link="/docs/interface-navigation/search"
                />
                <SidebarItemLink
                  name="Perfil"
                  link="/docs/interface-navigation/profile"
                />
                <SidebarItemLink
                  name="Menu"
                  link="/docs/interface-navigation/menu"
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
                  link="/docs/principal-functions/code"
                />
                <SidebarItemLink
                  name="Issues"
                  link="/docs/principal-functions/issues"
                />
                <SidebarItemLink
                  name="Pull requests"
                  link="/docs/principal-functions/pull-requests"
                />
                <SidebarItemLink
                  name="Actions"
                  link="/docs/principal-functions/actions"
                />
                <SidebarItemLink
                  name="Projects"
                  link="/docs/principal-functions/projects"
                />
                <SidebarItemLink
                  name="Wiki"
                  link="/docs/principal-functions/wiki"
                />
                <SidebarItemLink
                  name="Insights"
                  link="/docs/principal-functions/insights"
                />
                <SidebarItemLink
                  name="Settings"
                  link="/docs/principal-functions/settings"
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
                  link="/docs/configurations-personalizations/public-profile-acount"
                />
                <SidebarItemLink
                  name="Personalização e acessibilidade"
                  link="/docs/configurations-personalizations/personalization-accessibility"
                />
                <SidebarItemLink
                  name="Código, planejamento e automação"
                  link="/docs/configurations-personalizations/code-planning-automation"
                />
                <SidebarItemLink
                  name="Segurança"
                  link="/docs/configurations-personalizations/security"
                />
                <SidebarItemLink
                  name="Integrações"
                  link="/docs/configurations-personalizations/integration"
                />
                <SidebarItemLink
                  name="Arquivos"
                  link="/docs/configurations-personalizations/archives"
                />
                <SidebarItemLink
                  name="Configurações de desenvolvedor"
                  link="/docs/configurations-personalizations/dev-configurations"
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
                  link="/docs/useful-resources/common-errors-and-solutions"
                />
                <SidebarItemLink
                  name="Dicas"
                  link="/docs/useful-resources/tips"
                />
                <SidebarItemLink
                  name="Atalhos"
                  link="/docs/useful-resources/shortcuts"
                />
                <SidebarItemLink
                  name="Conclusão, referências e créditos"
                  link="/docs/useful-resources/conclusion-references-credits"
                />
              </ul>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
