import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import Button from '../component/Button';

import foto1 from '../img/Group 215.svg';
import foto3 from '../img/Group 238.svg';
import foto4 from '../img/Group 239.svg';

interface FormBlockProps {
  headerText: string;
  descriptionText: React.ReactNode;
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

const FormBlock: React.FC<FormBlockProps> = ({ headerText, descriptionText }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useIntersectionObserver(ref);

  return (
    <div className="bg-black">
      <div className="container px-4 relative mx-auto 2xl:max-w-7xl grid lg:grid-cols-2 lg:gap-10 xl:grid-cols-1" ref={ref}>
        <div className="">
          <motion.img
            className="size-16 lg:size-32"
            src={foto1}
            alt=""
            initial="hidden"
            animate={controls}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
          />
          <div className="grid grid-cols-2 lg:hidden">
            <motion.img
              className="size-full object-cover"
              src={foto4}
              alt=""
              initial="hidden"
              animate={controls}
              variants={imageVariants}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.img
              className="size-full object-cover"
              src={foto3}
              alt=""
              initial="hidden"
              animate={controls}
              variants={imageVariants}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
          </div>
          <div className="">
            <motion.h1
              className="text-white text-3xl leading-8 py-6 lg:text-5xl font-medium font-arch"
              initial="hidden"
              animate={controls}
              variants={textVariants}
              transition={{ duration: 0.5 }}
            >
              {headerText}
            </motion.h1>
            <motion.p
              className="text-white text-lg leading-8 max-w-5xl"
              initial="hidden"
              animate={controls}
              variants={textVariants}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {descriptionText}
            </motion.p>
            <div className="flex xl:flex-row xl:gap-10">
              <motion.form
                action=""
                className="py-16 space-y-9 xl:max-w-[480px] w-full"
                initial="hidden"
                animate={controls}
                variants={textVariants}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <input className="text-lg w-full bg-transparent p-2 border-b border-gray-500 text-white focus:ring-[#F8F200] focus:ring-2 focus:border-transparent" type="text" placeholder="Как тебя зовут?" />
                <input className="text-lg w-full bg-transparent p-2 border-b border-gray-500 text-white focus:ring-[#F8F200] focus:ring-2 focus:border-transparent" type="text" placeholder="Твой е-mail" />
                <div className="relative border-dashed border-2 border-gray-500 flex items-center justify-center group hover:border-white transition-all duration-300">
                  <label className="text-gray-400 text-lg p-12 underline size-full text-center group-hover:text-white transition-all duration-300 cursor-pointer relative">Прикрепить скриншот</label>
                  <input className="size-full absolute opacity-0" type="file" />
                </div>
                <div className="">
                  <Button label="Отправить" />
                  <div className="flex items-center gap-2 pt-5">
                    <input className="h-4 w-4 rounded border-gray-300 text-[#F8F200] focus:ring-[#F8F200]" type="checkbox" />
                    <span className="text-xs leading-3 text-gray-200">
                      Согласен на обработку персональных данных
                    </span>
                  </div>
                </div>
              </motion.form>
              <div className="xl:grid-cols-2 hidden xl:grid">
                <motion.img
                  className="size-full object-cover xl:object-contain"
                  src={foto4}
                  alt=""
                  initial="hidden"
                  animate={controls}
                  variants={imageVariants}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
                <motion.img
                  className="size-full object-cover xl:object-contain"
                  src={foto3}
                  alt=""
                  initial="hidden"
                  animate={controls}
                  variants={imageVariants}
                  transition={{ duration: 0.5, delay: 0.4 }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid xl:grid-cols-2 xl:hidden">
          <motion.img
            className="size-full object-cover"
            src={foto4}
            alt=""
            initial="hidden"
            animate={controls}
            variants={imageVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.img
            className="size-full object-cover"
            src={foto3}
            alt=""
            initial="hidden"
            animate={controls}
            variants={imageVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </div>
      </div>
    </div>
  );
};

export default FormBlock;
