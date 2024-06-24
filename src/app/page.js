import HeroName from "@/components/HeroName";
import Shapes from "@/components/Shapes";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center py-4">
        <main className="flex flex-col-reverse lg:flex-row lg:justify-center justify-end items-center h-[80vh] sm:w-3/5 w-full">
          <HeroName />
          <Shapes />
        </main>
      </div>
    </>
  );
}
