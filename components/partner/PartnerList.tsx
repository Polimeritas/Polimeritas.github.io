"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { partnerItems } from "@/data/partnersData";

const ITEMS_PER_PAGE = 24;

const PartnerList = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(partnerItems.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = partnerItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        const gridElement = document.getElementById("partner-grid");
        if (gridElement) gridElement.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="partner-grid" className="w-full max-w-[95%] lg:max-w-[1400px] mx-auto px-4 py-16">

            <div className="flex items-center justify-center w-full mb-16">

                <div className="hidden sm:flex flex-col justify-center flex-1 max-w-[200px] lg:max-w-[300px] gap-[3px]">
                    <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-primary"></div>
                    <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-primary"></div>
                </div>

                <div className="mx-3 text-center px-2">
                    <h2 className="text-xl lg:text-3xl font-bold uppercase tracking-widest whitespace-nowrap">
                        <span className="text-secondary drop-shadow-sm">Polimeritas</span>
                        <span className="mx-2 text-gray-300 font-light">|</span>
                        <span className="text-gray-600 text-base lg:text-2xl">Boost Your Brand Value</span>
                    </h2>
                </div>

                <div className="hidden sm:flex flex-col justify-center flex-1 max-w-[200px] lg:max-w-[300px] gap-[3px]">
                    <div className="w-full h-[2px] bg-gradient-to-l from-transparent via-gray-300 to-primary"></div>
                    <div className="w-full h-[2px] bg-gradient-to-l from-transparent via-gray-300 to-primary"></div>
                </div>

            </div>

            {/* GRID CONTAINER */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {currentItems.map((item, index) => (
                    <div key={index} className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">

                        {/* Image Area */}
                        <div className="relative w-full aspect-square bg-gray-50 border-b border-gray-100">
                            <Link href={item.link} target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-contain p-2 hover:scale-105 transition-transform duration-300"
                                />
                            </Link>
                        </div>

                        {/* Content Area */}
                        <div className="p-4 flex flex-col items-center text-center flex-grow">
                            <h3 className="font-bold text-dark text-lg mb-1 line-clamp-1">
                                {item.name}
                            </h3>
                            <p className="text-primary font-bold text-xs uppercase mb-1 line-clamp-2">
                                {item.desc}
                            </p>
                            {item.subDesc && (
                                <p className="text-gray-400 text-[10px] mt-auto">
                                    {item.subDesc}
                                </p>
                            )}
                        </div>

                    </div>
                ))}
            </div>

            {/* PAGINATION CONTROLS */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center mt-16 space-x-2">
                    <button
                        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 rounded bg-gray-100 text-dark hover:bg-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-bold"
                    >
                        Prev
                    </button>

                    <span className="px-4 text-gray-600 font-medium">
                        Page {currentPage} of {totalPages}
                    </span>

                    <button
                        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 rounded bg-gray-100 text-dark hover:bg-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-bold"
                    >
                        Next
                    </button>
                </div>
            )}

        </section>
    );
};

export default PartnerList;