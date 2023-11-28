function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const amountElements = document.querySelector('#controls input'),
  createElements = document.querySelector('button[data-create]'),
  destroyElements = document.querySelector('button[data-destroy]'),
  boxesElements = document.querySelector('#boxes');

boxesElements.style.gap = '15px';
boxesElements.style.marginTop = '20px';

const createBoxes = amount => {
  for (let i = 0; i < amount; i++) {
     
      let element = document.createElement('div');

      element.style.width = 30 + 10 * i + 'px';
      element.style.height = 30 + 10 * i + 'px';
      element.style.marginTop = '10px'
      element.style.backgroundColor = getRandomColor();

      boxesElements.append(element);
     
  }
};

const destroyBoxes = () => {
  boxesElements.innerHTML = '';
};

createElements.addEventListener('click', () => {
  let amount = amountElements.value;
  if (amount > 0 && amount <= 100){
    boxesElements.innerHTML = '';
    createBoxes(amount);
    amountElements.value = '';
  }else {
    alert('Please, enter a number from 1 to 100');
    amountElements.value = '';
  }
  
});
destroyElements.addEventListener('click', destroyBoxes);
