"use client";

import React from "react";

const PartnerCarousel = () => {
    return (
        <section className="w-full py-10 lg:py-16 bg-gray-50 flex justify-center">
            <div className="w-full max-w-[1200px] px-4">

                <div className="rounded-xl overflow-hidden shadow-2xl h-[300px] md:h-[500px] lg:h-[600px] bg-white relative">

                    <iframe
                        loading="lazy"
                        className="absolute top-0 left-0 w-full h-full border-none"
                        src="https://www.canva.com/design/DAGfPP1i25A/zwmP8v6I1avkfZaRqQktJw/view?embed"
                        allowFullScreen
                        allow="fullscreen"
                    ></iframe>

                </div>
            </div>
        </section>
    );
};

export default PartnerCarousel;