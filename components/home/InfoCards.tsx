import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faEnvelopeOpen,
    faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

const InfoCards = () => {
    const cards = [
        {
            id: 1,
            title: "AHLI",
            desc: "Mengembangkan masyarakat yang ahli dibidang Polimer",
            icon: faMapMarkerAlt,
            bg: "bg-primary",
            text: "text-dark",
            iconColor: "text-secondary",
        },
        {
            id: 2,
            title: "PRODUKTIF",
            desc: "Menciptakan kegiatan yang bermanfaat",
            icon: faEnvelopeOpen,
            bg: "bg-secondary",
            text: "text-white",
            iconColor: "text-primary",
        },
        {
            id: 3,
            title: "INOVATIF",
            desc: "Mengajak masyarakat untuk menciptakan hal-hal yang baru",
            icon: faPhoneAlt,
            bg: "bg-primary", 
            text: "text-dark",
            iconColor: "text-secondary",
        },
    ];

    return (
        <div className="w-full relative z-30 lg:-mt-24">
            <div className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className={`${card.bg} ${card.text} p-8 lg:p-12 flex items-center justify-center transition-all duration-300 hover:brightness-95`}
                        >
                            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left max-w-lg mx-auto">
                                {/* Icon Ukuran Responsif */}
                                <FontAwesomeIcon
                                    icon={card.icon}
                                    className={`${card.iconColor} text-5xl lg:text-6xl flex-shrink-0`}
                                />

                                {/* Content */}
                                <div>
                                    <h5 className="text-lg lg:text-xl font-bold uppercase mb-2 tracking-wide">
                                        {card.title}
                                    </h5>
                                    <p className="m-0 text-sm lg:text-base opacity-90 leading-relaxed font-medium">
                                        {card.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InfoCards;