'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between h-[10vh] z-50 bg-slate-100">
        <h1 className="font-signika text-3xl mx-6">Harlow.dev</h1>
        <div className="mx-6 sm:block hidden">
          <Link href="/goals" className="mx-6 text-xl font-mono font-bold hover:underline">
            2023 Goals
          </Link>
          <Link href="/#about" className="mx-6 text-xl font-mono font-thin hover:underline">
            About
          </Link>
          <Link href="/#projects" className="mx-6 text-xl font-mono font-thin hover:underline">
            Projects
          </Link>
        </div>
        {/* Moblie nav */}
        <div className="sm:hidden">
          <button
            className="mx-6 text-xl font-mono font-bold hover:underline"
            onClick={() => {
              setMenuToggle((prev) => !prev);
            }}
          >
            Menu
          </button>
        </div>
      </header>
      {menuToggle && (
        <div className="w-full h-[15vh] bg-slate-100 flex flex-col justify-center items-center sm:hidden">
          <Link href="/goals" className="mx-6 text-xl font-mono font-bold hover:underline">
            2023 Goals
          </Link>
          <Link href="/#about" className="mx-6 text-xl font-mono font-thin hover:underline">
            About
          </Link>
          <Link href="/#projects" className="mx-6 text-xl font-mono font-thin hover:underline">
            Projects
          </Link>
        </div>
      )}
    </>
  );
}
