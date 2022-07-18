const listItemsEl = document.querySelectorAll(`.item`);
console.log(`Number of categories: `, listItemsEl.length);


const categoriesEl = listItemsEl.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`)
})