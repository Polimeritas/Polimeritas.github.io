"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faPhoneAlt,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookF,
    faLinkedinIn,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="w-full bg-[#0b0e1d] text-white pt-16 mt-0 relative z-10">

            <div className="w-full max-w-[95%] lg:max-w-[1400px] mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-32 mb-12">

                    <div>
                        <h1 className="text-primary font-bold text-4xl mb-6">Polimeritas</h1>

                        <p className="text-gray-300 text-justify leading-relaxed mb-8 pr-0 lg:pr-10">
                            Komunitas yang bergerak di bidang polymer sains dan teknologi dari hulu hingga produk jadi. Polimeritas bekerjasama memajukan masyarakat yang ahli, produktif, dan inovatif menyongsong Indonesia yang lebih baik di bidang polimer.
                        </p>

                        <div className="flex space-x-3">
                            <a
                                href="https://www.facebook.com/polimeritas.official/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white text-dark rounded-full flex items-center justify-center hover:bg-primary hover:text-dark transition-all duration-300"
                            >
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/polimeritas2018/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white text-dark rounded-full flex items-center justify-center hover:bg-primary hover:text-dark transition-all duration-300"
                            >
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a
                                href="https://www.instagram.com/polimeritas.official/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white text-dark rounded-full flex items-center justify-center hover:bg-primary hover:text-dark transition-all duration-300"
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    </div>

                    <div className="lg:pl-10">
                        <h3 className="text-primary font-bold text-2xl mb-6">Get In Touch</h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary mt-1 mr-3 w-5" />
                                <span className="text-gray-300">Pangkalpinang, Bangka Belitung, Indonesia</span>
                            </div>
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faPhoneAlt} className="text-primary mr-3 w-5" />
                                <span className="text-gray-300">+6285214991705</span>
                            </div>
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faEnvelope} className="text-primary mr-3 w-5" />
                                <span className="text-gray-300">polimeritas.official@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* COPYRIGHT BAR */}
                <div className="border-t border-gray-700/50 py-6 text-center">
                    <p className="text-gray-400 text-sm">
                        &copy; <Link href="/" className="text-primary hover:text-white transition-colors font-medium">Polimeritas</Link>. All Rights Reserved. Designed by <span className="text-primary font-medium">Technology's team</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;