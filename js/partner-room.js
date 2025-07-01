import { partnerRoomNavigations, products } from "./constant.js";

let slideIndex = 0;
const slides = document.querySelectorAll(".carousel-slide");

function showSlides() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}

setInterval(showSlides, 7000);

const dom = document.getElementById("v2-pr");

let r = "";

partnerRoomNavigations.map((x) => {
  r += `   <a href="${x.name}" class="dropdown-item ${
    x.isActive ? "active" : ""
  }"> ${x.name}</a> `;
});

dom.innerHTML = r;

const cardDOM = document.getElementById("crd-2");

let c = "";
products.map((x, i) => {
  c += `
  <div class="container2">
    <div class="row">
      <div class="product-card">
        <div class="product-image">
               <a href="${x.link}" target="_blank"><img src="${
            x.image
          }" alt="Product Image"></a>
        </div>
        <div class="product-details">
      <h2 class="product-index">${i + 1}</h2>
      <p class="product-name">${x.product_name}</p>
      <p class="product-description"> ${x.description}
      </p>
        </div>
    </div>
    </div>
  </div>
  `;
});

cardDOM.innerHTML = c;
