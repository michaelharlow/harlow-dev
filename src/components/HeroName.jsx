"use client";

import { motion } from "framer-motion";

export default function HeroName() {
  return (
    <div className="">
      <h1 className="md:text-8xl xl:text-9xl text-7xl font-bold text-center">
        <SplitLetters text="Michael" />
        <span className="sm:inline-block hidden">&nbsp;</span>
        <SplitLetters text="Harlow" />
      </h1>
      <p className="sm:text-xl m-auto max-w-prose sm:text-center sm:px-0 px-4">
        Hello, I am a software engineer and student. I am passionate about
        creating exciting and engaging projects, learning new things, and
        sharing my knowledge with my community.
      </p>
    </div>
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
          key={index} // TODO: key could be index combined with letter to be more unique?
          initial="begin"
          animate="end"
          variants={defaultAnimation}
          transition={{ delay: index * Math.random() * 0.2 }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
}
