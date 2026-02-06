"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { typingSentences } from "@/data/gameData";
import GameResultModal from "@/components/game/GameResultModal";
import FloatingFeedback, { FeedbackItem } from "./FloatingFeedback";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils";

const INITIAL_TIME = 120;
const TIME_BONUS = 20;

export default function TypingEngine() {
    // Game State
    const [gameState, setGameState] = useState<'idle' | 'playing' | 'gameover'>('idle');
    const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
    const [level, setLevel] = useState(1);
    const [score, setScore] = useState(0);

    // Fever Mode State
    const [isFeverMode, setIsFeverMode] = useState(false);

    // Typing Logic State
    const [targetSentence, setTargetSentence] = useState<string[]>([]);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [userInput, setUserInput] = useState("");

    // Streak State
    const [streak, setStreak] = useState(0);
    const [maxStreak, setMaxStreak] = useState(0);

    // Visual Effects
    const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    // Sentence Generator
    const generateSentence = useCallback(() => {
        const randomIndex = Math.floor(Math.random() * typingSentences.length);
        const sentence = typingSentences[randomIndex];
        setTargetSentence(sentence.split(" "));
        setCurrentWordIndex(0);
        setUserInput("");
    }, []);

    // Game Control
    const startGame = () => {
        setScore(0);
        setLevel(1);
        setStreak(0);
        setMaxStreak(0);
        setTimeLeft(INITIAL_TIME);
        setIsFeverMode(false);
        generateSentence();
        setGameState('playing');
        setTimeout(() => inputRef.current?.focus(), 100);
    };

    // Timer 
    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;

        if (gameState === 'playing' && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0 && gameState === 'playing') {
            setGameState('gameover');
        }

        return () => clearInterval(interval);
    }, [gameState, timeLeft]);

    // VISUAL FEEDBACK
    const triggerFeedback = (text: string, type: FeedbackItem['type']) => {
        const id = Date.now() + Math.random();
        const xPos = 30 + Math.random() * 40;

        setFeedbacks((prev) => [...prev, { id, text, type, xPos }]);

        setTimeout(() => {
            setFeedbacks((prev) => prev.filter((item) => item.id !== id));
        }, 800);
    };

    // Input Handler
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (gameState !== 'playing') return;

        const value = e.target.value;
        if (value.endsWith(" ")) {
            const wordToCheck = value.trim();
            if (wordToCheck.length === 0) {
                setUserInput("");
                return;
            }

            const targetWord = targetSentence[currentWordIndex];

            if (wordToCheck === targetWord) {
                const wordPoints = 10 * level + (streak > 5 ? 5 : 0);
                setScore((prev) => prev + wordPoints);

                setStreak((prev) => {
                    const newStreak = prev + 1;
                    if (newStreak > maxStreak) setMaxStreak(newStreak);

                    if (newStreak % 5 === 0) triggerFeedback(`${newStreak} STREAK!`, 'streak');
                    else triggerFeedback("+10", 'success');

                    if (newStreak === 10) setIsFeverMode(true);

                    return newStreak;
                });

                setUserInput("");

                if (currentWordIndex === targetSentence.length - 1) {
                    setLevel((prev) => prev + 1);
                    setTimeLeft((prev) => prev + TIME_BONUS);
                    triggerFeedback("LEVEL UP! +TIME", 'combo');
                    generateSentence();
                } else {
                    setCurrentWordIndex((prev) => prev + 1);
                }

            } else {
                setStreak(0);
                setIsFeverMode(false);
            }
        } else {
            setUserInput(value);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto min-h-[500px] flex flex-col relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">

            <FloatingFeedback items={feedbacks} />

            {/* Header Stats */}
            <div className={cn(
                "flex justify-between items-center p-6 border-b transition-colors duration-500",
                isFeverMode ? "bg-orange-50 border-orange-200" : "bg-gray-50 border-gray-100"
            )}>
                <div className="text-center w-1/3">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Waktu</p>
                    <p className={cn("text-3xl font-black tabular-nums", timeLeft <= 10 ? "text-red-500 animate-pulse" : "text-dark")}>
                        {timeLeft}s
                    </p>
                </div>

                {/* Streak Indicator */}
                <div className="text-center w-1/3">
                    {streak > 2 && (
                        <div className={cn("inline-flex items-center gap-2 px-4 py-1 rounded-full font-bold animate-bounce",
                            isFeverMode ? "bg-orange-500 text-white shadow-orange-300 shadow-lg" : "bg-gray-200 text-gray-600"
                        )}>
                            <FontAwesomeIcon icon={faFire} className={isFeverMode ? "animate-pulse" : ""} />
                            <span>{streak} Streak</span>
                        </div>
                    )}
                </div>

                <div className="text-center w-1/3">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Skor</p>
                    <p className="text-3xl font-black text-primary tabular-nums">{score}</p>
                </div>
            </div>

            {/* Game Area */}
            <div className="flex-1 flex flex-col items-center justify-center p-8 lg:p-12 relative z-0">
                <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-2xl leading-relaxed transition-all">
                    {targetSentence.map((word, index) => {
                        let styleClass = "text-gray-300";

                        if (index < currentWordIndex) {
                            styleClass = "text-primary font-bold";
                        } else if (index === currentWordIndex) {
                            styleClass = "text-dark font-black scale-110 bg-gray-100 px-2 rounded";
                        }

                        return (
                            <span key={index} className={`text-2xl lg:text-3xl transition-all duration-200 ${styleClass}`}>
                                {word}
                            </span>
                        );
                    })}
                </div>

                {/* Input Field */}
                <div className="relative w-full max-w-lg">
                    <input
                        ref={inputRef}
                        type="text"
                        value={userInput}
                        onChange={handleInput}
                        disabled={gameState !== 'playing'}
                        placeholder={gameState === 'playing' ? (isFeverMode ? "KEEP THE FIRE BURNING!" : "Ketik di sini...") : ""}
                        className={cn(
                            "w-full text-center text-2xl p-4 border-b-4 focus:outline-none bg-transparent transition-all font-bold placeholder:font-normal",
                            isFeverMode
                                ? "border-orange-500 text-orange-900 placeholder:text-orange-300 focus:border-orange-600"
                                : "border-gray-200 text-dark placeholder:text-gray-300 focus:border-primary",
                            gameState !== 'playing' && "opacity-50 cursor-not-allowed"
                        )}
                        autoComplete="off"
                        autoCorrect="off"
                        spellCheck="false"
                    />
                    {/* Focus Hint Icon */}
                    {gameState === 'playing' && (
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none">
                            <FontAwesomeIcon icon={faKeyboard} />
                        </div>
                    )}
                </div>

                {gameState === 'playing' && (
                    <p className="mt-8 text-gray-400 text-sm animate-fade-in flex items-center gap-2">
                        Tekan <span className="font-bold border px-2 py-0.5 rounded bg-gray-100 text-dark text-xs">SPASI</span> setelah setiap kata
                    </p>
                )}
            </div>

            {/* MODALS */}
            {gameState === 'idle' && (
                <GameResultModal
                    type="start"
                    title="Typing Challenge"
                    description="Ketik kata yang muncul secepat dan setepat mungkin. Waktu: 120 Detik."
                    actionLabel="Mulai Mengetik"
                    onAction={startGame}
                />
            )}

            {gameState === 'gameover' && (
                <GameResultModal
                    type={score > 500 ? 'success' : 'gameover'}
                    title={score > 500 ? "Jari Kilat!" : "Waktu Habis!"}
                    description="Permainan selesai! Latihan terus agar ketikanmu makin cepat."
                    stats={[
                        { label: "Total Skor", value: score, color: "text-primary" },
                        { label: "Level Dicapai", value: level, color: "text-blue-500" },
                        { label: "Max Streak", value: maxStreak, color: "text-orange-500" }
                    ]}
                    actionLabel="Main Lagi"
                    onAction={startGame}
                />
            )}
        </div>
    );
}