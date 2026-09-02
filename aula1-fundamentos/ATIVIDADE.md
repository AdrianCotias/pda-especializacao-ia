# Atividade de fixação — Aula 1: Fundamentos

Duas entregas. A **mínima** todo mundo consegue ainda hoje. A **completa** é pra quem quer ir além —
e é ela que treina o AI-assisted de verdade, porque o `REVIEW.md` é você revisando o agente.

Prazo: antes da próxima aula. Entrega: link do fork (ou do PR) + prints, no canal combinado.

---

## Entrega mínima (~20 min)

1. **Print** do Claude Code mostrando `/mcp` (context7 conectado) e `/status` (sua conta).
2. **Link do seu fork** com `CLAUDE.md` commitado — sem `TODO`, com comando de teste e a regra de rodar testes.
3. **Um parágrafo** (5–8 linhas) respondendo: em algum momento da sua sessão de hoje, onde apareceu
   *contexto*, *temperatura/não-determinismo* ou *alucinação*? Descreva o momento concreto
   (ex.: "ele inventou um método X", "na segunda tentativa ele fez diferente", "o CLAUDE.md fez ele…").

---

## Entrega completa (tudo da mínima +)

### Desafio 2 — uma skill sua

Crie `.claude/skills/<nome>/SKILL.md` pra algo que **você** repete. Ideias: gerar commit message no
seu padrão; explicar um arquivo pra um júnior; criar teste pra uma função; traduzir mensagens de erro.

Requisitos:
- frontmatter com `name` e `description` (a description é o que faz o agente escolher a skill)
- instruções claras: entrada, passos, formato de saída
- `allowed-tools` restrito ao que a skill precisa
- rode e cole no `REVIEW.md` um exemplo de invocação e o resultado

Antes de escrever, leia a doc: <https://code.claude.com/docs> → Skills.

### Desafio 3 — `src/fetchUsuario.js`

Os testes em `tests/fetchUsuario.test.js` falham. Resolva **com o agente**:

- especifique bem a tarefa (o quê, restrições, como testar). Cole o prompt que usou no `REVIEW.md`
- `npm test` verde ao final, **sem editar `tests/`**
- conte quantas voltas o loop deu

### `REVIEW.md` — o seu code review do agente

Este é o item mais importante. Estrutura sugerida:

```markdown
# REVIEW — Aula 1

## O que eu pedi
(prompt exato)

## O que o agente fez
(resumo do diff, número de voltas do loop, tools usadas)

## O que eu aceitei e por quê
## O que eu rejeitei ou mudei e por quê
## Onde ele chutou / alucinou / fez mais do que pedi
## O que eu colocaria no CLAUDE.md pra isso não acontecer de novo
```

### Abra um PR no seu fork

Do seu branch pra `main` do **seu** fork (não pro repo da PDA), com: `CLAUDE.md`, a skill,
`fetchUsuario.js` corrigido, `REVIEW.md`. Na descrição do PR, cole o print do `/mcp`.

---

## Rubrica

| critério | peso | o que eu olho |
|---|---|---|
| Ambiente funcional | 30% | prints de `/mcp` e `/status`; skill invocável; repo clonável e `npm test` roda |
| `CLAUDE.md` útil | 20% | curto, específico do projeto, sem TODO, com comandos e regras que mudam o comportamento do agente |
| Tarefa resolvida com testes | 20% | `validaCpf` (mínima) / `fetchUsuario` (completa) verdes, `tests/` intocado, commit limpo |
| Qualidade do **seu** review | 30% | `REVIEW.md` (ou o parágrafo, na mínima): você entendeu o que o agente fez? apontou algo que ele fez errado ou a mais? propôs uma regra pro CLAUDE.md? |

O que **não** pontua: código bonito que você não sabe explicar. O que pontua: você ter pego o agente
errando — ou explicar por que dessa vez ele não errou.

---

## Bônus (sem peso na nota, com peso na vida)

- Rode a tarefa do desafio 3 **duas vezes**, em sessões novas. Compare os dois diffs. Não-determinismo na prática.
- Pergunte ao agente algo sobre uma lib que **não existe** (ex.: `npm install @pda/valida-cpf`). Depois pergunte a mesma coisa pedindo pra usar o context7. Cole os dois no `REVIEW.md`.
