'use client';

import Image from 'next/image';
import BigMike from '@components/BigMike';
import Intro from '@components/Sections/Intro';
import About from '@components/Sections/About';

export default function Home() {
  return (
    <div className="flex w-full items-start">
      <div className="w-full">
        <Intro />
        <About />
      </div>
      <BigMike />
    </div>
  );
}
