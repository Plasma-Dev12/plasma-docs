"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface AnchorLinksProps {
  fixed?: boolean;
}

export default function AnchorLinks({fixed = true}: AnchorLinksProps) {
  const [headings, setHeadings] = useState<
    { id: string; text: string; tag: string }[]
  >([]);
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3"));
    elements.forEach((element) => {
      element.id = element.textContent || "";
    });
    const headingData = elements.map((element) => ({
      id: element.textContent || "",
      text: element.textContent || "",
      tag: element.tagName,
    }));
    setHeadings(headingData);
  }, [pathname]);

  return (
    <nav className="anchor-links flex md:justify-center border-1 border-[#A486FF] rounded-xl mt-4 mb-16 md:mr-8 md:w-[200px] 2xl:flex-1 2xl:w-auto">
      <div className={`2xl:w-auto pr-4 2xl:mt-0 ${fixed ? "fixed mt-48 w-[200px]" : "p-8"}`}>
        <span
          className={`text-white text-xl font-bold ${
            headings.length === 0 && "hidden"
          }`}
        >
          Neste artigo
        </span>
        <ul className="flex flex-col mt-3 gap-3">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={`text-white/70 hover:text-[#A486FF] ${
                heading.tag === "H3" && "pl-4"
              }`}
            >
              <a href={`#${heading.id}`}>{heading.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
