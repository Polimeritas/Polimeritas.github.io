import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Topbar from './Topbar';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="w-full shadow-sm flex flex-col relative z-50">

      <div className="w-full bg-secondary hidden lg:block">
        <Topbar />
      </div>

      <div className="w-full bg-white px-4 lg:px-8">
        <div className="flex items-center justify-between">

          <div className="hidden lg:flex items-center w-[200px] h-[80px]">
            <Link href="/" className="relative w-full h-[100px]">
              <Image
                src="/img/logo.png"
                alt="Polimeritas Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </Link>
          </div>

          <div className="w-full lg:flex-1 lg:pl-8">
            <Navbar />
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;