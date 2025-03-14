import githubLogin from "@/assets/realLoginGithub.png";
import githubLoginMobile from "@/assets/realLoginGithubMobile.png";
import Image from "next/image";

export default function ThirdBlock() {
  return (
    <>
      <div>
        <Image
          src={githubLoginMobile}
          alt="Github Login"
          className="md:hidden h-full w-full"
        />

        <Image
          src={githubLogin}
          alt="Github Login"
          className="hidden md:block h-full w-full"
        />
      </div>
    </>
  );
}
