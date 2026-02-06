"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo, faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface QuizResultProps {
    score: number;
    totalQuestions: number;
    onRetry: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({ score, totalQuestions, onRetry }) => {
    const maxScore = totalQuestions * 10;
    const percentage = Math.round((score / maxScore) * 100);

    const getResultContent = (pct: number) => {
        if (pct === 100) return { emoji: "🏆", msg: "Sempurna! Kamu ahli Polimer!", color: "text-primary" };
        if (pct >= 80) return { emoji: "🥇", msg: "Hebat! Pengetahuanmu luas!", color: "text-blue-500" };
        if (pct >= 50) return { emoji: "🎓", msg: "Bagus! Terus belajar lagi ya.", color: "text-yellow-500" };
        return { emoji: "💪", msg: "Jangan menyerah! Coba lagi yuk.", color: "text-gray-500" };
    };

    const { emoji, msg, color } = getResultContent(percentage);

    return (
        <div className="text-center py-10 animate-fade-in-up max-w-lg mx-auto">
            <div className="text-8xl mb-4 animate-bounce filter drop-shadow-lg">{emoji}</div>

            <h2 className="text-3xl font-bold text-dark mb-2">Quiz Selesai!</h2>
            <p className="text-gray-500 mb-8 font-medium">{msg}</p>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8 transform transition-transform hover:scale-105">
                <div className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-2">Total Skor</div>
                <div className={cn("text-6xl font-black mb-2", color)}>{score}</div>
                <div className="text-gray-400 font-medium">dari {maxScore} poin</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                    onClick={onRetry}
                    className="bg-dark text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition-colors shadow-lg flex items-center justify-center gap-2 group"
                >
                    <FontAwesomeIcon icon={faRedo} className="group-hover:rotate-180 transition-transform duration-500" />
                    <span>Main Lagi</span>
                </button>

                <Link
                    href="/"
                    className="bg-gray-100 text-dark font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                    <FontAwesomeIcon icon={faHome} />
                    <span>Kembali ke Homepage</span>
                </Link>
            </div>
        </div>
    );
};

export default QuizResult;