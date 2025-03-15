export default function Spacer({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <div className="pl-4 my-4">{children}</div>
    );
}