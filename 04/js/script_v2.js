function calcularArea() {
  let entradaRaio = document.getElementById('raio');

  if (entradaRaio instanceof HTMLInputElement) {
    let raio = parseFloat(entradaRaio.value);

    if (!isNaN(raio) && raio > 0) {
      let area = Math.PI * Math.pow(raio, 2);

      let saida = document.getElementById('resultado');
      if (saida instanceof HTMLElement) {
        //toFixed(2) duas casas de precisão
        //prettier-ignore
        saida.textContent = `A área do círculo é: ${area.toFixed(2)} unidades quadradas.`;
      }
    }
  }
}
