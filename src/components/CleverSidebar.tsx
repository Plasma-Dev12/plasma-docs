import { getSideBarData } from "@/utils/getSideBarData";
import Sidebar from "./Sidebar";

export default async function CleverSidebar() {
  const sidebarData = await getSideBarData("github"); // Obtém os dados no servidor
  const stringifiedData = JSON.stringify(sidebarData); // Certifique-se de passar os dados como string
  
  return <Sidebar sidebarData={stringifiedData} />;
}
