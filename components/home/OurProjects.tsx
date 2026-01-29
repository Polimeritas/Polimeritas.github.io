"use client";

import React from "react";
import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faFacebookF,
    faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "swiper/css";
import "swiper/css/navigation";

const OurProjects = () => {
    const projects = [
        {
            id: 1,
            role: "Sales and Marketing (DKI Jakarta)",
            status: "Masih Terbuka",
            image: "/img/Partner2/Coming Soon.jpg",
            link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20ingin%20melamar%20kerja%20sebagai%20Sales%20and%20Marketing%20(DKI%20Jakarta).%20Berikut%20saya%20lampirkan%20CVnya.%20Terimakasih%20",
        },
        {
            id: 2,
            role: "Sales and Marketing (Bangka Belitung)",
            status: "Masih Terbuka",
            image: "/img/Partner2/Coming Soon.jpg",
            link: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20ingin%20melamar%20kerja%20sebagai%20Sales%20and%20Marketing%20(Bangka%20Belitung).%20Berikut%20saya%20lampirkan%20CVnya.%20Terimakasih%20",
        },
        {
            id: 3,
            role: "Sales and Marketing (Batam)",
            status: "Masih Terbuka",
            image: "/img/Partner2/Coming Soon.jpg",
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
        <section className="w-full max-w-[95%] lg:max-w-[1400px] mx-auto px-4 py-20 bg-white">

            {/* HEADER SECTION */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-4 lg:px-4">
                <div className="lg:w-1/2">
                    <SectionTitle
                        subtitle="Our Project & Activities"
                        title="Program Polimeritas"
                        className="mb-0"
                    />
                </div>
                <div className="lg:w-1/2 lg:text-right">
                    <h4 className="text-gray-400 font-normal text-xl lg:text-2xl mb-3">
                        Mari Bergabung Bersama Kami
                    </h4>
                </div>
            </div>

            {/* CAROUSEL SECTION */}
            <div className="relative group/slider">
                <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={30}
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
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-10"
                >
                    {projects.map((item) => (
                        <SwiperSlide key={item.id} className="h-auto">

                            {/* CARD CONTAINER */}
                            <div className="flex flex-col text-center rounded-lg overflow-hidden shadow-md h-[450px] group bg-white">
                                <div className="relative w-full h-[320px] overflow-hidden bg-primary">

                                    <div className="absolute top-0 bottom-0 left-0 w-16 flex flex-col items-center justify-center space-y-3 z-0">
                                        <a href="#" className="w-9 h-9 flex items-center justify-center bg-white text-dark rounded-sm hover:bg-dark hover:text-white transition-colors border border-white/20">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                        <a href="#" className="w-9 h-9 flex items-center justify-center bg-white text-dark rounded-sm hover:bg-dark hover:text-white transition-colors border border-white/20">
                                            <FontAwesomeIcon icon={faFacebookF} />
                                        </a>
                                        <a href="#" className="w-9 h-9 flex items-center justify-center bg-white text-dark rounded-sm hover:bg-dark hover:text-white transition-colors border border-white/20">
                                            <FontAwesomeIcon icon={faLinkedinIn} />
                                        </a>
                                    </div>

                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative block w-full h-full z-10 transition-transform duration-500 ease-in-out group-hover:translate-x-16 bg-white"
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.role}
                                            fill
                                            className="object-cover"
                                        />
                                    </a>
                                </div>

                                {/* FOOTER CONTENT */}
                                <div className="bg-primary py-6 px-4 flex-grow flex flex-col justify-center items-center relative z-20">
                                    <h5 className="font-bold text-dark text-lg mb-1 leading-tight line-clamp-2">
                                        {item.role}
                                    </h5>
                                    <p className="text-dark/70 m-0 font-medium text-sm">
                                        {item.status}
                                    </p>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* CUSTOM NAVIGATION BUTTONS */}
                <button
                    className="project-prev absolute top-1/2 left-0 lg:-left-5 -translate-y-1/2 z-30 w-12 h-12 bg-white text-dark border border-gray-200 shadow-lg flex items-center justify-center hover:bg-primary transition-all duration-300 rounded-full cursor-pointer opacity-0 group-hover/slider:opacity-100"
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>

                <button
                    className="project-next absolute top-1/2 right-0 lg:-right-5 -translate-y-1/2 z-30 w-12 h-12 bg-white text-dark border border-gray-200 shadow-lg flex items-center justify-center hover:bg-primary transition-all duration-300 rounded-full cursor-pointer opacity-0 group-hover/slider:opacity-100"
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>

            </div>

        </section>
    );
};

export default OurProjects;