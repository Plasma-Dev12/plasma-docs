import Image from "next/image";
import headerExample from "@/assets/navbarImage.png";
import githubIcon from "@/assets/githubLogo.png";
import plusOptions from "@/assets/plusFunctions.png";

export default function Page() {
  return (
    <>
      <div className="flex justify-start items-center">
        <div className="flex flex-col justify-center items-start gap-20">
          <h1 className="text-4xl font-bold text-[#F5F5F5] text-start w-full">
            Navbar
          </h1>
          <div>
            <Image
              id="navbar"
              className="md:min-w-[800px]"
              src={headerExample}
              alt="Header image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
