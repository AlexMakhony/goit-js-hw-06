// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль 
// при клике на button.change-color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


// 1. Ищем бади, кнопку и спан

const body = document.querySelector(`body`);
const changeColorButton = document.querySelector(`.change-color`);
const spanColor = document.querySelector(`.color`);

// 2. Вешаем на кнопку обработчика, который по клику будет рандомно менять цвет и присваевать
// БОДИ через инлайн цвет + в спане будет писать название цвета

changeColorButton.addEventListener(`click`, event => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanColor.textContent = color;
})



