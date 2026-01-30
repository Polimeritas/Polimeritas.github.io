"use client";

import React from "react";

const EducationCarousel = () => {
    return (
        <section className="w-full py-10 flex justify-center items-center bg-white">
            <div className="relative w-full max-w-[1200px] aspect-[2/1] shadow-lg overflow-hidden">
                <iframe
                    loading="lazy"
                    className="absolute top-0 left-0 w-full h-full border-0"
                    src="https://www.canva.com/design/DAGee8Hf9ms/VQaEfGJLsrHX-DogdJad6Q/watch?embed"
                    allowFullScreen
                    allow="fullscreen"
                    title="Education Presentation"
                ></iframe>
            </div>
        </section>
    );
};

export default EducationCarousel;