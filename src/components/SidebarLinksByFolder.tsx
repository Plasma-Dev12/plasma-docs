"use client";

import { useState, useEffect } from "react";
import DropdownListTitle from "./DropdownListTitle";
import SidebarItemLink from "./SidebarItemLink";

type subfolderType = {name: string; order: number; page: { title: string; path: string; }};

export default function SidebarLinksByFolder({
  technology,
}: {
  technology: string;
}) {
  const [sidebarData, setSidebarData] = useState<{title: string, subfolders: subfolderType[]}[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSidebarData() {
      try {
        const response = await fetch(`/api/sidebar/${technology}`);
        if (!response.ok)
          throw new Error(`Erro ao buscar dados: ${response.statusText}`);

        const data = await response.json();
        setSidebarData(data);
        // console.log(data);        

        // data.map((sectionFolder: {title: string, subfolders: subfolderType[]}) => {
        //   console.log("/////" +sectionFolder.title);
        //   sectionFolder.subfolders.map((subfolder: subfolderType) => {
        //     console.log("título:" + subfolder.page.title);
        //     console.log("link:" + subfolder.page.path);
        //   })
        // });
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : String(error);
        setError(errorMessage);
      }
    }

    fetchSidebarData();
  }, [technology]);

  if (error) {
    return <p className="text-red-500">Erro ao carregar dados: {error}</p>;
  }

  if (!sidebarData) {
    return <p>Carregando dados da Sidebar...</p>;
  }

  return (
    sidebarData &&
    sidebarData.map((sectionFolder: {title: string, subfolders: subfolderType[]}, keySectionFolder: number) => (
      <details key={keySectionFolder} className="cursor-pointer my-4">
        <DropdownListTitle name={sectionFolder.title} />
        <ul className="pl-4 mt-2">
          {sectionFolder.subfolders.map((subfolder: subfolderType, keySubfolder: number) => {            
            return <SidebarItemLink 
              name={subfolder.page.title} 
              link={subfolder.page.path} 
              key={keySubfolder} 
            />;
          })}
        </ul>
      </details>
    ))
  );
}
