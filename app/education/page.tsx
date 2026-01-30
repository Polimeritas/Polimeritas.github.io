import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/common/FloatingWidgets";
import PageHeader from "@/components/common/PageHeader";
import EducationCarousel from "@/components/education/EducationCarousel";
import EducationTopics from "@/components/education/EducationTopics";
import EducationArticles from "@/components/education/EducationArticles";

// Metadata SEO
export const metadata: Metadata = {
    title: "Education",
    description: "Kumpulan materi pembelajaran, riset, dan inovasi terbaru seputar dunia polimer, bioplastik, dan teknologi daur ulang.",
    openGraph: {
        title: "Education | Belajar Polimer Bersama Kami",
        description: "Jelajahi berbagai topik menarik tentang sains polimer, dari bioplastik hingga inovasi daur ulang.",
        images: ["/img/Partner2/sorgum education.jpg"],
    },
};

export default function EducationPage() {
    return (
        <main className="min-h-screen">
            <Header />

            <PageHeader title="Education" activePage="Education" />

            <EducationCarousel />

            <EducationTopics />

            <EducationArticles />

            <Footer />
            <FloatingWidgets />
        </main>
    );
}