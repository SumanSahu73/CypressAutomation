/// <reference types="Cypress" />
import LoginPage from '../POMDemoBlaze/LoginPage'
import Login from '../../fixtures/TestData/Login.json'

describe('DemoBlaze Login Test Suite', function () {
    this.beforeEach(() => {

        cy.fixture('example').then(function (data) {
            this.data = data

        })
        cy.viewport('macbook-13')
        Cypress.config("defaultCommandTimeout", 9000)
        cy.visit("http://demoblaze.com/index.html")
        //cy.visit(Cypress.env("url"));
    })

    //Creating objects for the class LoginPage. AddProduct, PlaceOrder, LogOut
    const loginPage1 = new LoginPage()
    it('1-Negative TC for Login WithOut Username and Password', function () {
        cy.wait(2000)
        loginPage1.GoToLoginPage()
        loginPage1.Login()
        cy.wait(1000)
        //verifying SignUp page
        loginPage1.blankLoginVerify()
        loginPage1.CloseLoginPop()

    })
    
    it('2-Negative TC for Login WithOut Username with password', function () {
        cy.wait(2000)
        loginPage1.GoToLoginPage()
        cy.wait(1000)
        loginPage1.getPassword().type(Login.ValidPassword)
        loginPage1.Login()
        cy.wait(1000)
        //verifying SignUp page
        loginPage1.blankLoginVerify()
        loginPage1.CloseLoginPop()
    })
    
    it('3-Negative TC for Login With Username without password', function () {
        cy.wait(2000)
        loginPage1.GoToLoginPage()
        cy.wait(1000)
        loginPage1.getUserName().type(Login.ValidUsername)
        loginPage1.Login().click()
        cy.wait(1000)
        //verifying SignUp page
        loginPage1.blankLoginVerify()
        loginPage1.CloseLoginPop()

    })
   
    it('4-Negative TC for Login With Invalid Username and password', function () {
        cy.wait(2000)
        loginPage1.GoToLoginPage()
        cy.wait(2000)
        loginPage1.getUserName().type(Login.InvalidUsername)
        loginPage1.getPassword().type(Login.InvalidPassword)
        loginPage1.Login()
        cy.wait(1000)
        //verifying SignUp page
        loginPage1.InvalidLoginVerify()
        loginPage1.CloseLoginPop()

    })
    it('5-Negative TC for Login With Invalid Username and Valid password', function () {
        cy.wait(2000)
        loginPage1.GoToLoginPage()
        cy.wait(2000)
        loginPage1.getUserName().type(Login.InvalidUsername)
        loginPage1.getPassword().type(Login.ValidPassword)
        loginPage1.Login()
        cy.wait(1000)
        //verifying SignUp page
        loginPage1.InvalidLoginVerify()
        loginPage1.CloseLoginPop()

    })
    it('6-Negative TC for Login With valid Username and Invalid password', function () {
        cy.wait(2000)
        loginPage1.GoToLoginPage()
        cy.wait(2000)
        loginPage1.getUserName().type(Login.ValidUsername)
        loginPage1.getPassword().type(Login.InvalidPassword)
        loginPage1.Login()
        cy.wait(1000)
        //verifying SignUp page
        loginPage1.InvalidLoginVerify()
        loginPage1.CloseLoginPop()

    })
    it.only('7-Positive TC for Login With Valid Username and password', function () {
        cy.wait(2000)
        loginPage1.GoToLoginPage()
        cy.wait(2000)
        loginPage1.getUserName().type(Cypress.env('username'))
        loginPage1.getPassword().type(Cypress.env('password'))
        loginPage1.Login()
        cy.wait(3000)
        //verify login page with Welcome Username
        loginPage1.ValidLoginVerify()
       cy.pause();
      
    })
  

})



