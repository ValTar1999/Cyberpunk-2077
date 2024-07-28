import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import foto1 from '../img/c06611743 1.svg';
import foto2 from '../img/Group 223.svg';
import icon1 from '../img/color_lens.svg';
import icon2 from '../img/auto_awesome.svg';
import icon3 from '../img/auto_awesome_motion.svg';
import Button from '../component/Button';

interface InfoSponsorBlock {
  title?: string;
  description?: string;
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

const SponsorBlock: React.FC<InfoSponsorBlock> = ({ title, description }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useIntersectionObserver(ref);

  return (
    <div className="bg-[#F8F200]" ref={ref}>
      <div className="py-14 container mx-auto 2xl:max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="grid gap-5">
            <motion.img
              className="size-full object-cover"
              src={foto1}
              alt=""
              initial="hidden"
              animate={controls}
              variants={imageVariants}
              transition={{ duration: 0.5 }}
            />
            <motion.img
              className="size-full object-cover lg:object-contain"
              src={foto2}
              alt=""
              initial="hidden"
              animate={controls}
              variants={imageVariants}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>
          <div className="grid gap-10 xl:gap-5">
            <motion.div
              className="text-black"
              initial="hidden"
              animate={controls}
              variants={textVariants}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h1 className="text-3xl lg:text-5xl font-medium font-arch">
                {title}
              </h1>
              <p className="text-base leading-8 py-4">
                {description}
              </p>
              <ul className="grid gap-5">
                <li className="flex items-start gap-4">
                  <img className="w-6 h-6" src={icon1} alt="" />
                  <span className="text-base">Яркие насыщенные цвета</span>
                </li>
                <li className="flex items-start gap-4">
                  <img className="w-6 h-6" src={icon2} alt="" />
                  <span className="text-base">Кристальная четкость изображения</span>
                </li>
                <li className="flex items-start gap-4">
                  <img className="w-6 h-6" src={icon3} alt="" />
                  <span className="text-base">Быстрые движения и плавный геймплей</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="inline-block"
              initial="hidden"
              animate={controls}
              variants={textVariants}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button label="Подробнее" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorBlock;
