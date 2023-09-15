'use client';
import BigMike from 'components/BigMike';

export default function Home() {
  return (
    <div className="flex w-full items-start">
      <div className="bg-pink-400 w-full">
        <div className="flex h-[90vh] justify-center items-center flex-col">
          <div>
            <p className="text-8xl font-signika">Hello, my name</p>
            <p className="text-8xl font-signika">
              {'is '}
              {'Michael'.split('').map((letter, index) => (
                <span
                  key={index}
                  className={`letter text-[rgb(123,135,255)] transition-all duration-1000 inline-block`}
                  onMouseOver={(e) => {
                    e.target.style.transform = `translate(${Math.random() * 150 - 75}px, ${
                      Math.random() * 150 - 75
                    }px)`;
                    e.target.style.color = `hsl(${Math.random() * 360}, 100%, 74%)`;
                  }}
                >
                  {letter}
                </span>
              ))}
              {' Harlow.'}
            </p>
            <p>Developer</p>
            <button
              className="text-white bg-red-500 px-8 py-1 rounded-md hover:bg-red-400 hover:translate-y-[-2px] active:scale-95 active:bg-red-600 transition-all duration-150"
              onClick={() => {
                document.querySelectorAll('.letter').forEach((span) => {
                  span.style.transform = `translate(0px, 0px)`;
                  span.style.color = `rgb(123,135,255)`;
                });
              }}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="bg-violet-400 h-[100vh] w-full" />
      </div>
      <BigMike />
    </div>
  );
}
