// anytestcases is called as spec file
// the below one line code is for intelligence

/// <reference types="Cypress" />

describe('This Is My First Test Suite', function()
 {
    it('My firstTest case', function() {
      //expect(true).to.equal(true)
      cy.viewport('macbook-13')
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
     

    })

  

  })