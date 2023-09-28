export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="w-3/5">
        <h1 className="font-signika font-bold text-6xl text-center">Goals for 2023</h1>
        <div className="flex bg-green-100 rounded-xl p-4 justify-between items-center border-2 border-green-500 my-3">
          <div>
            <h2 className="text-4xl font-bold">Triathlon</h2>
            <p className="text-lg">Complete a sprint triathalon in under 2 hours</p>
          </div>
          <h2 className="text-5xl font-bold text-green-500">Completed</h2>
        </div>
        <div className="flex bg-gray-200 rounded-xl p-4 justify-between items-center my-3">
          <div>
            <h2 className="text-4xl font-bold">Marathon</h2>
            <p className="text-lg">complete a full 26.2 mile marathon</p>
          </div>
          <h2 className="text-5xl font-bold">In Progress</h2>
        </div>
        <div className="flex bg-gray-200 rounded-xl p-4 justify-between items-center my-3">
          <div>
            <h2 className="text-4xl font-bold">Read 12 books</h2>
            <p className="text-xl">Reading list:</p>
            <ul className="text-lg columns-2 w-[80%]">
              <li>Talk like Ted</li>
              <li>The Speed of Trust</li>
              <li>The Daily Stoic</li>
              <li>To Sell is Human</li>
              <li>Meditations</li>
              <li>The Four Elements</li>
              <li>The Untethered Soul</li>
              <li>The 7 Habits of Highly Effective People</li>
              <li>The 4-Hour Workweek</li>
              <li>Ego is The Enemy</li>
              <li>A Field Guide to a Happy Life</li>
              <li>The Stranger</li>
            </ul>
          </div>
          <h2 className="text-5xl font-bold">In Progress</h2>
        </div>
        <div className="flex bg-green-100 rounded-xl p-4 justify-between items-center border-2 border-green-500 my-3">
          <div>
            <h2 className="text-4xl font-bold">Go Skydiving</h2>
            <p className="text-lg">Go skydiving from a height over 14,000ft</p>
          </div>
          <h2 className="text-5xl font-bold text-green-500">Completed</h2>
        </div>
      </div>
    </div>
  );
}
