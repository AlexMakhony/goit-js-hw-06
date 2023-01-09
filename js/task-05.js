// Задание: Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 
// "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

// Начинаем

// 1. Производим поиск элементов

const inputData = document.querySelector(`#name-input`);
const outputData = document.querySelector(`#name-output`);

// 2. Вызываем обработчика и запускаем функцию на элементе с ИД Инпут

inputData.addEventListener(`input`, (event) => {

// 3. Указываем, что текстовое наполнение output или заполняется на вызванном обработчике ИЛИ равняется "Анонимус"

    outputData.textContent = event.currentTarget.value || `Anonymous`;
});






