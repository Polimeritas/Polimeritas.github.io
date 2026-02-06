import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import PageHeader from "@/components/common/PageHeader";
import Footer from "@/components/layout/Footer";
import TypingEngine from "@/components/game/typing/TypingEngine";

export const metadata: Metadata = {
    title: "Typing Game",
    description: "Uji kecepatan mengetikmu dan pelajari istilah polimer.",
};

export default function TypingGamePage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Header />
            <PageHeader title="Typing Challenge" activePage="Game" />

            <section className="w-full px-4 py-10 lg:py-16">
                <TypingEngine />
            </section>

            <Footer />
        </main>
    );
}