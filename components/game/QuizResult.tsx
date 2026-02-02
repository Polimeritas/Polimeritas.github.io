"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo, faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface QuizResultProps {
    score: number;
    totalQuestions: number;
    onRetry: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({ score, totalQuestions, onRetry }) => {
    const percentage = Math.round((score / (totalQuestions * 10)) * 100);

    let message = "";
    let emoji = "";

    if (percentage === 100) {
        message = "Sempurna! Kamu ahli Polimer!";
        emoji = "🏆";
    } else if (percentage >= 80) {
        message = "Hebat! Pengetahuanmu luas!";
        emoji = "🌟";
    } else if (percentage >= 50) {
        message = "Bagus! Terus belajar lagi ya.";
        emoji = "👍";
    } else {
        message = "Jangan menyerah! Coba lagi yuk.";
        emoji = "💪";
    }

    return (
        <div className="text-center py-10 animate-fade-in-up max-w-lg mx-auto">
            <div className="text-8xl mb-4 animate-bounce">{emoji}</div>

            <h2 className="text-3xl font-bold text-dark mb-2">Quiz Selesai!</h2>
            <p className="text-gray-500 mb-8">{message}</p>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
                <div className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-2">Total Skor</div>
                <div className="text-6xl font-black text-primary mb-2">{score}</div>
                <div className="text-gray-400 font-medium">dari {totalQuestions * 10} poin</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                    onClick={onRetry}
                    className="bg-dark text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                    <FontAwesomeIcon icon={faRedo} />
                    <span>Main Lagi</span>
                </button>

                <Link
                    href="/"
                    className="bg-gray-100 text-dark font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                    <FontAwesomeIcon icon={faHome} />
                    <span>Kembali ke Home</span>
                </Link>
            </div>
        </div>
    );
};

export default QuizResult;