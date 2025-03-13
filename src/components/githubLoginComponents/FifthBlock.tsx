import homeGithubMobile from "@/assets/homeGithubMobile.png";
import homeGithub from "@/assets/homeGithb.png";
import Image from "next/image";

export default function FifthBlock() {
  return (
    <>
      <div>
        <Image
          src={homeGithubMobile}
          alt="Home github"
          className="md:hidden w-full h-full max-h-[500px]"
        />
        <Image
          src={homeGithub}
          alt="Home github"
          className="hidden md:block w-full h-full max-h-[480px]"
        />
      </div>
    </>
  );
}
