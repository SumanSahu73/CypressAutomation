/// <reference types="Cypress" />
import DBLogout from '../../fixtures/Locators/DBLogout.json'
class LogOut
{
  
    finalLogOut() {
        cy.get(DBLogout.getLogOut).click()
        cy.get(DBLogout.verifyLogOut).should('have.text', 'Sign up')
    }

}
export default LogOut;
