"use client";

import React from "react";
import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

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
            name: "Arfiana",
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
            image: "/img/testimonial-1.jpg",
            quote: "Orangnya ternyata seru-seru, semakin sukses dan besar kedepannya.",
        },
        {
            id: 8,
            name: "Amelia Naomi Agustina",
            role: "Pekerja",
            image: "/img/testimonial-1.jpg",
            quote: "Semoga polimeritas semakin maju dan makin kreatif kegiatan-kegiatannya.",
        },
        {
            id: 9,
            name: "Nimas",
            role: "Pelajar",
            image: "/img/testimonial-2.jpg",
            quote: "Terimakasih ya teman-teman. Sudah nemenin Nimas sebagai relawan polimed. Disini aku udah banyak dapat ilmu dan teman. Semoga next time kita bisa ketemu lagi ya. Thank u, see u later.",
        },
        {
            id: 10,
            name: "Fanlent",
            role: "Pelajar",
            image: "/img/testimonial-3.jpg",
            quote: "Saya tertarik mempelajari dunia polimer dan ingin masuk ke jurusan kuliah Teknik Material yang nantinya akan mempelajari tentang ini. Saya juga ingin menyebarkan ilmu yang nantinya saya dapatkan di Polimeritas ke masyarakat diluar sana.",
        },
        {
            id: 11,
            name: "Mujtahidatul",
            role: "Guru",
            image: "/img/testimonial-2.jpg",
            quote: "Semoga menjadi komunitas yang berkontribusi besar bagi Indonesia dalam hal menjaga polimer masa depan.",
        },
        {
            id: 12,
            name: "Lily",
            role: "Pekerja",
            image: "/img/testimonial-1.jpg",
            quote: "Semoga polimeritas semakin maju dan sukses kedepannya. Semoga juga polimeritas selalu aktif menyebarkan info-info mengenai polimer.",
        },
    ];

    return (
        <section className="w-full bg-[#444444] py-20 lg:py-24 text-white">
            <div className="w-full max-w-[95%] lg:max-w-[1400px] mx-auto px-4">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

                    <div className="lg:col-span-7">
                        <SectionTitle
                            subtitle="Testimonial"
                            title="Our Beloved Volunteer"
                            textColor="text-white"
                            className="mb-10"
                        />

                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            className="testimonials-swiper"
                        >
                            {testimonials.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="flex flex-col text-white">

                                        <div className="flex items-center mb-6">
                                            <div className="relative w-[80px] h-[80px] rounded-full overflow-hidden border-2 border-white mr-5 shrink-0">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>

                                            <div>
                                                <h4 className="text-primary font-bold text-xl lg:text-2xl mb-1">
                                                    {item.name}
                                                </h4>
                                                <span className="text-white text-base italic font-light block">
                                                    {item.role}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-white text-lg lg:text-xl leading-relaxed font-light pr-0 lg:pr-4">
                                            {item.quote}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="lg:col-span-5 w-full">
                        <div className="relative w-full rounded-2xl overflow-hidden bg-black/10 shadow-lg aspect-4/3 sm:aspect-16/10 lg:aspect-auto lg:h-full min-h-[260px] sm:min-h-[360px] lg:min-h-[500px]">
                            <Image
                                src="/img/testimoni.jpg"
                                alt="Testimonials Collage"
                                fill
                                className="object-contain object-center p-2 sm:p-3"
                                sizes="(max-width: 1024px) 100vw, 40vw"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;