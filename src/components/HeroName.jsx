"use client";

import { motion } from "framer-motion";
import { notoSerif } from "@/util/fonts";

export default function HeroName() {
  return (
    <motion.div>
      <h1
        className={`md:text-8xl xl:text-9xl text-7xl font-bold sm:text-center sm:px-0 px-4  ${notoSerif.className}`}
      >
        <SplitLetters text="Michael" />
        <span className="sm:inline-block hidden">&nbsp;</span>
        <SplitLetters text="Harlow" />
      </h1>
      <motion.p
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, ease: "easeOut" }}
        className="sm:text-lg mx-auto my-4 max-w-prose sm:text-center xl:text-wrap text-pretty sm:px-0 px-4"
      >
        <motion.span>Hello</motion.span>, I am a software engineer and student.
        I am passionate about creating exciting and engaging projects, learning
        new things, and sharing my knowledge with my community.
      </motion.p>
    </motion.div>
  );
}

function SplitLetters({ text }) {
  const defaultAnimation = {
    begin: {
      x: -50,
      y: -30,
      rotate: -90,
      opacity: 0,
    },
    end: {
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
    },
  };

  return (
    <span className="text-nowrap inline-block">
      {text.split("").map((letter, index) => (
        <motion.span
          className={"inline-block"}
          key={index + letter} // TODO: key could be index combined with letter to be more unique?
          initial="begin"
          animate="end"
          whileHover={{
            scale: 1.2,
            rotate: Math.random() * 10 - 5,
            transition: { duration: 0.1 },
          }}
          variants={defaultAnimation}
          transition={{ delay: index * Math.random() * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
}
