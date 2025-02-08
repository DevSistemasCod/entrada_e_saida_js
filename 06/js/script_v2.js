function mostrarResultado() {
  let disciplinaEscolhida = document.getElementById('disciplina');
  if (disciplinaEscolhida instanceof HTMLSelectElement) {
    let disciplina = disciplinaEscolhida.value;

    let resultado = document.getElementById('resultado');
    if (resultado instanceof HTMLElement) {
      resultado.textContent = 'Olá! Você escolheu a disciplina: ' + disciplina;
    }
  }
}
