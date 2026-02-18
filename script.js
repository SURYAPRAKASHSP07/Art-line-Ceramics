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

function sendMessage(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  let shopNumber = "918110043001"; // WhatsApp number with country code

  let url = `https://wa.me/${shopNumber}?text=
Name: ${name} 
Phone: ${phone} 
Message: ${message}`;

  window.open(url, "_blank");

  document.getElementById("formResponse").innerText =
    "Redirecting to WhatsApp...";

  document.querySelector("form").reset();
}
