import Paragraph from "./Paragraph";

interface TopicProps {
    children: React.ReactNode;
    title?: string;
}

export default function Topic({children, title}: TopicProps) {
    return (
        <Paragraph indent={false}>
            {title && <b>{title}: </b>} 
            {children}
        </Paragraph>
    );
}