import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/common/FloatingWidgets";
import PageHeader from "@/components/common/PageHeader";
import PartnerCarousel from "@/components/partner/PartnerCarousel";
import PartnerList from "@/components/partner/PartnerList";
import { carouselItems, partnerItems } from "@/data/partnersData";

export const metadata: Metadata = {
    title: "Partner Room",
    description: "Ruang kolaborasi dan partner Polimeritas. Temukan berbagai produk UMKM dan partner kami di sini.",
};

// Next.js menyediakan props searchParams untuk membaca URL (?kategori=...)
export default function PartnerRoomPage({ searchParams }: { searchParams: { kategori?: string } }) {
    // Default kategori adalah 'umum' jika URL tidak memiliki query kategori
    const currentKategori = searchParams.kategori || 'umum';

    // Filter data berdasarkan kategori
    const filteredPartners = partnerItems.filter((item) => {
        if (currentKategori === 'industri') {
            return item.category === 'industri';
        }
        // Jika kategori 'umum', tampilkan semua yang bukan 'industri'
        return item.category !== 'industri';
    });

    return (
        <main className="min-h-screen bg-white">
            <Header />

            <PageHeader title="Partner Room" activePage="Partner Room" />

            <PartnerCarousel data={carouselItems} />

            {/* Kirim data yang sudah di-filter */}
            <PartnerList data={filteredPartners} />

            <Footer />
            <FloatingWidgets />
        </main>
    );
}