import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface DropdownListProps {
    name: string;
}

export default function DropdownListTitle({name}: DropdownListProps) {
    const [open, setOpen] = useState(false);

    return (
        <summary className="font-bold" onClick={() => setOpen(!open)}>                
            <div className="flex flex-row justify-between">
                <span className="text-[#A486FF]">{name}</span>
                {open ? <ChevronDown color="#A486FF"/> : <ChevronRight color="#A486FF"/>}
            </div>        
        </summary>
    );
}