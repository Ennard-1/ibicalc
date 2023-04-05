const level = document.getElementById("levelBar");
const body = document.getElementById("bodyBar");
const technique = document.getElementById("techniqueBar");
const intellect = document.getElementById("intellectBar");
const presence = document.getElementById("presenceBar");

const life = document.getElementById("life");
const stun = document.getElementById("stun");
const control = document.getElementById("control");
const sanity = document.getElementById("sanity");
const pe = document.getElementById("pe");
const agility = document.getElementById("agility");

document.addEventListener("input", display);
var calculateLife;
var calculateStun;
var calculateControl;
var calculateSanity;
var calculatePe;
var calculateAgility;
function display() {
  calculateLife = 20 + 3 * body.value + body.value * level.value;
  calculateStun = 2 * intellect.value + 2 * technique.value;
  calculateControl = 2 * intellect.value + 2 * presence.value + 2;
  calculateSanity = parseInt(2 * presence.value + 2 * intellect.value + 2);
  calculatePe = parseInt(
    2 * body.value +
      2 * presence.value +
      ((1 * body.value + 1 * presence.value) / 2) * level.value
  );
  calculateAgility = parseInt(1 * technique.value + 1 + (1 * body.value) / 2);

  life.innerHTML = calculateLife;
  stun.innerHTML = calculateStun;
  control.innerHTML = calculateControl;
  sanity.innerHTML = calculateSanity;
  pe.innerHTML = calculatePe;
  agility.innerHTML = calculateAgility;
}

saveForm = document.getElementById("saveForm").addEventListener("click", () => {
  var stats = [{
    Level : level.value ,
    Corpo : body.value ,
    Técnica : technique.value ,
    Intelecto : intellect.value ,
    Presença : presence.value ,
    Vida : calculateLife ,
    Atordoamento : calculateStun ,
    Controle : calculateControl ,
    Sanidade : calculateSanity ,
    Pe : calculatePe ,
    Agilidade : calculateAgility ,
}];
  localStorage.setItem("stat", JSON.stringify(stats));
});
