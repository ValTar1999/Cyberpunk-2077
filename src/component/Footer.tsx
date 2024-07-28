import React from 'react';

import foto1 from '../img/Cyberpunk_2077_logo 1.svg'
import foto2 from '../img/CD_Projekt_logo 1.svg'


const Footer: React.FC = () => {

  return (
    <footer className="">
      <div className="container mx-auto 2xl:max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:px-4">
          <div className="py-8 xl:py-2 flex flex-col items-center lg:flex-row lg:gap-5">
            <img className="w-full h-12 lg:h-auto object-contain" src={foto1} alt="" />
            <img className="w-full h-12 lg:h-auto object-contain" src={foto2} alt="" />
          </div>
          <div className="bg-zinc-300 flex flex-col lg:flex-row items-center gap-3 py-5 lg:bg-transparent lg:gap-5 w-full lg:w-auto">
            <a href="#" className="text-base lg:text-lg text-black font-medium hover:opacity-60 transition-all duration-500">Лицензия</a>
            <a href="#" className="text-base lg:text-lg text-black font-medium hover:opacity-60 transition-all duration-500">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
      <span className="text-xs text-white bg-black py-3 flex justify-center">CD PROJEKT®, Cyberpunk®, Cyberpunk 2077®</span>
    </footer>
  );
};

export default Footer;
