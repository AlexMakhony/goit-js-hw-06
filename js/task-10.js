// Задание

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество 
// элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. 
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

// !!! Задание не делал, а нагуглил и попробовал разобраться !!!

// Шаг 1: находим в HTML необходимые элементы 

const inputNum = document.querySelector('#controls>input')
const btnCreate = document.querySelector('button[data-create]')
const btnDestroy = document.querySelector('button[data-destroy]')
const boxes = document.querySelector('#boxes')

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}


// Шаг 2: Добавляем функцию, которая перебирает i до тех пор, пока не привысит amount
const createBoxes = amount => {
	const elementsToAdd = []
	for (let i = 0; i < amount; i++) {

// Шаг 3: При соблюдении условий создаётя div с размерами w & h = 30, но с каждым і элементом, 
// добавляем + 10px путём умножения на пор.номер элемента

		const div = document.createElement('div')
		div.style.height = `${30 + 10 * i}px`
		div.style.width = `${30 + 10 * i}px`

// Шаг 4: Согласно условий, присваиваем рандомный цвет каждому і элементу

		div.style.background = getRandomHexColor()
		elementsToAdd.push(div)
	}
	return elementsToAdd
}

// Шаг 5: Добавляем переменную с функцией, которая вычищает наполнение boxes. Мы её потом присвоем кнопке.

const destroyBoxes = () => {
	boxes.innerHTML = ''
}

// Шаг 6: Вешаем обработчика на кнопку "Создать" с привязкой к createBoxes

btnCreate.addEventListener('click', () => {
	let boxesToAdd = createBoxes(inputNum.value)
	boxes.append(...boxesToAdd)
})

// Шаг 7: Кнопке "дистрой" вешаем обработчика с привязкой к функции (см.п.5)
btnDestroy.addEventListener('click', () => {
	destroyBoxes.call()
})

// Работает :)