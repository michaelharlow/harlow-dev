"use client";

import Link from "next/link";
import { MenuToggle } from "./MenuToggle";

import { motion, useCycle } from "framer-motion";

export default function Navbar() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <header className="max-w-7xl m-auto">
      <nav className="flex justify-between my-4 mx-8 items-center sticky top-4">
        <h1 className="text-2xl font-bold">Harlow.dev</h1>
        {/* Desktop */}
        <ul className="sm:flex hidden space-x-4">
          <li>
            <Link href="/" className="font-bold text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="font-bold text-lg">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="font-bold text-lg">
              Projects
            </Link>
          </li>
        </ul>

        {/* Mobile */}
        <motion.div
          className="sm:hidden flex"
          animate={isOpen ? "open" : "closed"}
          initial={false}
        >
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.div>
      </nav>
    </header>
  );
}
