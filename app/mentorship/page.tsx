import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MentorshipClient from "@/components/mentorship/MentorshipClient";

export const metadata: Metadata = {
    title: "Mentorship | Polimeritas",
    description: "Program mentorship dan portofolio project dari Polimeritas.",
};

export default function MentorshipPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            
            {/* Semua logika interaktif dipanggil dari file terpisah ada di sini ya ( app/components/mentorshipMentorshipClient) . agar nya memepertahankan meta data SEO,
             dikarenakan use clent gabisa di satukan jadi dipisahin aja ya. */}
            <MentorshipClient />

            <Footer />
        </main>
    );
}