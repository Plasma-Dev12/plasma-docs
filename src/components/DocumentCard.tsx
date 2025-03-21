import Image, { StaticImageData } from "next/image";
import Paragraph from "./layout-elements/Paragraph";
import Link from "next/link";

interface DocumentCardProps {
  tecnology: string;
  description: string;
  image: StaticImageData;
  comingSoon: boolean;
  urlLink: string;
}

export default function DocumentCard({
  tecnology,
  description,
  image,
  comingSoon,
  urlLink,
}: DocumentCardProps) {
  return comingSoon ? (
    <div className="relative bg-[#28225F]/[0.2] rounded-2xl p-6 w-full flex flex-col justify-between items-center gap-10 max-w-[400px]">
      <h4 className="text-center text-white font-bold text-2xl uppercase">
        {tecnology}
      </h4>
      <Image className="max-w-[100px]" src={image} alt={tecnology} />
      <div className="flex justify-center items-center mt-6">
        <Paragraph indent={false}>{description}</Paragraph>
      </div>
      <div className="bg-black/95 w-full flex justify-center items-center h-full absolute top-0 rounded-2xl">
        <p className="text-white/80 font-bold text-2xl">Em breve...</p>
      </div>
    </div>
  ) : (
    <Link
      href={urlLink}
      className="bg-[#28225F]/[0.6] hover:bg-[#28225F]/[0.9] hover:shadow-purple-100/5 cursor-pointer shadow-lg rounded-2xl p-6 w-full flex flex-col justify-between items-center gap-10 max-w-[400px]"
    >
      <h4 className="text-center text-white font-bold text-2xl uppercase">
        {tecnology}
      </h4>
      <Image className="max-w-[100px]" src={image} alt={tecnology} />
      <div className="flex justify-center items-center mt-6">
        <Paragraph indent={false}>{description}</Paragraph>
      </div>
    </Link>
  );
}
