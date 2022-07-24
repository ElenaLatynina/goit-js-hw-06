// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

const inputValue = document.querySelector(`#controls>input`);
const btnCreate = document.querySelector(`button[data-create]`);
const btnDestroy = document.querySelector(`button[data-destroy]`);
const boxesList = document.querySelector(`#boxes`);
const boxesItems = [];


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getRandomRgbColor() {
  const red = Math.round(Math.random(0, 1) * 255);
  const green = Math.round(Math.random(0, 1) * 255);
  const blue = Math.round(Math.random(0, 1) * 255);
  return `rgb(${red}, ${green}, ${blue})`;

}


function createBoxes(amount) {
  amount = inputValue.value;
  for (let i = 0; i < amount; i += 1){
    const boxSize = 30;
    let newBoxSize = boxSize + i * 10;
    const newBox = document.createElement(`div`);
    newBox.style.cssText = `width: ${newBoxSize}px; height: ${newBoxSize}px; background-color : ${getRandomRgbColor()}`
    boxesItems.push(newBox);
    console.log(boxesItems);
    
  }
  boxesList.append(...boxesItems);
}

function destroyBoxes(){
  boxesList.innerHTML = ``;
}

btnCreate.addEventListener(`click`, createBoxes);
btnDestroy.addEventListener(`click`, destroyBoxes);