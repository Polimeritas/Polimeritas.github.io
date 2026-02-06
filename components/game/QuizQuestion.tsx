"use client";

import React, { useState } from "react";
import { QuizQuestion as QuestionType } from "@/data/gameData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils"; // Pakai utility yang sudah kita buat

interface QuizQuestionProps {
    data: QuestionType;
    currentNum: number;
    totalNum: number;
    onNext: (isCorrect: boolean) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ data, currentNum, totalNum, onNext }) => {
    // HAPUS useEffect reset state. Biarkan Parent yang handle via 'key' prop.
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const handleOptionClick = (option: string) => {
        if (isAnswered) return;
        setSelectedOption(option);
        setIsAnswered(true);
    };

    const isCorrect = selectedOption === data.answer;

    return (
        <div className="w-full max-w-2xl mx-auto animate-fade-in-up">
            {/* Header Info */}
            <div className="flex justify-between items-center mb-6">
                <span className="bg-primary/20 text-secondary px-4 py-1 rounded-full font-bold text-sm">
                    Pertanyaan {currentNum}/{totalNum}
                </span>
            </div>

            {/* Question */}
            <h3 className="text-xl lg:text-2xl font-bold text-dark mb-6 leading-relaxed">
                {data.question}
            </h3>

            {/* Options Grid */}
            <div className="grid grid-cols-1 gap-4 mb-8">
                {data.options.map((option, idx) => {
                    // Logic style dipisah agar bersih
                    let optionStyle = "border-gray-200 hover:border-primary hover:bg-gray-50 text-gray-700";

                    if (isAnswered) {
                        if (option === data.answer) {
                            optionStyle = "bg-green-100 border-green-500 text-green-800 font-bold";
                        } else if (option === selectedOption) {
                            optionStyle = "bg-red-100 border-red-500 text-red-800";
                        } else {
                            optionStyle = "opacity-50 cursor-not-allowed";
                        }
                    }

                    return (
                        <button
                            key={idx}
                            onClick={() => handleOptionClick(option)}
                            disabled={isAnswered}
                            className={cn(
                                "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group",
                                optionStyle
                            )}
                        >
                            <span>{option}</span>
                            {/* Icon penanda jawaban user */}
                            {isAnswered && option === data.answer && (
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />
                            )}
                            {isAnswered && option === selectedOption && option !== data.answer && (
                                <FontAwesomeIcon icon={faTimesCircle} className="text-red-600" />
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Feedback & Next Button */}
            {isAnswered && (
                <div className="animate-fade-in-up">
                    <div className={cn(
                        "p-4 rounded-xl mb-6 border-l-4",
                        isCorrect ? "bg-green-50 border-green-500" : "bg-red-50 border-red-500"
                    )}>
                        <div className="flex gap-4">
                            <div className="mt-1">
                                <FontAwesomeIcon
                                    icon={isCorrect ? faCheckCircle : faTimesCircle}
                                    className={isCorrect ? "text-green-600 text-xl" : "text-red-600 text-xl"}
                                />
                            </div>
                            <div>
                                <h4 className={cn("font-bold text-lg mb-1", isCorrect ? "text-green-800" : "text-red-800")}>
                                    {isCorrect ? "Benar!" : "Salah!"}
                                </h4>
                                <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
                                    {isCorrect ? data.explanation : (
                                        <>Jawaban yang benar adalah <strong className="text-dark">{data.answer}</strong>. {data.explanation}</>
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => onNext(isCorrect)}
                        className="w-full bg-primary text-dark font-bold py-3 px-6 rounded-lg hover:bg-secondary hover:text-white transition-all shadow-md flex items-center justify-center gap-2 group"
                    >
                        <span>Lanjut ke Pertanyaan Berikutnya</span>
                        <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default QuizQuestion;