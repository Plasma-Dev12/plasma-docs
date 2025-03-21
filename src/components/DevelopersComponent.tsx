"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import pedroPanstein from "@/assets/Pedro P.png";
import plasmaDocsLogo from "@/assets/Logo plasma docs.svg";
import pedroAugusto from "@/assets/Pedro A.png";
import arturNeves from "@/assets/Artur N.png";

export default function DevelopersComponent() {
  const [actualIndex, setActualIndex] = useState(0);

  const developers = [
    {
      id: 0,
      image: pedroPanstein,
      name: "Pedro Henrique Panstein",
      description: "Fullstack developer",
    },
    {
      id: 1,
      image: pedroAugusto,
      name: "Pedro Augusto Wilhelm",
      description: "Fullstack developer",
    },
    {
      id: 2,
      image: arturNeves,
      name: "Artur Neves Höpner",
      description: "Fullstack developer",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActualIndex((prevIndex) => (prevIndex + 1) % developers.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [developers.length]);

  return (
    <div className="relative h-full w-full flex flex-col justify-center items-center gap-10 lg:flex-row lg:gap-[10%] lg:w-full">
      <div className="relative flex flex-col justify-center items-center gap-10">
        <Image
          id="plasmaLogoDevelopers"
          className="no-drag opacity-40 w-[80%] max-w-[300px] lg:w-[320px] lg:max-w-full"
          src={plasmaDocsLogo}
          alt="Plasma logo"
        />

        <div
          id="developerDiv"
          className="absolute w-[35%] max-w-[120px] flex justify-center items-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={developers[actualIndex].id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute w-full"
            >
              <Image
                id="imageDeveloper"
                className="no-drag w-full"
                src={developers[actualIndex].image}
                alt={developers[actualIndex].name}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={developers[actualIndex].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-center"
        >
          <h2
            id="title"
            className="font-bold text-2xl md:text-4xl lg:w-[440px]"
          >
            {developers[actualIndex].name}
          </h2>
          <p className="text-[#FEDEFB] mt-5 md:text-xl">
            {developers[actualIndex].description}
          </p>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-2.5 flex justify-center items-center gap-2">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-[8px] h-[8px] rounded-full cursor-pointer"
            initial={{ opacity: 0.5, scale: 0.8 }}
            animate={{
              opacity: actualIndex === index ? 1 : 0.5,
              scale: actualIndex === index ? 1 : 0.8,
              backgroundColor: actualIndex === index ? "#A486FF" : "#28225F",
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onClick={() => setActualIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
