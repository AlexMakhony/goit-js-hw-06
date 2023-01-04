// Задача:
// Напиши скрипт который:

// 1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// 2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

const listItemCount = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${listItemCount.length}`);

// ЧЕРЕЗ FOR EACH

// Перебераем элементы listItemCount
[...listItemCount].forEach((el => {
    const category = el.querySelector(`h2`).textContent;
    const countEl = el.querySelectorAll(`li`).length;
    
    console.log(`Category: ${category}`);
    console.log(`Elements: ${countEl}`);
}));

// ЧЕРЕЗ MAP

[...listItemCount].map((sss => {
    const categoryMap = sss.querySelector(`h2`).textContent;
    const elementsMap = sss.querySelectorAll(`li`).length;
    
    console.log(`Category: ${categoryMap}`);
    console.log(`Elements: ${elementsMap}`);
    
}));

// ЧЕРЕЗ FOR ... OF

const listsForOf = [...listItemCount];

for (const list of listsForOf) {
    const categoryForOf = list.querySelector(`h2`).textContent;
    const countElForOf = list.querySelectorAll(`li`).length;
    console.log(`Category: ${categoryForOf}`);
    console.log(`Elements: ${countElForOf}`);
}

    

// Відмінності 4Each & map:
// - map можна прив'язувати до інших функція (reduce, soft, filter etc...);
// - map створює копію, а 4each змінює основу;
// - map швидше прациє ніж 4each;
// Якщо треба змінювати елементи - йдемо у map, якщо ніт - forEach



