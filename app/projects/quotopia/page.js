import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="w-3/5 mt-8">
        <h1 className="text-6xl font-signika font-bold">Quotopia</h1>
        <Link
          href="https://quotopia-rosy.vercel.app/"
          className="text-xl text-slate-400 visited:text-purple-600 underline"
        >
          quotopia-rosy.vercel.app
        </Link>
        <p className="text-lg mt-4 text-slate-500 italic">
          Quotopia is a web app that allows users to create and share quotes.
        </p>
        {/* GOALS */}
        <h2 className="text-4xl font-signika font-bold mt-6">Goals</h2>
        <ul className="list-disc list-outside text-xl ml-6">
          <li>Create a simple social media platform for users to create and share quotes.</li>
          <li>Provide an intuitive and enjoyable UI/UX experince on all devices and platforms.</li>
          <li>
            Allow users to view quotes from other users and quickly search for specific quotes, authors, and users.
          </li>
          <li>Give users the ability to create an account and save their favorite quotes.</li>
        </ul>
        {/* TECH STACK */}
        <h2 className="text-4xl font-signika font-bold mt-6">Tools & Tech</h2>
        <ul className="list-disc list-outside text-xl ml-6 columns-2 w-1/2">
          <li>Next.js 13</li>
          <li>Tailwind</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
        </ul>
        {/* CHALLENGES */}
        <h2 className="text-4xl font-signika font-bold mt-6">Challenges</h2>
        <ul className="list-disc list-outside text-xl ml-6">
          <li>
            Fixing bugs in page layouts was very frustrating at times. It was often difficult to track down what
            component was casing the issue and figure out what was wrong with it. However, I learned a lot about the
            ineer workings of CSS and got a better understanding of flex box layout systems.{' '}
          </li>
          <li>
            After introducing a bug into my Schemas on MongoDB I struggled to retroactively change my schema structure
            without redoing all the data that had been entered already. Fortunately, I learned a lot more about database
            management from this little mistake and feel much more confident in managing database structures.
          </li>
        </ul>
      </div>
    </div>
  );
}
