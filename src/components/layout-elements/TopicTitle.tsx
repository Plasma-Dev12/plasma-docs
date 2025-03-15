export default function TopicTitle({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <h2 className="text-3xl text-[#F5F5F5] font-bold text-start w-full">{children}</h2>
    );
}