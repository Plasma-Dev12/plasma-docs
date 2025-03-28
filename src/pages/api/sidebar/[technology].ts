import path from "path";
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

type SubfolderType = {
  name: string;
  order: number;
  page: { title: string; path: string };
};

type FolderData = {
  title: string;
  subfolders: SubfolderType[];
  order: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<FolderData[] | { error: string }>
) {
  const { technology } = req.query;

  if (typeof technology !== "string") {
    return res.status(400).json({ error: "Technology parameter is required" });
  }

  try {
    // Caminho mais confiável para o diretório docs
    const docsDir = path.join(
      process.cwd(),
      process.env.NODE_ENV === "production" ? "" : "src",
      "app",
      "docs",
      technology
    );

    console.log(`Trying to access directory: ${docsDir}`);

    if (!fs.existsSync(docsDir)) {
      console.error(`Directory not found: ${docsDir}`);
      return res
        .status(404)
        .json({ error: `Technology '${technology}' not found` });
    }

    const docsData: FolderData[] = [];
    const mainFolders = fs.readdirSync(docsDir);

    for (const mainFolder of mainFolders) {
      const mainFolderPath = path.join(docsDir, mainFolder);

      try {
        const stats = fs.lstatSync(mainFolderPath);
        if (!stats.isDirectory()) continue;

        const folderData: FolderData = {
          title: mainFolder,
          subfolders: [],
          order: 999,
        };

        // Process meta.json if exists
        const metaFilePath = path.join(mainFolderPath, "meta.json");
        if (fs.existsSync(metaFilePath)) {
          try {
            const metaData = JSON.parse(fs.readFileSync(metaFilePath, "utf-8"));
            folderData.title = metaData.title || mainFolder;
            folderData.order = metaData.order || 999;
          } catch (metaError) {
            console.error(
              `Error reading meta.json for ${mainFolder}:`,
              metaError
            );
          }
        }

        // Process subfolders
        const subfolders = fs.readdirSync(mainFolderPath);
        for (const subfolder of subfolders) {
          const subfolderPath = path.join(mainFolderPath, subfolder);

          try {
            const subfolderStats = fs.lstatSync(subfolderPath);
            if (!subfolderStats.isDirectory()) continue;

            const files = fs.readdirSync(subfolderPath);
            const pageFile = files.find((file) => file === "page.tsx");

            if (pageFile) {
              const pageFilePath = path.join(subfolderPath, pageFile);
              const fileContent = fs.readFileSync(pageFilePath, "utf-8");

              const titleMatch = fileContent.match(
                /<Title[^>]*>(.*?)<\/Title>/
              );
              const orderMatch = fileContent.match(
                /orderInTheSideBar\s*=\s*(\d+)/
              );

              folderData.subfolders.push({
                name: subfolder,
                order: orderMatch ? parseInt(orderMatch[1].trim()) : 999,
                page: {
                  title: titleMatch ? titleMatch[1].trim() : "Untitled",
                  path: `/docs/${technology}/${mainFolder}/${subfolder}`,
                },
              });
            }
          } catch (subfolderError) {
            console.error(
              `Error processing subfolder ${subfolder}:`,
              subfolderError
            );
          }
        }

        // Sort subfolders by order
        folderData.subfolders.sort((a, b) => a.order - b.order);
        docsData.push(folderData);
      } catch (folderError) {
        console.error(`Error processing folder ${mainFolder}:`, folderError);
      }
    }

    // Sort main folders by order
    docsData.sort((a, b) => a.order - b.order);

    return res.status(200).json(docsData);
  } catch (error) {
    console.error("Global error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return res.status(500).json({ error: errorMessage });
  }
}