// NÃO EDITE ESTE ARQUIVO. Os testes são a especificação. (ATIVIDADE — desafio 3)
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { fetchUsuario } from '../src/fetchUsuario.js';

const fakeFetch = (status, body) => async () => ({
  ok: status >= 200 && status < 300,
  status,
  json: async () => body,
});

describe('fetchUsuario', () => {
  test('normaliza nome e email quando a API responde 200', async () => {
    const f = fakeFetch(200, { id: 7, nome: '  Iasmim ', email: 'IASMIM@EXEMPLO.COM' });
    assert.deepEqual(await fetchUsuario(7, f), { id: 7, nome: 'Iasmim', email: 'iasmim@exemplo.com' });
  });

  // 👇 esses falham hoje.
  test('lança erro descritivo quando a API responde 404', async () => {
    const f = fakeFetch(404, { erro: 'não encontrado' });
    await assert.rejects(() => fetchUsuario(999, f), /404/);
  });

  test('não explode quando a API devolve campos faltando', async () => {
    const f = fakeFetch(200, { id: 8 });
    assert.deepEqual(await fetchUsuario(8, f), { id: 8, nome: '', email: '' });
  });

  test('rejeita id inválido antes de chamar a API', async () => {
    let chamou = false;
    const f = async () => { chamou = true; };
    await assert.rejects(() => fetchUsuario(-1, f), /id/i);
    assert.equal(chamou, false);
  });
});
