import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

const GameDescription = () => {
    return (
        <section className="w-full bg-gray-50 py-8 lg:py-12 px-4 border-t border-gray-100">
            <div className="container mx-auto max-w-5xl text-center">
                <div className="flex items-center justify-center gap-4">
                    <FontAwesomeIcon
                        icon={faGamepad}
                        className="text-primary/70 text-5xl lg:text-6xl mb-6 lg:mb-8 animate-bounce"
                    />
                    <h3 className="text-xl lg:text-3xl font-bold text-secondary text-shadow-lg mb-6 tracking-tight">
                        Tentang Games Polimeritas
                    </h3>
                    <FontAwesomeIcon
                        icon={faGamepad}
                        className="text-primary/70 text-5xl lg:text-6xl mb-6 lg:mb-8 animate-bounce rotate-180"
                    />
                </div>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base text-justify md:text-center max-w-3xl mx-auto font-medium animate-fade-in-up delay-100">
                    Games Polimeritas adalah fitur edukasi interaktif berbasis permainan yang dirancang untuk mengenalkan konsep sains, teknologi, dan polimer secara menyenangkan. Melalui mini games ini, pengguna dapat belajar tentang jenis polimer, sifat material, proses daur ulang, dan aplikasinya dalam kehidupan sehari-hari dengan sistem tantangan, skor, dan waktu.
                </p>

            </div>
        </section>
    );
};

export default GameDescription;