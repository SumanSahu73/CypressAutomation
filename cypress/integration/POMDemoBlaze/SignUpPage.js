/// <reference types="Cypress" />
import DBSignup from '../../fixtures/Locators/DBSignup.json'
import Login from '../../fixtures/TestData/Login.json'
class SignUpPage
{
    getSignUp()
    {
        return cy.get(DBSignup.getSignUp).click()
    }
    getSignUpUserName()
    {
        return cy.get(DBSignup.getSignUpUserName).type(Login.usernameDemo)
    }
    getSignUpPassword()
    {
        return cy.get(DBSignup.getSignUpPassword).type(Login.passwordDemo)
    }
    SignUp()
    {
        return cy.get(DBSignup.SignUp).click()
    }
    CloseSignUp()
    {
        return cy.get(DBSignup.CloseSignUp).click()
    }
    verifyNegativeSignup()
    {
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Username and Password.')

        })

    }
    verifyPositiveSignup()
    {
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('This user already exist.')

        })
    }
}
export default SignUpPage;
