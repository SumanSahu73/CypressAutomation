/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
describe('My Second Test Suite', function() 
{
    before(() => {
        // root-level hook
        // runs once before all tests
        cy.fixture('example').then(function(data)
        {
this.data=data

        })
      })
       
 
it('My FirstTest case',function() {
 

cy.visit("https://rahulshettyacademy.com/angularpractice/")
cy.get(':nth-child(1) > .form-control').type(this.data.name)
cy.get('select').select(this.data.gender)
cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)
cy.get(':nth-child(1) > .form-control').should('have.attr','minlength',2)
cy.get('#inlineRadio3').should('be.disabled')
cy.get(':nth-child(2) > .nav-link').click()

//cy.selectProduct('Blackberry')
//iphone X
//cy.selectProduct('iphone X')

this.data.productName.forEach(function(element) {

    cy.selectProduct(element)

});




 
})
 
 
})
 
 
 
