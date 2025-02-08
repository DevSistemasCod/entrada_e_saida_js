function calcularArea() {
  let baseMaior = parseFloat(document.getElementById('baseMaior').value);
  let baseMenor = parseFloat(document.getElementById('baseMenor').value);
  let altura = parseFloat(document.getElementById('altura').value);

  // Calcular a área do trapézio
  let area = ((baseMaior + baseMenor) * altura) / 2;

  // Exibir o resultado
  let resultado = document.getElementById('resultado');
  resultado.textContent = `A área do trapézio é ${area.toFixed(2)} unidades de área.`;
}
