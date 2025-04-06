

const seletoresQuote = {
    INPUT_EMAIL: '#email',
    INPUT_PHONE: '#phone',
    INPUT_USERNAME: '#username',
    INPUT_PASSWORD: '#password',
    INPUT_CONFIRMPASSWORD: '#confirmpassword',
    INPUT_COMMENTS: '#Comments',
    TITLE_PAGEQUOTE: '.idealsteps-step-active, a[name="Send Quote"]',
    Dados_OBRIGATORIOSQUOTE: '.invalid',
    BTN_SEND: '#sendemail',
    MSG_CONFIRM: '.sweet-alert',
}


Cypress.Commands.add('enterQuoteData', () => {
    cy.get(seletoresQuote.TITLE_PAGEQUOTE).should('be.visible')

    cy.get(seletoresQuote.INPUT_EMAIL).type(Cypress.env('email'), {log: false})
    cy.get(seletoresQuote.INPUT_PHONE).type(Cypress.env('phone'), {log: false})
    cy.get(seletoresQuote.INPUT_USERNAME).type(Cypress.env('username'), {log: false})
    cy.get(seletoresQuote.INPUT_PASSWORD).type(Cypress.env('password'), {log: false})
    cy.get(seletoresQuote.INPUT_CONFIRMPASSWORD).type(Cypress.env('confirmPassword'), {log: false})
    cy.get(seletoresQuote.INPUT_COMMENTS).type('Obrigado pelos ensinamentos, Capitão!')

    cy.get(seletoresQuote.Dados_OBRIGATORIOSQUOTE).should('not.exist')
    cy.log('Dados obrigatórios para envio de cotação preenchidos com sucesso ✅')
})


Cypress.Commands.add('enviarCotacao', () => {
    cy.get(seletoresQuote.BTN_SEND).click()
    cy.get(seletoresQuote.MSG_CONFIRM, { timeout: 15000 }).should('be.visible')
    cy.log('Cotação enviada com sucesso 🚀')
})