import Link from "next/link";

interface SidebarItemProps {
    name: string;
    link: string;
}

export default function SidebarItemLink({name, link}: SidebarItemProps) {
    return (
        <Link href={link}>
            <li className="duration-150 my-1 hover:underline hover:text-[#A486FF] cursor-pointer">{name}</li>
        </Link>
    );
}