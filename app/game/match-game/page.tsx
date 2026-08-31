import React from "react";
import Header from "@/components/layout/Header";
import PageHeader from "@/components/common/PageHeader";
import Footer from "@/components/layout/Footer";
import MatchGameClient from "@/components/game/match/MatchGame";
import GameDescription from "@/components/game/GameDescription";

export const metadata = {
    title: "Polymer Match Game | Polimeritas",
    description: "Tantang wawasan polimermu dengan game Polymer Match!",
};

export default function MatchGamePage() {
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <PageHeader title="Polymer Match Challenge" activePage="Game" />

            <section className="w-full px-4 py-10 lg:py-16 flex-grow container mx-auto">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 min-h-[400px]">

                    <div className="bg-secondary px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                        <h3 className="font-bold text-primary text-lg tracking-wide">
                            🧪 Polymer Match
                        </h3>
                    </div>

                    <div className="p-6 lg:p-10">
                        <MatchGameClient />
                    </div>
                </div>
            </section>

            <GameDescription />

            <Footer />
        </main>
    );
}