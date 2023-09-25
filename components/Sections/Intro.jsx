'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Intro() {
  const [showResetButton, setShowResetButton] = useState(false);

  return (
    <div className="flex h-[90vh] justify-center items-center flex-col">
      <div>
        <p className="text-8xl font-signika">Hello, my name</p>
        <p className="text-8xl font-signika mb-6">
          {'is '}
          {'Michael'.split('').map((letter, index) => (
            <span
              key={index}
              className={
                'letter text-[#7b87ff] transition-color duration-500 hover:duration-100 inline-block font-bold transform scale-100 hover:scale-110'
              }
              onMouseOver={(e) => {
                // e.target.style.transform = `translate(${Math.random() * 150 - 75}px, ${Math.random() * 150 - 75}px)`;
                e.target.style.color = `hsl(${Math.random() * 360}, 100%, 74%)`;
                document.querySelector('#exit-button').style.maxHeight = '30px';
                setShowResetButton(true);
              }}
            >
              {letter}
            </span>
          ))}
          {' Harlow.'}
        </p>
        <button
          id="exit-button"
          className="flex text-red-500 hover:translate-y-[-2px] active:scale-90 active:text-red-600 overflow-hidden transition-all duration-300 ease-in-out font-mono font-bold text-xl max-h-0 ml-52 "
          onClick={() => {
            document.querySelectorAll('.letter').forEach((span) => {
              //span.style.transform = `scale(1)`;
              span.style.color = `rgb(123,135,255)`;
            });
            document.querySelector('#exit-button').style.maxHeight = '0px';
            //setShowResetButton(false);
          }}
        >
          ^ Reset ^
        </button>
        <p className="text-slate-600 text-xl max-w-2xl font-mono font-extrabold mt-3">
          I am a software engineer who is relentlessly curious and hardworking, driven by a passion for innovation and a
          commitment to being a lifelong learner.
        </p>
      </div>
    </div>
  );
}
