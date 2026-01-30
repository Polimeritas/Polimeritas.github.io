"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { carouselItems } from "@/data/partnersData";

import "swiper/css";
import "swiper/css/effect-fade";

const PartnerCarousel = () => {
    return (
        <section className="w-full py-10 lg:py-16 bg-gray-50 flex justify-center">
            <div className="w-full max-w-[1200px] px-4">
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 7000,
                        disableOnInteraction: false,
                    }}
                    className="rounded-xl overflow-hidden shadow-2xl h-[300px] md:h-[500px] lg:h-[600px] bg-white"
                >
                    {carouselItems.map((item) => (
                        <SwiperSlide key={item.id} className="relative w-full h-full flex items-center justify-center bg-white">
                            <a
                                href={item.link}
                                target={item.link !== "#" ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                className="block w-full h-full relative"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    className="object-contain"
                                />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default PartnerCarousel;