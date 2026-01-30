"use client";

import React from "react";
import SectionTitle from "../common/SectionTitle";

const EducationTopics = () => {
    return (
        <section className="w-full max-w-[1200px] mx-auto px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
            <div className="flex flex-col items-start text-left">
                <SectionTitle
                    subtitle="Education Topic"
                    title="Materi pembelajaran seputar polimer"
                    className="mb-4"
                />
            </div>
        </section>
    );
};

export default EducationTopics;