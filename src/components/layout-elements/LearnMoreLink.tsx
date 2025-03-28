import Link from "next/link";

interface LearnMoreLinkProps {
    children: React.ReactNode;
    link: string;
    text?: string;
    _blank?: boolean;
}

export default function LearnMoreLink({children, link, text, _blank}: LearnMoreLinkProps) {
    return (
        <span className="!text-[16px]">
            {text ? text + " " : "Saiba mais em: "}
            <Link href={link} target={_blank ? "_blank" : ""} className="text-[#A486FF] hover:opacity-80 hover:underline">
                {children}
            </Link>
        </span>
    );
}