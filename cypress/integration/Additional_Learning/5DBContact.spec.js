/// <reference types="Cypress" />
import AddProduct from '../POMDemoBlaze/AddProduct'
import contact from '../POMDemoBlaze/contact'


describe('DemoBlaze Contact Page Test Suite', function () {
    this.beforeEach(() => {

        cy.fixture('example').then(function (data) {
            this.data = data

        })
        cy.viewport('macbook-13')
        Cypress.config("defaultCommandTimeout", 9000)
       
    })
    const addProduct1 = new AddProduct()
    const contact1= new contact()
    
    it('Submit Contact Page with filling all the details', function () {
        addProduct1.LoginDB()
        contact1.contactwithdetails()
        contact1.VerifyContact()

    })
    it('Submit Contact Page without filling any details', function () {
        addProduct1.LoginDB()
        contact1.contactWithoutDetails()
        contact1.VerifyContact()

    })
})