import Link from "next/link";

interface LearnMoreLinkProps {
    children: React.ReactNode;
    link: string;
}

export default function LearnMoreLink({children, link}: LearnMoreLinkProps) {
    return (
        <span className="!text-[16px]">
            Saiba mais em: {""}
            <Link href={link} className="text-[#A486FF] hover:opacity-80 hover:underline">
                {children}
            </Link>
        </span>
    );
}