"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
    const slides = [
        {
            id: 1,
            image: "/img/kegiatan/festival relawan.jpg",
            subtitle: "Festival Indo Relawan 2019",
            title: "TOP 5 Selected Volunteers for Indorelawan 2019",
        },
        {
            id: 2,
            image: "/img/kegiatan/webinar.jpg",
            subtitle: "Polimeritas X BBeres.ID",
            title: "Sharing Session Pengelolaan Sampah",
        },
        {
            id: 3,
            image: "/img/kegiatan/webinar2.jpg",
            subtitle: "Polimeritas X Pasuruan Youth Forum",
            title: "Community Leader Academy",
        },
    ];

    return (
        <div className="w-full relative bg-dark group">
            <Swiper
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                effect={"fade"}
                speed={1500}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation
                pagination={{ clickable: true }}
                className="h-[calc(100vh-80px)] min-h-[600px]"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide.id} className="relative w-full h-full">
                        <div className="absolute inset-0 w-full h-full">
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                priority={index === 0}
                                sizes="100vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50"></div>
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center z-10 pb-10 lg:pb-24">
                            <div className="container mx-auto px-6 text-center lg:text-left">
                                <div className="max-w-4xl space-y-4 animate-fade-in-up">
                                    <h5 className="text-primary text-lg lg:text-2xl font-bold uppercase tracking-wider mb-2 drop-shadow-md">
                                        {slide.subtitle}
                                    </h5>
                                    <h1 className="text-white text-3xl lg:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
                                        {slide.title}
                                    </h1>
                                    <a href="/about" className="inline-block px-8 py-3 bg-primary text-dark font-bold rounded hover:bg-white transition-colors">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Hero;