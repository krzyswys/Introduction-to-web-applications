const tlo = [];
tlo.push(
  document.getElementById("morze"),
  document.getElementById("las"),
  document.getElementById("gory")
);
let color = ["red", "green", "blue"];
let i = 0;
document.getElementById("next").onclick = function () {
  i++;
  if (i == tlo.length) {
    i = 0;
  }
  for (let j in tlo) {
    tlo[j].style.visibility = "hidden";
  }
  tlo[i].style.borderColor = color[i];
  tlo[i].style.visibility = "visible";
};
document.getElementById("prev").onclick = function () {
  i--;
  if (i < 0) {
    i = tlo.length - 1;
  }

  for (let j in tlo) {
    tlo[j].style.visibility = "hidden";
  }
  tlo[i].style.borderColor = color[i];
  tlo[i].style.visibility = "visible";
};
