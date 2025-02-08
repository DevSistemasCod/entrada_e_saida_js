function calcularArea() {
  let raio = document.getElementById('raio').value;

  raio = parseFloat(raio);
  //toFixed(2) duas casas de precisão
  let area = Math.PI * Math.pow(raio, 2);
  document.getElementById(
    'resultado'
  ).textContent = `A área do círculo é: ${area.toFixed(2)} unidades quadradas.`;
}
