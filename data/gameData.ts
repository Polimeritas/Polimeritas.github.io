// --- DATA QUIZ ---
export interface QuizQuestion {
    id: number;
    question: string;
    options: string[];
    answer: string;
    explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
    {
        id: 1,
        question: "Apa jenis polimer yang digunakan untuk botol plastik?",
        options: ["PE", "PP", "PET", "PVC"],
        answer: "PET",
        explanation: "PET (Polyethylene Terephthalate) adalah jenis polimer yang umum digunakan dalam botol plastik karena sifatnya yang kuat dan tahan terhadap tekanan."
    },
    {
        id: 2,
        question: "Manakah polimer yang bersifat biodegradable?",
        options: ["PLA", "PE", "PP", "PVC"],
        answer: "PLA",
        explanation: "PLA (Polylactic Acid) adalah polimer biodegradable yang berasal dari sumber alami seperti pati jagung atau tebu."
    },
    {
        id: 3,
        question: "Polimer mana yang sering digunakan dalam pipa air?",
        options: ["PET", "PVC", "PP", "PA"],
        answer: "PVC",
        explanation: "PVC (Polyvinyl Chloride) sering digunakan dalam pipa air karena sifatnya yang tahan terhadap korosi dan bahan kimia."
    },
    {
        id: 4,
        question: "Jenis polimer apa yang digunakan dalam kantong plastik?",
        options: ["PE", "PP", "PET", "PS"],
        answer: "PE",
        explanation: "PE (Polyethylene) sering digunakan dalam kantong plastik karena sifatnya yang fleksibel dan murah untuk diproduksi."
    },
    {
        id: 5,
        question: "Polimer apa yang digunakan dalam pembuatan ban kendaraan?",
        options: ["NR", "PP", "PVC", "PE"],
        answer: "NR",
        explanation: "NR (Natural Rubber) digunakan dalam ban kendaraan karena elastisitas dan ketahanannya terhadap gesekan."
    },
    {
        id: 6,
        question: "Jenis polimer apa yang sering digunakan dalam kemasan makanan?",
        options: ["PS", "PET", "PP", "PVC"],
        answer: "PP",
        explanation: "PP (Polypropylene) sering digunakan dalam kemasan makanan karena sifatnya yang tahan panas dan tidak mudah bereaksi dengan makanan."
    },
    {
        id: 7,
        question: "Polimer apa yang digunakan dalam jaket anti air?",
        options: ["PTFE", "PE", "PP", "PET"],
        answer: "PTFE",
        explanation: "PTFE (Polytetrafluoroethylene) digunakan dalam jaket anti air karena sifatnya yang tahan air dan tidak lengket."
    },
    {
        id: 8,
        question: "Polimer mana yang digunakan dalam lensa kacamata?",
        options: ["PMMA", "PVC", "PET", "PP"],
        answer: "PMMA",
        explanation: "PMMA (Polymethyl Methacrylate) digunakan dalam lensa kacamata karena kejernihan optiknya dan ketahanannya terhadap goresan."
    },
    {
        id: 9,
        question: "Polimer apa yang digunakan dalam pembuatan CD/DVD?",
        options: ["PC", "PP", "PVC", "PS"],
        answer: "PC",
        explanation: "PC (Polycarbonate) digunakan dalam pembuatan CD/DVD karena sifatnya yang kuat dan tahan terhadap benturan."
    },
    {
        id: 10,
        question: "Polimer mana yang digunakan dalam rompi anti peluru?",
        options: ["Kevlar", "PP", "PE", "PET"],
        answer: "Kevlar",
        explanation: "Kevlar adalah polimer yang sangat kuat dan digunakan dalam rompi anti peluru karena ketahanan terhadap tekanan dan daya regangnya yang tinggi."
    }
];
  
  // --- DATA SORTING GAME ---
  export type PolymerType = 'termoplastik' | 'termoset';

  export const sortingItems = [
    // TERMOPLASTIK
    { 
        id: 'item-1', 
        name: 'Botol PET', 
        type: 'termoplastik', 
        image: '/img/sortinggame/botolpet.png'
    }, 
    { 
        id: 'item-2', 
        name: 'Kantong Kresek', 
        type: 'termoplastik', 
        image: '/img/sortinggame/kantongplastik.png' 
    },
    { 
        id: 'item-3', 
        name: 'Tupperware (PP)', 
        type: 'termoplastik', 
        image: '/img/sortinggame/gelasplastik.png' 
    },
    
    // TERMOSET
    { 
        id: 'item-4', 
        name: 'Melamin', 
        type: 'termoset', 
        image: '/img/sortinggame/piringmelanin.png' 
    },
    { 
        id: 'item-5', 
        name: 'Bakelite (Saklar)', 
        type: 'termoset', 
        image: '/img/sortinggame/bakelite.png' 
    },
    { 
        id: 'item-6', 
        name: 'Epoxy Resin', 
        type: 'termoset', 
        image: '/img/sortinggame/epoxyresin.png' 
    },
  ];
  
  // --- DATA TYPING GAME ---
  export const typingSentences = [
    "Polimer adalah senyawa besar yang terdiri dari banyak unit berulang.",
    "Plastik adalah jenis polimer yang sering digunakan dalam kehidupan sehari-hari.",
    "Polimer sintetik seperti polietilena digunakan dalam pembuatan kantong plastik.",
    "Bioplastik adalah alternatif ramah lingkungan yang dapat terurai lebih cepat.",
    "Polimer alami seperti karet diperoleh dari getah pohon dan digunakan dalam industri.",
    "Silikon adalah polimer yang tahan panas dan digunakan dalam berbagai aplikasi teknologi.",
    "PVC adalah jenis polimer yang digunakan dalam pipa dan bahan konstruksi.",
    "Nilon adalah polimer kuat yang sering digunakan dalam industri tekstil dan otomotif.",
    "Kevlar adalah polimer yang sangat kuat dan sering digunakan dalam rompi anti peluru.",
    "Polimer memiliki berbagai aplikasi dalam teknologi, kesehatan, dan keberlanjutan lingkungan."
];