function calcular() {
  let entrada = document.getElementById('numero');

  if (entrada instanceof HTMLInputElement) {
    let numero = parseInt(entrada.value);

    let saida = document.getElementById('resultado');

    if (saida instanceof HTMLElement) {
      if (isNaN(numero)) {
        saida.textContent = 'Por favor, insira um número válido.';
        return;
      }
      let antecessor = numero - 1;
      let sucessor = numero + 1;
      saida.textContent = `O antecessor de ${numero} é ${antecessor}, e o sucessor é ${sucessor}.`;
    }
  }
}
