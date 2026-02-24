"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { educationData } from "@/data/educationData";
import { cn } from "@/lib/utils";

const ITEMS_PER_PAGE = 10;

const EducationArticles = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const sectionRef = useRef<HTMLElement>(null);

    const totalPages = Math.ceil(educationData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = educationData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

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
        <section ref={sectionRef} className="w-full pb-16">
            {/* List Artikel */}
            {currentItems.map((item) => (
                <div key={item.id} className="w-full max-w-[1200px] mx-auto px-4 lg:px-8 py-12 border-b border-gray-100 last:border-0">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                        <div className="lg:col-span-7 flex flex-col h-full justify-between">
                            <div>
                                <h5 className="font-bold text-dark text-xl lg:text-2xl leading-snug mb-4">
                                    {item.title}
                                </h5>
                                <p className="text-gray-600 text-justify leading-relaxed mb-8 line-clamp-4">
                                    {item.desc}
                                </p>
                            </div>

                            <div>
                                <Link
                                    href={item.link}
                                    target="_blank"
                                    className="block w-full text-center bg-primary text-dark font-bold py-3 px-6 rounded-lg hover:bg-secondary hover:text-white transition-colors uppercase tracking-wider shadow-sm"
                                >
                                    Baca Selengkapnya
                                </Link>
                            </div>
                        </div>

                        <div className="lg:col-span-5 h-[300px] lg:h-[400px] bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                            <div className="relative w-full h-full p-4">
                                <Image
                                    src={item.image || "/img/placeholder.png"}
                                    alt={item.title}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            ))}

            {/* PAGINATION CONTROLS */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center mt-12 space-x-2">
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

export default EducationArticles;