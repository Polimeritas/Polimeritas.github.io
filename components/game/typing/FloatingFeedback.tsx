"use client";

import React from "react";

export interface FeedbackItem {
    id: number;
    text: string;
    type: 'success' | 'streak' | 'combo';
    xPos: number;
}

const FloatingFeedback: React.FC<{ items: FeedbackItem[] }> = ({ items }) => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-center items-center z-10">
            {items.map((item) => (
                <div
                    key={item.id}
                    className={`
                        absolute text-2xl lg:text-4xl font-black uppercase tracking-widest animate-float-up
                        ${item.type === 'success' ? 'text-green-500 drop-shadow-md' : ''}
                        ${item.type === 'streak' ? 'text-orange-500 drop-shadow-lg scale-125' : ''}
                        ${item.type === 'combo' ? 'text-purple-600 drop-shadow-xl scale-150' : ''}
                    `}
                    style={{
                        top: '40%',
                        left: `${item.xPos}%`
                    }}
                >
                    {item.text}
                </div>
            ))}
        </div>
    );
};

export default FloatingFeedback;