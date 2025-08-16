const questions = [
  {
    question: "Apa jenis polimer yang digunakan untuk botol plastik?",
    options: ["PE", "PP", "PET", "PVC"],
    answer: "PET",
    explanation:
      "PET (Polyethylene Terephthalate) adalah jenis polimer yang umum digunakan dalam botol plastik karena sifatnya yang kuat dan tahan terhadap tekanan.",
  },
  {
    question: "Manakah polimer yang bersifat biodegradable?",
    options: ["PLA", "PE", "PP", "PVC"],
    answer: "PLA",
    explanation:
      "PLA (Polylactic Acid) adalah polimer biodegradable yang berasal dari sumber alami seperti pati jagung atau tebu.",
  },
  {
    question: "Polimer mana yang sering digunakan dalam pipa air?",
    options: ["PET", "PVC", "PP", "PA"],
    answer: "PVC",
    explanation:
      "PVC (Polyvinyl Chloride) sering digunakan dalam pipa air karena sifatnya yang tahan terhadap korosi dan bahan kimia.",
  },
  {
    question: "Jenis polimer apa yang digunakan dalam kantong plastik?",
    options: ["PE", "PP", "PET", "PS"],
    answer: "PE",
    explanation:
      "PE (Polyethylene) sering digunakan dalam kantong plastik karena sifatnya yang fleksibel dan murah untuk diproduksi.",
  },
  {
    question: "Polimer apa yang digunakan dalam pembuatan ban kendaraan?",
    options: ["NR", "PP", "PVC", "PE"],
    answer: "NR",
    explanation:
      "NR (Natural Rubber) digunakan dalam ban kendaraan karena elastisitas dan ketahanannya terhadap gesekan.",
  },
  {
    question: "Jenis polimer apa yang sering digunakan dalam kemasan makanan?",
    options: ["PS", "PET", "PP", "PVC"],
    answer: "PP",
    explanation:
      "PP (Polypropylene) sering digunakan dalam kemasan makanan karena sifatnya yang tahan panas dan tidak mudah bereaksi dengan makanan.",
  },
  {
    question: "Polimer apa yang digunakan dalam jaket anti air?",
    options: ["PTFE", "PE", "PP", "PET"],
    answer: "PTFE",
    explanation:
      "PTFE (Polytetrafluoroethylene) digunakan dalam jaket anti air karena sifatnya yang tahan air dan tidak lengket.",
  },
  {
    question: "Polimer mana yang digunakan dalam lensa kacamata?",
    options: ["PMMA", "PVC", "PET", "PP"],
    answer: "PMMA",
    explanation:
      "PMMA (Polymethyl Methacrylate) digunakan dalam lensa kacamata karena kejernihan optiknya dan ketahanannya terhadap goresan.",
  },
  {
    question: "Polimer apa yang digunakan dalam pembuatan CD/DVD?",
    options: ["PC", "PP", "PVC", "PS"],
    answer: "PC",
    explanation:
      "PC (Polycarbonate) digunakan dalam pembuatan CD/DVD karena sifatnya yang kuat dan tahan terhadap benturan.",
  },
  {
    question: "Polimer mana yang digunakan dalam rompi anti peluru?",
    options: ["Kevlar", "PP", "PE", "PET"],
    answer: "Kevlar",
    explanation:
      "Kevlar adalah polimer yang sangat kuat dan digunakan dalam rompi anti peluru karena ketahanan terhadap tekanan dan daya regangnya yang tinggi.",
  },
];
let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
questionEl.style.fontSize = "40px";
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
feedbackEl.style.fontSize = "40px";
const nextBtn = document.getElementById("next-btn");
const resetBtn = document.getElementById("reset-btn");
function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.innerText = q.question;

  optionsEl.innerHTML = "";
  q.options.forEach((option) => {
    const btn = document.createElement("button");

    btn.style.color = "blue"
    btn.style.padding = "10px"
    btn.style.marginLeft= "10px"
    btn.style.border = "rounded"
    btn.innerText = option;
    btn.onclick = () => checkAnswer(option);
    optionsEl.appendChild(btn);
  });
}



function checkAnswer(option) {
  if (option === questions[currentQuestion].answer) {
    score++;
    feedbackEl.innerText = `✅ Benar! ${questions[currentQuestion].explanation}`;
  } else {
    feedbackEl.innerText = `❌ Salah! Jawaban yang benar adalah ${questions[currentQuestion].answer}.  ${questions[currentQuestion].explanation}`;
  }
  optionsEl.setAttribute("hidden", true);
  // console.log(optionsEl);
  nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
    feedbackEl.innerText = "";
    nextBtn.style.display = "none";
    optionsEl.removeAttribute("hidden", false);
  } else {
    optionsEl.removeAttribute("hidden", false);
    questionEl.innerText = `Game Over! Score: ${score} / ${questions.length}`;
    optionsEl.innerHTML = "";
    feedbackEl.innerText = "";
    nextBtn.style.display = "none";
    resetBtn.style.display = "block";
  }
};

showQuestion();

function resetGame() {
  resetBtn.style.display = "none";
  currentQuestion = 0;
  score = 0;
  showQuestion();
}
