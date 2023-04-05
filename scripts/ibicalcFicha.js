const stat = JSON.parse(localStorage.getItem("stat"));

copyFull = document.getElementById("copyFull");
copyFull.addEventListener("click", () => {
  navigator.clipboard.writeText(fullForm.textContent);
});

copyCombat = document.getElementById("copyCombat");
copyCombat.addEventListener("click", () => {
  navigator.clipboard.writeText(combatForm.textContent);
});

var fullForm = document.getElementById("fullForm");
fullForm.innerHTML = `--- <br>
[_Nome_] <br>
<br>
 Level = ${stat[0].Level} <br>
 Corpo = ${stat[0].Corpo} <br>
 Técnica = ${stat[0].Técnica} <br>
 Intelecto = ${stat[0].Intelecto} <br>
 Presença = ${stat[0].Presença} <br>
<br>
 Vida = ${stat[0].Vida} <br>
 Atordoamento = ${stat[0].Atordoamento} <br>
 Controle = ${stat[0].Controle} <br>
 Sanidade = ${stat[0].Sanidade} <br>
 Pe = ${stat[0].Pe} <br>
 Agilidade = ${stat[0].Agilidade} <br>
 ---<br>
 `;

 var combatForm = document.getElementById('combatForm')
 combatForm.innerHTML =`--- <br>
 [_Nome_] <br>
 <br>
 Vida = ${stat[0].Vida}/${stat[0].Vida}<br>
 Atordoamento = ${stat[0].Atordoamento}/${stat[0].Atordoamento}<br>
 Controle = ${stat[0].Controle}/${stat[0].Controle}<br>
 Sanidade = ${stat[0].Sanidade}/${stat[0].Sanidade}<br>
 Pe = ${stat[0].Pe}/${stat[0].Pe}<br>
 Agilidade = ${stat[0].Agilidade}<br>
 ---<br>`