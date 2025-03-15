import Topic from "./Topic";

interface ListItemProps {
    children: React.ReactNode;
    title?: string;
}

export default function ListItem({children, title}: ListItemProps) {
    return (
        <li>
            <Topic title={title}>{children}</Topic>
        </li>
    );
}