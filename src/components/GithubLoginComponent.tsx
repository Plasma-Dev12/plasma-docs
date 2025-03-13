import { useState, useEffect } from "react";
import { IoLogoGithub } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import loginDesktop from "@/assets/loginDesktop.png";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import { BiArrowBack, BiSearch } from "react-icons/bi";

export default function GithubLoginComponent() {
  const [showAdditionalBlock, setShowAdditionalBlock] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAdditionalBlock((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative bg-[#040642] rounded-[16px]">
        {/* Bloco principal com transição */}
        <div
          className={`transition-opacity duration-1000 ${
            !showAdditionalBlock ? "opacity-100" : "opacity-"
          }`}
        >
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
              Join the world’s most widely adopted AI-powered developer
              platform.
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
        </div>

        {/* Bloco adicional com transição */}
        <div
          className={`absolute w-full h-full inset-0 bg-black/80 flex items-start pt-[45px] pr-[23px] justify-end rounded-[16px] transition-opacity duration-1000 ${
            showAdditionalBlock ? "opacity-100" : "opacity-0"
          }`}
        >
          <button className="md:hidden relative border-2 border-[#F7F7F7] text-[18px] bg-[#02031A] text-[#F7F7F7] rounded-[8px] px-[11px] py-[8px] transition transform hover:scale-105">
            Sign in
          </button>
          <button className="md:block hidden relative border-2 border-[#F7F7F7] text-[18px] bg-[#02031A] text-[#F7F7F7] rounded-[8px] px-[11px] py-[8px] transition transform hover:scale-105">
            Sign up
          </button>
          <div className="absolute border-4 top-[10px] right-[10px] border-red-700 rounded-full w-[120px] h-[120px]"></div>
          <BiArrowBack className="absolute text-red-700 text-[120px] top-[80px] right-[120px] rotate-[145deg]" />
          <h3 className="absolute top-[45%] mx-10 right-0 left-0 font-extrabold text-sm text-center md:text-2xl xl:text-3xl 2xl:text-4xl text-[#F7F7F7]">
            Para começar abra o site{" "}
            <span className="text-blue-300">github.com</span> no seu navegador e
            clique em <span className="text-purple-300">sign up</span>
          </h3>
        </div>

        
      </div>
    </>
  );
}
