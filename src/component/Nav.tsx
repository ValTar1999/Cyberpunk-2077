import React from 'react';
import logo from '../img/Cyberpunk_2077_logo 1.svg'

interface Link {
  url: string;
  imgSrc: string;
  alt: string;
}

interface HeaderProps {
  links: Link[];
}

const Nav: React.FC<HeaderProps> = ({ links }) => {
  return (
    <div className="container mx-auto 2xl:max-w-7xl -mb-28 z-50 relative">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 pt-5 w-full">
        <img src={logo} alt="Cyberpunk 2077 Logo" className="h-12 md:h-16 mb-2 md:mb-0" />
        <nav className="space-x-8 flex items-center">
          {links.map((link, index) => (
            <a
              key={index}
              target="_blank"
              href={link.url}
              className="hover:opacity-75 transition-opacity duration-200 size-7"
              rel="noopener noreferrer"
            >
              <img src={link.imgSrc} alt={link.alt} className="h-8" />
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};


export default Nav;
