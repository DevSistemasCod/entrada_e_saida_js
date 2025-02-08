function calcularDesconto() {
  let precoProduto = parseFloat(document.getElementById('produto').value);
  let descontoPercentual = parseFloat(document.getElementById('desconto').value);

  // Calculando o preço com o desconto
  let precoComDesconto = precoProduto - (precoProduto * (descontoPercentual / 100));

  // Exibindo o resultado
  let resultado = document.getElementById('resultado');
  resultado.textContent = `Preço original: R$${precoProduto}. Desconto de ${descontoPercentual}%, preço final: R$${precoComDesconto.toFixed(2)}.`;
}