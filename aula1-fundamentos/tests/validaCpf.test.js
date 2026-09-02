// NÃO EDITE ESTE ARQUIVO. Os testes são a especificação.
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { validaCpf } from '../src/validaCpf.js';

describe('validaCpf', () => {
  test('aceita CPF válido com máscara', () => {
    assert.equal(validaCpf('529.982.247-25'), true);
  });

  test('aceita CPF válido sem máscara', () => {
    assert.equal(validaCpf('52998224725'), true);
  });

  test('rejeita dígito verificador errado', () => {
    assert.equal(validaCpf('529.982.247-24'), false);
  });

  test('rejeita tamanho errado', () => {
    assert.equal(validaCpf('123'), false);
    assert.equal(validaCpf('529.982.247-255'), false);
  });

  test('rejeita entrada que não é string', () => {
    assert.equal(validaCpf(52998224725), false);
    assert.equal(validaCpf(null), false);
    assert.equal(validaCpf(undefined), false);
  });

  // 👇 os dois abaixo falham. É o bug clássico do CPF gerado por IA.
  test('rejeita CPF com todos os dígitos iguais (111.111.111-11 passa no cálculo, mas é inválido)', () => {
    assert.equal(validaCpf('111.111.111-11'), false);
    assert.equal(validaCpf('000.000.000-00'), false);
    assert.equal(validaCpf('99999999999'), false);
  });

  test('rejeita string com letras no meio mesmo que sobrem 11 dígitos', () => {
    assert.equal(validaCpf('529a982b247c25'), false);
  });
});
