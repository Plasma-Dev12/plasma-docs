"use client";
import React, { Fragment, useEffect, useState } from "react";

export default function AnchorLinks() {
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3"));
    elements.forEach((element) => {
      element.id = element.textContent || "";
    });
    const headingData = elements.map((element) => ({
      id: element.textContent || "",
      text: element.textContent || "",
    }));
    setHeadings(headingData);
  }, []);

  return (
    <nav className="mt-16 mr-12 w-[200px]">
      <div className="w-[200px] fixed">
        <span className="text-white text-xl font-bold">Neste artigo</span>
        <ul className="flex flex-col mt-3 gap-1">
          {headings.map((heading) => (
            <li key={heading.id} className="text-white/70 hover:text-[#A486FF]">
              <a href={`#${heading.id}`}>{heading.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
