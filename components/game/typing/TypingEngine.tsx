"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { typingSentences } from "@/data/gameData";
import TypingModal from "./TypingModal";
import FloatingFeedback, { FeedbackItem } from "./FloatingFeedback";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faFire } from "@fortawesome/free-solid-svg-icons";

const INITIAL_TIME = 120;
const TIME_BONUS = 20;

export default function TypingEngine() {
    // Game State
    const [gameState, setGameState] = useState<'idle' | 'playing' | 'gameover'>('idle');
    const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
    const [level, setLevel] = useState(1);
    const [score, setScore] = useState(0);

    // NEW: Fever Mode State
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

    // --- INITIALIZE GAME ---
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
        setIsFeverMode(false);
        loadNewSentence();
        setTimeout(() => inputRef.current?.focus(), 100);
    };

    // --- TIMER LOGIC ---
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (gameState === 'playing' && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0 && gameState === 'playing') {
            setGameState('gameover');
            setIsFeverMode(false);
        }
        return () => clearInterval(interval);
    }, [gameState, timeLeft]);

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

    // --- INPUT HANDLER ---
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        const targetWord = targetSentence[currentWordIndex];
        const isLastWord = currentWordIndex === targetSentence.length - 1;

        const isWordFinished = val.endsWith(" ") || (isLastWord && val === targetWord);

        if (isWordFinished) {
            const wordTyped = val.trim();

            if (wordTyped === targetWord) {
                const newStreak = streak + 1;
                setStreak(newStreak);
                if (newStreak > maxStreak) setMaxStreak(newStreak);

                if (newStreak >= 10 && !isFeverMode) {
                    setIsFeverMode(true);
                    triggerFeedback("FEVER MODE ACTIVATED!", 'combo');
                }

                const bonus = Math.floor(newStreak / 5) * 5;
                const multiplier = isFeverMode ? 2 : 1;
                const pointsEarned = (10 + bonus) * multiplier;

                const newScore = score + pointsEarned;
                setScore(newScore);

                if (newStreak % 10 === 0) triggerFeedback(`${newStreak} STREAK! 🔥`, 'combo');
                else if (newStreak % 5 === 0) triggerFeedback("HEBAT!", 'streak');
                else triggerFeedback(isFeverMode ? "DOUBLE POINT!" : "BENAR!", 'success');

                setUserInput("");

                if (isLastWord) {
                    const scoreNeeded = level * 200 + (level * level * 50);

                    if (newScore >= scoreNeeded) {
                        setLevel(prev => prev + 1);
                        setTimeLeft(prev => prev + TIME_BONUS);
                        triggerFeedback("LEVEL UP! +20s", 'combo');
                    }

                    loadNewSentence();
                } else {
                    setCurrentWordIndex(prev => prev + 1);
                }

            } else {
                setStreak(0);
                setIsFeverMode(false);

                if (val.endsWith(" ")) {
                    setUserInput(val);
                } else {
                    setUserInput(val);
                }
            }
        } else {
            setUserInput(val);
        }
    };

    return (
        <div
            className={`
                relative w-full max-w-4xl mx-auto min-h-[500px] flex flex-col rounded-3xl overflow-hidden transition-all duration-500
                ${isFeverMode
                    ? 'bg-orange-50 border-4 border-orange-500 shadow-[0_0_50px_rgba(249,115,22,0.6)] scale-[1.02]'
                    : 'bg-white border border-gray-100 shadow-xl'
                }
            `}
        >

            {gameState === 'idle' && (
                <div className="absolute inset-0 z-50 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center animate-fade-in">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-6 animate-pulse">
                        <span className="text-6xl">⌨️</span>
                    </div>

                    <h2 className="text-3xl lg:text-5xl font-black text-dark mb-4 uppercase tracking-tight">
                        Typing Challenge
                    </h2>

                    <p className="text-gray-500 text-lg max-w-md mb-8 leading-relaxed">
                        Ketik kalimat secepat mungkin! Raih <strong>10 Streak</strong> untuk mengaktifkan <strong>Fever Mode (2x Score)</strong>.
                    </p>

                    <button
                        onClick={startGame}
                        className="group px-10 py-4 bg-primary text-dark font-black text-xl rounded-full shadow-lg hover:shadow-xl hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1 flex items-center gap-3"
                    >
                        <FontAwesomeIcon icon={faPlay} />
                        <span>MULAI GAME</span>
                    </button>
                </div>
            )}

            {/* HEADER STATS */}
            <div className={`flex justify-between items-center p-6 border-b transition-colors duration-300 ${isFeverMode ? 'bg-orange-100 border-orange-200' : 'bg-gray-50 border-gray-100'}`}>
                <div className="text-center">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Level</p>
                    <p className="text-2xl font-black text-purple-600">{level}</p>
                </div>
                <div className="text-center flex-1">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Waktu</p>
                    <p className={`text-4xl font-black ${timeLeft < 10 ? 'text-red-500 animate-pulse' : 'text-dark'}`}>
                        {timeLeft}s
                    </p>
                </div>
                <div className="text-center">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Skor</p>
                    <div className={`text-2xl font-black transition-transform duration-200 ${isFeverMode ? 'text-orange-600 scale-110' : 'text-primary'}`}>
                        {score}
                    </div>
                </div>
            </div>

            {/* GAME AREA */}
            <div className="relative flex-grow p-8 flex flex-col items-center justify-center">

                <FloatingFeedback items={feedbacks} />

                {/* Streak Counter & Fever Indicator */}
                <div className="absolute top-4 right-6 flex flex-col items-end">
                    {streak > 1 && (
                        <div className={`font-bold italic animate-pulse ${isFeverMode ? 'text-orange-600 text-2xl' : 'text-orange-400'}`}>
                            🔥 {streak} Streak
                        </div>
                    )}
                    {isFeverMode && (
                        <div className="text-orange-500 font-black text-sm tracking-widest border border-orange-500 px-2 py-1 rounded bg-orange-100 mt-1 animate-bounce">
                            FEVER MODE x2
                        </div>
                    )}
                </div>

                {/* Kata-kata Target */}
                <div className="flex flex-wrap justify-center gap-3 mb-10 text-xl lg:text-3xl font-medium leading-relaxed transition-all">
                    {targetSentence.map((word, idx) => {
                        let colorClass = "text-gray-300";
                        if (idx < currentWordIndex) colorClass = "text-green-500 opacity-50";
                        if (idx === currentWordIndex) {
                            colorClass = isFeverMode
                                ? "text-dark bg-orange-200 px-2 rounded scale-110 shadow-[0_0_15px_rgba(255,165,0,0.5)] border border-orange-500"
                                : "text-dark bg-yellow-100 px-2 rounded scale-110 shadow-sm border border-primary";
                        }

                        return (
                            <span key={idx} className={`${colorClass} transition-all duration-300`}>
                                {word}
                            </span>
                        );
                    })}
                </div>

                {/* Input Field */}
                <input
                    ref={inputRef}
                    type="text"
                    value={userInput}
                    onChange={handleInput}
                    disabled={gameState !== 'playing'}
                    placeholder={gameState === 'playing' ? (isFeverMode ? "KEEP THE FIRE BURNING!" : "Ketik di sini...") : ""}
                    className={`
                        w-full max-w-lg text-center text-2xl p-4 border-b-4 focus:outline-none bg-transparent transition-all font-bold placeholder:font-normal
                        ${isFeverMode
                            ? 'border-orange-500 text-orange-900 placeholder:text-orange-300 focus:border-orange-600'
                            : 'border-gray-200 text-dark placeholder:text-gray-300 focus:border-primary'
                        }
                    `}
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck="false"
                />

                {gameState === 'playing' && (
                    <p className="mt-4 text-gray-400 text-sm animate-fade-in">
                        Tekan <span className="font-bold border px-1 rounded bg-gray-100">SPASI</span> setelah mengetik kata
                    </p>
                )}

            </div>

            {/* GAME OVER MODAL */}
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