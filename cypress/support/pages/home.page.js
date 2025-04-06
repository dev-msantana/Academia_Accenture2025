const BTN_AUTOMOBILE = '#nav_automobile'
const TEXT_PAGEAUTOMOBILE = '#selectedinsurance'

Cypress.Commands.add('validarHomePage', () => {
    cy.url().should('include', 'https://sampleapp.tricentis.com/')
    cy.log('Página inicial validada com sucesso ✅')
})

Cypress.Commands.add('selecionarOpcaoAutomobile', () => {
    cy.get(BTN_AUTOMOBILE).click()
    cy.get(TEXT_PAGEAUTOMOBILE).should('be.visible')
    cy.log('Página Automobile carregada com sucesso ✅')
})