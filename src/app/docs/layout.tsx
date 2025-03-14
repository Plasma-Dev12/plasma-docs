import AnchorLinks from "@/components/AnchorLinks";
import Sidebar from "@/components/Sidebar";

export default function LayoutDocs({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex">
        <Sidebar />
        <div className="overflow-y-auto">
            {children}
        </div>
        <AnchorLinks />
      </div>
    );
  }
  