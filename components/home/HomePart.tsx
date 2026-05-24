"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomePartners = () => {
    const partnerCategories = [
        {
            id: "umum",
            name: "Mitra Umum",
            subDesc: "Kategori Umum",
            image: "/Umum.jpeg",
            link: "/partner-room/umum",
        },
        {
            id: "industri",
            name: "Mitra Industri",
            subDesc: "Kategori Industri",
            image: "/Industri.jpeg",
            link: "/partner-room/industri",
        },
        {
            id: "book-store",
            name: "Mitra Book Store",
            subDesc: "Kategori Book Store",
            image: "/BookStore.jpeg",
            link: "/partner-room/book-store",
        },
    ];

    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-[95%] lg:max-w-[1200px] mx-auto px-4">

                {/* HEADER SECTION */}
                <div className="flex flex-col items-center justify-center mb-14">
                    <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4 text-center">
                        Our Collaboration Partners
                    </h2>
                    <div className="w-full max-w-[400px] h-1 bg-secondary rounded-full"></div>
                </div>

                {/* GRID SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-2 lg:px-6">
                    {partnerCategories.map((item) => (
                        <Link
                            key={item.id}
                            href={item.link}
                            className="flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-300 border border-gray-100 group border-t-[6px] border-t-secondary"
                        >
                            <div className="relative w-full aspect-video sm:h-[240px] bg-gray-100 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Footer */}
                            <div className="p-6 flex flex-col flex-grow justify-center bg-white text-center relative">
                                <h3 className="font-bold text-dark text-xl mb-1.5 group-hover:text-secondary transition-colors">
                                    {item.name}
                                </h3>
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                                    {item.subDesc}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default HomePartners;
