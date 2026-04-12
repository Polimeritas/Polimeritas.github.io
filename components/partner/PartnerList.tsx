"use client";

import React, { useState, useRef, useMemo, useEffect } from "react";
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

    /**
     * @description Menghitung total halaman berdasarkan panjang data.
     */
    const totalPages = useMemo(() =>
        Math.ceil(data.length / ITEMS_PER_PAGE),
        [data.length]);

    /**
     * @description Mengambil item yang sesuai untuk halaman aktif.
     */
    const currentItems = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return data.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [currentPage, data]);

    /**
     * @description Handler untuk perpindahan halaman dengan auto-scroll ke atas.
     */
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        setTimeout(() => {
            sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
    };

    useEffect(() => {
        setTimeout(() => {
            setCurrentPage(1);
        }, 100);
    }, [data]);

    const renderPageNumbers = () => {
        let pages = [];
        if (totalPages <= 3) {
            pages = Array.from({ length: totalPages }, (_, i) => i + 1);
        } else {
            if (currentPage <= 2) pages = [1, 2, 3];
            else if (currentPage >= totalPages - 1) pages = [totalPages - 2, totalPages - 1, totalPages];
            else pages = [currentPage - 1, currentPage, currentPage + 1];
        }

        return (
            <div className="flex items-center gap-2">
                {totalPages > 3 && currentPage > 2 && <span className="text-gray-400">..</span>}
                {pages.map((page) => (
                    <button
                        key={`page-${page}`}
                        onClick={() => handlePageChange(page)}
                        className={cn(
                            "w-10 h-10 flex items-center justify-center rounded-lg font-bold transition-all",
                            currentPage === page ? "bg-primary text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        )}
                    >
                        {page}
                    </button>
                ))}
                {totalPages > 3 && currentPage < totalPages - 1 && <span className="text-gray-400">..</span>}
            </div>
        );
    };

    return (
        <section ref={sectionRef} className="w-full max-w-[95%] lg:max-w-[1400px] mx-auto px-4 py-16 scroll-mt-20">
            {/* Header & Decoration */}
            <div className="flex items-center justify-center w-full mb-16">
                <h2 className="text-3xl lg:text-4xl font-black text-center text-dark px-6 uppercase tracking-wider relative">
                    Our Partners
                    <span className="absolute -top-4 -right-2 text-6xl text-primary/10 select-none z-[-1]">PARTNERS</span>
                </h2>
            </div>

            {/* GRID PARTNERS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8">
                {currentItems.map((item, index) => (
                    <div
                        key={`${item.id}-${currentPage}-${index}`}
                        className="group flex flex-col items-start bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-all"
                    >
                        <Link href={item.link}
                            target="_blank"
                            className="relative w-full aspect-square bg-white p-4 flex items-center justify-center transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1 group-hover:border-primary/30 overflow-hidden rounded-t-xl">
                            <Image
                                src={item.image || "/img/placeholder.png"}
                                alt={item.name}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 50vw, 20vw"
                            />
                        </Link>

                        <div className="mt-4 text-left px-4 pb-4 w-full">
                            <h3 className="font-bold text-dark text-lg leading-tight line-clamp-1 group-hover:text-secondary transition-colors">
                                {item.name}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1 line-clamp-2 min-h-[40px]">
                                {item.desc}
                            </p>
                            {item.subDesc && <p className="text-xs text-primary font-medium mt-2 uppercase">{item.subDesc}</p>}
                        </div>
                    </div>
                ))}
            </div>

            {/* PAGINATION CONTROLS */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center mt-16 gap-4">
                    <button
                        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 disabled:opacity-30"
                    >
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" />
                        </svg>
                    </button>

                    {renderPageNumbers()}

                    <button
                        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 disabled:opacity-30"
                    >
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                        </svg>
                    </button>
                </div>
            )}
        </section>
    );
};

export default PartnerList;