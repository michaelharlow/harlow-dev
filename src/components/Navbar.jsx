import Link from "next/link";

export default function Navbar() {
  return (
    <header className="max-w-7xl m-auto">
      <nav className="flex justify-between items-center box-border p-4 m-4 rounded-2xl bg-gray-800 text-white sticky top-4">
        <h1 className="text-2xl font-bold">@Harlow</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
