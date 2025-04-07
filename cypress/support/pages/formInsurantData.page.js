import { da, faker } from '@faker-js/faker'

const seletoresINSURANT = {
  INPUT_FIRSTNAME: '#firstname',
  INPUT_LASTNAME: '#lastname',
  INPUT_BIRTHDATE: '#birthdate',
  RADIO_GENDER: '#gendermale',
  INPUT_STREETADDRESS: '#streetaddress',
  SELECT_COUNTRY: '#country',
  INPUT_ZIPCODE: '#zipcode',
  INPUT_CITY: '#city',
  SELECT_OCCUPATION: '#occupation',
  RADIO_HOBBIES: '#skydiving',
  INPUT_WEBSITE: '#website',
  INPUT_PICTURE: '#picturecontainer',
  TITLE_PAGEINSURANT: '.idealsteps-step-active, a[name="Enter Insurant Data"]',
  DADOS_OBRIGATORIOSINSURANT: '.invalid',
  BTN_NEXT2: '#nextenterproductdata',
  PICTURE: '../../Academia_Accenture2025/cypress/assets/foto.jpg'
}

const dadosFakeSegurado = {
  FIRSTNAME: faker.person.firstName().replace(/[-']/g, ''),
  LASTNAME: faker.person.lastName().replace(/[-']/g, ''),
  STREETADDRESS: faker.location.streetAddress(),
  ZIPCODE: faker.location.zipCode(Math.floor((Math.random() * (99999999 - 1000 + 1)) + 1000).toString()),
  CITY: faker.location.city(),
  WEBSITE: faker.internet.url(),
}

Cypress.Commands.add('enterInsurantData', () => { 
    cy.get(seletoresINSURANT.TITLE_PAGEINSURANT).should('be.visible')

    cy.get(seletoresINSURANT.INPUT_FIRSTNAME).type(dadosFakeSegurado.FIRSTNAME)
    cy.get(seletoresINSURANT.INPUT_LASTNAME).type(dadosFakeSegurado.LASTNAME)
    cy.get(seletoresINSURANT.INPUT_BIRTHDATE).type('11/04/2004')
    cy.get(seletoresINSURANT.RADIO_GENDER).click({force: true})
    cy.get(seletoresINSURANT.INPUT_STREETADDRESS).type(dadosFakeSegurado.STREETADDRESS)
    cy.get(seletoresINSURANT.SELECT_COUNTRY).select(Math.floor(Math.random() * 206) + 1)
    cy.get(seletoresINSURANT.INPUT_ZIPCODE).type(dadosFakeSegurado.ZIPCODE)
    cy.get(seletoresINSURANT.INPUT_CITY).type(dadosFakeSegurado.CITY)
    cy.get(seletoresINSURANT.SELECT_OCCUPATION).select(Math.floor(Math.random() * 5) + 1)
    cy.get(seletoresINSURANT.RADIO_HOBBIES).click({force:true})
    cy.get(seletoresINSURANT.INPUT_WEBSITE).type(dadosFakeSegurado.WEBSITE)
    cy.get(seletoresINSURANT.INPUT_PICTURE).selectFile(seletoresINSURANT.PICTURE, { force: true })
    
    cy.get(seletoresINSURANT.DADOS_OBRIGATORIOSINSURANT).should('not.exist')
    cy.log('Formulário de dados do segurado preenchido com sucesso ✅')
})


Cypress.Commands.add('irParaEnterProductData', () => {
    cy.get(seletoresINSURANT.BTN_NEXT2).click()
    cy.log('Avançou para a etapa de dados do produto')
})