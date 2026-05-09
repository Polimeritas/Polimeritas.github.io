"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "swiper/css";
import "swiper/css/navigation";

const OurProjects = () => {
    const projects = [
        {
            id: 1,
            role: "Sales and Marketing (DKI Jakarta)",
            status: "Masih Terbuka",
            image: "/img/Partner2/sales marketing.jpg",
            link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20ingin%20melamar%20kerja%20sebagai%20Sales%20and%20Marketing%20(DKI%20Jakarta).%20Berikut%20saya%20lampirkan%20CVnya.%20Terimakasih%20",
        },
        {
            id: 2,
            role: "Sales and Marketing (Bangka Belitung)",
            status: "Masih Terbuka",
            image: "/img/Partner2/sales marketing.jpg",
            link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20ingin%20melamar%20kerja%20sebagai%20Sales%20and%20Marketing%20(Bangka%20Belitung).%20Berikut%20saya%20lampirkan%20CVnya.%20Terimakasih%20",
        },
        {
            id: 3,
            role: "Sales and Marketing (Batam)",
            status: "Masih Terbuka",
            image: "/img/Partner2/sales marketing.jpg",
            link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20ingin%20melamar%20kerja%20sebagai%20Sales%20and%20Marketing%20(Batam).%20Berikut%20saya%20lampirkan%20CVnya.%20Terimakasih%20",
        },
        {
            id: 4,
            role: "Kelola Website",
            status: "Masih Terbuka",
            image: "/img/team/programpolimeritas3.jpg",
            link: "https://bit.ly/opvolunteerpolimeritas2",
        },
        {
            id: 5,
            role: "Polimeritas #TEMUUMKM",
            status: "Masih Terbuka",
            image: "/img/team/programpolimeritas1.jpg",
            link: "https://bit.ly/opvolunteerpolimeritas2",
        },
        {
            id: 6,
            role: "Konten Feed",
            status: "Masih Terbuka",
            image: "/img/team/programpolimeritas2.jpg",
            link: "https://bit.ly/opvolunteerpolimeritas2",
        },
    ];

    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-[95%] lg:max-w-[1400px] mx-auto px-4">

                <div className="flex flex-col items-center justify-center mb-14">
                    <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4 text-center">
                        Our Project & Activities
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
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: ".project-next",
                            prevEl: ".project-prev",
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }}
                        className="pb-12 pt-4"
                    >
                        {projects.map((item) => (
                            <SwiperSlide key={item.id} className="h-auto px-1">

                                {/* CARD CONTAINER */}
                                <Link
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-shadow duration-300 border border-gray-100 group border-t-[6px] border-t-secondary"
                                >
                                    <div className="relative w-full h-[220px] bg-gray-200 overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.role}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        />
                                    </div>

                                    <div className="p-5 flex flex-col flex-grow justify-center bg-white">
                                        <h3 className="font-bold text-dark text-base lg:text-lg mb-2 line-clamp-2 group-hover:text-secondary transition-colors">
                                            {item.role}
                                        </h3>
                                        <p className="text-xs lg:text-sm text-gray-500 font-medium">
                                            {item.status}
                                        </p>
                                    </div>
                                </Link>

                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* NAVIGATION BUTTONS */}
                    <button
                        className="project-prev absolute top-1/2 left-0 lg:-left-2 -translate-y-1/2 z-30 w-12 h-12 bg-white text-dark border border-gray-200 shadow-lg flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300 rounded-full cursor-pointer opacity-0 group-hover/slider:opacity-100"
                        aria-label="Previous slide"
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>

                    <button
                        className="project-next absolute top-1/2 right-0 lg:-right-2 -translate-y-1/2 z-30 w-12 h-12 bg-white text-dark border border-gray-200 shadow-lg flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300 rounded-full cursor-pointer opacity-0 group-hover/slider:opacity-100"
                        aria-label="Next slide"
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>

                </div>
            </div>
        </section>
    );
};

export default OurProjects;