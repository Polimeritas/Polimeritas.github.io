"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const ACHIEVEMENT_DATA = [
    {
        id: 1,
        target: 8,
        suffix: "",
        label: "Years\nExperience",
    },
    {
        id: 2,
        target: 100,
        suffix: "+",
        label: "Partnerships",
    },
    {
        id: 3,
        target: 300,
        suffix: "+",
        label: "Volunteer",
    },
];

interface AnimatedCounterProps {
    target: number;
    suffix: string;
    duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ target, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!inView) return;

        let startTime: number | null = null;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            const easeOutProgress = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutProgress * target));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [inView, target, duration]);

    return (
        <div ref={ref} className="text-6xl lg:text-[80px] font-bold text-primary mb-4 lg:mb-6 tabular-nums tracking-tighter">
            {count}{suffix}
        </div>
    );
};

const Achievement = () => {
    return (
        <section className="w-full bg-secondary py-20 lg:py-32 flex justify-center items-center relative overflow-hidden">

            <div className="w-full max-w-6xl mx-auto px-6 lg:px-8 relative z-10">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 lg:mb-8 tracking-wide">
                        Our Achievement
                    </h2>
                    <p className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed lg:leading-loose">
                        Polimeritas adalah komunitas yang bekerja sama untuk memajukan masyarakat
                        yang ahli, produktif dan inovatif untuk mendukung Indonesia yang lebih baik di
                        bidang polimer. Sejak 2018 kami menjangkau:
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
                    {ACHIEVEMENT_DATA.map((item) => (
                        <div
                            key={item.id}
                            className={cn(
                                "flex flex-col items-center justify-center text-center",
                                "border border-white/40 rounded-[32px] p-10 lg:p-14",
                                "bg-white/5 backdrop-blur-sm transition-all duration-300",
                                "hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl hover:border-white/60" // Efek interaktif tambahan
                            )}
                        >
                            <AnimatedCounter target={item.target} suffix={item.suffix} />

                            <p className="text-white text-lg lg:text-xl font-medium whitespace-pre-line leading-snug">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Achievement;
