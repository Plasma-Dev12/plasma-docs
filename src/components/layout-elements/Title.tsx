export default function Title({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <h1 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] text-start w-full mb-8">{children}</h1>
    );
}