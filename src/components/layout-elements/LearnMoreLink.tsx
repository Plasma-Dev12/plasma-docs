import Link from "next/link";

interface LearnMoreLinkProps {
    children: React.ReactNode;
    link: string;
    text?: string;
}

export default function LearnMoreLink({children, link, text}: LearnMoreLinkProps) {
    return (
        <span className="!text-[16px]">
            {text ? text + " " : "Saiba mais em: "}
            <Link href={link} className="text-[#A486FF] hover:opacity-80 hover:underline">
                {children}
            </Link>
        </span>
    );
}