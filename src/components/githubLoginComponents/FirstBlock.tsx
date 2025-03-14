import { BiSearch } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import loginDesktop from "@/assets/loginDesktop.png";
import Image from "next/image";

export default function FirstBlock() {
  return (
    <>
      <div className="md:hidden flex justify-between items-center px-[16px] py-[20px]">
        <IoMenu className="text-[#F7F7F7] w-[32px] h-[32px]" />
        <IoLogoGithub className="text-[#F7F7F7] w-[32px] h-[32px]" />
        <button className="border-1 border-[#F7F7F7] text-[13px] text-[#F7F7F7] rounded-[8px] px-[11px] py-[8px]">
          Sign in
        </button>
      </div>
      <div className="hidden md:flex justify-between items-center px-[16px] py-[20px]">
        <nav className="flex items-center gap-10">
          <IoLogoGithub className="cursor-pointer text-[#F7F7F7] w-[32px] h-[32px]" />
          <ul className="flex gap-4">
            {[
              "Product",
              "Solutions",
              "Resources",
              "Open Source",
              "Enterprise",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-2"
              >
                <li className="text-[8px] text-[#F7F7F7] lg:text-[12px]">
                  {item}
                </li>
                <FaAngleDown className="cursor-pointer text-[8px] text-[#F7F7F7] lg:text-[12px]" />
              </div>
            ))}
            <li className="text-[8px] text-[#F7F7F7] lg:text-[12px]">
              Pricing
            </li>
          </ul>
        </nav>
        <div id="inputHeader" className="hidden relative">
          <input
            type="text"
            placeholder="Search or jump to..."
            className="border-1 pl-7 border-[#F7F7F7] text-[8px] text-[#F7F7F7] rounded-[8px] px-[11px] py-[8px] lg:w-[190px]"
          />
          <BiSearch className="absolute top-[9px] left-2 text-[#F7F7F7] w-[12px] h-[12px]" />
          <button className="absolute top-[8px] text-[7px] w-[14px] h-[14px] right-2 border-1 border-[#545B66] text-[#545B66] rounded-[4px]">
            /
          </button>
        </div>
        <div className="flex gap-4">
          <button className="text-[8px] text-[#F7F7F7] xl:text-[12px]">
            Sign in
          </button>
          <button className="border-1 border-[#F7F7F7] text-[8px] text-[#F7F7F7] rounded-[8px] px-[11px] py-[8px] xl:text-[12px] transition transform hover:scale-105">
            Sign up
          </button>
        </div>
      </div>
      <div className="md:hidden bg-gradient-to-b from-[#040642] to-[#4f3baa] px-[16px] py-[20px] rounded-b-[16px]">
        <h2 className="text-3xl font-bold md:text-4xl text-center text-[#F7F7F7]">
          Build and ship software on a single, collaborative platform
        </h2>
        <p className="mt-4 text-md text-[#F7F7F7] text-center">
          Join the world’s most widely adopted AI-powered developer platform.
        </p>

        <div className="mt-6 flex flex-col md:flex-row bg-[#F7F7F7] rounded-[8px] p-1">
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full md:w-80 px-4 py-3 rounded-md text-[#535558] font-bold outline-none"
          />
          <button className="bg-green-600 hover:bg-green-500 transition px-6 py-3 rounded-md font-semibold text-white">
            Sign up for GitHub
          </button>
        </div>

        <button className="w-full mt-4 px-6 py-3 rounded-md font-semibold bg-gray-800/10 border-2 border-[#F7F7F7] text-white hover:bg-gray-700 transition">
          Try GitHub Copilot
        </button>
      </div>
      <Image
        src={loginDesktop}
        alt="loginMobile"
        className="select-none pointer-events-none hidden md:block w-full h-full object-contain"
      />
    </>
  );
}
