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

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      const oldAnchorLinks = document.querySelectorAll(".anchor-links");
      oldAnchorLinks.forEach((element) => element.remove());

      const h1Elements = document.querySelectorAll("h1");
      h1Elements.forEach((h1) => {
        const anchorLinks = document.createElement("div");
        anchorLinks.className = "anchor-links";
        createRoot(anchorLinks).render(<AnchorLinks fixed={false} />);
        h1.insertAdjacentElement("afterend", anchorLinks);
      });
    }
  }, [pathname]);
  
  return (
    <>
      <div className="flex ">        
        <Sidebar />
        <div className="flex flex-1 justify-evenly">
          <main className="text-[#F5F5F5] text-justify mb-16 mt-48 2xl:mt-16 mx-8 sm:mx-16 2xl:mx-32 2xl:w-[800px]">
            <div className="flex flex-col max-w-[800px] 2xl:w-[800px]">                            
              {children}
            </div>
          </main>
          <div className="hidden md:block">
            <AnchorLinks />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
