import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between h-[10vh] z-50 bg-slate-100">
      <h1 className="font-signika text-3xl mx-6">Harlow.dev</h1>
      <div className="mx-6">
        <Link href="#about" className="mx-6 text-xl font-mono font-thin hover:underline">
          About
        </Link>
        <a href="projects" className="mx-6 text-xl font-mono font-thin hover:underline">
          Projects
        </a>
        <a href="contact" className="mx-6 text-xl font-mono font-thin hover:underline">
          Contact
        </a>
      </div>
    </header>
  );
}
