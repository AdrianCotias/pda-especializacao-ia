# Guia do aluno — Aula 1: Fundamentos

Este guia acompanha os slides. Quando aparecer **MÃO NA MASSA** na tela, é a sua vez:
abra a seção correspondente aqui e faça junto.

Regra: terminal aberto do lado. Travou? Manda o erro no chat, segue em dupla.

---

## Antes da aula (5 min)

```bash
node -v          # precisa ser v18 ou maior
git --version
```

Faça o **fork** deste repo no GitHub e clone o seu fork:

```bash
git clone https://github.com/<seu-usuario>/pda-ia-aula1-fundamentos.git
cd pda-ia-aula1-fundamentos
npm install
npm test         # vai falhar em 5 testes. É de propósito.
```

Tenha o Claude (claude.ai) logado no navegador com a conta Pro da turma.

---

## LAB 1 — Tokenização ao vivo (5 min)

Abra <https://platform.openai.com/tokenizer> (alternativa: <https://tiktokenizer.vercel.app>).

Cole, um por vez, e anote a contagem de tokens:

1. `Programadores do Amanhã` — quantos tokens? Onde a palavra "Programadores" quebra?
2. O mesmo parágrafo em português e em inglês. Sugestão:
   - PT: `O modelo de linguagem prevê o próximo pedaço de texto com base em tudo que veio antes.`
   - EN: `The language model predicts the next piece of text based on everything that came before.`
3. A função `validaCpf` de `src/validaCpf.js` (copie o arquivo inteiro). Repare em espaços, indentação, nomes.
4. `1234567890` e depois `1 2 3 4 5 6 7 8 9 0`.

**Responda no chat:** o que custa mais token — português ou inglês? código ou prosa?

> Por que isso importa: token é a unidade de **custo**, de **limite de contexto** e de "raciocínio".
> Tudo que a gente vai medir hoje é medido em token.

---

## LAB 2 — Temperatura: 5x o mesmo prompt (8 min)

Ferramenta recomendada: **Google AI Studio** (<https://aistudio.google.com>) — grátis com conta Google
e tem o slider de temperatura no painel da direita.
Sem AI Studio? Rode o mesmo prompt 5 vezes em chats novos no Claude ou ChatGPT (você não controla a
temperatura, mas vê o não-determinismo).

Prompt (cole exatamente):

```
Escreva uma função JavaScript validaCpf(cpf) que retorna true ou false. Só o código, sem explicação.
```

1. **Temperatura 0** → rode 5x. Anote: as respostas mudam? Em quê?
2. **Temperatura 1.5 (ou 2, o máximo)** → rode 5x. Agora muda o quê? Nome de variável? Abordagem?
   Alguma versão quebrou ou inventou coisa?
3. Cole no chat da turma a sua versão T=0 e a sua versão T=2.

Tabela pra anotar:

| rodada | T=0: o que mudou vs. a anterior | T=1.5/2: o que mudou vs. a anterior |
|--------|----------------------------------|--------------------------------------|
| 1      | —                                | —                                    |
| 2      |                                  |                                      |
| 3      |                                  |                                      |
| 4      |                                  |                                      |
| 5      |                                  |                                      |

**Pergunta de fechamento:** se o mesmo prompt dá respostas diferentes, o que isso muda em como você
*testa* código gerado por IA?

---

## Code review coletivo (9 min) — Bloco 2

Abra `exemplos/vibe-coding.js` (ou o código trazido por um colega).

1. **3 min em silêncio.** Leia. Escreva no chat **UMA** coisa que te parece suspeita. Não role até o fim do arquivo.
2. **4 min de discussão.** O que faria você reprovar esse PR? O que faltou o autor perguntar?
3. **2 min:** agora sim, role até o fim do arquivo e compare com a lista.

---

## PAUSA — instala o Claude Code (7 min)

**macOS / Linux / WSL**

```bash
curl -fsSL https://claude.ai/install.sh | bash
# ou, se preferir npm (Node 18+):
npm install -g @anthropic-ai/claude-code
```

**Windows (PowerShell)**

```powershell
irm https://claude.ai/install.ps1 | iex
```

> Windows: se puder, use o WSL (Ubuntu). O Claude Code funciona nativo no Windows, mas o WSL evita
> 90% dos problemas de path e de `npm`.

Depois:

```bash
claude --version
claude            # na primeira vez abre o login → escolha a opção de conta Claude (assinatura Pro).
                  # Abre o navegador, você autoriza, volta pro terminal. Sem API key.
```

Dentro do Claude Code, `/status` mostra sua conta, modelo e diretório. `/exit` sai.

Documentação oficial: <https://code.claude.com/docs>

---

## LAB 3 — Setup guiado: do zero à primeira tarefa real (25 min)

Confirme cada passo com ✅ no chat. A facilitadora só avança quando a maioria confirmar.

### 1. Abra o agente dentro do projeto

```bash
cd pda-ia-aula1-fundamentos
claude
```

Repare no rodapé: ele mostra o modelo e, conforme a conversa cresce, o uso da janela de contexto.

### 2. Memória do projeto: `CLAUDE.md`

O arquivo já existe, incompleto. Dentro do Claude Code:

```
/init
```

O `/init` lê o projeto e propõe um CLAUDE.md. Como já existe um, ele vai sugerir complementar.
Aceite o que fizer sentido, **e depois abra o arquivo no seu editor** e complete os `TODO`s:

- stack (Node + versão, ESM, `node:test`)
- comandos (`npm test`, `npm run test:watch`)
- a regra "sempre rode `npm test` antes de dizer que terminou", com as suas palavras
- uma regra de estilo sua
- uma preferência sua de como trabalhar

Apague os comentários e os TODOs. Mantenha curto: cada linha entra na janela em **toda** sessão.

Pergunte ao agente: `o que você sabe sobre este projeto?` — ele deve responder com o que está no CLAUDE.md.

### 3. Skill: `/revisar-codigo`

Já existe uma skill em `.claude/skills/revisar-codigo/SKILL.md`. Leia o arquivo primeiro (regra da
casa: não instale o workflow de outra pessoa sem ler). Depois, no Claude Code:

```
/revisar-codigo src/validaCpf.js
```

Observe: a skill só entrou no contexto agora, quando você invocou. Isso é *progressive disclosure*.
Ela vai apontar o bug — mas não conserta (a skill é só de leitura, por design).

### 4. MCP: documentação de verdade dentro da janela

Fora do Claude Code (no terminal normal), dentro da pasta do projeto:

```bash
claude mcp add context7 -- npx -y @upstash/context7-mcp
```

Volte pro Claude Code (`claude`) e rode:

```
/mcp
```

Deve aparecer `context7` como conectado. Teste:

```
usando o context7, me mostre a assinatura atual de describe/test/assert do node:test
```

O que aconteceu: o modelo pediu uma tool do MCP, o harness executou, a documentação real entrou na
janela. Menos chute, menos alucinação. Tira um print do `/mcp` — é parte da entrega.

### 5. A tarefa real

Cole no Claude Code:

```
Corrija src/validaCpf.js para rejeitar CPFs com todos os dígitos iguais (ex.: 111.111.111-11) e
strings com letras no meio. npm test tem que passar. Não edite os arquivos em tests/.
```

Enquanto ele trabalha, **narre o loop** (a facilitadora vai fazer isso na tela):
`Read` → `Edit` → `Bash(npm test)` → falhou → `Edit` → `Bash(npm test)` → passou → resposta sem tool
= saiu do loop. Conte quantas voltas foram.

### 6. Revisa (o momento AI-assisted)

Leia o diff inteiro. Pergunte a si mesma/o:

- Entendi cada linha? Se não: `explique a linha X` pro agente, ou pergunta pra facilitadora.
- Ele mexeu em algo que eu não pedi?
- Ele editou algum teste? (não podia)
- `npm test` está verde no **meu** terminal, não só no dele?

Se sim pra tudo:

```bash
git add -A
git commit -m "fix: validaCpf rejeita dígitos repetidos e letras (revisado)"
git push
```

### Ambiente pronto quando:

- [ ] `claude --version` responde e `/status` mostra sua conta
- [ ] `CLAUDE.md` commitado, sem TODO, com comando de teste e a regra de rodar testes
- [ ] `/revisar-codigo` roda e devolve uma revisão
- [ ] `/mcp` mostra `context7` conectado
- [ ] `validaCpf` corrigida, `npm test` verde (os testes de `fetchUsuario` ainda falham — são o desafio 3), diff lido, commit feito

Tem os 5? Tira o print do `/mcp` e do `/status`. Metade da sua entrega está pronta.
A outra metade está em [`ATIVIDADE.md`](./ATIVIDADE.md).

---

## Se algo deu errado

| sintoma | tenta isso |
|---|---|
| `claude: command not found` | fecha e reabre o terminal; no npm, confere `npm prefix -g` no PATH |
| login abre navegador mas não volta | copia a URL, abre em outra aba, cola o código de volta no terminal |
| `/mcp` não mostra context7 | roda `claude mcp list` fora do Claude Code; confere se rodou o `add` dentro da pasta do projeto |
| agente editou um teste | `git checkout tests/` e diz pra ele: "não edite tests/, corrija src/" — e adiciona a regra no CLAUDE.md |
| Windows: `npx` não achado | instala Node pelo instalador oficial ou usa WSL |
