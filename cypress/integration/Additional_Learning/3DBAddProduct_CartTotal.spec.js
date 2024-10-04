/// <reference types="Cypress" />
import LoginPage from '../POMDemoBlaze/LoginPage'
import AddProduct from '../POMDemoBlaze/AddProduct'
import PlaceOrder from '../POMDemoBlaze/PlaceOrder'
import demoBlaze from '../../fixtures/Locators/demoBlaze.json'

describe('DemoBlaze Test Suite', function () {
    this.beforeEach(() => {

        cy.fixture('example').then(function (data) {
            this.data = data

        })
        cy.viewport('macbook-13')
        Cypress.config("defaultCommandTimeout", 9000)
    })

    //Creating objects for the class LoginPage. AddProduct, PlaceOrder, LogOut
   
    const addProduct1 = new AddProduct()
    const placeOrder1 = new PlaceOrder()
    it('test case for Add product,remove product and verify total amount', function () {
        addProduct1.LoginDB();
        addProduct1.getCategories()
        cy.wait(2000)
        this.data.itemName.forEach(function(element) {

            cy.selectProductDemoBlaze(element)
            addProduct1.AddToCart()
            addProduct1.Home()
            addProduct1.getCategories()
        });
        addProduct1.Cart()
        cy.wait(2000)
        demoBlaze.RemoveItem.forEach(function(element) {
            addProduct1.RemoveProduct(element)
           
        });
        addProduct1.calculateSumOfAllAmount()
        addProduct1.verifyActualTotalAmount()
       
    })
     
    it('Negative test case for place order by without filling the details', function () {
        addProduct1.LoginDB();
        addProduct1.Cart()
        cy.wait(2000)
        placeOrder1.placeOrderwithoutDetails()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Name and Creditcard.')

        })
        placeOrder1.closePlaceOrderPop()
    })
   
})





