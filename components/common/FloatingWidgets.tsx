"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils";

const FloatingWidgets = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {/* Help/Contact Button */}
            <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="fixed bottom-24 right-8 z-[99] w-12 h-12 bg-[#33b5e5] text-white flex items-center justify-center rounded-full shadow-lg hover:bg-[#0099cc] transition-transform hover:scale-110 animate-bounce-slow"
                title="Info lebih lanjut"
                aria-label="Info lebih lanjut"
            >
                <FontAwesomeIcon icon={faQuestion} size="lg" />
            </a>

            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                className={cn(
                    "fixed bottom-8 right-8 z-[99] w-10 h-10 lg:w-12 lg:h-12 bg-primary text-dark flex items-center justify-center rounded shadow-lg hover:bg-secondary hover:text-white transition-all duration-300",
                    isVisible ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-10"
                )}
                aria-label="Scroll to top"
            >
                <FontAwesomeIcon icon={faAngleDoubleUp} />
            </button>
        </>
    );
};

export default FloatingWidgets;