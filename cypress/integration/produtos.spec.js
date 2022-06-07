///<reference types="cypress" />

describe('Funcionalidade Página de produtos', () => {
  
  beforeEach(() => {
    cy.visit('produtos/');
  
  });

  it('Deve selecionar um produto da lista', () => {
    cy.get('[class="product-block grid"]')
      //.first()
      //.last()
      //.eq(3)
      .contains('Aether Gym Pant')
      .click()
  });

  it('deve adicionar o item ao carrinho', () => {
    var quantidade = 3

    cy.get('[class="product-block grid"]')
      .contains('Aether Gym Pant')
      .click()
    
    cy.get('.button-variable-item-34').click()
    cy.get('.button-variable-item-Brown').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    cy.get('.woocommerce-message').should('contain', `${quantidade} × “Aether Gym Pant” foram adicionados no seu carrinho.`)


  });

  it('deve adicionar produto ao carrinho - Usando comandos customizados', () => {
    cy.addProdutos('Aether Gym Pant', '32','Blue', 3)
  });

  it('deve adicionar produto ao carrinho - Usando comandos customizados', () => {
    cy.addProdutos('Abominable Hoodie', 'M', 'Red', 3)
  });
  
});