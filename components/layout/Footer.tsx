import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faPhoneAlt,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { siteConfig } from "@/config/site";

const Footer = () => {
    return (
        <footer className="w-full bg-secondary text-white relative mt-0 z-10 overflow-hidden">

            <div className="absolute top-0 left-0 w-full leading-none z-0 pointer-events-none">
                <svg
                    viewBox="0 0 1440 100"
                    preserveAspectRatio="none"
                    className="w-full h-[40px] md:h-[80px] lg:h-[120px]"
                >
                    <path
                        fill="#ffffff"
                        d="M0,0 C480,120 960,120 1440,0 L1440,0 L0,0 Z"
                    ></path>
                </svg>
            </div>

            <div className="w-full max-w-[95%] lg:max-w-[1400px] mx-auto px-4 pt-24 md:pt-36 lg:pt-48 pb-12 relative z-10">

                <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 mb-16">

                    <div className="w-full lg:w-5/12">
                        <h1 className="text-white font-black text-4xl lg:text-5xl mb-6 tracking-wide">
                            {siteConfig.name}
                        </h1>

                        <p className="text-white/90 text-justify lg:text-left leading-relaxed mb-10 font-medium text-sm lg:text-base">
                            {siteConfig.description}
                        </p>

                        {/* Social Media */}
                        <div className="flex space-x-4">
                            {siteConfig.socials.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className="w-12 h-12 bg-white text-secondary rounded-full flex items-center justify-center hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300"
                                >
                                    <FontAwesomeIcon icon={social.icon} className="text-xl" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Us */}
                    <div className="w-full lg:w-4/12 lg:pl-10 flex flex-col justify-center">
                        <h3 className="text-white font-bold text-2xl lg:text-3xl mb-8">Contact us</h3>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white mt-1 mr-4 w-5 text-lg" />
                                <span className="text-white/90 leading-relaxed font-medium text-sm lg:text-base">
                                    {siteConfig.contact.address}
                                </span>
                            </div>
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faPhoneAlt} className="text-white mr-4 w-5 text-lg" />
                                <span className="text-white/90 font-medium text-sm lg:text-base">
                                    {siteConfig.contact.phone}
                                </span>
                            </div>
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faEnvelope} className="text-white mr-4 w-5 text-lg" />
                                <span className="text-white/90 font-medium text-sm lg:text-base">
                                    {siteConfig.contact.email}
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* COPYRIGHT BAR */}
                <div className="border-t border-white/20 pt-8 mt-4 text-center lg:text-left flex flex-col lg:flex-row justify-between items-center gap-4">
                    <p className="text-white/80 text-sm font-medium">
                        &copy; {new Date().getFullYear()}{" "}
                        <Link href="/" className="text-white hover:text-primary transition-colors font-bold">
                            {siteConfig.name}
                        </Link>. All Rights Reserved.
                    </p>
                    <p className="text-white/80 text-sm font-medium">
                        Designed by <span className="text-white font-bold tracking-wide">Technology's team</span>
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;