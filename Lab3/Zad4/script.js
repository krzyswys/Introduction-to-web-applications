var counter = 0;

function increment() {
  var counterEl = document.getElementById("counter");
  counter++;
  counterEl.textContent = "Licznik: " + counter;
}

function disableCounter() {
  counter = 0;
  document.getElementById("add").removeEventListener("click", increment);
  var counterEl = document.getElementById("counter");
  counterEl.textContent = "Licznik: " + counter;
}

function enableCounter() {
  document.getElementById("add").addEventListener("click", increment);
}

document.getElementById("add").addEventListener("click", increment);
document.getElementById("disable").addEventListener("click", disableCounter);
document.getElementById("enable").addEventListener("click", enableCounter);
