let table = [];
let flip1 = true;
let flip2 = true;
let flip3 = true;
let flip4 = true;
let flip5 = true;
let flip6 = true;
let flip7 = true;
var current_page = 1;
var records_per_page = 6;
let valueSArea = 0;
let valueSPop = 0;

function prevPage() {
  if (current_page > 1) {
    current_page--;
    loadPage(current_page);
  }
}

function nextPage() {
  if (current_page < numOfPages()) {
    current_page++;
    loadPage(current_page);
  }
}

function calcRecords() {
  let k = 0;
  for (let i in table) {
    if (table[i][2][0] && table[i][2][1] && table[i][2][2]) {
      k++;
    }
  }
  console.log(k);
  return Math.floor(k / 3);
}

function loadPage(page) {
  const myNode = document.querySelector(".container");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
  var btn_next = document.getElementById("btn_next");
  var btn_prev = document.getElementById("btn_prev");

  if (page < 1) {
    page = 1;
  }
  if (page > numOfPages()) {
    page = numOfPages();
  }

  for (let i = (page - 1) * calcRecords(); i < page * calcRecords(); i++) {
    if (table[i][2][0] && table[i][2][1] && table[i][2][2]) {
      myNode.append(createRegion(table[i][0], table[i][1], i));
    }
  }

  if (page == 1) {
    btn_prev.style.visibility = "hidden";
  } else {
    btn_prev.style.visibility = "visible";
  }

  if (page == numOfPages(table)) {
    btn_next.style.visibility = "hidden";
  } else {
    btn_next.style.visibility = "visible";
  }
}

function numOfPages() {
  return Math.ceil(table.length / calcRecords());
}

function setSNameFilters() {
  for (let i in table) {
    var con = document.querySelector(".inputerName");
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");

    if (table[i][2][0] && table[i][2][1] && table[i][2][2]) {
      x.checked = true;
    }
    x.setAttribute("name", table[i][0][0]);
    x.addEventListener("change", function () {
      filterS(this.name);
      loadPage(current_page);
      console.log(table[i][2][0], table[i][2][1]);
      setSFilters();
    });
    var xx = document.createElement("LABEL");
    xx.setAttribute("for", table[i][0][0]);
    xx.textContent = table[i][0][0];
    xx.appendChild(x);
    con.appendChild(xx);
  }
}
function setSareaFilter() {
  var container = document.querySelector(".inputerArea");
  var sarea = document.createElement("INPUT");
  sarea.addEventListener("change", function () {
    filterS("");
    loadPage(current_page);
    setSFilters();
  });
  sarea.setAttribute("type", "range");
  sarea.setAttribute("name", "minArea");
  sarea.setAttribute("id", "minArea");
  sarea.setAttribute("value", 10000);
  sarea.setAttribute("step", "1");

  sarea.setAttribute("min", (calcMin(table, 0, 1) - 1).toString());
  sarea.setAttribute("max", (calcMax(table, 0, 1) + 1).toString());
  var lsarea = document.createElement("LABEL");
  lsarea.setAttribute("for", "minArea");
  lsarea.textContent = "area";
  lsarea.appendChild(sarea);
  container.appendChild(lsarea);

  m = document.getElementById("minArea");
  m.value = valueSArea;
}
function setSPopFilter() {
  var container = document.querySelector(".inputerPopulation");
  var xsarea = document.createElement("INPUT");
  xsarea.addEventListener("change", function () {
    filterS("");
    loadPage(current_page);
    setSFilters();
  });
  xsarea.setAttribute("type", "range");
  xsarea.setAttribute("name", "minPop");
  xsarea.setAttribute("id", "minPop");
  xsarea.setAttribute("value", 10000);
  xsarea.setAttribute("step", "1");

  xsarea.setAttribute("min", (calcMin(table, 0, 2) - 1).toString());
  xsarea.setAttribute("max", (calcMax(table, 0, 2) + 1).toString());
  var xlsarea = document.createElement("LABEL");
  xlsarea.setAttribute("for", "minPop");
  xlsarea.textContent = "pop";
  xlsarea.appendChild(xsarea);
  container.appendChild(xlsarea);

  xm = document.getElementById("minPop");
  xm.value = valueSPop;
}
function filterS(value) {
  let min = document.getElementById("minArea");
  let minArea = min.value;
  valueSArea = minArea;

  let pop = document.getElementById("minPop");
  let minPop = pop.value;
  valueSPop = minPop;

  if (minArea == 0) {
    minArea = calcMin(table, 0, 1);
  }
  for (let i in table) {
    if (table[i][0][0].localeCompare(value) == 0) {
      table[i][2][0] = !table[i][2][0];
    }
    if (table[i][0][1] < minArea) {
      table[i][2][1] = true;
    } else {
      table[i][2][1] = false;
    }
    if (table[i][0][2] < minPop) {
      table[i][2][2] = true;
    } else {
      table[i][2][2] = false;
    }
  }
}
async function setSFilters() {
  var con1 = document.querySelector(".inputerArea");
  var con2 = document.querySelector(".inputerName");
  var con3 = document.querySelector(".inputerPopulation");

  while (con1.firstChild) {
    con1.removeChild(con1.lastChild);
  }
  while (con2.firstChild) {
    con2.removeChild(con2.lastChild);
  }
  while (con3.firstChild) {
    con3.removeChild(con3.lastChild);
  }
  setSNameFilters();
  setSareaFilter();
  setSPopFilter();
}
function calcMin(table, a, b) {
  let min = table[0][a][b];
  for (let i in table) {
    min = Math.min(min, table[i][a][b]);
  }
  return min;
}
function calcMax(table, a, b) {
  let max = table[0][a][b];
  for (let i in table) {
    max = Math.max(max, table[i][a][b]);
  }
  return max;
}

function sortBy(key, increasing, x) {
  switch (key) {
    case "sname":
      table.sort();
      if (!increasing) {
        table.reverse();
      }
      setSFilters();
      break;

    case "sarea":
      table.sort((a, b) => a[0][1] - b[0][1]);
      if (!increasing) {
        table.reverse();
      }
      setSFilters();
      break;
    case "spopulation":
      table.sort((a, b) => a[0][2] - b[0][2]);
      if (!increasing) {
        table.reverse();
      }
      setSFilters();
      break;
    case "country":
      table[x][1].sort((a, b) => a[3].localeCompare(b[3]));
      if (!increasing) {
        table[x][1].reverse();
      }

      break;
    case "city":
      table[x][1].sort();
      if (!increasing) {
        table[x][1].reverse();
      }
      break;
    case "area":
      table[x][1].sort((a, b) => a[2] - b[2]);
      if (!increasing) {
        table[x][1].reverse();
      }
      break;
    case "population":
      table[x][1].sort((a, b) => a[1] - b[1]);
      if (!increasing) {
        table[x][1].reverse();
      }
      break;
  }
  return table;
}
function createSet(json) {
  const map = new Map();
  for (let i = 0; i < json.length; i++) {
    if (json[i].hasOwnProperty("subregion")) {
      let countryList;
      let country;
      if (map.get(json[i].subregion) != undefined) {
        countryList = map.get(json[i].subregion);
      } else {
        countryList = [];
      }
      let data = json[i];
      if (data.capital != undefined) {
        country = [
          data.capital[0],
          data.population,
          data.area,
          data.name.common,
          true,
        ];
      } else {
        country = [null, data.population, data.area, data.name.common, true];
      }

      countryList.push(country);
      map.set(json[i].subregion, countryList);
    } else {
    }
  }
  let table = [];
  for (const [key, value] of map) {
    table.push([
      [key, calcArea(value), calcPopulation(value)],
      value,
      [true, true, true],
    ]);
  }
  return table;
}

function createRegion(sub, data, i) {
  const label = document.createElement("div");
  label.classList.add("item-container");
  const a = createRegionInfo(sub[0], sub[2], sub[1]);
  a.classList.add("sliding-menu-link");
  const btnc = document.createElement("div");
  btnc.classList.add("country-button-container");
  const bname = document.createElement("button");
  const bpopulation = document.createElement("button");
  const barea = document.createElement("button");
  const bcountry = document.createElement("button");

  bname.textContent = "name";
  bpopulation.textContent = "populacja";
  barea.textContent = "area";
  bcountry.textContent = "kraj";
  var content = createContentsBoxx();
  content.classList.add("sliding-menu");
  a.addEventListener("click", function (event) {
    event.preventDefault();
    if (content.classList.contains("sliding-menu")) {
      content.classList.remove("sliding-menu");
      content.classList.add("sliding-menu2");
    } else {
      content.classList.remove("sliding-menu2");

      content.classList.add("sliding-menu");
    }
  });

  bname.addEventListener("click", function () {
    table = sortBy("city", flip4, i);
    flip4 = !flip4;
    labelArea = createCSearch(data, content, btnc, sub[0], i);

    content = fillCOntent(data, content, btnc, labelArea);
  });
  barea.addEventListener("click", function () {
    table = sortBy("area", flip5, i);
    flip5 = !flip5;
    labelArea = createCSearch(data, content, btnc, sub[0], i);

    content = fillCOntent(data, content, btnc, labelArea);
  });
  bpopulation.addEventListener("click", function () {
    table = sortBy("population", flip6, i);
    flip6 = !flip6;
    labelArea = createCSearch(data, content, btnc, sub[0], i);

    content = fillCOntent(data, content, btnc, labelArea);
  });
  bcountry.addEventListener("click", function () {
    table = sortBy("country", flip7, i);
    flip7 = !flip7;
    labelArea = createCSearch(data, content, btnc, sub[0], i);

    content = fillCOntent(data, content, btnc, labelArea);
  });
  btnc.append(bname, barea, bpopulation, bcountry);
  labelArea = createCSearch(data, content, btnc, sub[0], i);
  content = fillCOntent(data, content, btnc, labelArea);

  // const filters = createFilters();

  label.append(a, content);
  return label;
}
let araiv = "";
let araicv = "";
function createCSearch(data, content, btnc, id, x) {
  let areai = document.createElement("input");
  areai.setAttribute("type", "text");
  areai.setAttribute("placeholder", "szukaj miast");
  areai.setAttribute("value", araiv);
  areai.setAttribute("id", id);
  let labelArea = document.createElement("label");
  labelArea.setAttribute("for", areai.id);
  labelArea.appendChild(areai);

  let areaic = document.createElement("input");
  areaic.setAttribute("type", "text");
  areaic.setAttribute("value", araicv);
  areaic.setAttribute("placeholder", "szukaj państw");
  areaic.setAttribute("id", id + "z");
  let labelAreac = document.createElement("label");
  labelAreac.setAttribute("for", areaic.id);
  labelAreac.appendChild(areaic);

  let con = document.createElement("div");
  con.classList.add("country-city-label");
  con.append(labelArea, labelAreac);

  areai.addEventListener("keyup", function () {
    araiv = areai.value;
    for (let i in data) {
      if (
        data[i][0].toUpperCase().match(areai.value.toUpperCase()) &&
        data[i][0].toUpperCase().match(areai.value.toUpperCase())
      ) {
        data[i][4] = true;
      } else {
        data[i][4] = false;
      }
    }

    content = fillCOntent(data, content, btnc, con);
    // table = sortBy("city", flip4, x);

    this.focus();
  });

  areaic.addEventListener("keyup", function () {
    araicv = areaic.value;
    // table = sortBy("country", flip7, x);
    for (let i in data) {
      if (
        data[i][3].toUpperCase().match(areaic.value.toUpperCase()) &&
        data[i][0].toUpperCase().match(areai.value.toUpperCase())
      ) {
        data[i][4] = true;
      } else {
        data[i][4] = false;
      }
    }

    content = fillCOntent(data, content, btnc, con);
    this.focus();
  });

  return con;
}
function fillCOntent(data, content, btnc, labelArea) {
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }

  content.append(btnc, labelArea);
  for (let i in data) {
    if (data[i][4]) {
      content.appendChild(
        createCountry(data[i][0], data[i][1], data[i][2], data[i][3])
      );
    }
  }
  return content;
}
function calcPopulation(data) {
  population = 0;
  for (let i in data) {
    population += data[i][1];
  }
  return population;
}
function calcArea(data) {
  area = 0;
  for (let i in data) {
    area += data[i][2];
  }
  return area;
}
function createContentsBoxx() {
  const contents = document.createElement("div");
  contents.classList.add("contents");
  return contents;
}
function createCheckbox() {
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "check";
  checkbox.id = "check";
  return checkbox;
}

function createRegionInfo(name, population, area) {
  // const a = document.createElement("a");
  // const ax = document.createElement("a");
  const ric = document.createElement("div");

  ric.classList.add("region-info-container");
  const SubName = document.createElement("p");
  SubName.textContent = " " + name + ", ";
  const SubPopulation = document.createElement("p");
  SubPopulation.textContent = " " + population + ", ";
  const SubArea = document.createElement("p");
  SubArea.textContent = " " + area + ", ";
  ric.append(SubName, SubPopulation, SubArea);
  return ric;
}

function createCountry(name, population, area, country) {
  const cic = document.createElement("div");
  cic.classList.add("country-info-container");
  const Name = document.createElement("p");
  Name.textContent = " " + name + ", ";
  const Population = document.createElement("p");
  Population.textContent = " " + population + ", ";
  const Area = document.createElement("p");
  Area.textContent = " " + area + ", ";
  const Country = document.createElement("p");
  Country.textContent = " " + country + ", ";
  cic.append(Name, Population, Area, Country);
  return cic;
}
async function getResponse() {
  var res = await fetch("https://restcountries.com/v3.1/all");
  var json = await res.json();
  return json;
}

async function loadSite() {
  var json = await getResponse();
  table = createSet(json);
  loadPage(1, table);
  valueSArea = calcMax(table, 0, 1) + 1;
  valueSPop = calcMax(table, 0, 2) + 1;
  setSFilters();
  console.log(table);

  var btn = document.getElementById("filter-region-options");
  var x = document.querySelector(".inContainer");
  btn.addEventListener("click", function () {
    if (x.style.visibility == "hidden") {
      x.style.visibility = "visible";
    } else {
      x.style.visibility = "hidden";
    }
  });

  let nazwa = document.getElementById("nazwa");
  nazwa.addEventListener("click", function () {
    table = sortBy("sname", flip1);
    flip1 = !flip1;
    loadPage(current_page);
  });

  let area = document.getElementById("area");
  area.addEventListener("click", function () {
    table = sortBy("sarea", flip2);
    flip2 = !flip2;
    loadPage(current_page);
  });

  let pop = document.getElementById("populacja");
  pop.addEventListener("click", function () {
    table = sortBy("spopulation", flip3);
    flip3 = !flip3;
    loadPage(current_page);
  });
}
loadSite();
