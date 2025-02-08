function converterTemperatura() {
  let celsius = prompt("Digite a temperatura em Celsius:");
  let fahrenheit = (celsius * 9 / 5) + 32;
  let kelvin = parseFloat(celsius) + 273.15;

  // Exibe os resultados na tela
  let resultado = document.getElementById("resultado");
  resultado.insertAdjacentHTML('beforeend', `
    <p>A temperatura de ${celsius}°C corresponde a:</p>
    <p>${fahrenheit}°F (Fahrenheit)</p>
    <p>${kelvin}°K (Kelvin)</p>
  `);
}
