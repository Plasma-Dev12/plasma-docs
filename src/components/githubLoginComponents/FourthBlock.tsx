import githubVerificationMobile from "@/assets/verifyAccountMobile.png";
import githubVerification from "@/assets/verifyAccount.png";
import Image from "next/image";

export default function FourthBlock() {
  return (
    <>
      <div>
        <Image src={githubVerificationMobile} alt="Github Login" className="md:hidden h-full w-full" />
        <Image src={githubVerification} alt="Github Login" className="hidden md:block h-full w-full" />
      </div>
    </>
  );
}
