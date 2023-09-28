import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="w-3/5 mt-8">
        <h1 className="text-6xl font-signika font-bold">My Portfolio</h1>
        <Link href="/" className="text-xl text-slate-400 visited:text-purple-600 underline">
          You are already here!
        </Link>
        <p className="text-lg mt-4 text-slate-500 italic">
          My portfolio was made is a simple, yet elegant, way to show off my work. I gave myself complete creative
          freedom to try anything I wanted!
        </p>
        {/* GOALS */}
        <h2 className="text-4xl font-signika font-bold mt-6">Goals</h2>
        <ul className="list-disc list-outside text-xl ml-6">
          <li>Create a website that shows off who I am and show off some of my work as a developer.</li>
          <li>Mess around and build some random or new things while developing the site.</li>
          <li>Serve as the starting point for building my brand both professionally and personally.</li>
        </ul>
        {/* TECH STACK */}
        <h2 className="text-4xl font-signika font-bold mt-6">Tools & Tech</h2>
        <ul className="list-disc list-outside text-xl ml-6 columns-2 w-1/2">
          <li>Next.js 13</li>
          <li>Tailwind</li>
        </ul>
        {/* CHALLENGES */}
        <h2 className="text-4xl font-signika font-bold mt-6">Challenges</h2>
        <ul className="list-disc list-outside text-xl ml-6">
          <li>
            I struggled with how to ensure the website was responsive on all devices with the giant pictue of me in the
            background. I really liked the eyes following you cursor around the screen, but it was a bit of a challenge
            to get it to work properly across devices.
          </li>
          <li>
            I had a lot of fun with the design of the site. However, I found it challenging to maintain clean code with
            the numerous tailwind classes some elements had. I learned a lot about how to structure a project with
            tailwind and how to use it most effectively.
          </li>
        </ul>
      </div>
    </div>
  );
}
