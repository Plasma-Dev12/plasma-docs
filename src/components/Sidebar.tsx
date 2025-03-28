"use client";
import Image from "next/image";
import plasmaDocsLogo from "@/assets/Logo plasma docs.svg";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SidebarLinksByFolder from "./SidebarLinksByFolder";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="z-10 2xl:w-[350px] 2xl:block">
      <div className="2xl:w-[350px] fixed 2xl:bg-[#1A193B] 2xl:h-screen max-h-screen 2xl:overflow-y-auto 2xl:overflow-x-hidden">
        <div className={`bg-[#1A193B] py-6 shadow-[0px_0px_24px_#8c93fb44]`}>
          <div className="flex relative w-screen 2xl:w-[350px] px-4 md:px-8 flex-row items-center justify-between">
            <Link href={"/"}>
              <div className="flex flex-row items-center gap-2">
                <Image
                  src={plasmaDocsLogo}
                  alt="Plasma logo"
                  className="no-drag w-14 md:w-20"
                />
                <span id="title" className="text-2xl md:text-3xl font-bold">
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
            `text-white w-full sm:w-[350px] bg-[#1A193B] h-[calc(100vh-80px)] md:h-[calc(100vh-120px)] 2xl:h-auto px-4 md:px-8 py-8 overflow-y-auto 2xl:block ` +
            (isOpen ? "block" : "hidden")
          }
        >
          <Link
            href="/docs/github"
            className="font-bold text-xl transition-colors hover:text-[#A486FF]"
          >
            Github
          </Link>
          <SidebarLinksByFolder technology={"github"} />
        </div>
      </div>
    </div>
  );
}
