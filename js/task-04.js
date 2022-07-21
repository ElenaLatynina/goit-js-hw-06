let counterValue = 0;
const decrementBtn = document.querySelector(`[data-action ="decrement"]`);
const incrementBtn = document.querySelector(`[data-action ="increment"]`);
const spanBtn = document.querySelector(`#value`);

decrementBtn.addEventListener(`click`, () => {
  counterValue += 1;
  spanBtn.textContent = counterValue;
  console.log(counterValue);
  
});


incrementBtn.addEventListener(`click`, () => {
  counterValue -= 1;
  spanBtn.textContent = counterValue;
  console.log(counterValue);

});
