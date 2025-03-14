import Sidebar from "@/components/Sidebar";

export default function LayoutDocs({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full h-full my-10 mx-10">{children}</div>
    </div>
  );
}
