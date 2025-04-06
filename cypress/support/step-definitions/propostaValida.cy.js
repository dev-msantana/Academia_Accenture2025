import {Given, When, And, Then, Before, After} from 'cypress-cucumber-preprocessor/steps'

Given('que o usuário acessa a página inicial do portal Tricentis', () => {
  cy.visit('/')
  cy.validarHomePage()
})

When('o usuário clica na opção Automobile', () => {
  cy.selecionarOpcaoAutomobile()
})

And('preenche o formulário com os dados do veículo', () => {
  cy.enterVehicleData()
  cy.irParaInsurantData()
})

And('preenche o formulário com os dados do segurado', () => {
  cy.enterInsurantData()
  cy.irParaEnterProductData()
})

And('preenche o formulário com as informações do seguro', () => {
  cy.enterProductData()
  cy.irParaSelectPriceOption()
})

And('seleciona a opção de seguro desejada', () => {
  cy.selectPriceOption()
  cy.irParaSendQuote()
})

And('informa os dados para envio da proposta', () => {
  cy.enterQuoteData()
})

Then('visualiza a mensagem de envio da proposta com sucesso', () => {
  cy.enviarCotacao()
})