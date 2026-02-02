"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faRedo, faHome } from "@fortawesome/free-solid-svg-icons";

interface TypingModalProps {
    type: 'start' | 'gameover';
    score?: number;
    level?: number;
    maxStreak?: number;
    onAction: () => void;
}

const TypingModal: React.FC<TypingModalProps> = ({ type, score, level, maxStreak, onAction }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl border-4 border-primary">

                <div className="text-6xl mb-4 animate-bounce">
                    {type === 'start' ? '⌨️' : '🏁'}
                </div>

                <h2 className="text-3xl font-black text-dark mb-2 uppercase">
                    {type === 'start' ? 'Typing Challenge' : 'Waktu Habis!'}
                </h2>

                <p className="text-gray-500 mb-8">
                    {type === 'start'
                        ? 'Ketik kata dengan cepat & tepat. Dapatkan waktu tambahan setiap naik level!'
                        : 'Permainan selesai. Lihat pencapaianmu di bawah ini.'}
                </p>

                {type === 'gameover' && (
                    <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="bg-gray-50 p-3 rounded-xl border">
                            <p className="text-xs text-gray-500 uppercase font-bold">Level</p>
                            <p className="text-2xl font-black text-primary">{level}</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-xl border">
                            <p className="text-xs text-gray-500 uppercase font-bold">Skor</p>
                            <p className="text-2xl font-black text-green-600">{score}</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-xl border">
                            <p className="text-xs text-gray-500 uppercase font-bold">Best Streak</p>
                            <p className="text-2xl font-black text-orange-500">{maxStreak}</p>
                        </div>
                    </div>
                )}

                <div className="flex flex-col gap-3">
                    <button
                        onClick={onAction}
                        className="w-full bg-primary text-dark font-bold text-xl py-4 rounded-xl hover:bg-secondary hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
                    >
                        <FontAwesomeIcon icon={type === 'start' ? faPlay : faRedo} />
                        {type === 'start' ? 'Mulai Game' : 'Main Lagi'}
                    </button>
                    <Link
                        href="/"
                        className="w-full bg-gray-100 text-dark font-bold text-xl py-4 rounded-xl hover:bg-gray-200 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
                    >
                        <FontAwesomeIcon icon={faHome} />
                        Kembali ke Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TypingModal;