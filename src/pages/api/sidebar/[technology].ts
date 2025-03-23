import path from "path";
import fs from "fs";

export default function handler(req, res) {
  const { technology } = req.query;
  const docsData = [];

  try {
    const docsDir = path.join(process.cwd(), `src/app/docs/${technology}`);
    if (!fs.existsSync(docsDir)) {
      return res.status(404).json({ error: `Directory ${docsDir} does not exist` });
    }

    
    const mainFolders = fs.readdirSync(docsDir);

    for (const mainFolder of mainFolders) {
      const mainFolderPath = path.join(docsDir, mainFolder);
      const isMainFolderDirectory = fs.lstatSync(mainFolderPath).isDirectory();

      if (!isMainFolderDirectory) continue;

      const folderData = {
        title: mainFolder,
        subfolders: [],
      };

      const subfolders = fs.readdirSync(mainFolderPath);
      for (const subfolder of subfolders) {
        const subfolderPath = path.join(mainFolderPath, subfolder);
        const isSubfolderDirectory = fs.lstatSync(subfolderPath).isDirectory();

        if (!isSubfolderDirectory) continue;

        const files = fs.readdirSync(subfolderPath);
        const pageFile = files.find((file) => file === "page.tsx");

        if (pageFile) {
          const pageFilePath = path.join(subfolderPath, pageFile);
          const fileContent = fs.readFileSync(pageFilePath, "utf-8");
          const titleMatch = fileContent.match(/<Title[^>]*>(.*?)<\/Title>/);
          const title = titleMatch ? titleMatch[1].trim() : "Untitled";

          folderData.subfolders.push({
            name: subfolder,
            page: {
              title: title,
              path: `/docs/${technology}/${mainFolder}/${subfolder}`,
            },
          });
        }
      }

      docsData.push(folderData);
    }
    // Lógica de leitura de arquivos aqui...
    res.status(200).json(docsData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
