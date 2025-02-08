function calcularArea() {
  let entradaBaseMaior = document.getElementById('baseMaior');
  let entradaBaseMenor = document.getElementById('baseMenor');
  let entradaAltura = document.getElementById('altura');
  let resultado = document.getElementById('resultado');
  let baseMaior, baseMenor, altura;

  //prettier-ignore
  if ((entradaBaseMaior instanceof HTMLInputElement) && (entradaBaseMenor instanceof HTMLInputElement) &&
    (entradaAltura instanceof HTMLInputElement) && (resultado instanceof HTMLElement)) {
    baseMaior = parseFloat(entradaBaseMaior.value);
    baseMenor = parseFloat(entradaBaseMenor.value);
    altura = parseFloat(entradaAltura.value);

    let area = ((baseMaior + baseMenor) * altura) / 2;
    //prettier-ignore
    resultado.textContent = `A área do trapézio é ${area.toFixed(2)} unidades de área.`;
  }
}
