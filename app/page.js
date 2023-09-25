'use client';

import BigMike from '@components/BigMike';
import Intro from '@components/Sections/Intro';
import About from '@components/Sections/About';
import Projects from '@components/Sections/Projects';

export default function Home() {
  return (
    <div className="flex w-full items-start">
      <div className="w-full">
        <Intro />
        <About />
        <Projects />
      </div>
      <BigMike />
    </div>
  );
}
