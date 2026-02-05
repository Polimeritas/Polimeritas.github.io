"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const pathname = usePathname();

    const toggleDropdown = (menuName: string) => {
        if (activeDropdown === menuName) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(menuName);
        }
    };

    const isGamesActive = siteConfig.gameLinks.some(game => pathname === game.href);

    return (
        <nav className="w-full bg-white relative">
            <div className="flex items-center justify-between px-4 py-3 lg:py-0 lg:px-8">

                {/* MOBILE ONLY */}
                <Link href="/" className="block lg:hidden">
                    <Image
                        src="/img/logo.png"
                        alt={siteConfig.name}
                        width={150}
                        height={40}
                        priority
                        className="h-10 w-auto"
                        sizes="(max-width: 1024px) 150px, 0px"
                    />
                </Link>
                <button
                    className="lg:hidden text-dark border border-gray-300 px-3 py-1 rounded focus:outline-none hover:bg-gray-100 transition"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
                </button>

                {/* MENU CONTAINER */}
                <div className={cn(
                    "absolute top-full left-0 w-full bg-white shadow-xl z-50 border-t border-gray-100",
                    "lg:static lg:flex lg:items-center lg:justify-between lg:w-auto lg:shadow-none lg:border-none lg:flex-1",
                    isOpen ? 'block' : 'hidden'
                )}>

                    <div className="flex flex-col lg:flex-row lg:items-center w-full lg:w-auto">
                        {siteConfig.navItems.map((link) => {
                            const isActive = pathname === link.href;

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "font-bold px-6 lg:px-4 py-3 lg:py-6 text-sm uppercase tracking-wide block transition-colors border-b lg:border-none border-gray-50",
                                        "hover:bg-light lg:hover:bg-transparent hover:text-secondary",
                                        isActive ? 'text-secondary' : 'text-dark'
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}

                        {/* Dropdown Games */}
                        <div className="group relative">
                            <button
                                onClick={() => toggleDropdown('games')}
                                className={cn(
                                    "w-full font-bold px-6 lg:px-4 py-3 lg:py-6 text-sm uppercase tracking-wide flex items-center justify-between lg:justify-start transition-colors border-b lg:border-none border-gray-50 cursor-pointer",
                                    "hover:bg-light lg:hover:bg-transparent hover:text-secondary",
                                    isGamesActive ? 'text-secondary' : 'text-dark'
                                )}
                            >
                                <span>Games</span>
                                <FontAwesomeIcon
                                    icon={faChevronDown}
                                    className={cn(
                                        "text-xs ml-1 transition-transform duration-300",
                                        activeDropdown === 'games' && 'rotate-180',
                                        "lg:group-hover:rotate-180"
                                    )}
                                />
                            </button>

                            {/* DROPDOWN CONTENT */}
                            <div className={cn(
                                "lg:hidden lg:group-hover:block lg:absolute top-full left-0 bg-white lg:shadow-lg py-2 min-w-[200px] z-50 lg:rounded-b-lg border-t-2 border-primary w-full lg:w-auto pl-4 lg:pl-0 bg-gray-50 lg:bg-white",
                                activeDropdown === 'games' ? 'block' : 'hidden'
                            )}>
                                {siteConfig.gameLinks.map((game) => (
                                    <Link
                                        key={game.name}
                                        href={game.href}
                                        className={cn(
                                            "block px-4 py-2 text-sm hover:bg-light hover:text-primary transition-colors",
                                            pathname === game.href ? 'text-primary font-bold' : 'text-gray-600'
                                        )}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {game.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Join Volunteer Button */}
                    <div className="p-4 lg:p-0 lg:ml-auto">
                        <a
                            href={siteConfig.links.volunteer}
                            target="_blank"
                            className="block w-full lg:w-auto text-center bg-primary text-dark font-semibold px-4 py-2 rounded-[25px] hover:bg-primary/45 transition-colors duration-300 lg:mr-3 shadow-sm"
                        >
                            Join Volunteer
                        </a>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;