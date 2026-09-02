// Gerado por IA. Colado sem ler. (ATIVIDADE — desafio 3)
//
// Busca um usuário por id numa API e devolve { id, nome, email }.
// A função recebe um `fetchFn` pra facilitar teste (injeção de dependência).

export async function fetchUsuario(id, fetchFn = fetch) {
  const resposta = await fetchFn(`https://api.exemplo.com/usuarios/${id}`);
  const dados = await resposta.json();

  return {
    id: dados.id,
    nome: dados.nome.trim(),
    email: dados.email.toLowerCase(),
  };
}
