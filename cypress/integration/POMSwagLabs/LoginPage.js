
/// <reference types="Cypress" />
/// <reference types="@cypress/xpath" />
import SwlbLogin from '../../fixtures/Locators/SwlbLogin.json'
import Login from '../../fixtures/TestData/Login.json'
class LoginPage
{

LoginSwagLab()
{
        cy.get(SwlbLogin.getUsername).type(Login.username)
        cy.get(SwlbLogin.getPassword).type(Login.password)
        cy.get(SwlbLogin.SwagLogin).click()
        cy.wait(3000)  

}
verifyLoginPage()
{
    expect(cy.get(SwlbLogin.VerifyHomePage).should('have.text', 'Products'))
}
}
export default LoginPage;