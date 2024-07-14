import HeroName from "@/components/HeroName";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="m-auto max-w-7xl">
        <main className="flex flex-col justify-center items-center h-[80vh] w-full">
          <HeroName />
          <div className="flex flex-row gap-x-12 mt-3">
            <a
              className="hover:underline group flex flex-row gap-x-1 items-center"
              href="https://github.com/michaelharlow"
            >
              Github
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              className="hover:underline group flex flex-row gap-x-1 items-center"
              href="https://www.linkedin.com/in/michaelaharlow/"
            >
              linkedin
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
