const seletoresProduct = {
    SELETOR_STARTDATE: '#startdate',
    INPUT_INSURANCE: '#insurancesum',
    SELECT_MERITRATING: '#meritrating',
    SELECT_DAMEGEINSURANCE: '#damageinsurance',
    RADIO_OPITONALPRODUCTS: '#EuroProtection',
    SELECT_COURTSYCAR: '#courtesycar',
    TITLE_PAGEPRODUCT: '.idealsteps-step-active, a[name="Enter Product Data"]',
    DADOS_OBRIGATORIOSPRODUCT: '.invalid',
    BTN_NEXT3: '#nextselectpriceoption'
}


Cypress.Commands.add('enterProductData', () => {
    cy.get(seletoresProduct.TITLE_PAGEPRODUCT).should('be.visible')

    cy.get(seletoresProduct.SELETOR_STARTDATE).type('07/11/2026')
    cy.get(seletoresProduct.INPUT_INSURANCE).select(Math.floor(Math.random() * 9) + 1)
    cy.get(seletoresProduct.SELECT_MERITRATING).select(Math.floor(Math.random() * 18) + 1)
    cy.get(seletoresProduct.SELECT_DAMEGEINSURANCE).select(Math.floor(Math.random() * 3) + 1)
    cy.get(seletoresProduct.RADIO_OPITONALPRODUCTS).click({force:true})
    cy.get(seletoresProduct.SELECT_COURTSYCAR).select(Math.floor(Math.random() * 2) + 1)

    cy.get(seletoresProduct.DADOS_OBRIGATORIOSPRODUCT).should('not.exist')
    cy.log('Formulário de dados do produto preenchido com sucesso ✅')
})

Cypress.Commands.add('irParaSelectPriceOption', () => {
    cy.get(seletoresProduct.BTN_NEXT3).click()
})

Cypress.Commands.add('enterProductDataInvalid', () => {
    cy.get(seletoresProduct.TITLE_PAGEPRODUCT).should('be.visible')

    cy.get(seletoresProduct.SELETOR_STARTDATE).type('04/06/2025')
    cy.get(seletoresProduct.INPUT_INSURANCE).select(Math.floor(Math.random() * 9) + 1)
    cy.get(seletoresProduct.SELECT_MERITRATING).select(Math.floor(Math.random() * 18) + 1)
    cy.get(seletoresProduct.SELECT_DAMEGEINSURANCE).select(Math.floor(Math.random() * 3) + 1)
    cy.get(seletoresProduct.RADIO_OPITONALPRODUCTS).click({force:true})
    cy.get(seletoresProduct.SELECT_COURTSYCAR).select(Math.floor(Math.random() * 2) + 1)

    cy.log('Formulário de dados do produto preenchido (dados inválidos) 🚫')
})

Cypress.Commands.add('irParaSelectPriceOptionInvalid', () => {
    cy.get(seletoresProduct.BTN_NEXT3).click()
})