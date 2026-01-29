"use client";

import React from "react";
import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel, faCity, faSpa, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/navigation";

const OurContent = () => {

    const contentCards = [
        {
            id: 1,
            title: "Bioplastic",
            icon: faHotel,
            image: "/img/content/Bioplastik.png",
        },
        {
            id: 2,
            title: "Sejarah Plastik",
            icon: faCity,
            image: "/img/content/Sejarah Plastik.png",
        },
        {
            id: 3,
            title: "Sedotan Purun",
            icon: faSpa,
            image: "/img/content/Sedotan Purun Bangka Belitung Mendunia.png",
        },
    ];

    return (
        <section className="w-full relative py-20 overflow-hidden bg-black">

            <div className="absolute inset-0 z-0">
                <Image
                    src="/img/kegiatan/festival relawan.jpg"
                    alt="Service Background"
                    fill
                    className="object-cover opacity-90"
                    priority={false}
                />
                <div className="absolute inset-0 bg-black/70"></div>
            </div>

            <div className="container mx-auto px-4 lg:max-w-[1140px] relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

                    <div className="text-left pr-0 lg:pr-">
                        <SectionTitle
                            subtitle="Our Content"
                            title="Polimeritas | Boost Your Brand Value"
                            textColor="text-white"
                            className="mb-6"
                        />

                        <p className="text-white text-justify leading-relaxed mb-8 opacity-90 font-light">
                            Polimeritas adalah suatu komunitas yang bergerak di bidang polymer
                            sains dan teknologi dari hulu hingga produk jadi. Polimeritas
                            berdiri pada tahun 2018 yang awal mulanya merupakan bentuk dari
                            pengabdian masyarakat. Lalu, pada tanggal 10 Januari 2019,
                            Polimeritas mulai aktif sebagai suatu komunitas. Polimeritas
                            bekerjasama memajukan masyarakat yang ahli, produktif, dan
                            inovatif menyongsong Indonesia yang lebih baik di bidang polimer.
                            Polimeritas juga pernah masuk nominasi relawan terpilih
                            Indorelawan 2019. Polimeritas dibentuk dan dipimpin oleh Jevi
                            Zalesti dan sekarang memiliki anggota terstruktur. Jevi Zalesti
                            adalah Pendiri dan Ketua dari Polimeritas dengan background
                            pendidikan Teknik Kimia Polimer dan berkarir di dunia bisnis.
                        </p>

                        <a
                            href="https://www.instagram.com/polimeritas.official/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-primary text-dark font-bold py-2 px-4 rounded-[25px] hover:bg-secondary hover:text-white transition-all duration-300 mt-3"
                        >
                            More Content
                        </a>
                    </div>

                    {/* Carousel Content */}
                    <div className="w-full relative group">
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            spaceBetween={30}
                            loop={true}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                nextEl: ".custom-next",
                                prevEl: ".custom-prev",
                            }}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                            }}
                            className="py-4"
                        >
                            {contentCards.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="bg-white rounded overflow-hidden flex flex-col items-center pt-8 pb-0 text-center h-full shadow-lg group-card">
                                        <div className="bg-[#f2f4f5] p-4 mb-4 inline-flex items-center justify-center w-16 h-16 rounded transition-colors hover:bg-light">
                                            <FontAwesomeIcon
                                                icon={item.icon}
                                                className="text-secondary text-2xl"
                                            />
                                        </div>
                                        <h5 className="font-bold text-dark text-lg mb-4 px-4">
                                            {item.title}
                                        </h5>
                                        <div className="relative w-full h-[200px] mt-auto">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <button className="custom-prev absolute top-1/2 left-0 -translate-y-1/2 z-20 w-[45px] h-[45px] bg-primary text-dark flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg cursor-pointer transform -translate-x-4 group-hover:translate-x-0">
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>

                        <button className="custom-next absolute top-1/2 right-0 -translate-y-1/2 z-20 w-[45px] h-[45px] bg-primary text-dark flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg cursor-pointer transform translate-x-4 group-hover:translate-x-0">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurContent;