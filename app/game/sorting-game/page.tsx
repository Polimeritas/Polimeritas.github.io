"use client";

import React from "react";
import Header from "@/components/layout/Header";
import PageHeader from "@/components/common/PageHeader";
import Footer from "@/components/layout/Footer";
import SortingGameEngine from "@/components/game/sorting/SortingGameEngine";

export default function SortingGamePage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Header />
            <PageHeader title="Sorting Challenge" activePage="Game" />

            <section className="w-full px-4 py-10 lg:py-16">
                <SortingGameEngine />
            </section>

            <Footer />
        </main>
    );
}