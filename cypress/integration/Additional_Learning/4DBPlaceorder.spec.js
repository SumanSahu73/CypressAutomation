/// <reference types="Cypress" />
import AddProduct from '../POMDemoBlaze/AddProduct'

import PlaceOrder from '../POMDemoBlaze/PlaceOrder'
describe('DemoBlaze Test Suite', function () {
    this.beforeEach(() => {
        cy.viewport('macbook-13')
        Cypress.config("defaultCommandTimeout", 9000)
    })

    
    //Creating objects for the class LoginPage. AddProduct, PlaceOrder, LogOut
    const placeOrder1 = new PlaceOrder()
    const addProduct1 = new AddProduct()
     it('Place order by filling all the details and verify order', function () {
        addProduct1.LoginDB();
        addProduct1.Cart()
        cy.wait(2000)
        placeOrder1.placeOrderwithAllDetails()
        placeOrder1.verifyOrder()
    })

})





