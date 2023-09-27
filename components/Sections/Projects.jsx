'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Projects() {
  const router = useRouter();

  return (
    <div id="projects" className="h-[100vh] w-full overflow-hidden">
      {/* <Image className="absolute left-0 -z-10" src="thin-waves.svg" width={162} height={500} alt="" /> */}
      <div className="mx-6 mt-10">
        <div
          onClick={() => {
            router.push('/projects/quotopia');
          }}
          className="xl:flex bg-white rounded-2xl border-black border-4 border-r-[12px] border-b-[12px] text-ellipsis cursor-pointer w-full hover:-translate-y-2 transition-all active:border-r-8 active:border-b-8 active:-translate-y-1 active:translate-x-1"
        >
          <Image
            className="rounded-xl border-slate-400 border-2 m-3"
            src="images/quotopia.png"
            width={300}
            height={300}
            alt="Screenshot of Quotopia application home page"
          />
          <div className="my-4 mx-4 w-full max-w-2xl overflow-hidden">
            <h1 className="text-2xl font-bold truncate">Quotopia • A quote sharing social media</h1>
            <p className="text-xl text-slate-600 w-full">
              Quotopia was one of the first full stack projects I ever made. It uses Next.js and Tailwind in order to
              serve beautiful content quickly with a small bundle size.
            </p>
            <div className="flex gap-2 w-full h-8">
              <div className="text-xl text-white bg-black px-4 rounded-md">Next.js</div>
              <div className="text-xl text-white bg-sky-500 px-4 rounded-md">Tailwind</div>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            router.push('/projects/portfolio');
          }}
          className="xl:flex mt-6 bg-white rounded-2xl border-black border-4 border-r-[12px] border-b-[12px] text-ellipsis cursor-pointer w-full hover:-translate-y-2 transition-all active:border-r-8 active:border-b-8 active:-translate-y-1 active:translate-x-1"
        >
          <Image
            className="rounded-xl border-slate-400 border-2 m-3"
            src="images/portfolio.png"
            width={300}
            height={300}
            alt="Screenshot of My portfolio application home page"
          />
          <div className="my-4 mx-4 w-full max-w-2xl overflow-hidden">
            <h1 className="text-2xl font-bold truncate">My Portfolio • It&apos;s me!</h1>
            <p className="text-xl text-slate-600 w-full">
              This portfolio was made using Next.js and Tailwind. It&apos;s a simple, yet elegant, way to show off my
              work. I gave myself complete creative freedom to try anything or fall down any random rabit hole I wanted!
            </p>
            <div className="flex gap-2 w-full h-8">
              <div className="text-xl text-white bg-black px-4 rounded-md">Next.js</div>
              <div className="text-xl text-white bg-sky-500 px-4 rounded-md">Tailwind</div>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            router.push('/projects/edi-translator');
          }}
          className="xl:flex mt-6 bg-white rounded-2xl border-black border-4 border-r-[12px] border-b-[12px] text-ellipsis cursor-pointer w-full hover:-translate-y-2 transition-all active:border-r-8 active:border-b-8 active:-translate-y-1 active:translate-x-1"
        >
          <Image
            className="rounded-xl border-slate-400 border-2 m-3"
            src="images/pen.png"
            width={300}
            height={300}
            alt="Screenshot of My portfolio application home page"
          />
          <div className="my-4 mx-4 w-full max-w-2xl overflow-hidden">
            <h1 className="text-2xl font-bold truncate">Edi Translation • Tool for EDI files</h1>
            <p className="text-xl text-slate-600 w-full">
              EDI Translator is a tool that aims to simplify working with X12 standard EDI files. This project was
              created with the intent to make it easy and intuitive to create and modify these files.
            </p>
            <div className="flex gap-2 w-full h-8">
              <div className="text-xl text-white bg-cyan-600 px-4 rounded-md">React</div>
              <div className="text-xl text-white bg-blue-700 px-4 rounded-md">Material UI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
