// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.
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
// </form >

const form = document.querySelector(`.login-form`);

function onFormSubmit(event) {
    event.preventDefault();

    if (event.currentTarget.elements.email.value === `` || event.currentTarget.elements.password.value === ``) {
        alert(`Please input your email and password`);
    }
    else {
         const formData = new FormData(event.currentTarget);
    console.log(formData);

    formData.forEach(( value, name  ) => {
        console.log('FormData -> name', name);
        console.log('FormData -> value', value);
    });
    }
   
}

form.addEventListener(`submit`, onFormSubmit);
form.reset();
