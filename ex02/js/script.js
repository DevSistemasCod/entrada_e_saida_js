// Função que exibe o resultado da saudação e disciplina selecionada
function mostrarResultado() {
    // Obtém o valor inserido no campo de saudação
    let saudacaoInput = document.getElementById("saudacaoInput").value;

    // Obtém o elemento do select de disciplina
    let disciplinaSelecionada = document.getElementById("disciplinaSelect");

    // Obtém o índice da opção selecionada no select
    let i = disciplinaSelecionada.selectedIndex;

    // Obtém o valor da disciplina escolhida com base no índice
    let disciplinaEscolhida = disciplinaSelecionada.options[i].value;

    // Obtém o elemento de saída onde o resultado será exibido
    let saida = document.getElementById("resultado");

    // Define o texto de saída com a saudação e a disciplina escolhida
    saida.innerText = "Saudação: " + saudacaoInput + " a disciplina escolhida foi " + disciplinaEscolhida;

    // Retorna o elemento de saída (pode ser útil para manipulações futuras)
    return saida;
}

// Função que inicia a aplicação, adicionando o evento de clique ao botão
function iniciarAplicacao() {
    // Obtém o botão de mostrar resultado
    let mostrarResultadoBtn = document.getElementById("mostrarResultadoBtn");

    // Adiciona um evento de clique ao botão, que chamará a função mostrarResultado
    mostrarResultadoBtn.addEventListener("click", mostrarResultado);
}

// Adiciona um evento que será disparado quando o conteúdo da página for carregado
document.addEventListener("DOMContentLoaded", iniciarAplicacao);
