let ball = document.querySelector("#ball");
let playground = document.querySelector(".move");
let back = document.querySelector("body");
let info = document.querySelector("#alert");
let data = playground.getBoundingClientRect();
let infoData = info.getBoundingClientRect();
playground.addEventListener("click", mouseCoordinates);
back.addEventListener("click", alertt);

window.addEventListener("DOMContentLoaded", function () {
  playground.style.position = "static";
  ball.style.top = data.top + "px";
  ball.style.left = data.left + "px";
});

function mouseCoordinates(event) {
  ball.style.transition = "1s";
  if (event.clientY - 40 < data.top) {
    ball.style.top = data.top + "px";
  } else if (event.clientY + 40 > data.top + data.height) {
    ball.style.top = data.height + data.top - 80 + "px";
  } else {
    ball.style.top = event.clientY - 40 + "px";
  }

  if (event.clientX - 40 < data.left) {
    ball.style.left = data.left + "px";
  } else if (event.clientX + 40 > data.left + data.width) {
    ball.style.left = data.width + data.left - 80 + "px";
  } else {
    ball.style.left = event.clientX - 40 + "px";
  }
}

function alertt(event) {
  if (
    event.clientY < data.top ||
    event.clientY > data.top + data.height ||
    event.clientX < data.left ||
    event.clientX > data.left + data.width
  ) {
    info.textContent = "ZLE";
    info.style.top = event.clientY - infoData.height / 2 + "px";
    info.style.left = event.clientX - infoData.width / 2 + "px";
    console.log(event.clientY, event.clientX);
  } else {
    info.textContent = "";
  }
}
