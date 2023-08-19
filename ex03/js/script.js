function mostrarResultado(event) {
    // Evita que a página seja recarregada ao enviar o formulário
    event.preventDefault();

    // Obtém o valor digitado pelo usuário no campo de entrada
    let valorDigitado = document.getElementById("entradaTexto").value;

    // Determina o tipo da variável usando a função typeof
    let tipoVariavel = typeof valorDigitado;

    // Exibe o conteúdo digitado e o tipo da variável no console
    console.log("Conteúdo digitado: " +valorDigitado);
    console.log("Tipo da variável: " +tipoVariavel);

    // Atualiza o conteúdo de <p> informando que o console deve ser verificado
    document.getElementById("resultado").innerText = "Verifique o console!";
}

function iniciar() {
    // Captura o formulário pelo id
    let formulario = document.getElementById("meuFormulario");

    // Adiciona um ouvinte de evento para o envio do formulário
    formulario.addEventListener("submit", mostrarResultado);
}


// Adiciona um evento que será disparado quando o conteúdo da página for carregado
document.addEventListener("DOMContentLoaded", iniciar);
