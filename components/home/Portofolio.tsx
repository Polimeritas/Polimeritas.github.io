"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faEye } from "@fortawesome/free-solid-svg-icons";
import ImageModalCarousel from "../common/ImageModal";

const Portofolio = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const openModal = (index: number) => {
        setSelectedIndex(index);
        setModalOpen(true);
    };

    const portfolios = [
        { id: 1, title: "Sutra Laba - Laba sebagai Alternatif Produk Plastik Sekali Pakai", image: "/img/content/Sutra Laba-Laba Sebagai Alternatif Produk Plastik Sekali Pakai.png", link: "https://www.instagram.com/p/CatM-jcNUYi/" },
        { id: 2, title: "Sejarah Plastik", image: "/img/content/Sejarah Plastik.png", link: "https://www.instagram.com/p/CaLukcCL7TH/" },
        { id: 3, title: "Sedotan Purun Bangka Belitung Mendunia", image: "/img/content/Sedotan Purun Bangka Belitung Mendunia.png", link: "https://www.instagram.com/p/CeRAgJZNt31/" },
        { id: 4, title: "Rayuan Plastik Air Kelapa", image: "/img/content/Rayuan Plastik Air Kelapa.png", link: "https://www.instagram.com/p/CT50z8SNX3K/" },
        { id: 5, title: "Polimer Fotokatalis", image: "/img/content/Fotokatalis.png", link: "https://www.instagram.com/p/CZnrfApNYLf/" },
        { id: 6, title: "Bioplastik", image: "/img/content/Bioplastik.png", link: "https://www.instagram.com/p/CZlNh98NOEe/" },
    ];

    const imageUrls = portfolios.map(p => p.image);

    return (
        <section className="w-full relative py-20 lg:py-24 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/img/kegiatan/webinar.jpg"
                    alt="Portfolio Background"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-dark/70"></div>
            </div>

            <div className="container relative z-10 mx-auto py-5 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 rounded-lg overflow-hidden shadow-xl">
                    {portfolios.map((item, index) => (
                        <div key={item.id} className="relative group overflow-hidden h-[300px] lg:h-[350px]">

                            {/* Base Image */}
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            =
                            <div className="absolute inset-0 bg-primary/90 flex flex-col items-center justify-center text-center transition-transform duration-500 transform -translate-y-full group-hover:translate-y-0 z-20 p-8">

                                <h4 className="font-bold text-dark mb-6 text-xl lg:text-2xl line-clamp-3 px-4">
                                    {item.title}
                                </h4>

                                <div className="flex items-center justify-center space-x-4">
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 flex items-center justify-center border-2 border-dark bg-transparent hover:bg-dark hover:text-white transition-all rounded-full text-dark font-bold"
                                        title="View on Instagram"
                                    >
                                        <FontAwesomeIcon icon={faLink} size="lg" />
                                    </a>
                                    =
                                    <button
                                        onClick={() => openModal(index)}
                                        className="w-12 h-12 flex items-center justify-center border-2 border-dark bg-transparent hover:bg-dark hover:text-white transition-all rounded-full text-dark font-bold"
                                        title="View Fullscreen"
                                    >
                                        <FontAwesomeIcon icon={faEye} size="lg" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Carousel */}
            <ImageModalCarousel
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                images={imageUrls}
                initialIndex={selectedIndex}
            />
        </section>
    );
};

export default Portofolio;