/**
 * Função que exibe o resultado do formulário ao ser submetido.
 */
function mostrarResultado(event) {
    // Evita que a página seja recarregada ao enviar o formulário.
    event.preventDefault();

    // Obtém o valor digitado pelo usuário no campo de entrada.
    let valorDigitado = document.getElementById("entradaTexto").value;

    // Determina o tipo da variável usando a função typeof.
    let tipoVariavel = typeof valorDigitado;

    // Obtém o elemento HTML onde o resultado será exibido.
    let saida = document.getElementById("resultado");

    // Define o conteúdo do parágrafo com o resultado.
    saida.innerText = " Conteúdo digitado: " + valorDigitado + " \n Tipo da variável: "  +tipoVariavel;
}

/**
 * Função de inicialização.
 * Adiciona um ouvinte de evento para o envio do formulário.
 * Chama a função mostrarResultado quando o formulário é submetido.
 */
function iniciar() {
    let formulario = document.getElementById("meuFormulario");
    formulario.addEventListener("submit", mostrarResultado);
}

// Chama a função iniciar quando o DOM estiver completamente carregado.
document.addEventListener("DOMContentLoaded", iniciar);
