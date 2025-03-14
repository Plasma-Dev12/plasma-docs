import AnchorLinks from "@/components/AnchorLinks";
import Sidebar from "@/components/Sidebar";

export default function LayoutDocs({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex w-full justify-between">
        <Sidebar />
        <div className="flex-1 ">
            {children}
        </div>
        <AnchorLinks />
      </div>
    );
  }
  