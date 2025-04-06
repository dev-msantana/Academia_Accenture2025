import {Given, When, And, Then, Before, After} from 'cypress-cucumber-preprocessor/steps'

And('preenche o formulário com os dados do seguro de forma incorreta', () => {
    cy.enterProductDataInvalid()
})

And('avança para a seleção da proposta', () => {
    cy.irParaSelectPriceOptionInvalid()
})

Then('o sistema não exibe as opções de proposta disponíveis', () => {
    cy.selectPriceOptionInvalid()
})

And('exibe uma mensagem orientando o usuário a retornar para corrigir os dados dos formulários anteriores', () => {
    cy.validarMensagemDeRetorno()
})