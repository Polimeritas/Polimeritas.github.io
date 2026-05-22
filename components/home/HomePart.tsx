"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { partnerIndustriItems } from "@/data/partnersData"; // Import data layer asli lu

import "swiper/css";
import "swiper/css/navigation";

const HomePartners = () => {
    // Mengambil sebagian data untuk ditampilkan di homepage carousel (Scalable & Lightweight)
    const displayPartners = partnerIndustriItems
        .filter(item => !item.name.includes("Coming Soon") && item.id !== "Hubungi Kami")
        .slice(0, 10); // Mengambil 10 partner teratas untuk di-looping di carousel

    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-[95%] lg:max-w-[1400px] mx-auto px-4">

                {/* HEADER SECTION - Konsisten dengan OurProjects */}
                <div className="flex flex-col items-center justify-center mb-14">
                    <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4 text-center">
                        Our Official Partners
                    </h2>
                    <div className="w-full max-w-[400px] h-1 bg-secondary rounded-full"></div>
                </div>

                {/* CAROUSEL SECTION */}
                <div className="relative group/slider px-2 lg:px-6">
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={24}
                        loop={true}
                        autoplay={{
                            delay: 3000, // Geser otomatis per 3 detik sesuai request
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: ".partner-next",
                            prevEl: ".partner-prev",
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}
                        className="pb-12 pt-4"
                    >
                        {displayPartners.map((item, index) => (
                            <SwiperSlide key={`${item.id}-${index}`} className="h-auto px-1">

                                {/* CARD CONTAINER */}
                                <Link
                                    href="/partner-room/umum"
                                    className="flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-shadow duration-300 border border-gray-100 group border-t-[6px] border-t-secondary"
                                >
                                    <div className="relative w-full h-[220px] bg-gray-200 overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        />
                                    </div>

                                    <div className="p-5 flex flex-col flex-grow justify-center bg-white">
                                        <h3 className="font-bold text-dark text-base lg:text-lg mb-1 line-clamp-1 group-hover:text-secondary transition-colors">
                                            {item.name}
                                        </h3>
                                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                                            {item.subDesc || "Partner"}
                                        </p>
                                    </div>
                                </Link>

                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button
                        className="partner-prev absolute top-1/2 left-0 lg:-left-2 -translate-y-1/2 z-30 w-12 h-12 bg-white text-dark border border-gray-200 shadow-lg flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300 rounded-full cursor-pointer opacity-0 group-hover/slider:opacity-100"
                        aria-label="Previous partner"
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>

                    <button
                        className="partner-next absolute top-1/2 right-0 lg:-right-2 -translate-y-1/2 z-30 w-12 h-12 bg-white text-dark border border-gray-200 shadow-lg flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300 rounded-full cursor-pointer opacity-0 group-hover/slider:opacity-100"
                        aria-label="Next partner"
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>

                </div>
            </div>
        </section>
    );
};

export default HomePartners;