/// <reference types="Cypress" />
import SignUpPage from '../POMDemoBlaze/SignUpPage'

describe('DemoBlaze SignUp Test Suite', function () {
    this.beforeEach(() => {

        cy.fixture('example').then(function (data) {
            this.data = data

        })
        cy.viewport('macbook-13')
        Cypress.config("defaultCommandTimeout", 9000)
       
    })

    //Creating objects for the class LoginPage. AddProduct, PlaceOrder, LogOut
    const signUpPage1 = new SignUpPage()
    
    it('Negative TC for SigUp WithOut Username and Password', function () {
        cy.visit(Cypress.env("url"));
        cy.wait(2000)
        signUpPage1.getSignUp()
        signUpPage1.SignUp()
        cy.wait(1000)
        //verifying SignUp page
        signUpPage1.verifyNegativeSignup()
        signUpPage1.CloseSignUp()

    })
    it('Negative TC for SigUp WithOut Username with password', function () {
        cy.visit(Cypress.env("url"));
        cy.wait(2000)
        signUpPage1.getSignUp()
        cy.wait(1000)
        signUpPage1.getSignUpPassword()
        signUpPage1.SignUp()
        cy.wait(1000)
        //verifying SignUp page
        signUpPage1.verifyNegativeSignup()
        signUpPage1.CloseSignUp()

    })
    it('Negative TC for SigUp With Username without password', function () {
        cy.visit(Cypress.env("url"));
        cy.wait(2000)
        signUpPage1.getSignUp1()
        cy.wait(1000)
        signUpPage1.getSignUpUserName()
        signUpPage1.SignUp()
        cy.wait(1000)
        //verifying SignUp page
        signUpPage1.verifyNegativeSignup()
        signUpPage1.CloseSignUp()

    })
    it('Positive TC for SigUp With Username and password', function () {
        cy.visit(Cypress.env("url"));
        cy.wait(2000)
        signUpPage1.getSignUp()
        cy.wait(1000)
        signUpPage1.getSignUpUserName()
        signUpPage1.getSignUpPassword()
        signUpPage1.SignUp()
        cy.wait(1000)
        //verifying SignUp page
        signUpPage1.verifyPositiveSignup()
        signUpPage1.CloseSignUp()

    })


})



