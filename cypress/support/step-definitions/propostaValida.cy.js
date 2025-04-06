import {Given, When, And, Then, Before, After} from 'cypress-cucumber-preprocessor/steps'

Given('que o usuário esteja na página inicial do portal Tricentis', () => {
  cy.visit('/')
  cy.validacaoHome()
})

And('clica na opção Automobile', () => {
  cy.selecionarAutomobile()
})

And('preenche o formulario com os dados do veículo', () => {
  cy.enterVehicleData()
  cy.irParaInsurantData()
})

And('preenche o formulario com os dados do segurado', () => {
  cy.enterInsurantData()
  cy.irParaEnterProductData()
})

And('preenche o formulario com os dados do seguro', () => {
  cy.enterProductData()
  cy.irParaSelectPriceOption()
})

When('seleciona o plano de seguro', () => {
  cy.selectPriceOption()
  cy.irParaSendQuote()
})

And('preenche os dados para envio de proposta', () => {
  cy.enterQuoteData()
})

And('a proposta é enviada com sucesso', () => {
  cy.envioEmail()
})