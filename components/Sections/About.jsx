import Image from 'next/image';

export default function About() {
  return (
    <div id="about" className="h-[100vh] w-full overflow-hidden">
      <Image className="absolute left-0 -z-10" src="thin-waves.svg" width={130} height={500} alt="" />
      <div className="ml-[260px] mt-9">
        <h1 className="text-6xl underline">About Me</h1>
        <p className="text-slate-600 text-xl max-w-4xl font-mono font-extrabold mt-3">
          I love everything about coding. I love solving problems, the satisfaction of seeing my ideas come to life, and
          the creative solutions I get to develop. Outside of computing, I enjoy running 🏃‍♂️, linguistics 🗣️, and nature
          🌳. I also have a weird obsession with doing handstands, which I think needs to be made public knowledge.
        </p>
        <p className="text-slate-600 text-xl max-w-4xl font-mono font-extrabold mt-3">
          I am currently a student at the University of Central Missouri studying Computer Science, and looking to study
          abroad soon! If I could tell everyone that met me one thing it would be that &quot;The greatest gift in life
          is a happy smile&quot;. :)
        </p>
        <h1 className="text-6xl underline mt-8">Tech Skills</h1>
        <ul className="columns-2 text-slate-600 text-2xl max-w-4xl font-mono font-extrabold mt-3">
          <li className="mt-3">JavaScript</li>
          <li className="mt-3">React</li>
          <li className="mt-3">Next.js</li>
          <li className="mt-3">Node.js</li>
          <li className="mt-3">Express</li>
          <li className="mt-3">MongoDB</li>
          <li className="mt-3">Python</li>
          <li className="mt-3">Java</li>
          <li className="mt-3">C++</li>
          <li className="mt-3">OpenGL</li>
          <li className="mt-3">Tailwind</li>
          <li className="mt-3">HTML/CSS</li>
        </ul>
      </div>
    </div>
  );
}
