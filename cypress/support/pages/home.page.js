const BTN_AUTOMOBILE = '#nav_automobile'
const TEXT_pageAutomobile = '#selectedinsurance'

Cypress.Commands.add('validacaoHome', () => {
    cy.url().should('include', 'https://sampleapp.tricentis.com/')
})

Cypress.Commands.add('selecionarAutomobile', () => {
    cy.get(BTN_AUTOMOBILE).click()
    cy.log('Botão Automobile clicado')
    cy.get(TEXT_pageAutomobile).should('be.visible')
})