// Задача:
// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на 
// правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

// 1. Находим ИНПУТ

const validator = document.querySelector(`#validation-input`);

// 2. В переменную выводим параметр countSybols (хар-ки длинны) для того чтобы потом с ней сравнивать длинну ввода

const countSymbols = Number(validator.dataset["length"]);

// 3. Присваеваем обработчика новой переменной

validator.addEventListener(`blur`, (event) => {

// 4. Задаём условия "Если длинна текущего параметра равна 6, то присваеваем КЛАСС "ВАЛИД", и удаляем "ИНВАЛИД" 

    if (event.currentTarget.value.length === countSymbols) {
        validator.classList.remove(`invalid`);
        validator.classList.add(`valid`);
    // ...ну и наоборот
    } else {
        validator.classList.remove(`valid`);
        validator.classList.add(`invalid`);
    };
});

