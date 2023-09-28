import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="w-3/5 mt-8">
        <h1 className="text-6xl font-signika font-bold">Edi-Translator</h1>
        <Link
          href="https://trandrew1023.github.io/edi-translator/"
          className="text-xl text-slate-400 visited:text-purple-600 underline"
        >
          trandrew1023.github.io/edi-translator
        </Link>
        <p className="text-lg mt-4 text-slate-500 italic">
          EDI Translator is a tool that aims to simplify working with X12 standard EDI files.
        </p>
        {/* GOALS */}
        <h2 className="text-4xl font-signika font-bold mt-6">Goals</h2>
        <ul className="list-disc list-outside text-xl ml-6">
          <li>Create a simple and intuituve form design that simplifies the feilds in the EDI format.</li>
          <li>Allow for the data in an EDI form to be quickly and easily generated.</li>
          <li>Simple testing for other developers by providing a new resource for EDI files.</li>
        </ul>
        {/* TECH STACK */}
        <h2 className="text-4xl font-signika font-bold mt-6">Tools & Tech</h2>
        <ul className="list-disc list-outside text-xl ml-6 columns-2 w-1/2">
          <li>React</li>
          <li>Material UI</li>
          <li>Firebase</li>
          <li>OAuth 2.0</li>
        </ul>
        {/* CHALLENGES */}
        <h2 className="text-4xl font-signika font-bold mt-6">Challenges</h2>
        <ul className="list-disc list-outside text-xl ml-6">
          <li>
            This project was my first experience with OAuth 2.0 and Firebase. I had to learn a lot about how OAuth works
            and how to implement it into my project. I also had to learn how to use Firebase and how to store data in
            the cloud. I learned a lot about cloud computing and how to use it to my advantage.
          </li>
        </ul>
      </div>
    </div>
  );
}
