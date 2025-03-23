"use client";

import { useState, useEffect } from "react";
import DropdownListTitle from "./DropdownListTitle";
import SidebarItemLink from "./SidebarItemLink";

export default function SidebarLinksByFolder({
  technology,
}: {
  technology: string;
}) {
  const [sidebarData, setSidebarData] = useState<Record<string, any> | null>(
    null
  );
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
        // data.map((item: any) => {
        //   console.log("/////" +item.title);
        //   item.subfolders.map((item2: any) => {
        //     console.log("título:" + item2.page.title);
        //     console.log("link:" + item2.page.path);
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
    sidebarData.map((item: unknown, key: number) => (
      <details key={key} className="cursor-pointer my-4">
        <DropdownListTitle name={item.title} />
        <ul className="pl-4 mt-2">
          {item.subfolders.map((value2: unknown, key2: number) => {            
            return <SidebarItemLink 
              name={value2.page.title} 
              link={value2.page.path} 
              key={key2} 
            />;
          })}
        </ul>
      </details>
    ))
  );
}
