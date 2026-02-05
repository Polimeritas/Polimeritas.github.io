"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
    DndContext,
    useDraggable,
    useDroppable,
    DragOverlay,
    TouchSensor,
    MouseSensor,
    useSensor,
    useSensors,
    DragStartEvent,
    DragEndEvent
} from "@dnd-kit/core";
import confetti from "canvas-confetti";
import { sortingItems } from "@/data/gameData";
import GameResultModal from "@/components/game/GameResultModal";
import { cn } from "@/lib/utils";

// CONSTANTS
const GAME_DURATION = 30;

// UTILS
const shuffleArray = (array: typeof sortingItems) => {
    return [...array].sort(() => Math.random() - 0.5);
};

// SUB-COMPONENTS
const DraggableItem = ({ id, name, image }: { id: string; name: string; image: string }) => {
    const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id });

    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            className={cn(
                "flex flex-col items-center justify-center p-3 bg-white border-2 border-gray-200 rounded-xl shadow-sm transition-all cursor-grab active:cursor-grabbing touch-none aspect-square select-none",
                "hover:shadow-md hover:scale-105",
                isDragging && "opacity-30 grayscale"
            )}
        >
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gray-100 rounded-full mb-2 flex items-center justify-center overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    width={64}
                    height={64}
                    className="object-contain w-full h-full p-2"
                    draggable={false}
                />
            </div>
            <span className="text-xs font-bold text-center text-dark leading-tight line-clamp-2">
                {name}
            </span>
        </div>
    );
};

// Komponen tempat sampah
const DroppableBin = ({ id, title, className, icon }: { id: string; title: string; className?: string; icon: string }) => {
    const { isOver, setNodeRef } = useDroppable({ id });

    return (
        <div
            ref={setNodeRef}
            className={cn(
                "flex-1 h-32 lg:h-40 rounded-2xl flex flex-col items-center justify-center gap-2 border-4 transition-all duration-300",
                className,
                isOver ? "scale-105 shadow-2xl ring-4 ring-offset-2 ring-primary" : "opacity-90 shadow-md"
            )}
        >
            <div className={cn("text-4xl lg:text-5xl transition-transform", isOver && "animate-bounce")}>
                {icon}
            </div>
            <h3 className="text-white font-black text-lg lg:text-xl uppercase tracking-wider text-center drop-shadow-md">
                {title}
            </h3>
        </div>
    );
};

// --- MAIN ENGINE ---

export default function SortingGameEngine() {
    const [items, setItems] = useState(sortingItems);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
    const [gameState, setGameState] = useState<'start' | 'playing' | 'finished'>('start');
    const [activeId, setActiveId] = useState<string | null>(null);

    // Sensor Configuration
    const sensors = useSensors(
        useSensor(MouseSensor),
        useSensor(TouchSensor, {
            activationConstraint: {
                delay: 250,
                tolerance: 5,
            },
        })
    );

    // Initial Shuffle
    useEffect(() => {
        setItems(shuffleArray(sortingItems));
    }, []);

    // Timer Logic
    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (gameState === 'playing' && timeLeft > 0) {
            interval = setInterval(() => setTimeLeft((t) => t - 1), 1000);
        } else if (timeLeft === 0 && gameState === 'playing') {
            setGameState('finished');
        }

        return () => clearInterval(interval);
    }, [gameState, timeLeft]);

    // Game Actions
    const startGame = () => {
        setItems(shuffleArray(sortingItems));
        setScore(0);
        setTimeLeft(GAME_DURATION);
        setGameState('playing');
    };

    const handleDragStart = (event: DragStartEvent) => {
        setActiveId(event.active.id as string);
        if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate(20); // Haptic feedback
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        setActiveId(null);

        if (!over) return;

        const draggedItem = items.find((i) => i.id === active.id);
        const targetZone = over.id;

        // Validation Logic
        if (draggedItem && draggedItem.type === targetZone) {
            setScore((prev) => prev + 10);
            setItems((prev) => prev.filter((i) => i.id !== active.id));

            // Win Condition
            if (items.length <= 1) {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
                setGameState('finished');
            }
        }
    };

    const activeItemData = items.find((i) => i.id === activeId);

    return (
        <div className="w-full max-w-4xl mx-auto min-h-[600px] flex flex-col relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">

            {/* Header: Stats */}
            <div className="flex justify-between items-center p-6 bg-gray-50 border-b border-gray-100">
                <div className="text-center">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Waktu</p>
                    <p className={cn("text-3xl font-black tabular-nums", timeLeft < 10 ? "text-red-500 animate-pulse" : "text-dark")}>
                        {timeLeft}s
                    </p>
                </div>
                <div className="text-center">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Skor</p>
                    <p className="text-3xl font-black text-primary tabular-nums">{score}</p>
                </div>
            </div>

            {/* Game Area */}
            <div className="flex-1 p-6 flex flex-col">
                <DndContext
                    id="sorting-game-context"
                    sensors={sensors}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                >
                    {/* Drop Zones */}
                    <div className="flex gap-4 lg:gap-8 mb-8">
                        <DroppableBin
                            id="termoplastik"
                            title="Termoplastik"
                            className="bg-blue-500 border-blue-600"
                            icon="♻️"
                        />
                        <DroppableBin
                            id="termoset"
                            title="Termoset"
                            className="bg-red-500 border-red-600"
                            icon="🔥"
                        />
                    </div>

                    {/* Items Grid */}
                    <div className="bg-gray-50/50 rounded-2xl p-6 flex-1 border-2 border-dashed border-gray-300 min-h-[250px] relative">
                        {items.length === 0 && gameState !== 'start' ? (
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold italic animate-pulse">
                                Semua sampah berhasil dipilah! 🎉
                            </div>
                        ) : (
                            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
                                {items.map((item) => (
                                    <DraggableItem
                                        key={item.id}
                                        id={item.id}
                                        name={item.name}
                                        image={item.image}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Drag Preview */}
                    <DragOverlay>
                        {activeItemData ? (
                            <div className="flex flex-col items-center justify-center p-3 bg-white border-2 border-primary rounded-xl shadow-2xl scale-110 rotate-3 cursor-grabbing opacity-90 w-24 h-24">
                                <Image
                                    src={activeItemData.image}
                                    alt={activeItemData.name}
                                    width={50}
                                    height={50}
                                    className="mb-1"
                                />
                                <span className="text-[10px] font-bold text-center text-dark line-clamp-1">
                                    {activeItemData.name}
                                </span>
                            </div>
                        ) : null}
                    </DragOverlay>
                </DndContext>
            </div>

            {/* Global Modals (Start & Finish) */}
            {gameState === 'start' && (
                <GameResultModal
                    type="start"
                    title="Sorting Challenge"
                    description="Tarik item sampah ke tong Termoplastik (Biru) atau Termoset (Merah) dengan benar sebelum waktu habis!"
                    actionLabel="Mulai Game"
                    onAction={startGame}
                />
            )}

            {gameState === 'finished' && (
                <GameResultModal
                    type={score > 50 ? 'success' : 'gameover'}
                    title={score > 50 ? "Luar Biasa!" : "Waktu Habis!"}
                    description={`Kamu berhasil mengumpulkan skor ${score}. Terus jaga lingkungan kita!`}
                    stats={[
                        { label: "Skor Akhir", value: score, color: "text-primary" },
                        { label: "Sisa Waktu", value: `${timeLeft}s`, color: "text-blue-500" }
                    ]}
                    actionLabel="Main Lagi"
                    onAction={startGame}
                />
            )}
        </div>
    );
}