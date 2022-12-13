let one = false;
let two = false;
let three = false;
let points = 0;
let propagation = true;
let click = false;
let element1 = document.getElementById("one");
let element2 = document.getElementById("two");
let element3 = document.getElementById("three");
let element4;
let element5;
let element6;
let txt1 = document.getElementById("txt1");
let txt2 = document.getElementById("txt2");
let txt3 = document.getElementById("txt3");
let swit = false;
function resetTxt() {
  one = false;
  two = false;
  three = false;
}
function updateTxt() {
  if (one) {
    txt1.innerText = "nacisnales przycisk nr 1 o wartosci 1";
  } else {
    txt1.innerText = "-";
  }
  if (two) {
    txt2.innerText = "nacisnales przycisk nr 2 o wartosci 2";
  } else {
    txt2.innerText = "-";
  }
  if (three) {
    txt3.innerText = "nacisnales przycisk nr 3 o wartosci 5";
  } else {
    txt3.innerText = "-";
  }
  let p = document.getElementById("points");
  p.innerText = points;
}
function clicked(score) {
  console.log(points);
  if (!swit) {
    switch (score) {
      case 1:
        one = true;
        points += score;
        updateTxt();
        resetTxt();
        break;
      case 2:
        two = true;
        points += score;
        if (!propagation) {
          updateTxt();
          resetTxt();
        }
        break;
      case 5:
        three = true;
        points += score;
        if (!propagation) {
          updateTxt();
          resetTxt();
        }
        break;
    }
  } else {
    switch (score) {
      case 1:
        one = true;
        points += score;
        if (!propagation) {
          updateTxt();
          resetTxt();
        }

        break;
      case 2:
        two = true;
        points += score;
        if (!propagation) {
          updateTxt();
          resetTxt();
        }
        break;
      case 5:
        three = true;
        points += score;
        updateTxt();
        resetTxt();
        break;
    }
  }
}

function stopg(e) {
  e.stopPropagation();
}
function togglePropagation() {
  if (!propagation) {
    let element4 = document.getElementById("propagation");
    element1.removeEventListener("click", stopg);
    element2.removeEventListener("click", stopg);
    element3.removeEventListener("click", stopg);
    element4.innerText = "Start propagation";
  } else {
    let element4 = document.getElementById("propagation");
    element1.addEventListener("click", stopg);
    element2.addEventListener("click", stopg);
    element3.addEventListener("click", stopg);
    element4.innerText = "Stop propagation";
  }
}

function switchAction() {
  if (!swit) {
    element1.removeEventListener("click", addone);
    element3.removeEventListener("click", addthree);
    element1.addEventListener("click", addthree);
    element3.addEventListener("click", addone);
  } else {
    element1.removeEventListener("click", addthree);
    element3.removeEventListener("click", addone);
    element1.addEventListener("click", addone);
    element3.addEventListener("click", addthree);
  }
  swit = !swit;

  [txt1, txt3] = [txt3, txt1];

  [
    document.getElementById("one-txt").textContent,
    document.getElementById("three-txt").textContent,
  ] = [
    document.getElementById("three-txt").textContent,
    document.getElementById("one-txt").textContent,
  ];
}
function addone() {
  clicked(1);
  if (points >= 50) {
    element3.style.background = "black";
    element3.removeEventListener("click", addthree);
  }
  if (points >= 30) {
    element2.style.background = "black";
    element2.removeEventListener("click", addtwo);
  }
}
function addtwo() {
  clicked(2);
  if (points >= 50) {
    element3.style.background = "black";
    element3.removeEventListener("click", addthree);
  }
  if (points >= 30) {
    element2.style.background = "black";
    element2.removeEventListener("click", addtwo);
  }
}
function addthree() {
  clicked(5);
  if (points >= 50) {
    element3.style.background = "black";
    element3.removeEventListener("click", addthree);
  }
  if (points >= 30) {
    element2.style.background = "black";
    element2.removeEventListener("click", addtwo);
  }
}

function load() {
  points = 0;
  propagation = true;
  swit = false;
  element3.removeEventListener("click", addone);
  element1.removeEventListener("click", addthree);

  element1.removeEventListener("click", addone);
  element2.removeEventListener("click", addtwo);
  element3.removeEventListener("click", addthree);

  element1.addEventListener("click", addone);
  element2.addEventListener("click", addtwo);
  element3.addEventListener("click", addthree);

  element2.style.background = "aquamarine";
  element2.style.textContent = "(2)";
  element3.style.background = "red";
  element4 = document.getElementById("propagation");
  element4.addEventListener("click", function () {
    togglePropagation();
    propagation = !propagation;
  });
  element5 = document.getElementById("reset");
  element6 = document.getElementById("kolejnosc");
  element6.addEventListener("click", switchAction);
  document.getElementById("one-txt").textContent = "(1)";
  document.getElementById("two-txt").textContent = "(2)";
  document.getElementById("three-txt").textContent = "(5)";
  updateTxt();
  element5.addEventListener("click", load);
}
load();
