"use client";

import React, { useState, useEffect, useCallback } from "react";
import Header from "@/components/layout/Header";
import PageHeader from "@/components/common/PageHeader";
import Footer from "@/components/layout/Footer";
import { quizQuestions, QuizQuestion as QuestionType } from "@/data/gameData";
import QuizQuestion from "@/components/game/QuizQuestion";
import QuizResult from "@/components/game/QuizResult";
import confetti from "canvas-confetti";

const shuffleAndPick = (questions: QuestionType[], count: number) => {
    return [...questions].sort(() => 0.5 - Math.random()).slice(0, count);
};

export default function QuizGamePage() {
    // State
    const [gameQuestions, setGameQuestions] = useState<QuestionType[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [gameState, setGameState] = useState<'loading' | 'playing' | 'finished'>('loading');

    // Start Game Logic
    const startGame = useCallback(() => {
        setGameState('loading');
        const selected = shuffleAndPick(quizQuestions, 10);
        setGameQuestions(selected);
        setCurrentIndex(0);
        setScore(0);

        setTimeout(() => setGameState('playing'), 300);
    }, []);

    // Initial Load
    useEffect(() => {
        startGame();
    }, [startGame]);

    // Handler
    const handleNextQuestion = (isCorrect: boolean) => {
        if (isCorrect) setScore((prev) => prev + 10);

        if (currentIndex < gameQuestions.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        } else {
            finishGame(isCorrect ? score + 10 : score);
        }
    };

    const finishGame = (finalScore: number) => {
        setGameState('finished');
        if (finalScore >= (gameQuestions.length * 10) * 0.5) {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    };

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <PageHeader title="Quiz Challenge" activePage="Game" />

            <section className="w-full px-4 py-10 lg:py-16 flex-grow container mx-auto">
                <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 min-h-[400px]">

                    {/* Game Header Bar */}
                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                        <h3 className="font-bold text-dark text-lg">
                            {gameState === 'finished' ? "Hasil Akhir" : "Uji Wawasan Polimer"}
                        </h3>
                        <div className="bg-white px-4 py-1 rounded-full font-bold text-primary shadow-sm text-sm border border-gray-100">
                            Score: {score}
                        </div>
                    </div>

                    <div className="p-6 lg:p-10">
                        {gameState === 'loading' ? (
                            <div className="flex flex-col justify-center items-center h-64 gap-4">
                                <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-primary"></div>
                                <p className="text-gray-400 text-sm font-semibold animate-pulse">Menyiapkan Pertanyaan...</p>
                            </div>
                        ) : gameState === 'finished' ? (
                            <QuizResult
                                score={score}
                                totalQuestions={gameQuestions.length}
                                onRetry={startGame}
                            />
                        ) : (
                            <QuizQuestion
                                key={gameQuestions[currentIndex].id}
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