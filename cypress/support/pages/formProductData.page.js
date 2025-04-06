const seletoresProduct = {
    SELETOR_startdate: '#startdate',
    INPUT_insurance: '#insurancesum',
    SELECT_meritrating: '#meritrating',
    SELECT_damageinsurance: '#damageinsurance',
    RADIO_opitonalproducts: '#EuroProtection',
    SELECT_courtesycar: '#courtesycar',
    TITLE_pageproduct: '.idealsteps-step-active, a[name="Enter Product Data"]',
    Dados_obrigatoriosProduct: '.invalid',
    BTN_next3: '#nextselectpriceoption'
}


Cypress.Commands.add('enterProductData', () => {
    cy.get(seletoresProduct.TITLE_pageproduct).should('be.visible')

    cy.get(seletoresProduct.SELETOR_startdate).type('07/11/2026')
    cy.get(seletoresProduct.INPUT_insurance).select(Math.floor(Math.random() * 9) + 1)
    cy.get(seletoresProduct.SELECT_meritrating).select(Math.floor(Math.random() * 18) + 1)
    cy.get(seletoresProduct.SELECT_damageinsurance).select(Math.floor(Math.random() * 3) + 1)
    cy.get(seletoresProduct.RADIO_opitonalproducts).click({force:true})
    cy.get(seletoresProduct.SELECT_courtesycar).select(Math.floor(Math.random() * 2) + 1)
    cy.get(seletoresProduct.Dados_obrigatoriosProduct).should('not.exist')
    cy.log('Dados obrigatorios do produto preenchidos com sucesso')
})

Cypress.Commands.add('irParaSelectPriceOption', () => {
    cy.get(seletoresProduct.BTN_next3).click()
})