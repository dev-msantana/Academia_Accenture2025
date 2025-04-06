import { faker } from '@faker-js/faker'

const seletoresINSURANT = {
  INPUT_firstname: '#firstname',
  INPUT_lastname: '#lastname',
  INPUT_birthdate: '#birthdate',
  RADIO_gender: '#gendermale',
  INPUT_streetaddress: '#streetaddress',
  SELECT_country: '#country',
  INPUT_zipcode: '#zipcode',
  INPUT_city: '#city',
  SELECT_Occupation: '#occupation',
  RADIO_hobbies: '#skydiving',
  INPUT_website: '#website',
  INPUT_picture: '#picturecontainer',
  TITLE_pageinsurant: '.idealsteps-step-active, a[name="Enter Insurant Data"]',
  Dados_obrigatoriosInsurant: '.invalid',
  BTN_next2: '#nextenterproductdata',
}

const dadosSeguradorFake = {
  firstName: faker.person.firstName().replace('-',''),
  lastName: faker.person.lastName().replace('-',''),
  streetAdress: faker.location.streetAddress(),
  zipCode: faker.location.zipCode(),
  city: faker.location.city(),
  webSite: faker.internet.url(),
}

Cypress.Commands.add('enterInsurantData', () => { 
    cy.get(seletoresINSURANT.TITLE_pageinsurant).should('be.visible')
    cy.get(seletoresINSURANT.INPUT_firstname).type(dadosSeguradorFake.firstName)
    cy.get(seletoresINSURANT.INPUT_lastname).type(dadosSeguradorFake.lastName)
    cy.get(seletoresINSURANT.INPUT_birthdate).type('11/04/2004')
    cy.get(seletoresINSURANT.RADIO_gender).click({force: true})
    cy.get(seletoresINSURANT.INPUT_streetaddress).type(dadosSeguradorFake.streetAdress)
    cy.get(seletoresINSURANT.SELECT_country).select(Math.floor(Math.random() * 206) + 1)
    cy.get(seletoresINSURANT.INPUT_zipcode).type(Math.floor(Math.random(dadosSeguradorFake.zipCode) * 1000000).toString())
    cy.get(seletoresINSURANT.INPUT_city).type(dadosSeguradorFake.city)
    cy.get(seletoresINSURANT.SELECT_Occupation).select(Math.floor(Math.random() * 5) + 1)
    cy.get(seletoresINSURANT.RADIO_hobbies).click({force:true})
    cy.get(seletoresINSURANT.INPUT_website).type(dadosSeguradorFake.webSite)
    cy.get(seletoresINSURANT.INPUT_picture).selectFile('foto.jpg', { force: true })
    cy.get(seletoresINSURANT.Dados_obrigatoriosInsurant).should('not.exist')
    cy.log('Dados obrigatorios do segurador preenchidos com sucesso')
})


Cypress.Commands.add('irParaEnterProductData', () => {
    cy.get(seletoresINSURANT.BTN_next2).click()
})