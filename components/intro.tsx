"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

const Intro = () => {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              className="h24- w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl hover:scale-110 transition"
              src="/../public/Profile_Picture1.jpg"
              priority={true}
              quality={95}
              width={100}
              height={100}
              alt="Rohit's Portfolio"
            />
          </motion.div>
          <motion.span
            className="absolute text-4xl bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 150,
              delay: 0.3,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Rohit.</span> I'm a{" "}
        <span className="font-bold">full-stack web developer </span> certified
        with <span className="font-bold">AWS</span> with{" "}
        <span className="font-bold">2 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline text-red-500">
          React.js, Next.js, Node.js & AWS
        </span>
        .
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          href="#contact"
          className="bg-gray-900 group text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale=110 hover:text-red-500 hover:scale-110 hover:bg-green-950 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-60 group-hover:translate-x-3 transition" />
        </Link>
        <a className="bg-white group px-7 py-3 flex items-center gap-2 rounded-full cursor-pointer outline-none focus:scale=110 hover:text-green-500 hover:scale-90 active:scale-105 transition border border-black/10" href="/resume.pdf" download >
          Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale=110 cursor-pointer hover:scale-110 hover:text-green-500 active:scale-105 transition border border-black/10" href="https://www.linkedin.com/in/ro-hit-singh/" target="_blank">
          <BsLinkedin />
        </a>
        <a className="bg-white text-gray-700 p-4 flex items-center gap-2 text-[1.35rem] rounded-full cursor-pointer focus:scale=110 hover:text-green-500 hover:scale-110 active:scale-105 transition border border-black/10">
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
