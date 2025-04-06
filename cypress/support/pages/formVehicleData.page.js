import { faker } from '@faker-js/faker'

const seletoresVehicle = {
    SELECT_make:'#make',
    INPUT_engineperformance: '#engineperformance',
    SELECT_dataofmanufacture: '#dateofmanufacture',
    SELECT_numberofseats: '#numberofseats',
    SELECT_fueltype: '#fuel',
    INPUT_listprice: '#listprice',
    INPUT_licenseplate: '#licenseplatenumber',
    INPUT_anualmileage: '#annualmileage',
    Dados_obrigatoriosVehicle: '.invalid',
    TITLE_pagevehicle: '.idealsteps-step-active, a[name="Enter Vehicle Data"]',
    BNT_next: '#nextenterinsurantdata'
}   


Cypress.Commands.add('enterVehicleData', () => {
    cy.get(seletoresVehicle.TITLE_pagevehicle).should('be.visible')

    cy.get(seletoresVehicle.SELECT_make).select(Math.floor(Math.random() * 15) + 1)
    cy.get(seletoresVehicle.INPUT_engineperformance).type(Math.floor(Math.random() * 100) + 1)
    cy.get(seletoresVehicle.SELECT_dataofmanufacture).type('06/15/2024')
    cy.get(seletoresVehicle.SELECT_numberofseats).select(Math.floor(Math.random() * 5) + 1)
    cy.get(seletoresVehicle.SELECT_fueltype).select(Math.floor(Math.random() * 5) + 1)
    cy.get(seletoresVehicle.INPUT_listprice).type(Math.floor(Math.random() * 100000) + 1)
    cy.get(seletoresVehicle.INPUT_licenseplate).type(Math.floor(Math.random() * 100000) + 1)
    cy.get(seletoresVehicle.INPUT_anualmileage).type('34000')
    cy.get(seletoresVehicle.Dados_obrigatoriosVehicle).should('not.exist')
    cy.log('Dados obrigatorios do veiculo preenchidos com sucesso')
})


Cypress.Commands.add('irParaInsurantData', () => {  
    cy.get(seletoresVehicle.BNT_next).click()
})
