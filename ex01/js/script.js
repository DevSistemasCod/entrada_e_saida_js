function iniciarAplicacao() {
    // Variável usando let
    let x = 10;
    x = 20; // Reatribuição permitida

    // Variável usando const
    const y = 5;
    // y = 8; // Tentativa de reatribuição gera um erro

    // Variável usando var
    var z = 15;
    z = 25; // Reatribuição permitida

    console.log("Valor de x:", x);
    console.log("Valor de y:", y);
    console.log("Valor de z:", z);
}
// Aguarda o carregamento completo do DOM antes de iniciar a aplicação.
document.addEventListener("DOMContentLoaded", iniciarAplicacao);
