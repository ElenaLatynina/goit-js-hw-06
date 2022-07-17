// const listCategories = document.querySelector(`#categories`);
// console.log(listCategories);

const listItems = document.querySelectorAll(`li.item`);
console.log(`Number of categories: `, listItems.length);

// const itemEl = listItems.firstChild;
// console.log(listItems[1].firstChild);

const titlesOfEl = document.querySelectorAll(`h2`);

const categoryTitlesEl = titlesOfEl.forEach(element => {
    console.log(`Category: ${element.textContent}`);

    const categoryItemsEl = element.lastElementChild;

    const amountOfEl = document.querySelectorAll(`li`);
    console.log(`Elements: ${categoryItemsEl.length}`);
})