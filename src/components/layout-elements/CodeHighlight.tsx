export default function CodeHighlight({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <code className="bg-[#271d41] whitespace-nowrap leading-[40px] text-[#c76af1] rounded-md m-1 p-2">{children}</code>
    );
}