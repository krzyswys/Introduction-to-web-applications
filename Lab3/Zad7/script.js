async function getResponse() {
  var res = await fetch("http://localhost:3000/cities");
  var json = await res.json();
  return json;
}
async function getA(data) {
  var cities = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i].province == "małopolskie") {
      cities += data[i].name + ", ";
    }
  }
  cities = cities + cities.length;
  document.getElementById("a").textContent = cities;
}

async function getB(data) {
  var cities = "";
  for (let i = 0; i < data.length; i++) {
    miasto = data[i].name;
    letter_counter = 0;
    for (letter of miasto) {
      if (letter == "a" || letter == "A") {
        letter_counter++;
      }
    }
    if (letter_counter == 2) {
      cities += miasto + ", ";
    }
  }
  cities = cities + cities.length;
  document.getElementById("b").textContent = cities;
}
async function getC(data) {
  var cities = new Array();
  for (var i in data) {
    cities.push([data[i].people / data[i].area, data[i].name]);
  }
  cities.sort((a, b) => {
    return b[0] - a[0];
  });
  document.getElementById("c").textContent = cities[4][1];
}
async function getD(data) {
  var cities = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i].people > 10000) {
      cities += data[i].name + " city, ";
    }
  }
  cities = cities + cities.length;
  document.getElementById("d").textContent = cities;
}

async function getE(data) {
  let more = 0;
  let less = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].people > 8000) {
      more++;
    } else {
      less++;
    }
  }
  let addon = "powyzej";
  if (less > more) {
    addon = "ponizej";
  }
  let ans =
    "miast mniej niż 8000: " +
    less +
    ", miast wiecej niz 8000: " +
    more +
    ", wiecej jest miast : " +
    addon +
    " 8000";
  document.getElementById("e").textContent = ans;
}
async function getF(data) {
  let field = 0;
  let num = 0;
  for (var i in data) {
    if (data[i].township.charAt(0) == "P") {
      field += data[i].area;
      num++;
    }
  }
  document.getElementById("f").textContent = field / num;
}
async function getG(data) {
  let more = 0;
  let cities = 0;
  for (var i in data) {
    if (data[i].province == "pomorskie") {
      cities++;
      if (data[i].people > 5000) {
        more++;
      }
    }
  }
  document.getElementById("g").textContent =
    "Miast z woj. Pomorskiego: " +
    cities +
    ". Miast z liczbą więcej niż 5000 osob: " +
    more;
}
async function loadSite() {
  var json = await getResponse();
  getA(json);
  getB(json);
  getC(json);
  getD(json);
  getE(json);
  getF(json);
  getG(json);
}
loadSite();
