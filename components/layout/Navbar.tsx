"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const toggleDropdown = (menuName: string) => {
        if (activeDropdown === menuName) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(menuName);
        }
    };

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Education", href: "/education" },
        { name: "Project", href: "/project" },
        { name: "Partner Room", href: "/partner-room" },
    ];

    return (
        <nav className="w-full bg-white relative">
            <div className="flex items-center justify-between px-4 py-3 lg:py-0 lg:px-8">

                {/* MOBILE ONLY */}
                <Link href="/" className="block lg:hidden">
                    <h1 className="text-2xl font-bold text-primary">Polimeritas</h1>
                </Link>
                <button
                    className="lg:hidden text-dark border border-gray-300 px-3 py-1 rounded focus:outline-none hover:bg-gray-100 transition"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
                </button>

                {/* MENU CONTAINER */}
                <div className={`
                    ${isOpen ? 'block' : 'hidden'} 
                    absolute top-full left-0 w-full bg-white shadow-xl z-50 border-t border-gray-100
                    lg:static lg:flex lg:items-center lg:justify-between lg:w-auto lg:shadow-none lg:border-none lg:flex-1
                `}>

                    {/* Menu Links */}
                    <div className="flex flex-col lg:flex-row lg:items-center w-full lg:w-auto">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-dark font-bold px-6 lg:px-4 py-3 lg:py-6 hover:bg-light lg:hover:bg-transparent hover:text-secondary transition-colors text-sm uppercase tracking-wide block border-b lg:border-none border-gray-50"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Dropdown Games */}
                        <div className="group relative">
                            <button
                                onClick={() => toggleDropdown('games')}
                                className="w-full text-dark font-bold px-6 lg:px-4 py-3 lg:py-6 hover:bg-light lg:hover:bg-transparent hover:text-secondary transition-colors text-sm uppercase tracking-wide flex items-center justify-between lg:justify-start border-b lg:border-none border-gray-50 cursor-pointer"
                            >
                                <span>Games</span>
                                <FontAwesomeIcon
                                    icon={faChevronDown}
                                    className={`text-xs ml-1 transition-transform duration-300 ${activeDropdown === 'games' ? 'rotate-180' : ''} lg:group-hover:rotate-180`}
                                />
                            </button>

                            {/* DROPDOWN CONTENT */}
                            <div className={`
                                ${activeDropdown === 'games' ? 'block' : 'hidden'} 
                                lg:hidden lg:group-hover:block lg:absolute 
                                top-full left-0 bg-white lg:shadow-lg py-2 min-w-[200px] z-50 lg:rounded-b-lg border-t-2 border-primary 
                                w-full lg:w-auto pl-4 lg:pl-0 bg-gray-50 lg:bg-white
                            `}>
                                <Link href="/game" className="block px-4 py-2 text-sm text-gray-600 hover:bg-light hover:text-primary">Sorting Challenge</Link>
                                <Link href="/quiz-game" className="block px-4 py-2 text-sm text-gray-600 hover:bg-light hover:text-primary">Quiz Challenge</Link>
                                <Link href="/typing-game" className="block px-4 py-2 text-sm text-gray-600 hover:bg-light hover:text-primary">Typing Challenge</Link>
                            </div>
                        </div>
                    </div>

                    {/* Join Volunteer Button */}
                    <div className="p-4 lg:p-0 lg:ml-auto">
                        <a
                            href="https://bit.ly/opvolunteerpolimeritas2"
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