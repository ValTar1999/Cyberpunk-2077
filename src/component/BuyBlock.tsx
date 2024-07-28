import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import foto1 from '../img/Untitled-1 1.svg';
import icon1 from '../img/disk.svg';
import icon2 from '../img/Group.svg';
import icon3 from '../img/collections.svg';
import icon4 from '../img/PC.svg';
import icon5 from '../img/xbox-one-3 logo.svg';
import icon6 from '../img/stadia logo.svg';
import icon7 from '../img/Playstation logo.svg';

interface InfoSponsorBlock {
  title?: string
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

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const SponsorBlock: React.FC<InfoSponsorBlock> = ({ title }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useIntersectionObserver(ref);

  return (
    <div className="bg-black flex flex-col lg:grid lg:grid-cols-3 xl:grid-cols-2" ref={ref}>
      <motion.img
        className="size-full object-cover"
        src={foto1}
        alt=""
        initial="hidden"
        animate={controls}
        variants={imageVariants}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="px-4 py-12 col-span-2 xl:col-auto lg:px-6 max-w-xl"
        initial="hidden"
        animate={controls}
        variants={textVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-white text-3xl leading-8 pb-6 lg:text-5xl font-medium font-arch">
          {title}
        </h1>
        <p className="text-xl font-bold text-[#52BEDC]">
          В комплект входит:
        </p>
        <ul className="grid gap-3 py-5">
          <motion.li
            className="flex items-start gap-5"
            initial="hidden"
            animate={controls}
            variants={textVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img src={icon1} alt="" />
            <div className="text-base text-white">
              Футляр с игровыми дисками
            </div>
          </motion.li>
          <motion.li
            className="flex items-start gap-5"
            initial="hidden"
            animate={controls}
            variants={textVariants}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <img src={icon2} alt="" />
            <div className="text-base text-white">
              Футляр с кодом для загрузки игры и дисками (pc)
            </div>
          </motion.li>
          <motion.li
            className="flex items-start gap-5"
            initial="hidden"
            animate={controls}
            variants={textVariants}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <img src={icon3} alt="" />
            <div className="text-base text-white">
              Справочник с информацией об игровом мире
            </div>
          </motion.li>
        </ul>
        <p className="text-xl font-bold text-[#52BEDC]">
          Выберите платформу:
        </p>
        <div className="grid grid-cols-2 gap-4 pt-8 max-w-80">
          <motion.img
            className="w-full h-8 object-contain"
            src={icon4}
            alt=""
            initial="hidden"
            animate={controls}
            variants={imageVariants}
            transition={{ duration: 0.5, delay: 1 }}
          />
          <motion.img
            className="w-full h-8 object-contain"
            src={icon5}
            alt=""
            initial="hidden"
            animate={controls}
            variants={imageVariants}
            transition={{ duration: 0.5, delay: 1.2 }}
          />
          <motion.img
            className="w-full h-8 object-contain"
            src={icon6}
            alt=""
            initial="hidden"
            animate={controls}
            variants={imageVariants}
            transition={{ duration: 0.5, delay: 1.4 }}
          />
          <motion.img
            className="w-full h-8 object-contain"
            src={icon7}
            alt=""
            initial="hidden"
            animate={controls}
            variants={imageVariants}
            transition={{ duration: 0.5, delay: 1.6 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SponsorBlock;
