const stat = JSON.parse(localStorage.getItem("stat"));

const copyForm = async (content) => {
  try {
    await navigator.clipboard.writeText(content);
    alert("Conteúdo copiado para a área de transferência!");
  } catch (err) {
    console.error("Erro ao copiar conteúdo: ", err);
  }
};

const generateFormHTML = (formType) => {
  const {
    Level,
    Corpo,
    Técnica,
    Intelecto,
    Presença,
    Vida,
    Atordoamento,
    Controle,
    Sanidade,
    Pe,
    Agilidade,
  } = stat[0];

  const formHTML = `
    --- <br>
    [_Nome_] <br>
    <br>
    ${
      formType === "full"
        ? `
      Level = ${Level} <br>
      Corpo = ${Corpo} <br>
      Técnica = ${Técnica} <br>
      Intelecto = ${Intelecto} <br>
      Presença = ${Presença} <br>
    `
        : ""
    }
    <br>
    Vida = ${Vida} <br>
    Atordoamento = ${Atordoamento} <br>
    Controle = ${Controle} <br>
    Sanidade = ${Sanidade} <br>
    Pe = ${Pe} <br>
    Agilidade = ${Agilidade} <br>
    ---<br>
  `;

  return formHTML;
};

const fullForm = document.getElementById("fullForm");
fullForm.innerHTML = generateFormHTML("full");

const combatForm = document.getElementById("combatForm");
combatForm.innerHTML = generateFormHTML("combat");

const copyFull = document.getElementById("copyFull");
copyFull.addEventListener("click", () => {
  copyForm(fullForm.innerHTML);
});

const copyCombat = document.getElementById("copyCombat");
copyCombat.addEventListener("click", () => {
  copyForm(combatForm.innerHTML);
});
