"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ImageModalCarouselProps {
    isOpen: boolean;
    onClose: () => void;
    images: string[];
    initialIndex: number;
}

const ImageModalCarousel: React.FC<ImageModalCarouselProps> = ({
    isOpen,
    onClose,
    images,
    initialIndex,
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur animate-fade-in p-0 md:p-10">

            <button
                onClick={onClose}
                className="absolute top-4 right-4 z-50 w-12 h-12 flex items-center justify-center text-white hover:text-primary transition-colors bg-white/10 rounded-full"
            >
                <FontAwesomeIcon icon={faTimes} size="xl" />
            </button>

            {/* Swiper Container */}
            <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={{
                        nextEl: ".modal-next",
                        prevEl: ".modal-prev",
                    }}
                    pagination={{
                        clickable: true,
                        renderBullet: function (index, className) {
                            return '<span class="' + className + ' bg-white/50"></span>';
                        },
                    }}
                    initialSlide={initialIndex}
                    loop={images.length > 1}
                    className="h-full w-full"
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index} className="flex items-center justify-center h-full">
                            <div className="relative w-full h-full">
                                <Image
                                    src={src}
                                    alt={`Portfolio ${index + 1}`}
                                    fill
                                    className="object-contain p-4 md:p-0"
                                    priority={index === initialIndex}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Arrows */}
                <button className="modal-prev absolute top-1/2 left-2 md:left-4 -translate-y-1/2 z-20 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all hidden md:flex">
                    <FontAwesomeIcon icon={faChevronLeft} size="2xl" />
                </button>
                <button className="modal-next absolute top-1/2 right-2 md:right-4 -translate-y-1/2 z-20 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all hidden md:flex">
                    <FontAwesomeIcon icon={faChevronRight} size="2xl" />
                </button>

            </div>
        </div>
    );
};

export default ImageModalCarousel;