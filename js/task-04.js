// Задача:
// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

// Погнали

// Выстраиваваем связь с кнопками и value

const plusEl = document.querySelector('[data-action="increment"]');
const minusEl = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

plusEl.addEventListener("click", () => {
    counterValue +=1;
    valueEl.innerHTML = counterValue;
  });
minusEl.addEventListener("click", () => {
    counterValue -=1;
    valueEl.innerHTML = counterValue;
  });


// // Можно сделать через onclick, но в ДЗ указано через Слушателей

// plusEl.onclick = function () {
//     counterValue += 1;
//     valueEl.innerHTML = counterValue;
// };

// minusEl.onclick = function () {
//     counterValue -= 1;
//     valueEl.innerHTML = counterValue;
// }
// console.log(counterValue)







