export default function ListItem({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <li className="text-[#F5F5F5] text-lg text-justify font-bold">{children}</li>
    );
}