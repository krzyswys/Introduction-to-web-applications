const container = [
  {
    id: 1,
    name: "Jan Kowalski",
    title: "Product manger",
    profile: "url(profile1.jpg)",
    dsc: "1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quia iste sed pariatur? Sit minima, veritatis enim, molestias amet quod repellat, reiciendis quasi impedit cumque dolores? Ipsa inventore unde quasi?",
  },
  {
    id: 2,
    name: "Osoba druga",
    title: "Drugi opis-pracy",
    profile: "url(profile2.jpg)",
    dsc: "2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quia iste sed pariatur? Sit minima, veritatis enim, molestias amet quod repellat, reiciendis quasi impedit cumque dolores? Ipsa inventore unde quasi?",
  },
  {
    id: 3,
    name: "Osoba trzecia",
    title: "Trzeci opic",
    profile: "url(profile3.jpg)",
    dsc: "3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quia iste sed pariatur? Sit minima, veritatis enim, molestias amet quod repellat, reiciendis quasi impedit cumque dolores? Ipsa inventore unde quasi?",
  },
  {
    id: 4,
    name: "Osoba czwarta",
    title: "Piąty opis pracy",
    profile: "url(profile4.jpg)",
    dsc: "4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quia iste sed pariatur? Sit minima, veritatis enim, molestias amet quod repellat, reiciendis quasi impedit cumque dolores? Ipsa inventore unde quasi?",
  },
  {
    id: 5,
    name: "Osoba nr piec",
    title: "Opis pracy nr 5",
    profile: "url(profile5.jpg)",
    dsc: "5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quia iste sed pariatur? Sit minima, veritatis enim, molestias amet quod repellat, reiciendis quasi impedit cumque dolores? Ipsa inventore unde quasi?",
  },
];
let table = [];

let con = document.querySelector(".cards-container");
let left = document.querySelector("#left");
let right = document.querySelector("#right");
let random = document.querySelector("#random");
let currentItem = 0;
let prev = currentItem;
let randomizer = false;

window.addEventListener("DOMContentLoaded", create);
right.addEventListener("click", getRight);
left.addEventListener("click", getLeft);
random.addEventListener("click", getRandom);

function display() {
  table[currentItem].style.left = 0;
  table[currentItem].style.width = 650 + "px";
  let p = table[currentItem].querySelectorAll("#dsc");
  p[0].style.width = 450 + "px";
  let h2 = table[currentItem].querySelectorAll("#job");
  h2[0].style.width = 200 + "px";
  let h3 = table[currentItem].querySelectorAll("#name");
  h3[0].style.width = 300 + "px";
  let profile = table[currentItem].querySelectorAll("#profile");
  profile[0].style.width = 150 + "px";
  profile[0].style.height = 150 + "px";
  profile[0].style.border = "5px solid white";
  profile[0].style.boxShadow = "0px 0px 5px 2px rgb(253, 245, 229)";
}
function create() {
  for (let i in container) {
    let item = container[i];
    let card = document.createElement("div");
    card.classList.add("card");
    let profileocn = document.createElement("div");
    profileocn.setAttribute("id", "profile-container");
    let profile = document.createElement("div");
    profile.setAttribute("id", "profile");
    profileocn.appendChild(profile);
    let h2 = document.createElement("h2");
    h2.setAttribute("id", "name");
    let h3 = document.createElement("h3");
    h3.setAttribute("id", "job");
    let p = document.createElement("p");
    p.setAttribute("id", "dsc");
    profile.style.backgroundImage = item.profile;
    h2.textContent = item.name;
    h3.textContent = item.title;
    p.textContent = item.dsc;
    card.append(profileocn, h2, h3, p);
    con.appendChild(card);
    table.push(card);
  }
  display();
}

function hideToright(x) {
  table[x].style.right = 0 + "px";
  table[x].style.left = null;
  i = x;
  window.setTimeout(function () {
    table[i].style.width = 0 + "px";
    let p = table[i].querySelectorAll("#dsc");
    p[0].style.width = 0 + "px";
    let h2 = table[i].querySelectorAll("#job");
    h2[0].style.width = 0 + "px";
    let h3 = table[i].querySelectorAll("#name");
    h3[0].style.width = 0 + "px";
    let profile = table[i].querySelectorAll("#profile");
    profile[0].style.width = 0 + "px";
    profile[0].style.height = 0 + "px";
    profile[0].style.border = "0px solid white";
    profile[0].style.boxShadow = "0px 0px 0px 0px rgb(253, 245, 229)";
  }, 1);
}
function hideToleft(x) {
  table[x].style.left = 0 + "px";
  table[x].style.right = 650 + "px";
  i = x;
  window.setTimeout(function () {
    table[i].style.width = 0 + "px";
    let p = table[i].querySelectorAll("#dsc");
    p[0].style.width = 0 + "px";
    let h2 = table[i].querySelectorAll("#job");
    h2[0].style.width = 0 + "px";
    let h3 = table[i].querySelectorAll("#name");
    h3[0].style.width = 0 + "px";
    let profile = table[i].querySelectorAll("#profile");
    profile[0].style.width = 0 + "px";
    profile[0].style.height = 0 + "px";
    profile[0].style.border = "0px solid white";
    profile[0].style.boxShadow = "0px 0px 0px 0px rgb(253, 245, 229)";
  }, 1);
}
function getRight() {
  if (randomizer) {
    hideToright(prev);
    randomizer = false;
  } else {
    hideToright(currentItem);
    currentItem++;

    if (currentItem > container.length - 1) {
      currentItem = 0;
    }
  }

  table[currentItem].style.transition = 0 + "s";
  table[currentItem].style.left = 0 + "px";
  table[currentItem].style.right = null;
  window.setTimeout(function () {
    table[currentItem].style.transition = 1 + "s";
    table[currentItem].style.width = 650 + "px";
    let p = table[currentItem].querySelectorAll("#dsc");
    p[0].style.width = 450 + "px";
    let h2 = table[currentItem].querySelectorAll("#job");
    h2[0].style.width = 200 + "px";
    let h3 = table[currentItem].querySelectorAll("#name");
    h3[0].style.width = 300 + "px";
    let profile = table[currentItem].querySelectorAll("#profile");
    profile[0].style.width = 150 + "px";
    profile[0].style.height = 150 + "px";
    profile[0].style.border = "5px solid white";
    profile[0].style.boxShadow = "0px 0px 5px 2px rgb(253, 245, 229)";
  }, 1);
}
function getLeft() {
  if (randomizer) {
    hideToleft(prev);
    randomizer = false;
  } else {
    hideToleft(currentItem);
    currentItem--;
    if (currentItem < 0) {
      currentItem = container.length - 1;
    }
  }

  table[currentItem].style.transition = 0 + "s";
  table[currentItem].style.left = null;

  table[currentItem].style.right = 0 + "px";
  window.setTimeout(function () {
    table[currentItem].style.transition = 1 + "s";
    table[currentItem].style.width = 650 + "px";
    let p = table[currentItem].querySelectorAll("#dsc");
    p[0].style.width = 450 + "px";
    let h2 = table[currentItem].querySelectorAll("#job");
    h2[0].style.width = 200 + "px";
    let h3 = table[currentItem].querySelectorAll("#name");
    h3[0].style.width = 300 + "px";
    let profile = table[currentItem].querySelectorAll("#profile");
    profile[0].style.width = 150 + "px";
    profile[0].style.height = 150 + "px";
    profile[0].style.border = "5px solid white";
    profile[0].style.boxShadow = "0px 0px 5px 2px rgb(253, 245, 229)";
  }, 1);
}
function getRandom() {
  let cur = currentItem;
  prev = currentItem;
  randomizer = true;
  while (cur == currentItem) {
    currentItem = Math.floor(Math.random() * container.length);
  }
  console.log(prev, currentItem);
  let arr = [getLeft, getRight];
  arr[Math.floor(Math.random() * arr.length)]();
}

function myMove() {
  let id = null;
  const elem = document.querySelector(".left-div");
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 0.01);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.width = pos + "px";
      elem.style.left = pos + "px";
    }
  }
}
