// =====================================================================
//  CODE REVIEW COLETIVO (Bloco 2 da aula)
//
//  Contexto: alguém pediu pra IA "uma função que valida CPF e busca o
//  usuário na API", apertou Accept All e abriu o PR.
//  Sem rodar nada: o que você reprovaria nesse PR? Escreva UMA coisa no chat.
//  (as respostas estão no fim do arquivo — não role antes de tentar)
// =====================================================================

export function validaCpf(cpf) {
  const digitos = cpf.replace(/\D/g, '');
  if (digitos.length != 11) return false;

  const nums = digitos.split('').map((d) => parseInt(d));

  let soma = 0;
  for (let i = 0; i < 9; i++) soma += nums[i] * (10 - i);
  let dv1 = (soma * 10) % 11;
  if (dv1 == 10) dv1 = 0;

  soma = 0;
  for (let i = 0; i < 10; i++) soma += nums[i] * (11 - i);
  let dv2 = (soma * 10) % 11;
  if (dv2 == 10) dv2 = 0;

  return dv1 == nums[9] && dv2 == nums[10];
}

export async function buscaUsuarioPorCpf(cpf) {
  if (validaCpf(cpf)) {
    const res = await fetch('https://api.exemplo.com/usuarios?cpf=' + cpf);
    const json = await res.json();
    return json.data[0];
  }
}

//
//
//
//
//
//
//
//
//
//
//
//
// ---------------------------------------------------------------------
//  O QUE UM REVISOR ACHARIA (não é lista exaustiva — a turma acha mais)
// ---------------------------------------------------------------------
//  validaCpf
//  1. Aceita 111.111.111-11, 000.000.000-00 etc. — passam no cálculo do
//     dígito verificador, mas são inválidos por definição. É o bug mais
//     comum em validador de CPF gerado por IA. Nenhum teste pega isso
//     porque não tem teste.
//  2. `cpf.replace` explode se cpf for null/undefined/number. Vai
//     estourar em produção na primeira request sem o campo.
//  3. `==` em vez de `===` e `parseInt(d)` sem radix: funciona hoje,
//     é o tipo de coisa que passa a mentir quando a entrada muda.
//  4. "529a982b247c25" vira válido: a limpeza com \D apaga as letras e
//     sobram 11 dígitos. Depende do requisito, mas ninguém perguntou.
//
//  buscaUsuarioPorCpf
//  5. CPF inválido → retorna undefined silenciosamente. Quem chama não
//     sabe se "não achou" ou se "o CPF era inválido".
//  6. Sem tratamento de erro: 404/500 → `res.json()` pode explodir ou
//     `json.data` ser undefined → TypeError em `json.data[0]`.
//  7. CPF vai na URL sem encoding e em texto puro numa query string —
//     dado pessoal em log de servidor/proxy. Ninguém perguntou sobre LGPD.
//  8. URL hardcoded, sem timeout, sem retry. Ok pra protótipo, não pra PR.
//
//  A pergunta que importa: quantos desses você teria pego lendo o diff
//  por 2 minutos antes do Accept All?
