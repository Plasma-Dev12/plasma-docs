import { BiArrowBack } from "react-icons/bi";

interface SecondBlockProps {
  text: string;
  arrow: boolean;
}

export default function SecondBlock({ text, arrow }: SecondBlockProps) {
  if (!arrow) {
    return (
      <>
        <h3 className="absolute top-[45%] mx-10 right-0 left-0 font-extrabold text-sm text-center md:text-2xl xl:text-3xl 2xl:text-4xl text-[#F7F7F7]">
          {text}
        </h3>
      </>
    );
  }

  return (
    <>
      <button className="md:hidden relative border-2 border-[#F7F7F7] text-[18px] bg-[#02031A] text-[#F7F7F7] rounded-[8px] px-[11px] py-[8px] transition transform hover:scale-105">
        Sign in
      </button>
      <button className="md:block hidden relative border-2 border-[#F7F7F7] text-[18px] bg-[#02031A] text-[#F7F7F7] rounded-[8px] px-[11px] py-[8px] transition transform hover:scale-105">
        Sign up
      </button>
      <div className="absolute border-4 top-[10px] right-[10px] border-red-700 rounded-full w-[120px] h-[120px]"></div>
      <BiArrowBack className="absolute text-red-700 text-[120px] top-[80px] right-[120px] rotate-[145deg]" />
      <h3 className="absolute top-[45%] mx-10 right-0 left-0 font-extrabold text-sm text-center md:text-2xl xl:text-3xl 2xl:text-4xl text-[#F7F7F7]">
        {text}
      </h3>
    </>
  );
}
