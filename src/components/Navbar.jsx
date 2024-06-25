import Link from "next/link";

export default function Navbar() {
  return (
    <header className="max-w-7xl m-auto">
      <nav className="flex justify-between items-center box-border p-4 m-4 rounded-2xl border-black border-4 bg-slate-50 text-black sticky top-4">
        <h1 className="text-2xl font-bold">@Harlow</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="font-bold text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="font-bold text-lg">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="font-bold text-lg">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
