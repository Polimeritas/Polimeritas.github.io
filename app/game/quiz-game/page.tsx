"use client";

import React, { useState, useEffect, useCallback } from "react";
import Header from "@/components/layout/Header";
import PageHeader from "@/components/common/PageHeader";
import Footer from "@/components/layout/Footer";
import { quizQuestions, QuizQuestion as QuestionType } from "@/data/gameData";
import QuizQuestion from "@/components/game/QuizQuestion";
import QuizResult from "@/components/game/QuizResult";
import confetti from "canvas-confetti";

export default function QuizGamePage() {
    const [gameQuestions, setGameQuestions] = useState<QuestionType[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const startGame = useCallback(() => {
        setIsLoading(true);
        const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 10);

        setGameQuestions(selected);
        setCurrentIndex(0);
        setScore(0);
        setIsFinished(false);
        setIsLoading(false);
    }, []);

    useEffect(() => {
        startGame();
    }, [startGame]);

    const handleNextQuestion = (isCorrect: boolean) => {
        // Update Skor
        if (isCorrect) setScore((prev) => prev + 10);

        if (currentIndex < gameQuestions.length - 1) {
            setCurrentIndex((prev) => prev + 1);
            window.scrollTo({ top: 100, behavior: 'smooth' });
        } else {
            finishGame(isCorrect);
        }
    };

    const finishGame = (lastAnswerCorrect: boolean) => {
        const finalScore = score + (lastAnswerCorrect ? 10 : 0);
        setIsFinished(true);

        // Rayakan jika skor bagus (> 60)
        if (finalScore > 60) {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    };

    return (
        <main className="min-h-screen bg-gray-50">
            <Header />
            <PageHeader title="Quiz Challenge" activePage="Game" />

            <section className="w-full max-w-3xl mx-auto px-4 py-16">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 min-h-[500px]">

                    {/* Header Game Bar */}
                    <div className="bg-primary px-6 py-4 flex justify-between items-center">
                        <h3 className="font-bold text-dark text-lg">
                            {isFinished ? "Hasil Akhir" : "Uji Wawasanmu"}
                        </h3>
                        <div className="bg-white px-4 py-1 rounded-full font-bold text-dark shadow-sm text-sm">
                            Score: {score}
                        </div>
                    </div>

                    <div className="p-6 lg:p-10">
                        {isLoading ? (
                            <div className="flex justify-center items-center h-64">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                            </div>
                        ) : isFinished ? (
                            <QuizResult
                                score={score}
                                totalQuestions={gameQuestions.length}
                                onRetry={startGame}
                            />
                        ) : (
                            <QuizQuestion
                                data={gameQuestions[currentIndex]}
                                currentNum={currentIndex + 1}
                                totalNum={gameQuestions.length}
                                onNext={handleNextQuestion}
                            />
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}