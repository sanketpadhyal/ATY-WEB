function fetchProduct() {
  const link = document.getElementById("link").value.trim();
  const result = document.getElementById("result");
  result.innerHTML = "";

  if (!link || !link.includes("amazon")) {
    result.innerHTML = "<p style='color: red;'>Please enter a valid Amazon product link.</p>";
    return;
  }

  // Simulated Product Info (replace later with real data)
  const product = {
    name: "Samsung Galaxy M14 5G",
    image: "https://m.media-amazon.com/images/I/81ZSn2rk9WL._SL1500_.jpg",
    platforms: [
      {
        name: "Amazon",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        price: "₹12,999",
        link: "https://www.amazon.in/dp/B0BZV2XH88"
      },
      {
        name: "Flipkart",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Flipkart_logo.png",
        price: "₹12,499",
        link: "https://www.flipkart.com"
      },
      {
        name: "Croma",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Croma_logo.svg",
        price: "₹12,990",
        link: "https://www.croma.com"
      }
    ]
  };

  // Generate cards for each platform
  product.platforms.forEach(platform => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img class="platform-logo" src="${platform.logo}" alt="${platform.name} Logo" />
      <h3>${product.name}</h3>
      <img class="product-image" src="${product.image}" alt="${product.name}" />
      <p><strong>Price:</strong> ${platform.price}</p>
      <a href="${platform.link}" target="_blank">Buy on ${platform.name}</a>
    `;
    result.appendChild(card);
  });
}