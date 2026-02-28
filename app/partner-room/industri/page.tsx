import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/common/FloatingWidgets";
import PageHeader from "@/components/common/PageHeader";
import PartnerCarousel from "@/components/partner/PartnerCarousel";
import PartnerList from "@/components/partner/PartnerList";
import { carouselItems, partnerIndustriItems } from "@/data/partnersData";

export const metadata: Metadata = {
    title: "Partner Room Industri | Polimeritas",
    description: "Ruang kolaborasi partner industri Polimeritas.",
};

export default function PartnerIndustriPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <PageHeader title="Partner Room - Industri" activePage="Partner Room" />
            
            <PartnerCarousel data={carouselItems} />
            <PartnerList data={partnerIndustriItems} />

            <Footer />
            <FloatingWidgets />
        </main>
    );
}