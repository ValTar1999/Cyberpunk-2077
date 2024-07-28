import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import foto1 from '../img/Rectangle 597.svg';
import foto2 from '../img/Rectangle 598.svg';
import foto3 from '../img/Rectangle 599.svg';

interface InfoBlockProps {
  title: string;
  description: string;
  gameName: string;
}

const useIntersectionObserver = (ref: React.RefObject<HTMLElement>, options: IntersectionObserverInit = { threshold: 0.1 }) => {
  const controls = useAnimation();

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      options
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [controls, ref, options]);

  return controls;
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0 },
};

const imageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const InfoBlock: React.FC<InfoBlockProps> = React.memo(({ title, description, gameName }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useIntersectionObserver(ref);

  return (
    <div className="bg-white pb-20 pt-28 lg:py-20 container mx-auto 2xl:max-w-7xl px-4" ref={ref}>
      <div className="max-w-4xl">
        <motion.h1
          className="text-3xl text-black font-medium lg:text-5xl font-arch"
          initial="hidden"
          animate={controls}
          variants={textVariants}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        <motion.div
          className="text-lg text-zinc-500 py-10 leading-8"
          initial="hidden"
          animate={controls}
          variants={textVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-sky-500 font-bold">{gameName}</span> — {description}
        </motion.div>
      </div>
      <div className="grid gap-4 lg:gap-6 xl:grid-cols-3">
        <div className="grid gap-4 lg:gap-6 xl:grid-cols-1">
          <motion.img
            className="w-full h-full foto object-cover"
            src={foto1}
            alt=""
            initial="hidden"
            animate={controls}
            variants={imageVariants}
            transition={{ duration: 1, delay: 0.4 }}
          />
          <motion.img
            className="w-full h-full foto object-cover"
            src={foto2}
            alt=""
            initial="hidden"
            animate={controls}
            variants={imageVariants}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </div>
        <motion.img
          className="w-full h-full foto object-cover xl:col-span-2"
          src={foto3}
          alt=""
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          transition={{ duration: 1, delay: 0.8 }}
        />
      </div>
    </div>
  );
});

export default InfoBlock;
