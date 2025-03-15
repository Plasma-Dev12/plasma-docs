export default function CodeHighlight({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <code className="bg-[#1E1E1E] text-[#F5F5F5] rounded-md p-2">{children}</code>
    );
}