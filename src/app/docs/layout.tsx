import Sidebar from "@/components/Sidebar";

export default function LayoutDocs({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <Sidebar />
        <div className="overflow-y-auto">
            {children}
        </div>
      </>
    );
  }
  