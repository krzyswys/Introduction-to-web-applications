let cnt = 0;
document.getElementById("add").onclick = function () {
  var el = document.createElement("li");
  el.innerText = "Item" + cnt;
  cnt++;
  document.getElementById("list").appendChild(el);
};

document.getElementById("delete").onclick = function () {
  var toRemove = document.getElementById("list");
  toRemove.removeChild(toRemove.childNodes[0]);
};
