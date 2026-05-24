"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Hafidha Mawar Zuhriah",
            role: "Mahasiswa",
            image: "/img/hafidha.png",
            quote: "Setelah bergabung menjadi Tim Polimeritas, ilmu, pengalaman dan relasiku meningkat. Aku juga bisa cukup paham mengenai polimer, lingkungan kerja di Polimeritas. Selain itu, aku bisa meningkatkan kemampuanku dalam menjadi editor konten.",
        },
        {
            id: 2,
            name: "Firman Adi Rifansyah",
            role: "Mahasiswa",
            image: "/img/firman.png",
            quote: "Dapat banyak ilmu, bisa buat konten, dapat relasi dan bisa sharing.",
        },
        {
            id: 3,
            name: "Aflah Fadliani Polem",
            role: "Mahasiswa",
            image: "/img/aflah.png",
            quote: "Kesannya, awalnya kirain bakalan canggung jadi volunteer karena masih baru, tapi ternyata tetap disambut baik sampai sekarang. Terimakasih banyak kak😊. Pesannya semoga polimeritas bisa semakin lebih dikenal lagi.",
        },
        {
            id: 4,
            name: "Muhammad Arief Rahman",
            role: "Mahasiswa",
            image: "/img/arief.png",
            quote: "Asyik dan seru banget ketemu tim polimeritas karena kita dibebasin untuk menyampaikan inovasi dan pendapat terkait masalah polimer, pokoknya aku recommed deh!!",
        },
        {
            id: 5,
            name: "Arfiana Maulina Fatimah",
            role: "Mahasiswa",
            image: "/img/arfiana.png",
            quote: "Semoga polimeritas lebih baik lagi dan lebih meluas jaringannya.",
        },
        {
            id: 6,
            name: "Katrin Serafina",
            role: "Mahasiswa",
            image: "/img/katrin.png",
            quote: "Belajar banyak tentang polimer dan designing.",
        },
        {
            id: 7,
            name: "Merlinda Angela Sulistio",
            role: "Pekerja",
            image: "/img/Partner2/Merlinda Angela.jpg",
            quote: "Orangnya ternyata seru-seru, semakin sukses dan besar kedepannya.",
        },
        {
            id: 8,
            name: "Amelia Naomi Agustina",
            role: "Pekerja",
            image: "/img/Partner2/anonim.jpg",
            quote: "Semoga polimeritas semakin maju dan makin kreatif kegiatan-kegiatannya.",
        },
        {
            id: 9,
            name: "Nimas Putri Ayuningtyas",
            role: "Pekerja",
            image: "/img/Partner2/anonim.jpg",
            quote: "Terimakasih ya teman-teman. Sudah nemenin Nimas sebagai relawan polimed. Disini aku udah banyak dapat ilmu dan teman. Semoga next time kita bisa ketemu lagi ya. Thank u, see u later.",
        },
        {
            id: 10,
            name: "Fanlent Wellischiv Vehlinzsky Nainggolan",
            role: "Pekerja",
            image: "/img/Partner2/Fanlent Wellischiv Vehlinzsky Nainggolan.jpg",
            quote: "Saya tertarik mempelajari dunia polimer dan ingin masuk ke jurusan kuliah Teknik Material yang nantinya akan mempelajari tentang ini. Saya juga ingin menyebarkan ilmu yang nantinya saya dapatkan di Polimeritas ke masyarakat diluar sana.",
        },
        {
            id: 11,
            name: "Mujtahidatul",
            role: "Guru",
            image: "/img/Partner2/anonim.jpg",
            quote: "Semoga menjadi komunitas yang berkontribusi besar bagi Indonesia dalam hal menjaga polimer masa depan.",
        },
        {
            id: 12,
            name: "Lily",
            role: "Pekerja",
            image: "/img/Partner2/anonim.jpg",
            quote: "Semoga polimeritas semakin maju dan sukses kedepannya. Semoga juga polimeritas selalu aktif menyebarkan info-info mengenai polimer.",
        },
            {
            id: 13,
            name: "I Wayan Suarka Rijasa",
            role: "Pekerja",
            image: "/img/Partner2/wayanroy.jpg",
            quote: "Terimakasih saya ucapkan kepada founder dan rekan rekan semua atas kerjasama dan bimbingan serta pengalaman berharganya di polimeritas.",
        },
            {
            id: 14,
            name: "Eka Ghita Nur Amanah",
            role: "Pekerja",
            image: "/img/Partner2/Eka Ghita Nur Amanah.jpg",
            quote: "Semoga kedepannya polimeritas lebih baik dan bisa dikenal oleh banyak orang.",
        },
            {
            id: 15,
            name: "Irma Latifah",
            role: "Pekerja",
            image: "/img/Partner2/Irma Latifah.jpg",
            quote: "Senang sekali bisa bergabung di Polimeritas. Komunitas yang sudah seperti keluarga sendiri. Pesan saya untuk anggota Polimeritas nanti adalah jangan putus hubungan, terus jalin rantai kekeluargaan setiap hari. Terima kasih.",
        },
            {
            id: 16,
            name: "Nada Afifah Ramadhanti",
            role: "Pekerja",
            image: "/img/Partner2/Nada Afifah Ramadhanti.jpg",
            quote: "Semoga bisa semakin keren, maju, dan dikenal banyak orang terkait pelestarian lingkungan.",
        },
    ];

    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-[95%] lg:max-w-[1400px] mx-auto px-4">

                <div className="mb-12 px-2 lg:px-6">
                    <h2 className="text-3xl lg:text-4xl font-bold text-secondary">
                        Our Dedicated Volunteers
                    </h2>
                </div>

                {/* CAROUSEL SECTION */}
                <div className="relative group/slider px-2 lg:px-6">
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={24}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: ".testi-next",
                            prevEl: ".testi-prev",
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-12 pt-4"
                    >
                        {testimonials.map((item) => (
                            <SwiperSlide key={item.id} className="px-1">

                                {/* CARD CONTAINER */}
                                <div className="flex flex-col h-[420px] w-full bg-white rounded-xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.08)] border border-gray-100 border-t-[6px] border-t-secondary transition-all hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]">

                                    <div className="relative w-full h-[180px] shrink-0 bg-gray-200 overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-6 flex flex-col flex-grow bg-white overflow-hidden">
                                        <h3 className="font-bold text-secondary text-xl mb-1 truncate">
                                            {item.name}
                                        </h3>
                                        <p className="text-gray-500 text-sm font-medium mb-3 shrink-0">
                                            {item.role}
                                        </p>
                                        <p className="text-dark/80 text-sm leading-relaxed line-clamp-5">
                                            {item.quote}
                                        </p>
                                    </div>

                                </div>

                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* NAVIGATION BUTTONS */}
                    <button
                        className="testi-prev absolute top-1/2 left-0 lg:-left-2 -translate-y-1/2 z-30 w-12 h-12 bg-white text-dark border border-gray-200 shadow-lg flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300 rounded-full cursor-pointer opacity-0 group-hover/slider:opacity-100"
                        aria-label="Previous slide"
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>

                    <button
                        className="testi-next absolute top-1/2 right-0 lg:-right-2 -translate-y-1/2 z-30 w-12 h-12 bg-white text-dark border border-gray-200 shadow-lg flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300 rounded-full cursor-pointer opacity-0 group-hover/slider:opacity-100"
                        aria-label="Next slide"
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;
