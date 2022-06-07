///<reference types="cypress"/>
import EnderecosPage from '../support/page-objects/enderecos.page';
const dadosEndereco = require('../fixtures/endereco.json')
const dadosEnderecoEntrega = require('../fixtures/enderecoEntrega.json')

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
  beforeEach(() => {
    cy.visit('minha-conta')
    cy.fixture('perfil').then(dados => {
      cy.login(dados.user, dados.senha)
    })
  });
  
  it('Deve fazer o cadastro de faturamento com sucesso', () => {
    EnderecosPage.editarEnderecoFaturamento(
      'Rafael',
      'Pegoretti',
      'Facebook',
      'Brasil',
      'Av. São Gabriel',
      '99',
      'Colombo',
      'Paraná',
      '83404060',
      '4166666666',
      'teste@teste.com',

    );

    cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
  });

  it('Deve fazer o cadastro de faturamento com sucesso - Usando arquivo de dados json', () => {
    var massaIndex = 0;
    EnderecosPage.editarEnderecoFaturamento(
      dadosEndereco[massaIndex].nome,
      dadosEndereco[massaIndex].sobrenome,
      dadosEndereco[massaIndex].empresa,
      dadosEndereco[massaIndex].pais,
      dadosEndereco[massaIndex].endereco,
      dadosEndereco[massaIndex].numero,
      dadosEndereco[massaIndex].cidade,
      dadosEndereco[massaIndex].estado,
      dadosEndereco[massaIndex].cep,
      dadosEndereco[massaIndex].telefone,
      dadosEndereco[massaIndex].email,

    );

    cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
  });

  it.only('Deve fazer o cadastro de entrega com sucesso - Usando arquivo de dados json', () => {
    var massaIndex = 0;
    EnderecosPage.editarEnderecoEntrega(
      dadosEnderecoEntrega[massaIndex].nome,
      dadosEnderecoEntrega[massaIndex].sobrenome,
      dadosEnderecoEntrega[massaIndex].empresa,
      dadosEnderecoEntrega[massaIndex].pais,
      dadosEnderecoEntrega[massaIndex].endereco,
      dadosEnderecoEntrega[massaIndex].numero,
      dadosEnderecoEntrega[massaIndex].cidade,
      dadosEnderecoEntrega[massaIndex].estado,
      dadosEnderecoEntrega[massaIndex].cep

    );


    cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
  });

});