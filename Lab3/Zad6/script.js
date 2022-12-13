function add() {
  let name = document.querySelector("#name").value;
  let phone = document.querySelector("#phone").value;
  if (!(verifiyName(name) && verifiyPhone(phone))) {
    return;
  }
  let section = document.createElement("div");
  section.classList.add("sec");
  let left = document.createElement("div");
  let name_section = document.createElement("h2");
  let phone_section = document.createElement("p");
  let btn = document.createElement("button");
  let ico = document.createElement("span");
  ico.classList.add("material-symbols-outlined");
  ico.innerHTML = "delete";
  btn.appendChild(ico);
  btn.classList.add("delete");
  name_section.innerText = name;
  phone_section.innerText = phone.replace(/ /g, "");
  left.appendChild(name_section);
  left.appendChild(phone_section);
  section.appendChild(left);
  section.appendChild(btn);
  let conainer = document.querySelector(".added-objects");
  conainer.appendChild(section);
  btn.addEventListener("click", deleteEntry);

  label1 = document.querySelector("#name");
  label2 = document.querySelector("#phone");
  label1.value = "";
  label2.value = "";
}

function deleteEntry() {
  var parent = this.parentElement;
  parent.remove();
}

let rgx = /^\p{Lu}?\p{Ll}*(-\p{Lu})?\p{Ll}*$/iu;

function verifiyName(name) {
  let imie = name.split(" ");
  if (imie.length != 2) {
    return false;
  }
  if (imie[1].length == 0) {
    return false;
  }
  if ((imie[1].match(new RegExp("-", "g")) || []).length > 1) {
    return false;
  }
  let pierwszy = imie[0];
  let x = imie[1].split("-");
  console.log(x);
  var drugi = "";
  var trzeci = "";
  if (x.length > 1) {
    drugi = x[0];
    trzeci = x[1];
    if (
      pierwszy.match(rgx) == null ||
      drugi.match(rgx) == null ||
      trzeci.match(rgx) == null
    ) {
      return false;
    }
    if (trzeci.length == 0) {
      return false;
    }
  } else {
    drugi = x[0];
    if (pierwszy.match(rgx) == null || drugi.match(rgx) == null) {
      return false;
    }
  }

  if (pierwszy.charCodeAt(0) < 64 || pierwszy.charCodeAt(0) > 90) {
    return false;
  }
  if (drugi.charCodeAt(0) < 64 || drugi.charCodeAt(0) > 90) {
    return false;
  }

  return true;
}
function verifiyPhone(phone) {
  let phonen = phone.replace(/ /g, "");
  if (phonen.length == 9) {
    for (let i = 0; i < 9; i++) {
      if (phonen.charCodeAt(i) < 48 || phonen.charCodeAt(i) > 57) {
        return false;
      }
    }
    return true;
  }
  if (phonen.length == 13) {
    if (phonen.charCodeAt(0) != 43) {
      return false;
    }
    for (let i = 1; i < 12; i++) {
      if (phonen.charCodeAt(i) < 48 || phonen.charCodeAt(i) > 57) {
        return false;
      }
    }
    return true;
  }
  return false;
}

function loadPage() {
  let a = document.querySelector("#add");
  a.addEventListener("click", add);
  let name_in = document.querySelector("#name");
  name_in.addEventListener("keyup", function () {
    if (verifiyName(this.value)) {
      this.style.outline = "1px solid green";
    } else {
      this.style.outline = "1px solid red";
    }
  });
  let phone_in = document.querySelector("#phone");
  phone_in.addEventListener("keyup", function () {
    if (verifiyPhone(this.value)) {
      this.style.outline = "1px solid green";
    } else {
      this.style.outline = "1px solid red";
    }
  });
}
loadPage();
