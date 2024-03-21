var incrementButton = document.getElementById("incrementBtn");
var decrementButton = document.getElementById("decrementBtn");
var counterElement = document.getElementById("counter");

incrementButton.addEventListener("click", function () {
  var currentValue = parseInt(counterElement.innerText);
  var newValue = currentValue + 1;
  counterElement.innerText = newValue;
});

decrementButton.addEventListener("click", function () {
  var currentValue = parseInt(counterElement.innerText);
  var newValue = currentValue - 1;
  counterElement.innerText = newValue;
});
