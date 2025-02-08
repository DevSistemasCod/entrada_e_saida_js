function calcularDesconto() {
  let precoProduto = document.getElementById('produto');
  if (precoProduto instanceof HTMLSelectElement) {
    let preco = parseFloat(precoProduto.value);

    let descontoPercentual = document.getElementById('desconto');
    if (descontoPercentual instanceof HTMLSelectElement) {
      let desconto = parseFloat(descontoPercentual.value);
      let precoComDesconto = preco - preco * (desconto / 100);
      let resultado = document.getElementById('resultado');

      if (resultado instanceof HTMLElement) {
        resultado.textContent =
          'Preço original: R$' +
          preco +
          '. Desconto de ' +
          desconto +
          '%, preço final: R$' +
          precoComDesconto.toFixed(2);
      }
    }
  }
}
