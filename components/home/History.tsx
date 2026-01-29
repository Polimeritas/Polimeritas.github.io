"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import SectionTitle from '../common/SectionTitle';
import VideoModal from '../common/VideoModal';

const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="w-full max-w-[95%] lg:max-w-[1400px] mx-auto px-4 py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row items-center">

                <div className="w-full lg:w-5/12 mb-10 lg:mb-0">
                    <div className="relative w-full h-[300px] lg:h-[500px] rounded overflow-hidden">
                        <Image
                            src="/img/Partner2/Berzelius.jpg"
                            alt="Berzelius History"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                <div className="w-full lg:w-7/12 lg:pl-10">
                    <SectionTitle
                        subtitle="History"
                        title="Polimer"
                        className="mb-8"
                    />

                    <p className="text-gray-600 text-justify mb-8 leading-relaxed text-base lg:text-lg">
                        Polimer sebenarnya sudah ada dan digunakan manusia sejak berabad-abad yang lalu.
                        Polimer-polimer yang sudah digunakan itu adalah jenis polimer alam seperti selulosa,
                        pati, protein, wol, dan karet. Istilah polimer pertama kali digunakan oleh kimiawan
                        dari Swedia, Berzelius (1833).
                    </p>

                    {/* Video Play Area */}
                    <div className="flex items-center">
                        <div className="relative flex-shrink-0 w-16 h-16 lg:w-[80px] lg:h-[80px] flex items-center justify-center">
                            <div className="absolute top-1/2 left-1/2 w-full h-full bg-[#669127] rounded-full animate-pulse-border z-0"></div>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="relative z-10 w-12 h-12 lg:w-[60px] lg:h-[60px] bg-[#669127] rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110 focus:outline-none shadow-lg"
                            >
                                <span className="ml-1 w-0 h-0 border-l-[12px] lg:border-l-[18px] border-l-primary border-t-[8px] lg:border-t-[12px] border-t-transparent border-b-[8px] lg:border-b-[12px] border-b-transparent"></span>
                            </button>
                        </div>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="font-semibold text-dark ml-4 lg:ml-5 text-lg hover:text-primary transition-colors focus:outline-none"
                        >
                        </button>
                    </div>
                </div>

            </div>

            <VideoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                videoSrc="https://www.youtube.com/embed/fFBCvaFNq0Y"
            />
        </section>
    );
};

export default About;