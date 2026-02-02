"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { typingSentences } from "@/data/gameData";
import TypingModal from "./TypingModal";
import FloatingFeedback, { FeedbackItem } from "./FloatingFeedback";

const INITIAL_TIME = 120;
const TIME_BONUS = 20;

export default function TypingEngine() {
    // Game State
    const [gameState, setGameState] = useState<'idle' | 'playing' | 'gameover'>('idle');
    const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
    const [level, setLevel] = useState(1);
    const [score, setScore] = useState(0);

    const [targetSentence, setTargetSentence] = useState<string[]>([]);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [userInput, setUserInput] = useState("");

    const [streak, setStreak] = useState(0);
    const [maxStreak, setMaxStreak] = useState(0);

    const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const loadNewSentence = useCallback(() => {
        const randomSentence = typingSentences[Math.floor(Math.random() * typingSentences.length)];
        setTargetSentence(randomSentence.split(" "));
        setCurrentWordIndex(0);
        setUserInput("");
    }, []);

    const startGame = () => {
        setGameState('playing');
        setTimeLeft(INITIAL_TIME);
        setLevel(1);
        setScore(0);
        setStreak(0);
        setMaxStreak(0);
        loadNewSentence();
        setTimeout(() => inputRef.current?.focus(), 100);
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (gameState === 'playing' && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0 && gameState === 'playing') {
            setGameState('gameover');
        }
        return () => clearInterval(interval);

    }, [gameState, timeLeft, setGameState]);

    // --- FEEDBACK VISUAL HELPER ---
    const triggerFeedback = (text: string, type: 'success' | 'streak' | 'combo') => {
        const id = Date.now() + Math.random();

        const randomX = 50 + (Math.random() * 20 - 10);

        setFeedbacks(prev => [...prev, {
            id,
            text,
            type,
            xPos: randomX
        }]);

        setTimeout(() => {
            setFeedbacks(prev => prev.filter(item => item.id !== id));
        }, 800);
    };

    // --- INPUT HANDLER  ---
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;

        if (val.endsWith(" ")) {
            const wordTyped = val.trim();
            const targetWord = targetSentence[currentWordIndex];

            if (wordTyped === targetWord) {
                const newStreak = streak + 1;
                setStreak(newStreak);
                if (newStreak > maxStreak) setMaxStreak(newStreak);

                const bonus = Math.floor(newStreak / 5) * 5;
                setScore(prev => prev + 10 + bonus);

                // Feedback Visual
                if (newStreak % 10 === 0) triggerFeedback(`${newStreak} STREAK!`, 'combo');
                else if (newStreak % 5 === 0) triggerFeedback("HEBAT!", 'streak');
                else triggerFeedback("BENAR!", 'success');

                setUserInput("");

                if (currentWordIndex + 1 >= targetSentence.length) {
                    setLevel(prev => prev + 1);
                    setTimeLeft(prev => prev + TIME_BONUS);
                    triggerFeedback("LEVEL UP! +20s", 'combo');
                    loadNewSentence();
                } else {
                    setCurrentWordIndex(prev => prev + 1);
                }

            } else {
                setStreak(0);
                setUserInput(val);
            }
        } else {
            setUserInput(val);
        }
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto min-h-[500px] flex flex-col">

            <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-8">
                <div className="text-center">
                    <p className="text-xs text-gray-400 font-bold uppercase">Level</p>
                    <p className="text-2xl font-black text-purple-600">{level}</p>
                </div>
                <div className="text-center flex-1">
                    <p className="text-xs text-gray-400 font-bold uppercase">Waktu</p>
                    <p className={`text-4xl font-black ${timeLeft < 10 ? 'text-red-500 animate-pulse' : 'text-dark'}`}>
                        {timeLeft}s
                    </p>
                </div>
                <div className="text-center">
                    <p className="text-xs text-gray-400 font-bold uppercase">Skor</p>
                    <p className="text-2xl font-black text-primary">{score}</p>
                </div>
            </div>

            {/* GAME AREA */}
            <div className="relative flex-grow bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-8 flex flex-col items-center justify-center overflow-hidden">

                <FloatingFeedback items={feedbacks} />

                {/* Streak Counter */}
                {streak > 1 && (
                    <div className="absolute top-4 right-6 text-orange-500 font-bold italic animate-pulse">
                        🔥 {streak} Streak
                    </div>
                )}

                {/* Kata-kata Target */}
                <div className="flex flex-wrap justify-center gap-3 mb-10 text-xl lg:text-3xl font-medium leading-relaxed transition-all">
                    {targetSentence.map((word, idx) => {
                        let colorClass = "text-gray-300";
                        if (idx < currentWordIndex) colorClass = "text-green-500 opacity-50";
                        if (idx === currentWordIndex) colorClass = "text-dark bg-yellow-100 px-2 rounded scale-110 shadow-sm border border-primary";

                        return (
                            <span key={idx} className={`${colorClass} transition-all duration-300`}>
                                {word}
                            </span>
                        );
                    })}
                </div>

                <input
                    ref={inputRef}
                    type="text"
                    value={userInput}
                    onChange={handleInput}
                    disabled={gameState !== 'playing'}
                    placeholder={gameState === 'playing' ? "Ketik di sini..." : "Siap?"}
                    className="w-full max-w-lg text-center text-2xl p-4 border-b-4 border-gray-200 focus:border-primary focus:outline-none bg-transparent transition-colors font-bold text-dark placeholder:font-normal placeholder:text-gray-300"
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck="false"
                />
                <p className="mt-4 text-gray-400 text-sm">Tekan <span className="font-bold border px-1 rounded">SPASI</span> setelah mengetik kata</p>

            </div>

            {/* MODALS */}
            {gameState === 'idle' && (
                <TypingModal type="start" onAction={startGame} />
            )}

            {gameState === 'gameover' && (
                <TypingModal
                    type="gameover"
                    score={score}
                    level={level}
                    maxStreak={maxStreak}
                    onAction={startGame}
                />
            )}
        </div>
    );
}