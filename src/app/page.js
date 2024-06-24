import HeroName from "@/components/HeroName";
import Shapes from "@/components/Shapes";

export default function Home() {
  return (
    <>
      <div className="m-auto max-w-7xl">
        <main className="flex flex-col-reverse lg:flex-row lg:justify-center justify-end items-center h-[80vh] w-full">
          <HeroName />
          <Shapes />
        </main>
      </div>
    </>
  );
}
