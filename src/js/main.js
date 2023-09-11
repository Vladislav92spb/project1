import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';



const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.map__button');
const cross = document.querySelector('.modal__cross');

// обработчик событий
modalBtn.addEventListener('click', (e) => {
  // отменяем стандартное поведение браузера
  e.preventDefault();
  // что делаем при клике
  //classList - обработчик классов
  modal.classList.add('modal--active')


});

cross.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('modal--active')
});

const order = document.querySelector('.order');
const orderBtn = document.querySelector('.products__button');
const orderCs = document.querySelector('.order__cross');

orderBtn.addEventListener('click', (e) => {
  e.preventDefault();
  order.classList.add('order--active')
});

orderCs.addEventListener('click', (e) => {
  e.preventDefault();
  order.classList.remove('order--active')
});


const orderGr = document.querySelector('.order');
const orderBtnGr = document.querySelector('.products__button--green');
const orderCsGr = document.querySelector('.order__cross');

orderBtnGr.addEventListener('click', (e) => {
  e.preventDefault();
  orderGr.classList.add('order--active')
});

orderCsGr.addEventListener('click', (e) => {
  e.preventDefault();
  orderGr.classList.remove('order--active')
});

const orderYe = document.querySelector('.order');
const orderBtnYe = document.querySelector('.products__button--yellow');
const orderCsYe = document.querySelector('.order__cross');

orderBtnYe.addEventListener('click', (e) => {
  e.preventDefault();
  orderYe.classList.toggle('order--active')
});

orderYe.addEventListener('click', (e) => {
  e.preventDefault();
  orderCsYe.classList.toggle('order--active')
});






