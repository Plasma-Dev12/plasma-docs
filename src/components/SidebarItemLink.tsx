import Link from "next/link";

interface SidebarItemProps {
    name: string;
    link: string;
    onClick?: () => void;
}

export default function SidebarItemLink({name, link, onClick}: SidebarItemProps) {
    return (
        <Link href={link} onClick={onClick}>
            <li className="duration-150 my-1 hover:underline hover:text-[#A486FF] cursor-pointer">{name}</li>
        </Link>
    );
}