/// <reference types="Cypress" />
/// <reference types="@cypress/xpath" />
import SwlbLogout from '../../fixtures/Locators/SwlbLogout.json'
class LogOut
{
   
    LogOut()
    {
        cy.get(SwlbLogout.getMenu).click()
        cy.get(SwlbLogout.getLogOut).click()
        cy.wait(3000)
        //cy.url().should('include', '/index.html')
        cy.get(SwlbLogout.verifyLogOut).should('have.text','Accepted usernames are:')
        
    }

}
export default LogOut;