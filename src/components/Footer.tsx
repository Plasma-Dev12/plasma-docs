import Image from "next/image";
import plasmaLogo from "@/assets/Logo plasma docs.svg";

export default function Footer() {
  return (
    <footer className="flex justify-end items-center p-5">
      <Image id="plasmaFooter" className="w-[60px]" src={plasmaLogo} alt="Plasma Logo" />
    </footer>
  );
}
