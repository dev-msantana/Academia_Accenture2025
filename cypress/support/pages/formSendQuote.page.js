

const seletoresQuote = {
    INPUT_email: '#email',
    INPUT_phone: '#phone',
    INPUT_username: '#username',
    INPUT_password: '#password',
    INPUT_confirmPassword: '#confirmpassword',
    INPUT_comments: '#Comments',
    TITLE_pagequote: '.idealsteps-step-active, a[name="Send Quote"]',
    Dados_obrigatoriosQuato: '.invalid',
    BTN_send: '#sendemail',
    TEXT_confirm: '.sweet-alert',
}


Cypress.Commands.add('enterQuoteData', () => {
    cy.get(seletoresQuote.TITLE_pagequote).should('be.visible')

    cy.get(seletoresQuote.INPUT_email).type(Cypress.env('email'), {log: false})
    cy.get(seletoresQuote.INPUT_phone).type(Cypress.env('phone'), {log: false})
    cy.get(seletoresQuote.INPUT_username).type(Cypress.env('username'), {log: false})
    cy.get(seletoresQuote.INPUT_password).type(Cypress.env('password'), {log: false})
    cy.get(seletoresQuote.INPUT_confirmPassword).type(Cypress.env('confirmPassword'), {log: false})
    cy.get(seletoresQuote.INPUT_comments).type('Obrigado pelos ensinamentos, Capitão!')
    cy.get(seletoresQuote.Dados_obrigatoriosQuato).should('not.exist')
    cy.log('Dados obrigatorios do para envio de Email preenchidos com sucesso')
})


Cypress.Commands.add('envioEmail', () => {
    cy.get(seletoresQuote.BTN_send).click()
    cy.get(seletoresQuote.TEXT_confirm, { timeout: 15000 }).should('be.visible')
})