interface ListProps { 
    children: React.ReactNode;
    type: "disc" | "decimal" | "topics";
};

export default function List({children, type}: ListProps) {
    return (
        <ul className={`list-inside flex flex-col gap-4 ${type === "disc" ? "list-disc" : "list-decimal"}`}>
            {children}
        </ul>
    );
}