import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/common/FloatingWidgets";
import PageHeader from "@/components/common/PageHeader";
import Experience from "@/components/about/Experience";
import AboutJoinUs from "@/components/about/AboutJoinUs";
import Team from "@/components/about/Team";

export const metadata: Metadata = {
    title: "About Us",
    description: "Mengenal Polimeritas, komunitas sains & teknologi polimer yang berdiri sejak 2018. Dipimpin oleh Jevi Zalesti untuk memajukan polimer di Indonesia.",

    keywords: ["Sejarah Polimeritas", "Founder Polimeritas", "Jevi Zalesti", "Visi Misi Polimeritas", "Tim Polimeritas", "Komunitas Sains"],

    openGraph: {
        title: "Tentang Polimeritas | 8 Tahun Pengalaman",
        description: "Dari pengabdian masyarakat hingga menjadi komunitas terstruktur. Simak perjalanan kami sejak 2018.",
        url: "https://www.polimeritas.com/about",
        images: [
            {
                url: "/img/kegiatan/festival relawan.jpg",
                width: 1200,
                height: 630,
                alt: "Tim Polimeritas",
            },
        ],
    },
};

export default function AboutPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Polimeritas",
        "url": "https://www.polimeritas.com//about",
        "logo": "https://polimeritas.github.io/img/logo.png",
        "foundingDate": "2018",
        "founder": {
            "@type": "Person",
            "name": "Jevi Zalesti"
        },
        "description": "Komunitas yang bergerak di bidang polymer sains dan teknologi dari hulu hingga produk jadi.",
        "sameAs": [
            "https://www.facebook.com/polimeritas.official/",
            "https://www.instagram.com/polimeritas.official/",
            "https://www.linkedin.com/in/polimeritas2018/"
        ]
    };

    return (
        <main className="min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Header />

            <PageHeader title="About" activePage="About" />

            <Experience />

            <AboutJoinUs />

            <Team />

            <Footer />
            <FloatingWidgets />
        </main>
    );
}