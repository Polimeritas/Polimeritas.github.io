"use client";

import React, { useState, useEffect } from "react";
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
import { sortingItems } from "@/data/gameData";
import TypingModal from "../typing/TypingModal";
import confetti from "canvas-confetti";
import Image from "next/image";

const shuffleArray = (array: typeof sortingItems) => {
    return array.sort(() => Math.random() - 0.5);
};

// --- COMPONENT DRAGGABLE ITEM ---
const DraggableItem = ({ id, name, image }: { id: string, name: string, image: string }) => {
    const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id });

    const style = isDragging ? { opacity: 0.3 } : undefined;

    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            style={style}
            className="flex flex-col items-center justify-center p-3 bg-white border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-grab active:cursor-grabbing touch-none aspect-square"
        >
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gray-100 rounded-full mb-2 flex items-center justify-center text-3xl">
                <Image src={image} alt={name} width={64} height={64} className="object-contain w-full h-full" />
            </div>
            <span className="text-xs font-bold text-center text-dark leading-tight line-clamp-2">{name}</span>
        </div>
    );
};

// --- COMPONENT DROP ZONE ---
const DroppableBin = ({ id, title, colorClass, icon }: { id: string, title: string, colorClass: string, icon: string }) => {
    const { isOver, setNodeRef } = useDroppable({ id });

    return (
        <div
            ref={setNodeRef}
            className={`
        flex-1 h-32 lg:h-40 rounded-2xl flex flex-col items-center justify-center gap-2 border-4 transition-all duration-300
        ${colorClass}
        ${isOver ? 'scale-105 shadow-2xl ring-4 ring-offset-2 ring-primary' : 'opacity-90 shadow-md'}
      `}
        >
            <div className="text-4xl lg:text-5xl animate-bounce-slow">{icon}</div>
            <h3 className="text-white font-black text-lg lg:text-xl uppercase tracking-wider text-center">{title}</h3>
        </div>
    );
};

// --- MAIN ENGINE ---
const GAME_DURATION = 30;

export default function SortingGameEngine() {
    const [items, setItems] = useState(sortingItems);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
    const [gameState, setGameState] = useState<'idle' | 'playing' | 'finished'>('idle');
    const [activeId, setActiveId] = useState<string | null>(null);

    const sensors = useSensors(
        useSensor(MouseSensor),
        useSensor(TouchSensor, {
            activationConstraint: {
                delay: 250,
                tolerance: 5,
            },
        })
    );

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

    const startGame = () => {
        setItems(shuffleArray(sortingItems));
        setScore(0);
        setTimeLeft(GAME_DURATION);
        setGameState('playing');
    };

    const handleDragStart = (event: DragStartEvent) => {
        setActiveId(event.active.id as string);
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        setActiveId(null);

        if (!over) return;

        const draggedItem = items.find(i => i.id === active.id);
        const targetZone = over.id;

        if (draggedItem && draggedItem.type === targetZone) {
            setScore(prev => prev + 10);
            setItems(prev => prev.filter(i => i.id !== active.id));

            if (items.length <= 1) {
                confetti();
                setGameState('finished');
            }
        }
    };

    const activeItemData = items.find(i => i.id === activeId);

    return (
        <div className="w-full max-w-4xl mx-auto min-h-[600px] flex flex-col relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">

            {gameState === 'idle' && (
                <div className="absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center animate-fade-in">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-6 animate-pulse">
                        <span className="text-6xl">♻️</span>
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-black text-dark mb-4 uppercase tracking-tight">
                        Sorting Challenge
                    </h2>
                    <p className="text-gray-500 text-lg max-w-md mb-8 leading-relaxed">
                        Tarik item dari bawah ke tong <strong>Termoplastik</strong> atau <strong>Termoset</strong> di atas!
                    </p>
                    <button
                        onClick={startGame}
                        className="group relative px-8 py-4 bg-primary text-dark font-black text-xl rounded-full shadow-lg hover:shadow-xl hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1"
                    >
                        <span className="flex items-center gap-3">
                            MULAI GAME
                        </span>
                    </button>
                </div>
            )}

            <div className="flex justify-between items-center p-6 bg-gray-50 border-b border-gray-100">
                <div className="text-center">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Waktu</p>
                    <p className={`text-3xl font-black ${timeLeft < 10 ? 'text-red-500 animate-pulse' : 'text-dark'}`}>
                        {timeLeft}s
                    </p>
                </div>
                <div className="text-center">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Skor</p>
                    <p className="text-3xl font-black text-primary">{score}</p>
                </div>
            </div>

            {/* GAME AREA */}
            <div className="flex-1 p-6 flex flex-col">
                <DndContext
                    sensors={sensors}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                >

                    {/* DROP ZONES */}
                    <div className="flex gap-4 lg:gap-8 mb-8">
                        <DroppableBin
                            id="termoplastik"
                            title="Termoplastik"
                            colorClass="bg-blue-500 border-blue-700"
                            icon="♻️"
                        />
                        <DroppableBin
                            id="termoset"
                            title="Termoset"
                            colorClass="bg-red-500 border-red-700"
                            icon="🔥"
                        />
                    </div>

                    {/* GRID ITEMS */}
                    <div className="bg-gray-50 rounded-2xl p-6 flex-1 border-2 border-dashed border-gray-200 min-h-[250px]">
                        {items.length === 0 && gameState !== 'idle' ? (
                            <div className="h-full flex items-center justify-center text-gray-400 font-bold italic animate-pulse">
                                Semua item sudah disortir! 🎉
                            </div>
                        ) : (
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
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

                    <DragOverlay>
                        {activeItemData ? (
                            <div className="flex flex-col items-center justify-center p-3 bg-white border-2 border-primary rounded-xl shadow-2xl scale-110 rotate-3 cursor-grabbing opacity-90 w-24 h-24">
                                <div className="text-3xl mb-1">📦</div>
                                <span className="text-[10px] font-bold text-center text-dark line-clamp-1">{activeItemData.name}</span>
                            </div>
                        ) : null}
                    </DragOverlay>

                </DndContext>
            </div>

            {/* GAME OVER MODAL */}
            {gameState === 'finished' && (
                <TypingModal
                    type="gameover"
                    score={score}
                    maxStreak={items.length}
                    onAction={startGame}
                />
            )}

        </div>
    );
}