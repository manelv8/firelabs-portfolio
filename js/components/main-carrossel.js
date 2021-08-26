const btnRight = document.querySelector('.button-arrow.-right');
const btnLeft = document.querySelector('.button-arrow.-left');

const carrosselItems = document.querySelector('.items');
let step = 100

btnRight.addEventListener('click',function(){
  step = step + 100;
  carrosselItems.style = `transform: translateX(${step}px)`;
})

btnLeft.addEventListener('click', function () {
  step = step - 100;
  carrosselItems.style = `transform: translateX(${step}px)`;
})