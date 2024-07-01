import HeroItems from "@/components/HeroItems";
import HeroName from "@/components/HeroName";
import Shapes from "@/components/Shapes";

export default function Home() {
  return (
    <>
      <div className="m-auto max-w-7xl">
        <main className="flex flex-col justify-center items-center h-[80vh] w-full">
          <HeroName />
          <HeroItems />
        </main>
      </div>
    </>
  );
}
