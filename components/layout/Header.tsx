import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Topbar from './Topbar';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="w-full shadow-sm">
      <div className="flex flex-col lg:flex-row">
        
        <div className="hidden lg:flex w-full lg:w-1/4 bg-dark items-center justify-center p-4">
           <Link href="/" className="relative w-[250px] h-[80px]">
             <Image 
                src="/img/logo.png" 
                alt="Polimeritas Logo" 
                fill
                className="object-contain"
                priority
             />
           </Link>
        </div>

        <div className="w-full lg:w-3/4 flex flex-col">
           
           <div className="bg-dark hidden lg:block">
              <Topbar />
           </div>

           <div className="bg-white">
              <Navbar />
           </div>
        </div>
      </div>
    </header>
  );
};

export default Header;