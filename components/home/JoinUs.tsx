"use client";

import React from "react";
import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import Link from "next/link";

const JoinUs = () => {
    const joinLinks = [
        {
            id: 1,
            label: "Volunteer",
            url: "https://docs.google.com/forms/d/e/1FAIpQLSe0Dgii0CqPBhf1IqBKrWPU0F_3ZA1xxPdTBG1mVShfAxGJDA/viewform",
        },
        {
            id: 2,
            label: "Partner of Community",
            url: "https://docs.google.com/presentation/d/1jIK6UosxkHWcLYVECq2jP3ssxDAHFMMa6e02Jpqw0HA/edit#slide=id.gc1e935cf9a_0_0",
        },
        {
            id: 3,
            label: "Profesional",
            url: "https://api.whatsapp.com/send?phone=6285214991705&text=Hi%20Polimeritas!%20Saya%20ingin%20melamar%20kerja%20yang%20tersedia.%20Berikut%20saya%20lampirkan%20CVnya.%20Terimakasih%20",
        },
    ];

    return (
        <section className="w-full mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                <div className="lg:col-span-7 flex flex-col lg:pt-5">
                    <SectionTitle
                        subtitle="Join Us"
                        title="Best Project Collaboration"
                        className="mb-6"
                    />

                    <div className="text-gray-600 text-left md:text-justify leading-relaxed text-sm sm:text-base lg:text-lg">
                        <p className="mb-4">
                            Polimeritas adalah komunitas yang bekerja sama untuk memajukan
                            masyarakat yang ahli, produktif dan inovatif untuk mendukung
                            Indonesia yang lebih baik di bidang polimer. Untuk itu, gabunglah
                            bersama kami sebagai :
                        </p>

                        {/* List Links */}
                        <ul className="list-disc pl-5 space-y-2 font-medium">
                            {joinLinks.map((link) => (
                                <li key={link.id}>
                                    <Link
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-green-600 hover:text-green-700 hover:underline transition-colors wrap-break-word"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="lg:col-span-5">
                    <div className="relative w-full overflow-hidden rounded-2xl aspect-4/3 sm:aspect-16/10 lg:aspect-auto lg:h-full min-h-[240px] sm:min-h-[320px] lg:min-h-[400px]">
                        <Image
                            src="/img/kegiatan/festival relawan.jpg"
                            alt="Festival Relawan"
                            fill
                            className="object-contain object-center p-2 sm:p-3"
                            sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default JoinUs;