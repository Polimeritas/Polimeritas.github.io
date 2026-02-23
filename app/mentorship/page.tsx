import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import PageHeader from "@/components/common/PageHeader";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Mentorship | Polimeritas",
    description: "Program mentorship dan portofolio project dari Polimeritas.",
};

export default function MentorshipPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <PageHeader title="Mentorship" activePage="Mentorship" />

            <section className="w-full py-10 lg:py-16 px-4">
                <div className="container mx-auto max-w-7xl flex justify-center items-center min-h-[10vh]">
                    <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-100">
                        <iframe
                            src="https://www.canva.com/design/DAFRtwP31pQ/view?embed"
                            className="w-full h-full border-none"
                            allowFullScreen
                            title="Polimeritas Company Profile"
                        />
                    </div>
                </div>
            </section>

            {/* PROJECT DONE */}
            <section className="w-full py-10 px-4 bg-gray-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="max-w-2xl">
                        <h6 className="text-secondary font-semibold uppercase mb-3 tracking-wider">
                            Project Done
                        </h6>
                        <h1 className="text-3xl md:text-5xl font-bold text-dark mb-4">
                            Thanks to Our Partner
                        </h1>
                    </div>
                </div>
            </section>

            {/* TESTIMONIAL */}
            <section className="w-full py-10 lg:py-16 px-4">
                <div className="container mx-auto max-w-7xl flex justify-center items-center min-h-[60vh] lg:min-h-[80vh]">
                    <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-gray-100">
                        <iframe
                            src="https://docs.google.com/presentation/d/e/2PACX-1vReQ6aapF5XiyLvz8u5chG473iGtXE7BVtGn221E1eXA51PTW1gVUCmtSog80vfQTuvdQhY3p6RCuIc/embed?start=false&loop=false&delayms=3000"
                            className="w-full h-full border-none"
                            allowFullScreen
                            title="Polimeritas Partner Testimonials"
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}