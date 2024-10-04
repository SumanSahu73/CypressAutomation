/// <reference types="Cypress" />
/// <reference types="@cypress/xpath" />
import SwlbCheckOut from '../../fixtures/Locators/SwlbCheckOut.json'
import SwagLabs from '../../fixtures/Locators/SwagLabs.json'
class CheckOutPage
{
goToCheckOut()
{
    return cy.get(SwlbCheckOut.goToCheckOut).click()
}

FinalCheckOut()
{
    cy.get('[data-test="checkout"]').click()
    cy.wait(2000)
    cy.get('[data-test="firstName"]').type('Suman')
    cy.get('[data-test="lastName"]').type('Sahu')
    cy.get('[data-test="postalCode"]').type('494567')
    cy.get('[data-test="continue"]').click()      
}       
  
clickFinishAndVerifyOrder()
    {
        cy.get('[data-test="finish"]').click()
        cy.get(SwagLabs.ConfirmMsgBox).should('have.text','Thank you for your order!')
    }
    
verifyCheckOutPage()
    {
        expect(cy.get(SwlbCheckOut.verifyCheckOutPage).should('have.text', 'Your Cart'))
    }

}
export default CheckOutPage;