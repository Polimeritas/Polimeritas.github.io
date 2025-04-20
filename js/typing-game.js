const levels = [
    "Polimer adalah senyawa besar yang terdiri dari banyak unit berulang.",
    "Plastik adalah jenis polimer yang sering digunakan dalam kehidupan sehari-hari.",
    "Polimer sintetik seperti polietilena digunakan dalam pembuatan kantong plastik.",
    "Bioplastik adalah alternatif ramah lingkungan yang dapat terurai lebih cepat.",
    "Polimer alami seperti karet diperoleh dari getah pohon dan digunakan dalam industri.",
    "Silikon adalah polimer yang tahan panas dan digunakan dalam berbagai aplikasi teknologi.",
    "PVC adalah jenis polimer yang digunakan dalam pipa dan bahan konstruksi.",
    "Nilon adalah polimer kuat yang sering digunakan dalam industri tekstil dan otomotif.",
    "Kevlar adalah polimer yang sangat kuat dan sering digunakan dalam rompi anti peluru.",
    "Polimer memiliki berbagai aplikasi dalam teknologi, kesehatan, dan keberlanjutan lingkungan.",
  ];
  let score = 0;
  let timeLeft = 120;
  let currentLevel = 0;
  
  const wordDisplay = document.getElementById("word");
  const inputField = document.getElementById("input");
  const scoreDisplay = document.getElementById("score");
  const timerDisplay = document.getElementById("timer");
  const levelDisplay = document.getElementById("level");
  
  function setNewWord() {
    wordDisplay.textContent = levels[currentLevel];
    inputField.value = "";
  }
  
  function endGame() {
    wordDisplay.textContent = "Permainan Selesai!";
    inputField.disabled = true;
  }
  
  inputField.addEventListener("input", function () {
    let typedText = inputField.value;
    let highlightedText = "";
  
    for (let i = 0; i < levels[currentLevel].length; i++) {
      if (i < typedText.length) {
        if (typedText[i] === levels[currentLevel][i]) {
          highlightedText += `<span style='color: gray;'>${levels[currentLevel][i]}</span>`;
        } else {
          highlightedText += `<span style='color: red;'>${levels[currentLevel][i]}</span>`;
        }
      } else {
        highlightedText += levels[currentLevel][i];
      }
    }
  
    wordDisplay.innerHTML = highlightedText;
  
    if (typedText.trim().toLowerCase() === levels[currentLevel].toLowerCase()) {
      score++;
      scoreDisplay.textContent = "Skor: " + score;
  
      if (currentLevel < levels.length - 1) {
        currentLevel++;
        levelDisplay.textContent = "Tahap: " + (currentLevel + 1);
        setNewWord();
      } else {
        endGame();
      }
    }
  });
  
  function countdown() {
    if (timeLeft > 0) {
      timeLeft--;
      timerDisplay.textContent = "Waktu Tersisa: " + timeLeft;
      setTimeout(countdown, 1000);
    } else {
      endGame();
    }
  }
  
  function restartGame() {
    clearTimeout();
    score = 0;
    currentLevel = 0;
    scoreDisplay.textContent = "Skor: 0";
    levelDisplay.textContent = "Tahap: 1";
    inputField.disabled = false;
    timeLeft = 120;
    timerDisplay.textContent = "Waktu Tersisa: " + timeLeft;
    setNewWord();
    countdown();
  }
  
  restartGame();
  