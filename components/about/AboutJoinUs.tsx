"use client";

import React from "react";
import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import Link from "next/link";

const AboutJoinUs = () => {
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
    ];

    return (
        <section className="w-full max-w-[95%] lg:max-w-[1400px] mx-auto px-4 py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                <div className="lg:col-span-7 flex flex-col justify-center lg:pt-5">
                    <SectionTitle
                        subtitle="Join Us"
                        title="Be a volunteer and our partner of community"
                        className="mb-6"
                    />

                    <div className="text-gray-600 text-justify leading-relaxed mb-6 text-base lg:text-lg">
                        <p className="mb-4">
                            Polimeritas adalah komunitas yang bekerja sama untuk memajukan masyarakat yang ahli, produktif dan inovatif untuk mendukung Indonesia yang lebih baik di bidang polimer. Untuk itu, gabunglah bersama kami sebagai :
                        </p>

                        <ul className="list-disc pl-5 space-y-2 font-medium">
                            {joinLinks.map((link) => (
                                <li key={link.id}>
                                    <Link
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#008000] hover:text-green-700 hover:underline transition-colors font-semibold"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="lg:col-span-5 h-[400px] lg:h-auto min-h-[400px]">
                    <div className="relative w-full h-full rounded overflow-hidden shadow-lg">
                        <Image
                            src="/img/kegiatan/festival relawan.jpg"
                            alt="Festival Relawan"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutJoinUs;