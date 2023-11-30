function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color'),
  colorText = document.querySelector('.color');

const changeColor = () => {
  colorText.textContent = document.body.style.backgroundColor = getRandomHexColor();
  
};

button.addEventListener('click', changeColor);
