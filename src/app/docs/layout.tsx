"use client";
import AnchorLinks from "@/components/AnchorLinks";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { createRoot } from "react-dom/client";

export default function LayoutDocs({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isDocsPage = pathname === "/docs";
  const isGithubHomePage = pathname === "/docs/github";

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      const oldAnchorLinks = document.querySelectorAll(".anchor-links");
      oldAnchorLinks.forEach((element) => element.remove());

      const h1Elements = document.querySelectorAll("h1");
      h1Elements.forEach((h1) => {
        const anchorLinks = document.createElement("div");
        anchorLinks.className = "anchor-links";
        if (!isDocsPage && !isGithubHomePage) {
          createRoot(anchorLinks).render(<AnchorLinks fixed={false} />);
        }
        h1.insertAdjacentElement("afterend", anchorLinks);
      });
    }
    const h1 = document.querySelector("h1");
    if (h1) {
      document.title = h1.textContent + " - Plasma docs" || "Plasma docs";
    }
  }, [pathname, isDocsPage, isGithubHomePage]);

  return (
    <>
      <div className={`flex ${isDocsPage ? "flex-col" : ""}`}>
        {!isDocsPage && 
          <Sidebar />
          }
        <div
          className={`flex ${
            isDocsPage || isGithubHomePage ? "w-full" : "flex-1 justify-between"
          }`}
        >
          <main
            className={`text-[#F5F5F5] text-justify ${
              isDocsPage || isGithubHomePage
                ? `w-full p-0 ${
                    isGithubHomePage ? "flex justify-center items-center" : ""
                  }`
                : "mb-16 mt-48 2xl:mt-16 mx-8 sm:mx-16 2xl:mx-32 2xl:w-[800px]"
            }`}
          >
            <div
              className={`flex ${
                isDocsPage
                  ? "w-full h-full"
                  : `flex-col ${isGithubHomePage ? "" : " max-w-[800px]"}`
              }`}
            >
              {children}
            </div>
          </main>
          {!isDocsPage && !isGithubHomePage && (
            <div className="hidden md:flex flex-1 justify-center">
              <AnchorLinks />
            </div>
          )}
        </div>
      </div>
      {!isDocsPage && <Footer />}
    </>
  );
}
