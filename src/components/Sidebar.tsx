"use client";
import Image from "next/image";
import plasmaDocsLogo from "@/assets/Logo plasma docs.svg";
import DropdownListTitle from "./DropdownListTitle";
import SidebarItemLink from "./SidebarItemLink";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface SidebarProps {
  sidebarData: string; // Altere o tipo para string
}

export default function Sidebar({ sidebarData }: SidebarProps) {  
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="z-10 2xl:w-[350px] 2xl:block">
      <div className="2xl:w-[350px] fixed 2xl:bg-[#1A193B] 2xl:h-screen max-h-screen 2xl:overflow-y-auto 2xl:overflow-x-hidden">
        <div className={`bg-[#1A193B] py-6 shadow-[0px_0px_24px_#8c93fb44]`}>
          <div className="flex relative w-[100vw] 2xl:w-[350px] px-4 md:px-8 flex-row items-center justify-between">
            <Link href={"/"}>
              <div className="flex flex-row items-center gap-2">
                <Image
                  src={plasmaDocsLogo}
                  alt="Plasma logo"
                  className="no-drag w-14 md:w-20"
                />
                <span className="text-2xl md:text-3xl font-bold">Plasma Docs</span>
              </div>
            </Link>
            <Menu
              color={"#f5f5f5"}
              onClick={() => setIsOpen(true)}
              className={`2xl:hidden size-10 ` + (isOpen ? "hidden" : "block")}
            />
            <X
              color={"#f5f5f5"}
              onClick={() => setIsOpen(false)}
              className={`2xl:hidden size-10 ` + (isOpen ? "block" : "hidden")}
            />
          </div>
        </div>
        <div
          className={
            `text-white w-full sm:w-[350px] bg-[#1A193B] h-[calc(100vh-80px)] md:h-[calc(100vh-120px)] 2xl:h-auto px-4 md:px-8 py-8 overflow-y-auto 2xl:block ` +
            (isOpen ? "block" : "hidden")
          }
        >
          <span className="font-bold text-xl">Github</span>
          {sidebarData && Object.entries(JSON.parse(sidebarData)).map(([key, value]) => (
            <details key={key} className="cursor-pointer my-4">
              <DropdownListTitle name={value.name} />
              <ul className="pl-4 mt-2">
                {Object.entries(value.subfolders).map(([key2, value2]) => (
                  <SidebarItemLink
                    name={value2.page[0].name}
                    link={value2.page[1].link}
                    key={key2}
                  />
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
