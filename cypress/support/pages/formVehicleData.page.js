

const seletoresVehicle = {
    SELECT_MAKE:'#make',
    INPUT_ENGINEPERFORMANCE: '#engineperformance',
    SELECT_DATAOFMANUFACTURE: '#dateofmanufacture',
    SELECT_NUMBEROFSEATS: '#numberofseats',
    SELECT_FUELTYPE: '#fuel',
    INPUT_LISTPRICE: '#listprice',
    INPUT_LICENSEPLATE: '#licenseplatenumber',
    INPUT_ANUALMILEAGE: '#annualmileage',
    DADOS_OBRIGATORIOSVEHICLE: '.invalid',
    TITLE_PAGEVEHICLE: '.idealsteps-step-active, a[name="Enter Vehicle Data"]',
    BNT_NEXT: '#nextenterinsurantdata'
}   


Cypress.Commands.add('enterVehicleData', () => {
    cy.get(seletoresVehicle.TITLE_PAGEVEHICLE).should('be.visible')

    cy.get(seletoresVehicle.SELECT_MAKE).select(Math.floor(Math.random() * 15) + 1)
    cy.get(seletoresVehicle.INPUT_ENGINEPERFORMANCE).type(`${Math.floor(Math.random() * 2000) + 1}`)
    cy.get(seletoresVehicle.SELECT_DATAOFMANUFACTURE).type('06/15/2024')
    cy.get(seletoresVehicle.SELECT_NUMBEROFSEATS).select(Math.floor(Math.random() * 9) + 1)
    cy.get(seletoresVehicle.SELECT_FUELTYPE).select(Math.floor(Math.random() * 5) + 1)
    cy.get(seletoresVehicle.INPUT_LISTPRICE).type(Math.floor(Math.random() * (100000 - 500 + 1)) + 500)
    cy.get(seletoresVehicle.INPUT_LICENSEPLATE).type(Math.floor(Math.random() * 100000) + 1)
    cy.get(seletoresVehicle.INPUT_ANUALMILEAGE).type(Math.floor(Math.random() * (100000 - 100 + 1)) + 100)
    
    cy.get(seletoresVehicle.DADOS_OBRIGATORIOSVEHICLE).should('not.exist')
    cy.log('Dados obrigatorios do veiculo preenchidos com sucesso ✅')
})


Cypress.Commands.add('irParaInsurantData', () => {  
    cy.get(seletoresVehicle.BNT_NEXT).click()
    cy.log('Avançou para a etapa de dados do segurado')
})
