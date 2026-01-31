"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { educationData } from "@/data/educationData";

const EducationArticles = () => {

    return (
        <section className="w-full">
            {educationData.map((item) => ( 
                <div key={item.id} className="w-full max-w-[1200px] mx-auto px-4 lg:px-8 py-12 border-b border-gray-100 last:border-0">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                        <div className="lg:col-span-7 flex flex-col h-full justify-between">
                            <div>
                                <h5 className="font-bold text-dark text-xl lg:text-2xl leading-snug mb-4">
                                    {item.title}
                                </h5>
                                <p className="text-gray-600 text-justify leading-relaxed mb-8">
                                    {item.desc}
                                </p>
                            </div>

                            <div>
                                <Link
                                    href={item.link}
                                    target="_blank"
                                    className="block w-full text-center bg-primary text-dark font-bold py-3 px-6 rounded hover:bg-secondary hover:text-white transition-colors uppercase tracking-wider"
                                >
                                    Baca Selengkapnya
                                </Link>
                            </div>
                        </div>

                        <div className="lg:col-span-5 h-[300px] lg:h-[400px] bg-gray-50 rounded overflow-hidden shadow-sm">
                            <div className="relative w-full h-full">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </section>
    );
};

export default EducationArticles;