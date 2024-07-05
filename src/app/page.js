import HeroItems from "@/components/HeroItems";
import HeroName from "@/components/HeroName";

export default function Home() {
  return (
    <>
      <div className="m-auto max-w-7xl">
        <main className="flex flex-col justify-center items-center h-[80vh] w-full">
          <HeroName />
          <p>
            <a
              className="hover:underline"
              href="https://github.com/michaelharlow"
            >
              Github
            </a>
            {" • "}
            <a
              className="hover:underline"
              href="https://www.linkedin.com/in/michaelaharlow/"
            >
              linkedin
            </a>
          </p>
        </main>
      </div>
    </>
  );
}
