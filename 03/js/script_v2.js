function converterTemperatura() {
  let celsius = prompt('Digite a temperatura em Celsius:');

  if (celsius != null) {
    let celsiusNumero = parseFloat(celsius);
    let resultado = document.getElementById('resultado');

    if (resultado instanceof HTMLElement) {
      let fahrenheit = (celsiusNumero * 9) / 5 + 32;
      let kelvin = parseFloat(celsius) + 273.15;

      resultado.insertAdjacentHTML(
        'beforeend',
        `<p>A temperatura de ${celsius}°C corresponde a:</p>
          <p>${fahrenheit}°F (Fahrenheit)</p> <p>${kelvin}°K (Kelvin)</p>`
      );
    }
  }
}
