// Задача

// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и 
// изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка 
// будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

// 1. Находим необходимые 2 параметра

const sizeSetBtn = document.querySelector(`#font-size-control`);
const sizeSetText = document.querySelector(`#text`);

console.log(sizeSetBtn);
console.log(sizeSetText);

// 2. Объявляем обработчика который будет менять размер при изменении положения range

sizeSetBtn.addEventListener(`input`, (NewSize) => {
    sizeSetText.style.fontSize = `${NewSize.currentTarget.value }px`}
)

console.log(sizeSetBtn);
