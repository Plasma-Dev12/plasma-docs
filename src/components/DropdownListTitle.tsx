import { LuChevronDown, LuChevronRight } from "react-icons/lu";
import { useState } from "react";

interface DropdownListProps {
  name: string;
}

export default function DropdownListTitle({ name }: DropdownListProps) {
  const [open, setOpen] = useState(false);

  return (
    <summary className="font-bold" onClick={() => setOpen(!open)}>
      <div className="flex flex-row items-center justify-between">
        <span className="text-[#A486FF]">{name}</span>
        {open ? (
          <LuChevronDown color="#A486FF" />
        ) : (
          <LuChevronRight color="#A486FF" />
        )}
      </div>
    </summary>
  );
}
