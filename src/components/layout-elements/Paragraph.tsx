interface ParagraphProps {
    children: React.ReactNode;
    indent?: boolean;
}

export default function Paragraph({children, indent = true}: ParagraphProps) {
    return (
        <span className={`text-[#F5F5F5] md:text-lg text-justify ${indent ? 'indent-6' : ``}`}>{children}</span>
    );
}