import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/common/FloatingWidgets";
import PageHeader from "@/components/common/PageHeader";
import PartnerCarousel from "@/components/partner/PartnerCarousel";
import PartnerList from "@/components/partner/PartnerList";
import { carouselItems, partnerBookItems } from "@/data/partnersData"; // Import data buku

export const metadata: Metadata = {
    title: "Partner Room Book Store | Polimeritas",
    description: "Koleksi buku dan literatur dari partner Polimeritas.",
};

export default function PartnerBookStorePage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <PageHeader title="Partner Room - Book Store" activePage="Partner Room" />

            <PartnerCarousel />

            <PartnerList data={partnerBookItems} />

            <Footer />
            <FloatingWidgets />
        </main>
    );
}