// NÃO EDITE ESTE ARQUIVO.
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { formataPreco } from '../src/formataPreco.js';

describe('formataPreco', () => {
  test('formata centavos em reais com separador de milhar', () => {
    assert.equal(formataPreco(123456), 'R$ 1.234,56');
    assert.equal(formataPreco(5), 'R$ 0,05');
    assert.equal(formataPreco(0), 'R$ 0,00');
    assert.equal(formataPreco(100000000), 'R$ 1.000.000,00');
  });

  test('rejeita entrada inválida', () => {
    assert.throws(() => formataPreco(1.5), TypeError);
    assert.throws(() => formataPreco(-1), TypeError);
    assert.throws(() => formataPreco('10'), TypeError);
  });
});
