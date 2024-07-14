import Link from "next/link";

export default function Page() {
  return (
    <main className="m-auto max-w-3xl sm:px-0 px-6">
      <h1 className="sm:text-5xl text-2xl sm:leading-snug font-semibold my-12 text-left">
        /Projects
      </h1>
      <ul className="space-y-3">
        <li className="hover:underline hover:bg-amber-100 p-4 pl-1">
          <Link
            href="https://trandrew1023.github.io/edi-translator/"
            prefetch={false}
          >
            <h2 className="text-xl font-bold">EDI Translator</h2>
            <p>X12 EDI file translator web app</p>
          </Link>
        </li>
      </ul>
    </main>
  );
}
