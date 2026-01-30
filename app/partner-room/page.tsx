import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/common/FloatingWidgets";
import PageHeader from "@/components/common/PageHeader";
import PartnerCarousel from "@/components/partner/PartnerCarousel";
import PartnerList from "@/components/partner/PartnerList";

export const metadata: Metadata = {
    title: "Partner Room",
    description: "Ruang kolaborasi dan partner Polimeritas. Temukan berbagai produk UMKM dan partner kami di sini.",
};

export default function PartnerRoomPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <PageHeader title="Partner Room" activePage="Partner Room" />

            <PartnerCarousel />

            <PartnerList />

            <Footer />
            <FloatingWidgets />
        </main>
    );
}