"use client";

import React, { useState } from "react";
import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { mentorshipData } from "@/data/mentorshipData";

export default function MentorshipClient() {
    const [activeTab, setActiveTab] = useState("Konsultasi");

    const currentData = mentorshipData.filter(item => item.category === activeTab);

    return (
        <>
            <PageHeader title="Mentorship" activePage="Mentorship" />

            <div className="w-full bg-[#609938] relative z-10">
                <div className="container mx-auto max-w-7xl px-4 flex justify-center items-center gap-8 md:gap-14 h-14 overflow-x-auto">
                    {['Konsultasi', 'Pelatihan', 'Sertifikasi'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`text-white whitespace-nowrap text-base md:text-lg font-semibold relative h-full flex items-center transition-all duration-300 ${activeTab === tab ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                                }`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <span className="absolute bottom-0 left-0 w-full h-[4px] bg-white rounded-t-sm"></span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* VIDEO SECTION */}
            <section className="w-full py-10 lg:py-16 px-4">
                <div className="container mx-auto max-w-7xl flex justify-center items-center min-h-[10vh]">
                    <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-100">
                        <iframe
                            src="https://www.canva.com/design/DAHFN7JSMQc/b0upEHMowjD3ZvXX9renfA/view?embed"
                            className="w-full h-full border-none"
                            allowFullScreen
                            title="Polimeritas Company Profile"
                        />
                    </div>
                </div>
            </section>

            {/* KONSULTASI / ACTIVE TAB SECTION */}
            <section className="w-full py-10 lg:py-16 px-4 bg-white">
                <div className="container mx-auto max-w-7xl">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-10 tracking-tight text-center md:text-left">
                        {activeTab}
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {currentData.map((item) => (
                            <Link
                                href={item.link}
                                key={item.id}
                                className="bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden hover:scale-105 hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] transition duration-300 flex flex-col"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-64 md:h-72 object-cover"
                                />

                                <div className="p-6 md:py-8 md:px-10 bg-white">
                                    <h2 className="text-xl md:text-2xl font-extrabold text-black">
                                        {item.title}
                                    </h2>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROJECT DONE (simpan SEMENTARA) */}
            {/* <section className="w-full py-10 px-4 bg-gray-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="max-w-2xl">
                        <h6 className="text-secondary font-semibold uppercase mb-3 tracking-wider">
                            Project Done
                        </h6>
                        <h1 className="text-3xl md:text-5xl font-bold text-dark mb-4">
                            Thanks to Our Partner
                        </h1>
                    </div>
                </div>
            </section>
            */}

            {/* TESTIMONIAL (disable SEMENTARA) */}
            {/* <section className="w-full py-10 lg:py-16 px-4">
                <div className="container mx-auto max-w-7xl flex justify-center items-center min-h-[60vh] lg:min-h-[80vh]">
                    <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-gray-100">
                        <iframe
                            src="https://docs.google.com/presentation/d/e/2PACX-1vReQ6aapF5XiyLvz8u5chG473iGtXE7BVtGn221E1eXA51PTW1gVUCmtSog80vfQTuvdQhY3p6RCuIc/embed?start=false&loop=false&delayms=3000"
                            className="w-full h-full border-none"
                            allowFullScreen
                            title="Polimeritas Partner Testimonials"
                        />
                    </div>
                </div>
            </section>
            */}

        </>
    );
}