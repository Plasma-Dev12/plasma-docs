import AnchorLinks from "@/components/AnchorLinks";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

export default function LayoutDocs({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex w-full justify-between">
        <Sidebar />
        <main className="text-[#F5F5F5] text-justify flex-1 my-16 mx-16">
          <div className="max-w-[800px] flex flex-col">{children}</div>
        </main>
        <AnchorLinks />
      </div>
      <Footer />
    </>
  );
}
