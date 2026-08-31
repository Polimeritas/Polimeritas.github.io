"use client";

import React, { useState, useEffect, useCallback } from "react";
import confetti from "canvas-confetti";
import { polymerMatchData } from "@/data/gameData";

type CardType = {
    id: string;
    pairId: number;
    kind: "Monomer" | "Polymer" | "Application";
    title: string;
    formula: string;
    app: string;
    status: "idle" | "selected" | "correct" | "wrong";
};

const shuffle = <T,>(array: T[]): T[] => [...array].sort(() => Math.random() - 0.5);

export default function MatchGameClient() {
    const [cards, setCards] = useState<CardType[]>([]);
    const [selected, setSelected] = useState<CardType[]>([]);
    const [score, setScore] = useState(0);
    const [combo, setCombo] = useState(0);
    const [round, setRound] = useState(1);
    const [time, setTime] = useState(60);
    const [difficulty, setDifficulty] = useState<"easy" | "normal" | "expert">("normal");
    const [gameState, setGameState] = useState<"idle" | "playing" | "gameover">("idle");
    const [message, setMessage] = useState("Pilih kartu yang membentuk kombinasi.");
    const [locked, setLocked] = useState(false);

    // Generate Cards Algorithm
    const makeCards = useCallback((diff: "easy" | "normal" | "expert") => {
        const poolLimit = diff === "easy" || diff === "normal" ? 6 : 7;
        const pool = shuffle(polymerMatchData).slice(0, poolLimit);

        const newCards: CardType[] = [];

        pool.forEach((x, i) => {
            newCards.push({ id: `m${i}`, pairId: i, kind: "Monomer", title: x.m, formula: x.mf, app: "", status: "idle" });
            newCards.push({ id: `p${i}`, pairId: i, kind: "Polymer", title: x.p, formula: x.pf, app: "", status: "idle" });
            if (diff !== "easy") {
                newCards.push({ id: `a${i}`, pairId: i, kind: "Application", title: x.a, formula: "", app: `Cocok dengan ${x.p}`, status: "idle" });
            }
        });
        return shuffle(newCards);
    }, []);

    const startGame = useCallback(() => {
        setScore(0);
        setCombo(0);
        setRound(1);
        setTime(60);
        setLocked(false);
        setSelected([]);
        setCards(makeCards(difficulty));
        setGameState("playing");
        setMessage("Pilih kartu yang membentuk pasangan/kombinasi.");
    }, [difficulty, makeCards]);

    // Timer Logic
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (gameState === "playing" && time > 0) {
            timer = setInterval(() => setTime((prev) => prev - 1), 1000);
        } else if (time <= 0 && gameState === "playing") {
            setGameState("gameover");
            if (score >= 20) confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
        }
        return () => clearInterval(timer);
    }, [gameState, time, score]);

    // Handle Card Click
    const handlePick = (card: CardType) => {
        if (locked || card.status === "correct" || selected.find((c) => c.id === card.id) || gameState !== "playing") return;

        const newSelected = [...selected, card];
        setSelected(newSelected);

        setCards(prev => prev.map(c => c.id === card.id ? { ...c, status: "selected" } : c));

        const requiredCards = difficulty === "easy" ? 2 : 3;

        if (newSelected.length === requiredCards) checkMatch(newSelected);
    };

    // Validation Logic
    const checkMatch = (currentSelected: CardType[]) => {
        setLocked(true);
        const pairs = currentSelected.map(x => x.pairId);
        const isSamePair = pairs.every(x => x === pairs[0]);
        const kinds = new Set(currentSelected.map(x => x.kind));

        const isValid = isSamePair && (difficulty === "easy" ? kinds.has("Monomer") && kinds.has("Polymer") : kinds.size === 3);

        if (isValid) {
            const points = difficulty === "expert" ? 7 : difficulty === "normal" ? 5 : 3;
            setCombo(prev => prev + 1);
            setScore(prev => prev + points);
            setMessage(`✅ Benar! +${points} poin`);

            setCards(prev => prev.map(c => currentSelected.find(s => s.id === c.id) ? { ...c, status: "correct" } : c));

            setTimeout(() => {
                setCards(prev => {
                    const remaining = prev.filter(c => c.status !== "correct");
                    if (remaining.length === 0) {
                        setRound(r => r + 1);
                        setMessage("🔥 Ronde baru! Temukan kombinasi yang benar.");
                        return makeCards(difficulty);
                    }
                    return remaining;
                });
                setSelected([]);
                setLocked(false);
            }, 600);
        } else {
            setCombo(0);
            setScore(prev => Math.max(0, prev - 1));
            setMessage("❌ Belum tepat. -1 poin");

            setCards(prev => prev.map(c => currentSelected.find(s => s.id === c.id) ? { ...c, status: "wrong" } : c));

            setTimeout(() => {
                setCards(prev => prev.map(c => currentSelected.find(s => s.id === c.id) ? { ...c, status: "idle" } : c));
                setSelected([]);
                setLocked(false);
            }, 700);
        }
    };

    if (gameState === "idle") {
        return (
            <div className="flex flex-col justify-center items-center h-64 gap-6">
                <button onClick={startGame} className="bg-secondary text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-opacity-90 shadow-lg hover:-translate-y-1 transition-all">
                    Mulai Main Sekarang
                </button>
            </div>
        );
    }

    if (gameState === "gameover") {
        return (
            <div className="flex flex-col justify-center items-center text-center py-10">
                <h2 className="text-3xl font-extrabold text-black mb-4">🏆 Game Over!</h2>
                <p className="text-lg text-gray-600 mb-2">Skor akhir kamu: <strong className="text-primary text-2xl">{score}</strong></p>
                <p className="text-md text-gray-500 mb-8">Berhasil mencapai Ronde {round}</p>
                <button onClick={startGame} className="bg-secondary text-white px-8 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-md">
                    Main Lagi
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[{ label: "Skor", val: score }, { label: "Ronde", val: round }, { label: "Combo", val: combo }, { label: "Waktu", val: `${time}s` }].map((s, i) => (
                    <div key={i} className="bg-gray-50 border border-gray-100 p-4 rounded-xl text-center shadow-sm">
                        <p className="text-gray-500 text-sm font-semibold">{s.label}</p>
                        <p className="text-2xl font-black text-primary mt-1">{s.val}</p>
                    </div>
                ))}
            </div>

            {/* Controls & Progress */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <select
                    value={difficulty}
                    onChange={(e) => { setDifficulty(e.target.value as "easy" | "normal" | "expert"); startGame(); }}
                    className="w-full md:w-auto bg-gray-50 border-gray-200 rounded-lg p-2 font-semibold outline-none"
                >
                    <option value="easy">Beginner (Monomer + Polymer)</option>
                    <option value="normal">Intermediate (3 Kartu)</option>
                    <option value="expert">Expert (Struktur)</option>
                </select>

                <div className="flex-grow w-full md:w-1/2 h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-primary transition-all duration-1000 ease-linear" style={{ width: `${(time / 60) * 100}%` }}></div>
                </div>
            </div>

            {/* Message Bar */}
            <div className="text-center font-bold text-lg text-secondary min-h-[28px] transition-all">
                {message}
            </div>

            {/* Game Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {cards.map((c) => (
                    <div
                        key={c.id}
                        onClick={() => handlePick(c)}
                        className={`relative flex flex-col items-center justify-center p-6 min-h-[180px] rounded-2xl border-2 cursor-pointer transition-all duration-300 select-none
                            ${c.status === "idle" ? "bg-white border-gray-200 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg" : ""}
                            ${c.status === "selected" ? "border-primary bg-blue-50 shadow-[0_0_0_4px_rgba(37,99,235,0.15)] scale-105" : ""}
                            ${c.status === "correct" ? "border-green-500 bg-green-50 scale-95 opacity-50" : ""}
                            ${c.status === "wrong" ? "border-red-500 bg-red-50 animate-pulse" : ""}
                        `}
                    >
                        <span className="absolute top-3 left-3 text-[10px] uppercase font-black tracking-wider px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                            {c.kind}
                        </span>
                        <div className="text-xl font-bold font-serif text-center mt-4 text-black">{c.formula || "🔬"}</div>
                        <div className="text-md font-bold mt-2 text-center">{c.title}</div>
                        {c.app && <div className="text-xs text-gray-500 mt-2 text-center">{c.app}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
}