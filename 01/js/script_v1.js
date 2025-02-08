function calcular() {
  // @ts-ignore
  let numero = parseInt(document.getElementById('numero').value);

  let antecessor = numero - 1;
  let sucessor = numero + 1;

  // @ts-ignore
  let resultado = document.getElementById('resultado');
  resultado.textContent = `O antecessor de ${numero} é ${antecessor}, e o sucessor é ${sucessor}.`;
}
