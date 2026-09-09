# aula1-fundamentos

Aula 1 — **Fundamentos: o que é isso que a gente chama de IA**
Especialização em Desenvolvimento com IA · Programadores do Amanhã · Turma 2

Esse repo é o seu "campo de treino" da aula: um projeto Node minúsculo, com código
gerado por IA e **não revisado** dentro, testes que falham, e o esqueleto de um
ambiente de coding agent (CLAUDE.md, uma skill, config de MCP) pra você completar.

> Faz parte do repo do curso: [`pda-especializacao-ia`](../). Cada pasta na raiz é uma aula.

## Como usar

1. **Fork** o repositório `pda-especializacao-ia` inteiro na sua conta (botão *Fork* no GitHub).
2. Clone o seu fork e entre nesta pasta:

   ```bash
   git clone https://github.com/<seu-usuario>/pda-especializacao-ia.git
   cd pda-especializacao-ia/aula1-fundamentos
   npm install
   npm test        # vai falhar. É de propósito.
   ```

3. Durante a aula, siga o [`GUIA-DO-ALUNO.md`](./GUIA-DO-ALUNO.md) — ele acompanha
   os slides, lab por lab.
4. Depois da aula, faça a [`ATIVIDADE.md`](./ATIVIDADE.md) (entrega mínima ou completa).

## O que tem aqui

```
.
|-- CLAUDE.md                      <- memória do projeto. INCOMPLETO: você completa no LAB 3
|-- .mcp.json.example              <- exemplo de config de MCP (context7)
|-- .claude/
|   |-- settings.json              <- permissões básicas pro agente rodar npm test
|   `-- skills/
|       `-- revisar-codigo/
|           `-- SKILL.md           <- skill de code review "AI-assisted" (invoque com /revisar-codigo)
|-- src/
|   |-- validaCpf.js               <- gerado por IA, colado sem ler. Tem bug.
|   |-- fetchUsuario.js            <- gerado por IA, colado sem ler. Tem bug. (desafio 3)
|   `-- formataPreco.js            <- esse está ok. Ou está?
|-- tests/                         <- NÃO EDITE. Os testes são a especificação.
|-- exemplos/
|   `-- vibe-coding.js             <- o exemplo do "code review coletivo" (bloco 2)
|-- GUIA-DO-ALUNO.md               <- passo a passo dos labs, pra acompanhar a aula
`-- ATIVIDADE.md                   <- a atividade de fixação + rubrica
```

## Pré-requisitos

- Node 18+ (`node -v`)
- git
- Conta no GitHub
- [Claude Code](https://code.claude.com/docs) instalado e logado com a conta Claude Pro da turma
  (o `GUIA-DO-ALUNO.md` tem o passo a passo de instalação, inclusive Windows)
- **Windows:** antes de começar, veja a tabela "Terminal: qual usar" no início do
  `GUIA-DO-ALUNO.md` — ela compara Git Bash, WSL, PowerShell e CMD e diz qual usar hoje

## Regra da casa

> **Você é responsável por cada linha que commita.**
> O agente executa. Você especifica, lê o diff, roda os testes e decide.
