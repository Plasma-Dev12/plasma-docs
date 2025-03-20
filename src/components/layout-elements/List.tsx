import Spacer from "./Spacer";

interface ListProps { 
    children: React.ReactNode;
    type: "disc" | "decimal" | "topics";
    spacer?: boolean;
};

export default function List({children, type, spacer = true}: ListProps) {
    return (
        spacer ? <Spacer>
            <ul className={`list-inside flex flex-col gap-4 ${type === "topics" ? "list-none" : (type === "disc" ? "list-disc" : "list-decimal")}`}>
                {children}
            </ul>
        </Spacer>
        :
        <ul className={`list-inside flex flex-col gap-4 ${type === "topics" ? "list-none" : (type === "disc" ? "list-disc" : "list-decimal")}`}>
            {children}
        </ul>
    );
}