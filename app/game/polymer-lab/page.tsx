import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PolymerLab from "@/components/game/Lab/PolymerLab";
import GameDescription from "@/components/game/GameDescription";
import PageHeader from "@/components/common/PageHeader";

export default function PolymerLabPage() {
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <PageHeader title="Polymer Interactive Lab" activePage="Game" />
            <section className="flex-grow container mx-auto py-10 px-4">
                <PolymerLab />
            </section>
            <GameDescription />
            <Footer />
        </main>
    );
}