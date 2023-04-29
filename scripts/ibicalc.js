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

// Função que calcula os valores de atributos
function calculateStats() {
  const calculateLife = 20 + 3 * body.value + body.value * level.value;
  const calculateStun = 2 * intellect.value + 2 * technique.value;
  const calculateControl = 2 * intellect.value + 2 * presence.value + 2;
  const calculateSanity = parseInt(
    2 * presence.value + 2 * intellect.value + 2
  );
  const calculatePe = parseInt(
    2 * body.value +
      2 * presence.value +
      ((1 * body.value + 1 * presence.value) / 2) * level.value
  );
  const calculateAgility = parseInt(
    1 * technique.value + 1 + (1 * body.value) / 2
  );
  return {
    calculateLife,
    calculateStun,
    calculateControl,
    calculateSanity,
    calculatePe,
    calculateAgility,
  };
}

// Função que atualiza os valores exibidos na tela
function updateStats() {
  const stats = calculateStats();
  life.innerHTML = stats.calculateLife;
  stun.innerHTML = stats.calculateStun;
  control.innerHTML = stats.calculateControl;
  sanity.innerHTML = stats.calculateSanity;
  pe.innerHTML = stats.calculatePe;
  agility.innerHTML = stats.calculateAgility;
}

// Event listener que chama a função updateStats ao mudar o valor em qualquer barra de progresso
document.addEventListener("input", updateStats);

// Função que salva as estatísticas em localStorage
function saveStats() {
  const stats = [
    {
      Level: level.value,
      Corpo: body.value,
      Técnica: technique.value,
      Intelecto: intellect.value,
      Presença: presence.value,
      Vida: calculateStats().calculateLife,
      Atordoamento: calculateStats().calculateStun,
      Controle: calculateStats().calculateControl,
      Sanidade: calculateStats().calculateSanity,
      Pe: calculateStats().calculatePe,
      Agilidade: calculateStats().calculateAgility,
    },
  ];
  localStorage.setItem("stat", JSON.stringify(stats));
}

// Event listener que salva as estatísticas em localStorage ao clicar no botão "Salvar"
saveForm = document
  .getElementById("saveForm")
  .addEventListener("click", saveStats);
