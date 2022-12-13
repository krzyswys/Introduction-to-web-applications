const togglePassword = document.querySelector("#eye1");
const password = document.querySelector("#pas");

togglePassword.addEventListener("click", function () {
  let type = password.getAttribute("type");
  if (type == "password") {
    type = "text";
  } else {
    type = "password";
  }
  password.setAttribute("type", type);
  if (type == "password") {
    togglePassword.innerHTML = "visibility_off";
  } else {
    togglePassword.innerHTML = "visibility";
  }
});

const ntogglePassword = document.querySelector("#eye2");
const npassword = document.querySelector("#npas");
ntogglePassword.addEventListener("click", function () {
  let type = npassword.getAttribute("type");
  if (type == "password") {
    type = "text";
  } else {
    type = "password";
  }
  npassword.setAttribute("type", type);
  if (type == "password") {
    ntogglePassword.innerHTML = "visibility_off";
  } else {
    ntogglePassword.innerHTML = "visibility";
  }
});

let accept = false;
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  if (!accept) {
    e.preventDefault();
    return;
  }
});

form.addEventListener("keyup", function () {
  let f = document.getElementById("f");
  let s = document.getElementById("s");
  let t = document.getElementById("t");
  let fr = document.getElementById("fr");
  let fi = document.querySelector("#icof");
  let si = document.querySelector("#icos");
  let ti = document.querySelector("#icot");
  let fri = document.querySelector("#icofr");
  let data = document.getElementById("pas").value;
  let dataf = document.getElementById("pas");
  let ndata = document.getElementById("npas").value;
  let ndataf = document.getElementById("npas");
  if (accept) {
    dataf.style.outline = "1px solid green";
  } else {
    dataf.style.outline = "1px solid red";
  }

  if (len(data)) {
    f.style.backgroundColor = "green";
    fi.innerHTML = "done";
    accept = true;
  } else {
    f.style.backgroundColor = "red";
    fi.innerHTML = "close";
    accept = accept && false;
  }
  if (special(data)) {
    s.style.backgroundColor = "green";
    si.innerHTML = "done";
    accept = true;
  } else {
    s.style.backgroundColor = "red";
    si.innerHTML = "close";

    accept = accept && false;
  }
  if (capital(data)) {
    t.style.backgroundColor = "green";

    ti.innerHTML = "done";

    accept = true;
  } else {
    t.style.backgroundColor = "red";
    ti.innerHTML = "close";

    accept = accept && false;
  }
  if (digit(data)) {
    fr.style.backgroundColor = "green";
    fri.innerHTML = "done";

    accept = true;
  } else {
    fr.style.backgroundColor = "red";
    fri.innerHTML = "close";

    accept = accept && false;
  }
  if (ndata.localeCompare(data) != 0) {
    ndataf.style.outline = "1px solid red";
  } else {
    ndataf.style.outline = "1px solid green";
    accept = accept && true;
  }
});
function len(data) {
  if (data.length < 8 || data.indexOf(" ") > -1) {
    return false;
  }
  return true;
}
function special(data) {
  for (let el = 0; el < data.length; el++) {
    if (
      (data.charCodeAt(el) >= 33 && data.charCodeAt(el) <= 47) ||
      (data.charCodeAt(el) >= 58 && data.charCodeAt(el) <= 64) ||
      (data.charCodeAt(el) >= 91 && data.charCodeAt(el) <= 96) ||
      (data.charCodeAt(el) >= 123 && data.charCodeAt(el) <= 124)
    ) {
      return true;
    }
  }
  return false;
}
function capital(data) {
  for (let el = 0; el < data.length; el++) {
    if (data.charCodeAt(el) >= 65 && data.charCodeAt(el) <= 90) {
      return true;
    }
  }
  return false;
}
function digit(data) {
  for (let el = 0; el < data.length; el++) {
    if (data.charCodeAt(el) >= 48 && data.charCodeAt(el) <= 57) {
      return true;
    }
  }
  return false;
}
