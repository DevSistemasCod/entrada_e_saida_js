function manipularFrase() {
  let frase = document.getElementById('frase').value;

  let numCaracteres = frase.length;
  let fraseMaiuscula = frase.toUpperCase();
  let fraseMinuscula = frase.toLowerCase();
  let resultado = document.getElementById('resultado');

  //prettier-ignore
  resultado.insertAdjacentHTML('beforeend',`<p>Número de caracteres: ${numCaracteres}</p>
      <p>Frase em maiúsculas: ${fraseMaiuscula}</p>
      <p>Frase em minúsculas: ${fraseMinuscula}</p>`
  );
}
