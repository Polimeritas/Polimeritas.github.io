import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faRedo,
    faHome,
    faTrophy,
    faFlagCheckered,
    faGamepad
} from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils";

interface GameResultModalProps {
    type: 'start' | 'gameover' | 'success';
    title: string;
    description: string;
    score?: number;
    stats?: { label: string; value: string | number; color?: string }[];
    onAction: () => void;
    actionLabel?: string;
}

const GameResultModal: React.FC<GameResultModalProps> = ({
    type,
    title,
    description,
    stats,
    onAction,
    actionLabel = "Mulai Game"
}) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark/90 backdrop-blur-sm p-4 animate-fade-in">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl border-t-4 border-primary relative overflow-hidden">

                {/* Decorative Icon */}
                <div className="mb-6 flex justify-center">
                    <div className={cn(
                        "w-20 h-20 rounded-full flex items-center justify-center text-4xl shadow-lg",
                        type === 'start' ? "bg-blue-100 text-blue-600" :
                            type === 'gameover' ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
                    )}>
                        <FontAwesomeIcon icon={
                            type === 'start' ? faGamepad :
                                type === 'gameover' ? faFlagCheckered : faTrophy
                        } className="animate-bounce" />
                    </div>
                </div>

                <h2 className="text-3xl font-black text-dark mb-2 uppercase tracking-tight">
                    {title}
                </h2>

                <p className="text-gray-500 mb-8 leading-relaxed">
                    {description}
                </p>

                {/* Dynamic Stats Grid */}
                {stats && stats.length > 0 && (
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">{stat.label}</p>
                                <p className={cn("text-2xl font-black", stat.color || "text-dark")}>
                                    {stat.value}
                                </p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Actions */}
                <div className="flex flex-col gap-3">
                    <button
                        onClick={onAction}
                        className="group w-full bg-primary text-dark font-bold text-lg py-4 rounded-xl hover:bg-secondary hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
                    >
                        <FontAwesomeIcon icon={type === 'start' ? faPlay : faRedo} className="group-hover:rotate-12 transition-transform" />
                        {actionLabel}
                    </button>
                    <Link
                        href="/"
                        className="w-full bg-white border-2 border-gray-100 text-gray-500 font-bold text-lg py-4 rounded-xl hover:bg-gray-50 hover:text-dark transition-all flex items-center justify-center gap-3"
                    >
                        <FontAwesomeIcon icon={faHome} />
                        Kembali ke Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default GameResultModal;