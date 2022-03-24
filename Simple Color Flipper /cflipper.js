const colorBtn = document.querySelector(".color-btn");
const body = document.querySelector("body");
const hexText = document.querySelector(".color-code");

const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

colorBtn.addEventListener("click", changeHex);

function changeHex() {
  let hex = "#";

  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexValues.length);
    hex += hexValues[index];
  }

  hexText.textContent = hex;
  body.style.backgroundColor = hex;
}

changeHex();
