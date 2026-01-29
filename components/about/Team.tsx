"use client";

import React from "react";
import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import "swiper/css";

const Team = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Jevi Zalesti",
            role: "Founder Polimeritas",
            image: "/img/team/jeviz.jpg",
            social: { linkedin: "https://www.linkedin.com/in/jevizalesti1999/" }
        },
        {
            id: 2,
            name: "Eriko Helmi Pradana",
            role: "Lead of Technology",
            image: "/img/team/eriko.jpg",
            social: { linkedin: "https://www.linkedin.com/in/eriko-helmi-perdana-236710134/" }
        },
        {
            id: 3,
            name: "Mutiara Hikmah",
            role: "Lead of Education",
            image: "/img/team/Mutiara N.jpg",
            social: {}
        },
        {
            id: 4,
            name: "Erythrina Saraswati Chikaruri",
            role: "Lead of Eksternal SDM",
            image: "/img/team/ery.png",
            social: {}
        },
        {
            id: 5,
            name: "HIRING!",
            role: "Lead of Creative",
            image: "/img/Partner2/Coming Soon.jpg",
            social: {}
        },
        {
            id: 6,
            name: "Aflah Fadliani Polem",
            role: "Lead of SDM",
            image: "/img/team/Aflah.png",
            social: { linkedin: "https://www.linkedin.com/in/aflah-fadliani-polem-233580226/" }
        },
    ];

    return (
        <section className="w-full max-w-[95%] lg:max-w-[1400px] mx-auto px-4 py-20">

            {/* Header Team */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-4">
                <div className="lg:w-1/2">
                    <SectionTitle
                        subtitle="Meet Our Team"
                        title="Meet Our Highly Experienced Leaders"
                        className="mb-0"
                    />
                </div>
                <div className="lg:w-1/2 lg:text-right">
                    <h4 className="text-gray-400 font-normal text-xl lg:text-2xl mb-3">
                        Kenalin nih, Leader-leader yang akan menemanimu berproses di Polimeritas
                    </h4>
                </div>
            </div>

            {/* Carousel */}
            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    576: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    992: { slidesPerView: 4 },
                }}
                className="pb-10"
            >
                {teamMembers.map((member) => (
                    <SwiperSlide key={member.id}>
                        <div className="flex flex-col text-center rounded-lg overflow-hidden group h-full bg-white shadow-sm hover:shadow-md transition-shadow">

                            <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />

                                <div className="absolute inset-0 bg-primary/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    <div className="flex flex-col space-y-3">
                                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-white text-dark rounded-sm hover:bg-dark hover:text-white transition-colors">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-white text-dark rounded-sm hover:bg-dark hover:text-white transition-colors">
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </a>
                                        <a
                                            href={member.social.linkedin || "#"}
                                            target="_blank"
                                            className="w-10 h-10 flex items-center justify-center bg-white text-dark rounded-sm hover:bg-dark hover:text-white transition-colors"
                                        >
                                            <FontAwesomeIcon icon={faLinkedinIn} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-primary py-5 px-4">
                                <h5 className="font-bold text-dark text-lg mb-1">{member.name}</h5>
                                <p className="text-white text-sm m-0 font-medium">{member.role}</p>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Team;