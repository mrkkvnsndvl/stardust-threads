import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

import { heroOnes } from '@/_lib/hero-one-lib';
import { heroTwos } from '@/_lib/hero-two-lib';

type HeroParallaxProps = {
  baseVelocity: number;
  isRowOne: boolean;
};

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export default function HeroParallax({
  baseVelocity,
  isRowOne,
}: HeroParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 600,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(-56, -220, v)}%`);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <>
      {isRowOne ? (
        <motion.div
          className='flex items-end gap-4 aspect-auto max-w-[2732px]'
          style={{ x }}>
          {heroOnes.map(({ id, src, alt }) => (
            <Image
              className='w-3/5 h-3/5'
              width={400}
              height={400}
              key={id}
              src={src}
              alt={alt}
            />
          ))}
        </motion.div>
      ) : (
        <motion.div className='flex items-end gap-4 aspect-auto' style={{ x }}>
          {heroTwos.map(({ id, src, alt }) => (
            <Image
              className='w-3/5 h-3/5'
              width={400}
              height={400}
              key={id}
              src={src}
              alt={alt}
            />
          ))}
        </motion.div>
      )}
    </>
  );
}
