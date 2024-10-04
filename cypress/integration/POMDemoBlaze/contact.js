/// <reference types="Cypress" />
import demoBlaze from '../../fixtures/Locators/demoBlaze.json'
import DBTestdata from '../../fixtures/TestData/DBTestdata.json'
class contact{
    contactwithdetails()
    {
        cy.get(demoBlaze.ContactLink).click()
        cy.get(demoBlaze.ContactEmailBox).type(DBTestdata.Email)
        cy.get(demoBlaze.ContactName).type(DBTestdata.ContName)
        cy.get(demoBlaze.ContactMsg).type(DBTestdata.ContMsg)
        cy.get(demoBlaze.SendMsg).click()
    }
    contactWithoutDetails()
    {
        cy.get(demoBlaze.ContactLink).click()
        cy.wait(2000)
        cy.get(demoBlaze.SendMsg).click()
    }
    VerifyContact()
    {
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Thanks for the message!!')

        })
    }
    
    
}
export default contact;