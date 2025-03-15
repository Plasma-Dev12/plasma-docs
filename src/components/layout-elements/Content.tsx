export default function Content({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <div className="flex flex-col gap-10">
            {children}
        </div>
    );
}