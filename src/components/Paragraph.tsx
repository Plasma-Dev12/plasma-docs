export default function Paragraph({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <span className="text-[#F5F5F5] text-lg text-justify">{children}</span>
    );
}