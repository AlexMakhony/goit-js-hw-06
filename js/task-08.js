// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обработка отправки формы form.login-form должна быть по событию submit.

// При отправке формы страница не должна перезагружаться.

// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, 
// где имя поля будет именем свойства, а значение поля - значением свойства. 

// Для доступа к элементам формы используй свойство elements.

// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

// 1. Ищем нашу форму

const form = document.querySelector(".login-form");

// 2. Задаём слушателя с именем события Сабмит

form.addEventListener("submit", handleSubmit);

// 3. Создаём функцию сбора данных

function handleSubmit(event) {

// 4. Обнуляем рэсэт страницы которое задано по умолчанию с помощью preventDefault
    event.preventDefault();

// 5. Задаём переменную, в которой указываем что мэйл и пароль вносим в form
    const {
      elements: { email, password }
    } = event.currentTarget;
  
// 6. Ставим условием if алерт, в котором указываем условия при незаполнении одной из граф

    if (email.value === "" || password.value === "") {
      return alert("Все поля должны быть заполнены!");
    }
  
// 7. Собираем заполненные поля в переменную userInfo и проверяем в консоле

    const userInfo = { email: email.value, Password: password.value }
    console.log(userInfo);

// 8. Обнуляем форму
    event.currentTarget.reset();
}







