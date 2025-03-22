export default function Spacer({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <div className="flex flex-col pl-4 my-4">{children}</div>
    );
}