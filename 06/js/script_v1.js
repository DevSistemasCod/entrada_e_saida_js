function mostrarResultado() {
  let disciplina = document.getElementById('disciplina').value;
  let resultado = document.getElementById('resultado');

  resultado.textContent = `Olá! Você escolheu a disciplina: ${disciplina}.`;
}
