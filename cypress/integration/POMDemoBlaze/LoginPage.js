/// <reference types="Cypress" />
import dbLogin from '../../fixtures/Locators/dbLogin.json'
class LoginPage
{
GoToLoginPage()
{
    return cy.get(dbLogin.GoToLoginPage).click()
}

getUserName()
{
    return cy.get(dbLogin.getUserName)

}
getPassword()
{
    return cy.get(dbLogin.getPassword)
}
CloseLoginPop()
{
    return cy.get(dbLogin.CloseLoginPop).click()
}
Login()
{
    return cy.get(dbLogin.Login).click()
}
VerifyLogin()
{
    return cy.get(dbLogin.VerifyLogin)
}
blankLoginVerify()
{
    cy.on('window:alert', (str) => {
        expect(str).to.equal('Please fill out Username and Password.')

    })
}
InvalidLoginVerify()
{
    cy.on('window:alert', (str) => {
        expect(str).to.equal('Wrong password.')

    })
}
ValidLoginVerify()
{
    expect(cy.get(dbLogin.VerifyLogin).should('have.text','Welcome Chanchal'))
}
}
export default LoginPage;