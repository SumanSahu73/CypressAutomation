/// <reference types="Cypress" />
/// <reference types="@cypress/xpath" />

import LoginPage from '../POMSwagLabs/LoginPage'
import LogOut from '../POMSwagLabs/LogOut'
import AddProduct from '../POMSwagLabs/AddProduct'
import CheckOutPage from '../POMSwagLabs/CheckOutPage'


describe('My Swag Labs Test Suite', function () {
    this.beforeEach(() => {
        cy.fixture('example').then(function (data) {
            this.data = data

        })
        cy.viewport('macbook-13')
        Cypress.config("defaultCommandTimeout", 11000)
        cy.visit("https://saucedemo.com")
        cy.wait(2000)
    })
    //Creating objects for the class LoginPage. AddProduct, PlaceOrder, LogOut
    const logOut2 = new LogOut()
    const loginPage2 = new LoginPage()
    const addProduct2= new AddProduct()
    const checkOutPage2 = new CheckOutPage()

    
    it('SwagLab Login Test Case', function () {

        //LoginPage
        loginPage2.LoginSwagLab()
        //verify login page with Home Page - All Item
        loginPage2.verifyLoginPage()
    })
    it('Select Product and go to the cart page, verify cart page,Remove the selected product, Verify Cart Total amount with/without tax And Confirm Order', function () {

        //LoginPage
        loginPage2.LoginSwagLab()
        this.data.SwagProductName.forEach(function (element) {

            addProduct2.selectProduct(element)

        });
        checkOutPage2.goToCheckOut()
        //verifying checkout
        checkOutPage2.verifyCheckOutPage()
        //Remove The Product from the cart
        this.data.RemoveItem.forEach(function (element) {

            addProduct2.RemoveProduct(element)

        });

        checkOutPage2.FinalCheckOut()
        //Verifying Total value by performing sum of all the amount without tax

        addProduct2.getTotalSumwithoutTax()
        addProduct2.compareTotalAmountwithoutTax()

        //Verifying Total value by performing sum of all the amount with tax
        addProduct2.getTotalSumwithTax()
        addProduct2.compareTotalAmountwithTax()
        //Finish order process
        checkOutPage2.clickFinishAndVerifyOrder()
    })
    
    it('SwagLab LogOut Test Case', function () {

        //LoginPage
        loginPage2.LoginSwagLab()
        //logOut
        logOut2.LogOut()

    })

})



