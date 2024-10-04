// anytestcases is called as spec file
// the below one line code is for intelligence

/// <reference types="Cypress" />

describe('This Is My First Test Suite', function()
 {
    it('My firstTest case', function() {
      
      //expect(true).to.equal(true)
      cy.viewport('macbook-13')
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      cy.get('.search-keyword').type('ca')
      cy.wait(2000)
      cy.get('.product').should('have.length',5) //it contains invisible product also.
      cy.get('.product:visible').should('have.length',4) 
      cy.get('.products').find('.product').should('have.length',4)
     // cy.get(':nth-child(3) > .product-action > button').click()
      cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
      
      console.log('sf')
     // using each
   /*  cy.get('.products').find('.product').each(($el, index, $list) => {

     const textVeg=$e1.find('h4.product-name').text()
     if(textVeg.includes('Cashews'))
     {
      cy.wrap($e1).contains('ADD TO CART').click()
     }

    
     })
*/
    cy.get('.brand').should('have.text','GREENKART')
     cy.get('.brand').then(function(logoelement)
     {
      cy.log(logoelement.text())  
     })
     cy.get('.cart-icon > img').click()
     cy.contains('PROCEED TO CHECKOUT').click()
     cy.get('div.container div.products-wrapper:nth-child(2) div.products div:nth-child(4) > button:nth-child(14)').click()
     //cy.get('select').click()
     cy.get('select').select(['India']).should('have.value','India')
     cy.get('.chkAgree').click()
     cy.get('button').click()
    cy.wait(10000)
    cy.get('div.container div.container div.cart div.cart-info:nth-child(4) table:nth-child(1) tbody:nth-child(1) tr:nth-child(1) td:nth-child(3) > strong:nth-child(1)').should('have.text','0')
    //cy.get('[style="color:green;font-size:25px"]').should('have.text',"Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!") 
   /* cy.get('[style="color:green;font-size:25px"]').then((element)=>{
      expect(element.text()).to.be.equal("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!")
    })*/
    })

  

  })