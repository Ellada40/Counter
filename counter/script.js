const decrementButton = document.getElementById('decrement-button');
const incrementButton = document.getElementById('increment-button');
const numberDisplay = document.querySelector('.number-display');
const incrementedCounts = document.querySelector('.incremented-counts span');
const decrementedCounts = document.querySelector('.decremented-counts span');
const resetButton = document.getElementById('reset-btn');


let count = 0;
let incrementClicks = 0;
let decrementClicks = 0;
decrementButton.addEventListener('click', () => {
  if(decrementClicks === 10){
    decrementClicks = 0;
  }else{
    decrementClicks++;
    count--;
    numberDisplay.textContent = count;
    decrementedCounts.textContent = decrementClicks;
  }
});
incrementButton.addEventListener('click', () => {
  if(incrementClicks === 10){
    incrementClicks = 0;
  }else{
    incrementClicks++;
    count++;
    numberDisplay.textContent = count;
    incrementedCounts.textContent = incrementClicks;
  }
});
resetButton.addEventListener('click', () => {
  count = 0;  
  incrementClicks = 0;
  decrementClicks = 0;
  numberDisplay.textContent = count;
  incrementedCounts.textContent = incrementClicks;
  decrementedCounts.textContent = decrementClicks;
});