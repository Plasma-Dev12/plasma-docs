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
        <main className="flex-1 text-justify text-[#F5F5F5] my-16 mx-16">
          <div className="flex flex-col max-w-[800px]:">{children}</div>
        </main>
        <AnchorLinks />
      </div>
      <Footer />
    </>
  );
}
