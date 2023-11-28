let randomColor;
const button = document.querySelector('.change-color');
const colorText = document.querySelector('.color');
function getRandomHexColor() {
  randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

  colorText.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
}

button.addEventListener('click', getRandomHexColor);
