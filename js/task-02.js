
// // Задача:
// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
  // Создаём переменную, в которую вставляем найденый элемент (в нашем случае UL)
 const ingredientsMenu = document.querySelector("#ingredients");

  // Через map делаем копию каталога :))
 const menu = ingredients.map((list) => {
  // Добавляем !!!LI!!!
  const addLi = document.createElement("li");
  // Привязываем новый !!!.CLASS!!! лишкам
  addLi.classList.add("item");
  // Добавляем название в формате текста
  addLi.textContent = list;
  // Возвращаем новые элементы LI чтобы не было undefined
  return addLi;
 }
 );
  // В новую переменную, которая определила через СЕЛЕКТОР наш элемент UL, добавляем распылённое menu уже с ЛИШКАМИ, классами и названием 
  ingredientsMenu.append(...menu);
  console.log(menu);
  




// Пример из конспекта 


  // // const list = document.querySelector(".usernames");

// // Adds an item to the end of the list

// const lastItem = document.createElement("li");
// lastItem.textContent = "Poly";
// list.append(lastItem);

// // Adds an item to the beginning of the list

// const firstItem = document.createElement("li");
// firstItem.textContent = "Ajax";
// list.prepend(firstItem);

// // Adds a title before the list

// const title = document.createElement("h2");
// title.textContent = "USERNAMES";
// list.before(title);

// // Adds a paragraph after the list

// const text = document.createElement("p");
// text.textContent =
//   "Lorem ipsum dolor sit a