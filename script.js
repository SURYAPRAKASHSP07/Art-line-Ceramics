// MOBILE MENU
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// TILE CALCULATOR
function calculateTiles() {
  let length = document.getElementById("length").value;
  let width = document.getElementById("width").value;

  if (length && width) {
    let area = length * width;
    let box = 10; // 1 box = 10 sq.ft
    let result = Math.ceil(area / box);

    document.getElementById("result").innerText =
      `Approx boxes required: ${result}`;
  } else {
    document.getElementById("result").innerText = "Please enter values";
  }
}

// WHATSAPP
function sendWhatsApp(product) {
  let phone = "919999999999";
  let url = `https://wa.me/${phone}?text=I want details about ${product}`;
  window.open(url, "_blank");
}
