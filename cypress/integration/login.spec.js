/// <reference types="cypress" />

const perfil = require('../fixtures/perfil.json')

context('Funcionalidade Login', () => {

  beforeEach(() => {
    cy.visit('minha-conta/')
  });

  afterEach(() => {
    cy.screenshot()
  });
  it('Deve fazer login com sucesso', () => {
    cy.get('#username').type('aluno_ebac@teste.com');
    cy.get('#password').type('teste@teste.com');
    cy.get('.woocommerce-form > .button').click();

    cy.get('.page-title').should('contain', 'Minha conta')
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')

  });

  it('Deve fazer login com sucesso - Usando arquivo de dados', () => {
    cy.get('#username').type(perfil.user);
    cy.get('#password').type(perfil.senha);
    cy.get('.woocommerce-form > .button').click();

    cy.get('.page-title').should('contain', 'Minha conta')
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')
  });

  it.only('Deve fazer login com sucesso utilizando fixture', () => {
    cy.fixture('perfil').then(dados => {
      cy.get('#username').type(dados.user);
      cy.get('#password').type(dados.senha, {log: false});
      cy.get('.woocommerce-form > .button').click();

      cy.get('.page-title').should('contain', 'Minha conta')
      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')
    })

  });

  it('Deve exibir uma mensagem de erro ao inserir usuário inválidos', () => {
    cy.get('#username').type('bac@teste.com');
    cy.get('#password').type('teste@teste.com');
    cy.get('.woocommerce-form > .button').click();

    cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido');
  });

  it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
    cy.get('#username').type('aluno_ebac@teste.com');
    cy.get('#password').type('asdasdasde@asdasdad');
    cy.get('.woocommerce-form > .button').click();

    cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta');
  });
});