//update das contas ao mudar valor
document.addEventListener("input", update);

vida = document.getElementById("vida");
atordoamento = document.getElementById("atordoamento");
controle = document.getElementById("controle");
sanidade = document.getElementById("sanidade");
pe = document.getElementById("pe");
agilidade = document.getElementById("agilidade");
function update() {
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
  calculoSanidade = parseInt((2 * presença + 2 * intelecto)+(((1*presença + 1*intelecto)/2)*level));
  calculoPe = parseInt((2 * corpo + 2 * presença)+((1*corpo+1*presença)/2)*level);
  calculoAgilidade = parseInt(1 * tecnica + corpo / 2);

  //retorno do valor
  if (calculoVida) { vida.innerHTML = calculoVida; } else { vida.innerHTML = "Erro" }
  if (calculoAtordoamento) { atordoamento.innerHTML = calculoAtordoamento; } else { atordoamento.innerHTML = "Erro" }
  if (calculoControle) { controle.innerHTML = calculoControle; } else { controle.innerHTML = "Erro" }
  if (calculoSanidade) { sanidade.innerHTML = calculoSanidade; } else { sanidade.innerHTML = "Erro" }
  if (calculoPe) { pe.innerHTML = calculoPe; } else { pe.innerHTML = "Erro" }
  if (calculoAgilidade) { agilidade.innerHTML = calculoAgilidade; } else { agilidade.innerHTML = "Erro" }
}
