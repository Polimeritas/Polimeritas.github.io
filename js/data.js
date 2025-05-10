const partnerData = [
  {
    productName: "Keqing figure",
    link: "",
    image:
      "https://whotao.com/cdn/shop/products/keqing-Nimble-Lightning-apex-pvc-figure-official-merch-genshin-1.webp?v=1681375073&width=600",
    description: "Cutee Keqing is ready for brawl!",
  },

  {
    productName: "Keqing figure",
    link: "",
    image:
      "https://whotao.com/cdn/shop/products/keqing-Nimble-Lightning-apex-pvc-figure-official-merch-genshin.webp?v=1681375074&width=600",
    description: "Kyaaaa",
  },
  {
    productName: "Hatsune Miku figure",
    link: "",
    image: "",
    description: "",
  },
];

let cardDOM = ` `;

partnerData.forEach((x, i) => {
  cardDOM += `<div class="product-card">
                    <div class="product-image">
                         <a href="${x.link}" target="_blank"><img src="${
    x.image
  }" alt="Product Image"></a>
                    </div>
                    <div class="product-details">
                        <h2 class="product-index">${i + 1}</h2>
                        <p class="product-name">${x.productName}</p>
                        <p class="product-description"> ${x.description}
                        </p>
                    </div>
                </div>`;
});

const getProductCardDom = document.getElementById("product-card");

getProductCardDom.innerHTML = cardDOM;
