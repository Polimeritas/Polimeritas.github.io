"use client";

import React, { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faPlay } from "@fortawesome/free-solid-svg-icons";
import VideoModal from "../common/VideoModal";

const Experience = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <section className="w-full max-w-[95%] lg:max-w-[1400px] mx-auto px-4 py-16 lg:py-24">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                <div className="lg:col-span-5">
                    <div className="bg-black/60 rounded-lg w-full h-full min-h-[500px] py-20 px-8 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden">
                        <FontAwesomeIcon icon={faAward} className="text-primary text-6xl mb-6" />
                        <h1 className="text-6xl lg:text-7xl font-bold text-dark mb-2">8</h1>
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-600">Years Experience</h2>
                    </div>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-center">
                    <SectionTitle
                        subtitle="Learn About Us"
                        title="Polimeritas"
                        className="mb-4"
                    />

                    <h5 className="text-gray-400 font-normal text-xl mb-6 italic">
                        " Prioritas, Popularitas, Berkualitas "
                    </h5>

                    <p className="text-gray-600 text-justify leading-relaxed mb-8 text-lg">
                        Polimeritas adalah suatu komunitas yang bergerak di bidang polymer sains dan teknologi dari hulu hingga produk jadi. Polimeritas berdiri pada tahun 2018 yang awal mulanya merupakan bentuk dari pengabdian masyarakat. Lalu, pada tanggal 10 Januari 2019, Polimeritas mulai aktif sebagai suatu komunitas. Polimeritas bekerjasama memajukan masyarakat yang ahli, produktif, dan inovatif menyongsong Indonesia yang lebih baik di bidang polimer. Polimeritas juga pernah masuk nominasi relawan terpilih Indorelawan 2019. Polimeritas dibentuk dan dipimpin oleh Jevi Zalesti dan sekarang memiliki anggota terstruktur.
                    </p>

                    {/* Video Button Area */}
                    <div className="flex items-center mt-4">
                        <button
                            onClick={() => setIsVideoOpen(true)}
                            className="relative w-16 h-16 bg-secondary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform group z-10"
                        >
                            <span className="absolute inset-0 rounded-full bg-secondary opacity-60 animate-ping -z-10"></span>
                            <FontAwesomeIcon icon={faPlay} className="text-white ml-1 text-xl" />
                        </button>
                    </div>

                </div>
            </div>

            {/* Modal Video */}
            <VideoModal
                isOpen={isVideoOpen}
                onClose={() => setIsVideoOpen(false)}
                videoSrc="https://www.youtube.com/embed/1okvT50ykO8"
            />
        </section>
    );
};

export default Experience;