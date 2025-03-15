let score = 0;
let timeLeft = 30;
const getResetButtonDOM = document.getElementById("reset-btn");
function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event, category) {
  event.preventDefault();
  let itemId = event.dataTransfer.getData("text");
  let item = document.getElementById(itemId);

  let correctCategory = {
    pet: "thermoplastic",
    plastic_cup: "thermoplastic",
    plastic_bag: "thermoplastic",
    bakelite: "thermoset",
    epoxy_resin: "thermoset",
    melamine_plate: "thermoset",
  };

  if (correctCategory[itemId] === category) {
    score += 10;
    document.getElementById("score").innerText = score;
    item.style.display = "none";
  } else {
    score -= 5;
    document.getElementById("score").innerText = score;
  }
}

function reset() {
  score = 0;
  timeLeft = 30;
  document.getElementById("score").innerText = score;
  document.getElementById("timer").innerText = timeLeft;

  let draggableItems = document.querySelectorAll(".item");
  draggableItems.forEach((item) => {
    item.style.display = "block";
  });

  getResetButtonDOM.style.display = "none";

  countdown();
}

function countdown() {
  if (timeLeft > 0) {
    timeLeft--;
    document.getElementById("timer").innerText = timeLeft;
    setTimeout(countdown, 1000);
  } else {
    Swal.fire({
      title: "Time is up!",
      text: `Your score is : ${score}`,
      icon: "info",
    });
    getResetButtonDOM.style.display = "block"
    
  }
}

countdown();
