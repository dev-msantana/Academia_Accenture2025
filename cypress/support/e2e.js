import { Faker } from '@faker-js/faker'


import './commands'
import './pages/home.page'
import './pages/formVehicleData.page'
import './pages/formInsurantData.page'  
import './pages/formProductData.page'
import './pages/formPriceOpition.page'
import './pages/formSendQuote.page'   



Cypress.on('uncaught:exception', (err, runnable) => {
    return false; // Ignora qualquer erro de JavaScript não tratado
  });