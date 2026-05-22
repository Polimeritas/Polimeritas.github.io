"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { educationData } from "@/data/educationData";

import "swiper/css";

const HomeEducation = () => {
    const allArticles = educationData;

    return (
        <section className="relative w-full bg-white pt-20 pb-32 lg:pt-28 lg:pb-40 overflow-hidden">

            <div className="absolute bottom-0 left-0 w-full h-[50%] md:h-[60%] z-0 pointer-events-none">
                <Image
                    src="/shape.png"
                    alt="Background Decoration"
                    fill
                    className="object-cover object-top"
                    quality={90}
                    priority={false}
                />
            </div>

            <div className="w-full max-w-[95%] lg:max-w-[1400px] mx-auto px-4 relative z-10">

                {/* HEADER SECTION */}
                <div className="flex flex-col items-center justify-center mb-12 lg:mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4 text-center">
                        Education
                    </h2>
                    <div className="w-full max-w-[400px] h-1 bg-secondary rounded-full"></div>
                </div>

                {/* CAROUSEL SECTION */}
                <div className="w-full relative">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={24}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        className="pb-4"
                    >
                        {allArticles.map((article) => (
                            <SwiperSlide key={article.id} className="h-auto px-1">

                                <article
                                    className="bg-[#e4f5cd] rounded-[24px] p-6 lg:p-8 flex flex-col h-full shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    <h3 className="font-bold text-dark text-base lg:text-lg mb-3 line-clamp-2 leading-snug">
                                        {article.title}
                                    </h3>

                                    <p className="text-sm lg:text-base text-gray-700 leading-relaxed mb-8 line-clamp-4 flex-grow font-medium">
                                        {article.desc}
                                    </p>

                                    <div className="mt-auto text-right">
                                        <Link
                                            href={article.link}
                                            target="_blank"
                                            rel="noopener noreferrer" 
                                            className="inline-block text-secondary font-bold text-sm hover:text-primary transition-colors cursor-pointer group"
                                        >
                                            Lihat Selengkapnya
                                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] bg-primary mt-0.5"></span>
                                        </Link>
                                    </div>
                                </article>

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </section>
    );
};

export default HomeEducation;