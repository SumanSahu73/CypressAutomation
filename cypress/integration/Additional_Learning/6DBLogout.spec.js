/// <reference types="Cypress" />
import AddProduct from '../POMDemoBlaze/AddProduct'
import LogOut from '../POMDemoBlaze/LogOut'

const addProduct1 = new AddProduct()
const logOut1 = new LogOut()
describe('DemoBlaze Test Suite', function () {
    this.beforeEach(() => {
        cy.viewport('macbook-13')
        Cypress.config("defaultCommandTimeout", 9000)
    })

    //Creating objects for the class LoginPage. AddProduct, PlaceOrder, LogOut

    it('Place order by filling all the details and verify order', function () {
        addProduct1.LoginDB();
        logOut1.finalLogOut()
    })

})





