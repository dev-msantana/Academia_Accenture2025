const seletoresPriceOption = {
    SELECT_PLAN: '#selectultimate',
    TITLE_PAGEPRICE: '.idealsteps-step-active, a[name="Select Price Option"]',
    DADOS_OBRIGATORIOSPRICEOPTION: '.invalid',
    BTN_NEXT4: '#nextsendquote',
    BLOCO_OPCOES: '#priceTable',
    MSG_VALIDA: '#xLoaderPrice'
}

Cypress.Commands.add('selectPriceOption', () => {
    cy.get(seletoresPriceOption.TITLE_PAGEPRICE).should('be.visible')

    cy.get(seletoresPriceOption.SELECT_PLAN).click({force: true})
    cy.log('Plano selecionado com sucesso ✅')

    cy.get(seletoresPriceOption.DADOS_OBRIGATORIOSPRICEOPTION).should('not.exist')
})


Cypress.Commands.add('irParaSendQuote', () => {
    cy.get(seletoresPriceOption.BTN_NEXT4).click()
    cy.log('Avançou para a etapa de envio de cotação')
})

Cypress.Commands.add('selectPriceOptionInvalid', () => {
    cy.get(seletoresPriceOption.TITLE_PAGEPRICE).should('be.visible')

    cy.get(seletoresPriceOption.BLOCO_OPCOES).should('not.be.visible')
    cy.log('Bloco de opções de preço não exibido 🚫')
})

Cypress.Commands.add('validarMensagemDeRetorno', () => {
    cy.get(seletoresPriceOption.MSG_VALIDA).contains('Please, complete the first three steps to see the price table.')
    cy.log('Mensagem de validação exibida corretamente ✅')
})

