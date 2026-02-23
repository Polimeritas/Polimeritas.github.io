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

    // Logika Pagination
    const renderPageNumbers = () => {
        let pages = [];

        if (totalPages <= 3) {
            pages = Array.from({ length: totalPages }, (_, i) => i + 1);
        } else {
            if (currentPage <= 2) {
                pages = [1, 2, 3];
            } else if (currentPage >= totalPages - 1) {
                pages = [totalPages - 2, totalPages - 1, totalPages];
            } else {
                pages = [currentPage - 1, currentPage, currentPage + 1];
            }
        }

        return (
            <>
                {totalPages > 3 && currentPage > 2 && (
                    <span className="px-1 text-gray-400 tracking-widest font-bold">..</span>
                )}

                {pages.map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={cn(
                            "w-10 h-10 flex items-center justify-center rounded-lg font-bold transition-all",
                            currentPage === page
                                ? "bg-primary text-white shadow-md"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        )}
                    >
                        {page}
                    </button>
                ))}

                {totalPages > 3 && currentPage < totalPages - 1 && (
                    <span className="px-1 text-gray-400 tracking-widest font-bold">..</span>
                )}
            </>
        );
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
                    <div key={item.id} className="group flex flex-col items-start bg-white rounded-xl shadow-xl border border-gray-100">
                        <Link
                            href={item.link}
                            target="_blank"
                            className="relative w-full aspect-square bg-white p-4 flex items-center justify-center transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1 group-hover:border-primary/30 overflow-hidden rounded-t-xl"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={item.image || "/img/placeholder.png"}
                                    alt={item.name}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                                />
                            </div>
                        </Link>

                        <div className="mt-4 text-left px-4 pb-4 w-full">
                            <h1 className="font-bold text-dark text-2xl leading-tight group-hover:text-secondary transition-colors">
                                {item.name}
                            </h1>
                            <p className="text-xl text-gray-500 mt-1 line-clamp-2">
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
                            "w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-dark font-bold transition-colors",
                            "hover:bg-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-100 disabled:hover:text-dark"
                        )}
                        aria-label="Previous Page"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>

                    {renderPageNumbers()}

                    <button
                        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className={cn(
                            "w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-dark font-bold transition-colors",
                            "hover:bg-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-100 disabled:hover:text-dark"
                        )}
                        aria-label="Next Page"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            )}
        </section>
    );
};

export default PartnerList;