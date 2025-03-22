import path from "path";

export function getSideBarData(technology: string) {
  if (typeof window === "undefined") {
    const fs = require("fs");

    const docsDir = path.join(process.cwd(), `src/app/docs/${technology}`);
    if (!fs.existsSync(docsDir)) {
      throw new Error(`Directory ${docsDir} does not exist`);
    }

    const docsData = [];

    // Processar subpastas dentro do diretório principal
    const mainFolders = fs.readdirSync(docsDir);
    for (const mainFolder of mainFolders) {
      const mainFolderPath = path.join(docsDir, mainFolder);
      const isMainFolderDirectory = fs.lstatSync(mainFolderPath).isDirectory();

      if (!isMainFolderDirectory) continue; // Ignorar arquivos no nível principal

      const folderData = {
        title: mainFolder, // Nome da pasta principal como título
        subfolders: [] as { name: string; page: { title: string; path: string } }[], // Subpastas
      };

      // Processar subpastas dentro da pasta principal
      const subfolders = fs.readdirSync(mainFolderPath);
      for (const subfolder of subfolders) {
        const subfolderPath = path.join(mainFolderPath, subfolder);
        const isSubfolderDirectory = fs.lstatSync(subfolderPath).isDirectory();

        if (!isSubfolderDirectory) continue; // Ignorar arquivos dentro da pasta principal

        const files = fs.readdirSync(subfolderPath);
        const pageFile = files.find((file: string) => file === "page.tsx");

        if (pageFile) {
          const pageFilePath = path.join(subfolderPath, pageFile);
          const fileContent = fs.readFileSync(pageFilePath, "utf-8");

          // Procurar o componente Title
          const titleMatch = fileContent.match(/<Title[^>]*>(.*?)<\/Title>/);

          const title = titleMatch ? titleMatch[1].trim() : "Untitled";

          folderData.subfolders.push({
            name: subfolder, // Nome da subpasta
            page: {
              title: title, // Título extraído do componente Title
              path: `/docs/${technology}/${mainFolder}/${subfolder}/${pageFile}`, // Caminho do arquivo
            },
          });
        }
      }

      docsData.push(folderData); // Adiciona os dados da pasta principal ao resultado final
    }
    return JSON.stringify(docsData, null, 2);
  }
}
