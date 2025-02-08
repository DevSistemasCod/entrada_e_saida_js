function manipularFrase() {
  let conteudo = document.getElementById('frase');

  if (conteudo instanceof HTMLInputElement) {
    let frase = conteudo.value;

    if (frase.trim() != '') {
      let numCaracteres = frase.length;
      let fraseMaiuscula = frase.toUpperCase();
      let fraseMinuscula = frase.toLowerCase();

      let resultado = document.getElementById('resultado');
      if (resultado instanceof HTMLElement) {
        //prettier-ignore
        resultado.insertAdjacentHTML('beforeend', '<p>Número de caracteres:' +numCaracteres + '</p>'
        + '<p>Frase em maiúsculas: ' + fraseMaiuscula + '</p>'
        + '<p>Frase em minúsculas: ' + fraseMinuscula + '</p>');
      }
    }
  }
}
