"use client";

import { motion } from "framer-motion";

export default function HeroName() {
  return (
    <div className="flex justify-center w-1/2">
      <div>
        <SplitLetters
          text="Michael"
          className="sm:text-8xl text-7xl font-extrabold"
        />
        <SplitLetters
          text="Harlow"
          className="sm:text-8xl text-7xl font-extrabold"
        />
      </div>
    </div>
  );
}

function SplitLetters({ text, className }) {
  return (
    <h1 className={`flex ${className}`}>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index} // TODO: key could be index combined with letter to be more unique?
          initial={{ x: -50, y: -30, rotate: -90, opacity: 0 }}
          animate={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
          transition={{ delay: Math.random() * 0.2 * index }}
        >
          {letter}
        </motion.span>
      ))}
    </h1>
  );
}
