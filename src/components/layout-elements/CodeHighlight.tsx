export default function CodeHighlight({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <code className="bg-[#1e192b] whitespace-nowrap text-[#4587eb] rounded-md m-1 p-2">{children}</code>
        //ou whitespace-pre-wrap
    );
}