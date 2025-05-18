let slideIndex = 0;
const slides = document.querySelectorAll(".carousel-slide");

function showSlides() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}

setInterval(showSlides, 7000);

const partnerRoomNavigations = [
  {
    name: "To Be Expert",
    link: "to-be-expert.html",
    isActive: false,
  },

  {
    name: "Stakeholder",
    link: "stakeholder.html",
    isActive: false,
  },

  {
    name: "Polymer Company",
    link: "polymer-company.html",
    isActive: false,
  },
];

const dom = document.getElementById("v2-pr");

let r = "";

partnerRoomNavigations.map((x) => {
  r += `   <a href="${x.name}" class="dropdown-item ${
    x.isActive ? "active" : ""
  }"> ${x.name}</a> `;
});

dom.innerHTML = r;
