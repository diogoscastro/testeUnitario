// Importa a função soma
const soma = require('../src/soma');

// Descreve a função a ser testada
describe('Função Soma', () => {

  // Testa se a função retorna a soma de dois números
  it('deve retornar a soma de dois números', () => {
    const resultado = soma(5, 10);
    // Usa o matcher `toBe` para verificar se o resultado é igual ao valor esperado
    expect(resultado).toBe(15);
  });


  // Testa se a função retorna 0 para a soma de 0 e 0
  it('deve retornar 0 para a soma de 0 e 0', () => {
    const resultado = soma(0, 0);
    expect(resultado).toBe(0);
  });
});

