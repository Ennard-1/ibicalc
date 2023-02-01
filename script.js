//update das contas ao mudar valor
document.addEventListener("input", update);
function update() {
  //identificação dos inputs
  vida = document.getElementById("vida");
  atordoamento = document.getElementById("atordoamento");
  controle = document.getElementById("controle");
  sanidade = document.getElementById("sanidade");
  pe = document.getElementById("pe");
  agilidade = document.getElementById("agilidade");
  //atualização dos inputs
  level = document.getElementById("level").value;
  corpo = document.getElementById("corpo").value;
  tecnica = document.getElementById("tecnica").value;
  intelecto = document.getElementById("intelecto").value;
  presença = document.getElementById("presença").value;
  //formúlas das contas
  calculoVida = 20 + 3 * corpo * level;
  calculoAtordoamento = 2 * corpo + 2 * presença;
  calculoControle = 2 * intelecto + 2 * presença;
  calculoSanidade = parseInt((2 * presença + 2 * intelecto) + (((1 * presença + 1 * intelecto) / 2) * level));
  calculoPe = parseInt((2 * corpo + 2 * presença) + ((1 * corpo + 1 * presença) / 2) * level);
  calculoAgilidade = parseInt(1 * tecnica + corpo / 2);
  //retorno do valor
  if (calculoVida) { vida.value = calculoVida; } else { vida.value = "Erro" }
  if (calculoAtordoamento) { atordoamento.value = calculoAtordoamento; } else { atordoamento.value = "Erro" }
  if (calculoControle) { controle.value = calculoControle; } else { controle.value = "Erro" }
  if (calculoSanidade) { sanidade.value = calculoSanidade; } else { sanidade.value = "Erro" }
  if (calculoPe) { pe.value = calculoPe; } else { pe.value = "Erro" }
  if (calculoAgilidade) { agilidade.value = calculoAgilidade; } else { agilidade.value = "Erro" }
}
