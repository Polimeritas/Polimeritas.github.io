"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface PartnerItem {
    id: number | string;
    name: string;
    image: string;
    desc: string;
    subDesc?: string;
    link: string;
}

interface PartnerListProps {
    data: PartnerItem[];
}

const ITEMS_PER_PAGE = 24;

const PartnerList: React.FC<PartnerListProps> = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const sectionRef = useRef<HTMLElement>(null);

    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section ref={sectionRef} className="w-full max-w-[95%] lg:max-w-[1400px] mx-auto px-4 py-16">

            {/* Decoration Line */}
            <div className="flex items-center justify-center w-full mb-16">
                <div className="hidden sm:flex flex-col justify-center flex-1 max-w-[200px] lg:max-w-[300px] gap-[3px]">
                    <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-primary"></div>
                    <div className="w-[80%] ml-auto h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-primary/60"></div>
                </div>

                <h2 className="text-3xl lg:text-4xl font-black text-center text-dark px-6 uppercase tracking-wider relative">
                    Our Partners
                    <span className="absolute -top-4 -right-2 text-6xl text-primary/10 select-none z-[-1]">PARTNERS</span>
                </h2>

                <div className="hidden sm:flex flex-col justify-center flex-1 max-w-[200px] lg:max-w-[300px] gap-[3px]">
                    <div className="w-full h-[2px] bg-gradient-to-l from-transparent via-gray-300 to-primary"></div>
                    <div className="w-[80%] mr-auto h-[1px] bg-gradient-to-l from-transparent via-gray-300 to-primary/60"></div>
                </div>
            </div>

            {/* GRID PARTNERS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8">
                {currentItems.map((item) => (
                    <div key={item.id} className="group flex flex-col items-center bg-white rounded-xl shadow-xl border border-gray-100">

                        <Link
                            href={item.link}
                            target="_blank"
                            className="relative w-full aspect-square bg-white  p-4 flex items-center justify-center transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1 group-hover:border-primary/30 overflow-hidden"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                                />
                            </div>
                        </Link>

                        <div className="mt-4 text-center px-2">
                            <h3 className="font-bold text-dark text-xl lg:text-base leading-tight group-hover:text-secondary transition-colors">
                                {item.name}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                                {item.desc}
                            </p>
                            {item.subDesc && (
                                <p className="text-sm text-primary font-medium mt-1 group-hover:text-secondary">
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
                        className={cn(
                            "px-4 py-2 rounded bg-gray-100 text-dark font-bold transition-colors",
                            "hover:bg-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-100"
                        )}
                    >
                        Prev
                    </button>

                    <span className="px-4 text-gray-600 font-medium">
                        Page {currentPage} of {totalPages}
                    </span>

                    <button
                        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className={cn(
                            "px-4 py-2 rounded bg-gray-100 text-dark font-bold transition-colors",
                            "hover:bg-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-200"
                        )}
                    >
                        Next
                    </button>
                </div>
            )}
        </section>
    );
};

export default PartnerList;