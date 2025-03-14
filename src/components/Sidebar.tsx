"use client";
import Image from "next/image";
import plasmaDocsLogo from "@/assets/Logo plasma docs.svg";
import DropdownListTitle from "./DropdownListTitle";
import SidebarItemLink from "./SidebarItemLink";

export default function Sidebar() {    

    return (
        <div className="float-left w-[350px] h-screen max-h-screen overflow-y-auto bg-[#28225F]/50 px-4 py-6 shadow-[0px_0px_24px_#8c93fb44]">
            <div className="flex flex-row items-center gap-2">
                <Image
                    src={plasmaDocsLogo}
                    alt="Plasma logo"
                    id="logoPlasmaDocs"
                    className="max-w-1/4"
                />
                <span className="text-3xl font-bold" id="title">Plasma Docs</span>
            </div>
            <div className="text-white mt-8">
                <h2 className="font-bold text-xl">Github</h2>
                <details className="cursor-pointer my-4">
                    <DropdownListTitle name="Interface e navegação" />
                    <div>
                        <ul className="pl-4 mt-2">
                            <SidebarItemLink name="Navbar" link="/" />
                            <SidebarItemLink name="Busca" link="/" />
                            <SidebarItemLink name="Perfil" link="/" />
                            <SidebarItemLink name="Menu" link="/" />                            
                        </ul>
                    </div>
                </details>   
                <details className="cursor-pointer my-4">
                    <DropdownListTitle name="Funcionalidades Principais" />
                    <div>
                        <ul className="pl-4">
                            <SidebarItemLink name="Code" link="/" />
                            <SidebarItemLink name="Issues" link="/" />
                            <SidebarItemLink name="Pull requests" link="/" />
                            <SidebarItemLink name="Actions" link="/" />
                            <SidebarItemLink name="Projects" link="/" />
                            <SidebarItemLink name="Wiki" link="/" />
                            <SidebarItemLink name="Insights" link="/" />
                            <SidebarItemLink name="Settings" link="/" />
                        </ul>
                    </div>
                </details>  
                <details className="cursor-pointer my-4">
                    <DropdownListTitle name="Configurações e Personalização" />
                    <div>
                        <ul className="pl-4">
                            <SidebarItemLink name="Perfil público e conta" link="/" />
                            <SidebarItemLink name="Personalização e acessibilidade" link="/" />
                            <SidebarItemLink name="Código, planejamento e automação" link="/" />
                            <SidebarItemLink name="Segurança" link="/" />
                            <SidebarItemLink name="Integrações" link="/" />
                            <SidebarItemLink name="Arquivos" link="/" />
                            <SidebarItemLink name="Configurações de desenvolvedor" link="/" />
                        </ul>
                    </div>
                </details>       
                <details className="cursor-pointer my-4">
                    <DropdownListTitle name="Recursos Úteis" />
                    <div>
                        <ul className="pl-4">
                            <SidebarItemLink name="Erros comuns e soluções" link="/" />
                            <SidebarItemLink name="Dicas" link="/" />
                            <SidebarItemLink name="Atalhos" link="/" />
                            <SidebarItemLink name="Conclusão, referências e créditos" link="/" />
                        </ul>
                    </div>
                </details>        
            </div>
        </div>
    );
}