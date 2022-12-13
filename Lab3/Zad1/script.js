let el = document.getElementById("jakis_przycisk");
el.addEventListener("click", function () {
  let favDrink = prompt("What's your favorite cocktail drink?");
  document.getElementById("greeting").textContent = favDrink;
  console.log("Add button clicked!");
  console.log(i);
  i++;
});
var i = 0;
function addGroup() {}
