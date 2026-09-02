// Formata um valor em centavos como preço em reais: 123456 -> "R$ 1.234,56"

export function formataPreco(centavos) {
  if (!Number.isInteger(centavos) || centavos < 0) {
    throw new TypeError('formataPreco espera um inteiro >= 0 (centavos)');
  }
  const reais = Math.floor(centavos / 100);
  const cents = String(centavos % 100).padStart(2, '0');
  const reaisFormatado = reais.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `R$ ${reaisFormatado},${cents}`;
}
