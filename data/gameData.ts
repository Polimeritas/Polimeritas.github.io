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
        question: "Apa jenis polimer yang digunakan untuk botol plastik bening?",
        options: ["PET (Polyethylene Terephthalate)", "PVC (Polyvinyl Chloride)", "LDPE (Low Density Polyethylene)", "PP (Polypropylene)"],
        answer: "PET (Polyethylene Terephthalate)",
        explanation: "PET adalah jenis polimer yang kuat, jernih, dan ringan, sehingga ideal untuk botol minuman kemasan sekali pakai."
    },
    {
        id: 2,
        question: "Manakah polimer yang bersifat biodegradable (dapat terurai alami)?",
        options: ["Polystyrene (Styrofoam)", "PLA (Polylactic Acid)", "PVC", "Nylon"],
        answer: "PLA (Polylactic Acid)",
        explanation: "PLA terbuat dari sumber terbarukan seperti pati jagung atau tebu, sehingga bisa diurai oleh mikroorganisme, berbeda dengan plastik konvensional."
    },
    {
        id: 3,
        question: "Berapa lama waktu rata-rata yang dibutuhkan botol plastik untuk terurai di alam?",
        options: ["10 tahun", "50-100 tahun", "450 tahun", "1000 tahun"],
        answer: "450 tahun",
        explanation: "Plastik PET membutuhkan waktu sekitar 450 tahun untuk terurai menjadi mikroplastik, namun tidak benar-benar hilang dari ekosistem."
    },
    {
        id: 4,
        question: "Kode daur ulang (resin code) untuk plastik jenis Polypropylene (PP) adalah nomor?",
        options: ["1", "2", "5", "7"],
        answer: "5",
        explanation: "Kode 5 adalah untuk PP (Polypropylene), plastik yang tahan panas dan keras, biasa dipakai untuk tupperware atau tutup botol."
    },
    {
        id: 5,
        question: "Apa singkatan dari PVC?",
        options: ["Polyvinyl Chloride", "Polyvinyl Carbon", "Polymer Vinyl Carbom", "Plastic Vinyl Chloride"],
        answer: "Polyvinyl Chloride",
        explanation: "PVC (Polyvinyl Chloride) adalah polimer yang sering digunakan untuk pipa air, kabel, dan bahan bangunan karena durabilitasnya."
    },
    {
        id: 6,
        question: "Manakah yang BUKAN merupakan prinsip 3R dalam pengelolaan sampah?",
        options: ["Reduce", "Reuse", "Recycle", "Rebuy"],
        answer: "Rebuy",
        explanation: "Prinsip 3R adalah Reduce (Kurangi), Reuse (Gunakan kembali), dan Recycle (Daur ulang). Rebuy (Beli lagi) justru menambah sampah!"
    },
    {
        id: 7,
        question: "Mikroplastik adalah partikel plastik yang berukuran kurang dari?",
        options: ["5 mm", "1 cm", "1 meter", "10 cm"],
        answer: "5 mm",
        explanation: "Mikroplastik didefinisikan sebagai potongan plastik yang sangat kecil, berukuran kurang dari 5 milimeter, yang berbahaya bagi biota laut."
    },
    {
        id: 8,
        question: "Jenis plastik apa yang paling SULIT didaur ulang?",
        options: ["PET (1)", "HDPE (2)", "PVC (3)", "Styrofoam (6)"],
        answer: "PVC (3)",
        explanation: "PVC mengandung klorin dan bahan aditif berbahaya lainnya, membuatnya sangat sulit dan mahal untuk didaur ulang secara aman."
    },
    {
        id: 9,
        question: "Kantong plastik kresek belanja biasanya terbuat dari bahan?",
        options: ["HDPE atau LDPE", "PET", "Polycarbonate", "Acrylic"],
        answer: "HDPE atau LDPE",
        explanation: "Kantong kresek umumnya dibuat dari HDPE (High Density Polyethylene) atau LDPE (Low Density Polyethylene) yang fleksibel dan murah."
    },
    {
        id: 10,
        question: "Apa dampak utama sampah plastik di lautan?",
        options: ["Menyuburkan terumbu karang", "Dimakan hewan laut & merusak ekosistem", "Membuat air laut lebih jernih", "Tidak ada dampak"],
        answer: "Dimakan hewan laut & merusak ekosistem",
        explanation: "Hewan laut sering mengira plastik sebagai makanan (ubur-ubur), yang menyebabkan kematian, serta plastik melepaskan racun ke air."
    },
    {
        id: 11,
        question: "Bioplastik adalah plastik yang terbuat dari?",
        options: ["Minyak bumi", "Batu bara", "Biomassa (Tumbuhan/Lemak Hewan)", "Gas Alam"],
        answer: "Biomassa (Tumbuhan/Lemak Hewan)",
        explanation: "Bioplastik dibuat dari bahan biologis seperti singkong, jagung, atau rumput laut, sebagai alternatif ramah lingkungan."
    },
    {
        id: 12,
        question: "Simbol daur ulang segitiga dengan angka 1 di dalamnya merujuk pada?",
        options: ["PET", "HDPE", "PVC", "LDPE"],
        answer: "PET",
        explanation: "Angka 1 dalam segitiga daur ulang adalah kode identifikasi resin untuk PET (Polyethylene Terephthalate)."
    }
];
  
  // --- DATA SORTING GAME (SAMPAH) ---
  export type PolymerType = 'termoplastik' | 'termoset';

  export const sortingItems = [
    // TERMOPLASTIK
    { id: 'item-1', name: 'Botol PET', type: 'termoplastik', image: '/img/game/bottle.png' }, 
    { id: 'item-2', name: 'Pipa PVC', type: 'termoplastik', image: '/img/game/pvc.png' },
    { id: 'item-3', name: 'Kantong Kresek', type: 'termoplastik', image: '/img/game/plastic-bag.png' },
    { id: 'item-4', name: 'Tupperware (PP)', type: 'termoplastik', image: '/img/game/food-container.png' },
    
    // TERMOSET
    { id: 'item-5', name: 'Melamin', type: 'termoset', image: '/img/game/melamine.png' },
    { id: 'item-6', name: 'Bakelite (Saklar)', type: 'termoset', image: '/img/game/switch.png' },
    { id: 'item-7', name: 'Epoxy Resin', type: 'termoset', image: '/img/game/resin.png' },
    { id: 'item-8', name: 'Ban Karet (Vulkanisir)', type: 'termoset', image: '/img/game/tire.png' },
  ];
  
  // --- DATA TYPING GAME ---
  export const typingSentences = [
    "Polimer adalah material yang terdiri dari rantai molekul panjang.",
    "Plastik ramah lingkungan dapat terurai oleh mikroorganisme di alam.",
    "Daur ulang membantu mengurangi penumpukan sampah di tempat pembuangan akhir.",
    "Botol plastik bekas bisa diolah menjadi kerajinan tangan yang bernilai ekonomis.",
    "Kurangi penggunaan kantong plastik sekali pakai saat berbelanja di pasar.",
    "Sampah organik bisa dijadikan pupuk kompos untuk menyuburkan tanaman.",
    "Laut yang bersih dari plastik akan menyelamatkan kehidupan biota laut.",
    "Pilah sampahmu sesuai jenisnya agar mudah didaur ulang kembali.",
    "Membawa botol minum sendiri adalah langkah kecil menyelamatkan bumi.",
    "Mikroplastik sangat berbahaya jika masuk ke dalam rantai makanan manusia.",
    "Ayo jaga kebersihan lingkungan demi masa depan generasi mendatang.",
    "Inovasi bioplastik dari singkong mulai dikembangkan di Indonesia.",
    "Menanam pohon membantu menyerap karbon dioksida di atmosfer.",
    "Hemat energi dan air adalah bagian dari gaya hidup ramah lingkungan."
];