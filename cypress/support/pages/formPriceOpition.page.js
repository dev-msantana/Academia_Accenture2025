const seletoresPriceOption = {
    SELECT_PLAN: '#selectultimate',
    TITLE_pageprice: '.idealsteps-step-active, a[name="Select Price Option"]',
    Dados_obrigatoriosPriceOption: '.invalid',
    BTN_next4: '#nextsendquote'
}

Cypress.Commands.add('selectPriceOption', () => {
    cy.get(seletoresPriceOption.TITLE_pageprice).should('be.visible')
    
    cy.get(seletoresPriceOption.SELECT_PLAN).click({force: true})
    cy.get(seletoresPriceOption.Dados_obrigatoriosPriceOption).should('not.exist')
    cy.log('Dado obrigatorio do plano preenchidos com sucesso')
})


Cypress.Commands.add('irParaSendQuote', () => {
    cy.get(seletoresPriceOption.BTN_next4).click()
})