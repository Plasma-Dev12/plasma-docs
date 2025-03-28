import path from "path";
import fs from "fs";

type subfolderType = {name: string; order: number; page: { title: string; path: string; }};

export default function handler(
  req: {query: {technology: string}}, 
  res: {
    status: (arg0: number) => {json: (arg0: {error: string}) => void};
    json: (arg0: { title: string; subfolders: subfolderType[]; order: number; }[]) => void;
}
) {
  const {technology} = req.query;
  try {
    const docsDir = path.join(process.cwd(), `src/app/docs/${technology}`);
    
    if (!fs.existsSync(docsDir)) {
      return res
      .status(404)
      .json({ error: `Directory ${docsDir} does not exist` });
    }

    const docsData = [];
    const mainFolders = fs.readdirSync(docsDir);

    for (const mainFolder of mainFolders) {
      const mainFolderPath = path.join(docsDir, mainFolder);
      const isMainFolderDirectory = fs.lstatSync(mainFolderPath).isDirectory();

      if (!isMainFolderDirectory) continue;

      const folderData = {
        title: mainFolder,
        subfolders: [] as subfolderType[],
        order: 999
      };

      const metaFilePath = path.join(mainFolderPath, "meta.json");

      if (fs.existsSync(metaFilePath)) {
        const metaData = JSON.parse(fs.readFileSync(metaFilePath, "utf-8"));
        if (metaData.title) {
          folderData.title = metaData.title;          
        }
        if (metaData.order) {
          folderData.order = metaData.order;
        }
      }

      const subfolders = fs.readdirSync(mainFolderPath);
      for (const subfolder of subfolders) {
        const subfolderPath = path.join(mainFolderPath, subfolder);
        const isSubfolderDirectory = fs.lstatSync(subfolderPath).isDirectory();

        if (!isSubfolderDirectory) continue;

        const subfolderTitle = subfolder;        

        const files = fs.readdirSync(subfolderPath);
        const pageFile = files.find((file) => file === "page.tsx");

        if (pageFile) {
          const pageFilePath = path.join(subfolderPath, pageFile);
          const fileContent = fs.readFileSync(pageFilePath, "utf-8");
          const titleMatch = fileContent.match(/<Title[^>]*>(.*?)<\/Title>/);
          const orderMatch = fileContent.match(/orderInTheSideBar\s*=\s*(\d+)/);
          const title = titleMatch ? titleMatch[1].trim() : "Untitled";
          folderData.subfolders.push({
            name: subfolderTitle,
            order: orderMatch ? parseInt(orderMatch[1].trim()) : 999,
            page: {
              title: title,
              path: `/docs/${technology}/${mainFolder}/${subfolder}`,
            },
          });
        }
      }
      folderData.subfolders.sort((a, b) => a.order - b.order);
      docsData.push(folderData);
    }

    docsData.sort((a, b) => a.order - b.order);

    res.json(docsData);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
}