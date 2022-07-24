const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrayOfIngredients = [];

const recipeEl = ingredients.map(element => {
  const itemOneEl = document.createElement(`li`);
  itemOneEl.textContent = element;
  itemOneEl.classList.add(`item`);
  const itemWithClassEl = arrayOfIngredients.push(itemOneEl);

})

 console.log(arrayOfIngredients);
 document.querySelector(`ul#ingredients`).append(...arrayOfIngredients);
