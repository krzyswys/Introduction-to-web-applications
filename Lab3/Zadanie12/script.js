let zombieNum = 0;
let generateSpeed;
let maxhealth;
let gameHealth;
let zombieInterval = new Map();
let username;
let score;
let gameInnerInterval;
let gameOuterInterval;
let board = document.querySelector("#playground");
let score_el = document.querySelector("#score");
let hpel = document.querySelector("#health");
let nameel = document.querySelector("#name");
let gameStatus = false;
let pointer = document.querySelector("#pointer");

function updateScore() {
  score_el.textContent = score;
}
function updateHealth() {
  hpel.textContent = "";
  for (let i = 0; i < gameHealth; i++) {
    hpel.textContent += "❤";
  }
}

function generateZombie() {
  let speed = Math.round(Math.random() * 5);
  let bottomOfs = Math.round(Math.random() * 15) + 5;
  let scale = Math.round(Math.random() * 50 + 50) / 100;
  let zombie = document.createElement("div");
  zombie.classList.add("zombie");

  zombie.style.bottom = bottomOfs + "vh";
  zombie.style.left = 101 + "vw";
  zombie.style.transform = "scale(" + scale + ")";
  zombie.setAttribute("id", zombieNum);
  zombieNum++;
  zombie.addEventListener("click", function (e) {
    e.stopPropagation();
  });
  zombie.addEventListener("click", zombieKill);
  board.appendChild(zombie);
  addAnimation(zombie, speed);
}

function addAnimation(zombie, speed) {
  let offset = 200;
  let bgpos = -200;
  let cur_pos = 0;
  let interval = 70;

  switch (speed) {
    case 1:
      interval = 70;
      break;
    case 2:
      interval = 55;
      break;
    case 3:
      interval = 40;
      break;
    case 4:
      interval = 30;
      break;
    case 5:
      interval = 15;
      break;
  }

  zombieInterval.set(
    zombie.id,
    setInterval(() => {
      let end =
        Math.floor(200 * (100 / document.documentElement.clientWidth)) + 13;
      if (gameStatus) {
        zombie.style.left = 110 - cur_pos + "vw";
        cur_pos++;
        zombie.style.backgroundPosition = bgpos + offset + "px";
        bgpos -= offset;
        if (bgpos == -2000) {
          bgpos = -200;
        }
        console.log(end);
        if (cur_pos == 100 + end) {
          board.style.backgroundColor = "rgba(252, 92, 92, 0.327)";
          window.setTimeout(function () {
            board.style.backgroundColor = "transparent";
          }, 200);
          zombie.remove();

          score -= 6;
          gameHealth -= 1;
          updateScore();
          updateHealth();
          if (gameHealth <= 0) {
            gameEnd();
          }
        }
      }
    }, interval)
  );
}
function zombieKill() {
  score += 12;
  updateScore();
  clearInterval(zombieInterval.get(this.id));
  board.style.backgroundColor = "rgba(247, 182, 30, 0.2)";
  window.setTimeout(function () {
    board.style.backgroundColor = "transparent";
  }, 200);
  this.style.transition = "1s";
  this.style.filter = "grayscale()";
  this.style.transform = "scale(" + 0 + ")";
  this.style.opacity = "0";
  let el = this;
  window.setTimeout(function () {
    el.remove();
  }, 1000);
}
function missShot() {
  board.style.backgroundColor = "rgba(195, 195, 195, 0.15)";
  window.setTimeout(function () {
    board.style.backgroundColor = "transparent";
  }, 200);
  score -= 6;
  updateScore();
}
function followcursor(e) {
  pointer.style.top = e.pageY + "px";
  pointer.style.left = e.pageX + "px";
}
function gameStart() {
  pointer.style.display = "block";
  document.body.style.cursor = "none";
  board.addEventListener("click", missShot);
  window.addEventListener("mousemove", followcursor);
  zombieNum = 0;
  generateSpeed = 1500;
  maxhealth = 3;
  gameHealth = 0;
  zombieInterval = new Map();
  username = "";
  score = 0;
  let endcart = document.querySelector(".endCard-container");
  endcart.style.display = "none";
  let el = document.querySelector(".input-organizer");
  el.style.display = "none";
  gameStatus = true;
  gameHealth = maxhealth;
  score = 0;
  zombieNum = 0;
  updateHealth();
  updateScore();
  let zombies = document.querySelectorAll("div.zombie");
  clearZombies();
  zombies.length = 0;
  let generatedPerInterval = 0;
  let refreshRate = 1000;
  // -------------------------------------------

  gameOuterInterval = setInterval(() => {
    clearTimeout(gameInnerInterval);
    console.log(generateSpeed);
    if (generateSpeed > 300) {
      if (generatedPerInterval == 10) {
        generateSpeed -= 100;
        generatedPerInterval = 0;
      }
    }
    generatedPerInterval++;
    if (gameStatus) {
      gameInnerInterval = setTimeout(generateZombie, generateSpeed);
    }
    gameInnerInterval = setInterval(() => {
      generateZombie();
    }, generateSpeed);
  }, refreshRate);
}
function clearZombies() {
  clearTimeout(gameInnerInterval);
  let zombies = document.querySelectorAll("div.zombie");
  for (let [key, value] of zombieInterval) {
    clearInterval(value);
  }
  for (let i = 0; i < zombies.length; i++) {
    zombies[i].remove();
  }
  zombies.length = 0;
}
function gameEnd() {
  document.body.style.cursor = "default";
  pointer.style.display = "none";
  window.removeEventListener("mousemove", followcursor);
  gameStatus = false;
  clearTimeout(gameInnerInterval);
  clearInterval(gameOuterInterval);
  let endcart = document.querySelector(".endCard-container");
  endcart.style.display = "flex";

  let scorE = document.querySelector("#scoreE");
  let nick = document.querySelector("#nickname");
  let time = document.querySelector("#time");
  document.getElementById("inputer").value = "";
  scorE.textContent = "Twój wynik: " + score;
  nick.textContent = "Nazwa użytkowika: " + username;
  setTimeout(clearZombies, 2000);
  let startBtnagain = document.getElementById("startagain");
  startBtnagain.style.display = "none";
  setTimeout(function () {
    startBtnagain.style.display = "block";
  }, 2000);
  board.removeEventListener("click", missShot);
}

function loadGame() {
  pointer.style.display = "none";
  let startBtnagain = document.getElementById("startagain");
  startBtnagain.addEventListener("click", gameStart);
  board.addEventListener("click", missShot);
  board.addEventListener("click", function (e) {
    e.stopPropagation();
  });
  let endcart = document.querySelector(".endCard-container");
  endcart.style.display = "none";
  let el = document.querySelector(".input-organizer");
  el.style.display = "flex";
  let startBtn = document.getElementById("start");
  let usrname = document.getElementById("inputer");
  startBtn.addEventListener("click", function () {
    let name = usrname.value;
    if (!usrname.checkValidity() || name.length == 0) {
      usrname.style.outline = "1px solid red";
      return;
    } else {
      usrname.style.outline = "1px solid green";
      username = name;
      nameel.textContent = username;
      el.style.display = "none";
      gameStart();
    }
  });
}
loadGame();
