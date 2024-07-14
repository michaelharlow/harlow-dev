"use client";

import Link from "next/link";
import { notoSerif } from "@/util/fonts";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const Links = ({ onClick }) => {
  return (
    <>
      <li className="hover:underline">
        <Link href="/" onClick={onClick} className="font-bold text-lg">
          Home
        </Link>
      </li>
      <li className="hover:underline">
        <Link href="/posts" onClick={onClick} className="font-bold text-lg">
          Posts
        </Link>
      </li>
      <li className="hover:underline">
        <Link href="/projects" onClick={onClick} className="font-bold text-lg">
          Projects
        </Link>
      </li>
    </>
  );
};

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className={`max-w-7xl m-auto ${notoSerif.className}`}>
      <nav className="flex justify-between my-4 mx-6 items-center sticky top-4 max-w-7xl m-auto">
        <h1 className="text-2xl font-bold">Harlow.dev</h1>
        {/* Desktop */}
        <ul className="sm:flex hidden space-x-4">
          <Links />
        </ul>

        {/* Mobile */}
        <div className="sm:hidden flex">
          <Menu strokeWidth={3} onClick={() => setOpen(true)} />
          <div
            className={`fixed flex flex-col justify-center items-center z-10 top-4 right-0 rounded-l-xl shadow-xl pl-2 pr-6 pb-5 pt-1 bg-[#FFF8E7] transition-transform duration-300 transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end w-full mb-4">
              <X strokeWidth={3} onClick={() => setOpen(false)} />
            </div>
            <ul className="space-y-3 mr-12">
              <Links onClick={() => setOpen(false)} />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
