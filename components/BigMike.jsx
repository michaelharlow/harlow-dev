'use client';

import Image from 'next/image';
import { useEffect } from 'react';

export default function BigMike() {
  const calcAngle = (x, y, dx, dy) => {
    const dy2 = dy - y;
    const dx2 = dx - x;
    const theta = Math.atan2(dy2, dx2);
    return theta;
  };

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      const eye = document.getElementById('eyes-anchor');
      const eyes = document.querySelectorAll('.eye');

      if (!eye) return;

      const rekt = eye.getBoundingClientRect();
      const centerX = rekt.left + rekt.width / 2;
      const centerY = rekt.top + rekt.height / 2 - 200;
      eyes.forEach((eye) => {
        const angle = calcAngle(e.clientX, e.clientY, centerX, centerY) * (180 / Math.PI);
        eye.style.transform = `rotate(${angle + 180}deg)`;
      });
    });

    return () => {
      document.removeEventListener('mousemove', () => {});
    };
  }, []);

  return (
    <div className="w-[650px] h-full flex-none hidden md:block">
      <Image className="fixed right-0 bottom-0" src="blob-two.svg" width={700} height={500} alt="" />
      <Image className="fixed right-0 bottom-0" src="blob-one.svg" width={700} height={500} alt="" />
      <Image
        className="eye z-10 self-center fixed bottom-[510px] right-[210px]"
        src="images/googly-eye.png"
        width={46}
        height={46}
        alt={''}
      />
      <Image
        className="eye z-10 self-center fixed bottom-[510px] right-[300px]"
        src="images/googly-eye.png"
        width={46}
        height={46}
        alt={''}
      />
      <Image
        id="eyes-anchor"
        className="z-[5] fixed bottom-0 right-0"
        src="images/binocular-michael.png"
        width={600}
        height={646}
        alt={''}
      />
    </div>
  );
}
