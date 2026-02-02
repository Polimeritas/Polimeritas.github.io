"use client";

import React from "react";
import { QuizQuestion as QuestionType } from "@/data/gameData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle, faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface QuizQuestionProps {
    data: QuestionType;
    currentNum: number;
    totalNum: number;
    onNext: (isCorrect: boolean) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ data, currentNum, totalNum, onNext }) => {
    const [selectedOption, setSelectedOption] = React.useState<string | null>(null);
    const [isAnswered, setIsAnswered] = React.useState(false);

    React.useEffect(() => {
        setSelectedOption(null);
        setIsAnswered(false);
    }, [data]);

    const handleOptionClick = (option: string) => {
        if (isAnswered) return;
        setSelectedOption(option);
        setIsAnswered(true);
    };

    const isCorrect = selectedOption === data.answer;

    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <span className="bg-primary/20 text-secondary px-4 py-1 rounded-full font-bold text-sm">
                    Pertanyaan {currentNum} / {totalNum}
                </span>
            </div>

            {/* Teks Soal */}
            <h2 className="text-xl lg:text-2xl font-bold text-dark mb-8 leading-relaxed">
                {data.question}
            </h2>

            {/* Pilihan Jawaban */}
            <div className="space-y-3 mb-8">
                {data.options.map((opt, idx) => {
                    let btnStyle = "border-gray-200 hover:border-primary hover:bg-yellow-50 text-gray-700";

                    if (isAnswered) {
                        if (opt === data.answer) {
                            btnStyle = "bg-green-100 border-green-500 text-green-800 font-bold";
                        } else if (opt === selectedOption && opt !== data.answer) {
                            btnStyle = "bg-red-100 border-red-500 text-red-800";
                        } else {
                            btnStyle = "border-gray-100 text-gray-400 opacity-50 cursor-not-allowed";
                        }
                    }

                    return (
                        <button
                            key={idx}
                            onClick={() => handleOptionClick(opt)}
                            disabled={isAnswered}
                            className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 font-medium ${btnStyle}`}
                        >
                            <div className="flex justify-between items-center">
                                <span>{opt}</span>
                                {isAnswered && opt === data.answer && <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />}
                                {isAnswered && opt === selectedOption && opt !== data.answer && <FontAwesomeIcon icon={faTimesCircle} className="text-red-600" />}
                            </div>
                        </button>
                    );
                })}
            </div>

            {isAnswered && (
                <div className="animate-fade-in-up">
                    <div className={`p-5 rounded-xl border mb-6 ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                        <div className="flex items-start gap-3">
                            <div className={`mt-1 text-xl ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                                <FontAwesomeIcon icon={isCorrect ? faCheckCircle : faTimesCircle} />
                            </div>
                            <div>
                                <h4 className={`font-bold text-lg mb-1 ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                                    {isCorrect ? "Benar!" : "Salah!"}
                                </h4>
                                <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
                                    {isCorrect
                                        ? data.explanation
                                        : <span>Jawaban yang benar adalah <strong>{data.answer}</strong>. {data.explanation}</span>
                                    }
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