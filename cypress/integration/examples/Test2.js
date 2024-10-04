/// <reference types="Cypress" />

describe('This Is My First Test Suite', function()
 {
    it('My firstTest case', function() {
      //expect(true).to.equal(true)
      cy.viewport('macbook-13')
      cy.visit("https://www.demoblaze.com/index.html")
      cy.wait(6000)
      cy.get('#login2').click()
     cy.wait(2000)
     cy.get('#loginusername').type('aa')
     cy.get('#loginpassword').type('aa')
     cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
     cy.wait(2000)
     cy.get('#nameofuser').should('have.text','Welcome aa')
     cy.wait(2000)

    // cy.get('.list-group').find('#itemc').eq(1).contains('Laptops').click()

     
    cy.get('a[id="itemc"]:nth-child(3)').click()
    // cy.get($("body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3)")).click()
     cy.wait(2000)
     cy.get(':nth-child(3) > .card > .card-block > .card-title > .hrefch').click()
     cy.wait(2000)
     cy.get('.name').should('have.text','MacBook air')
     cy.get('.price-container').should('have.text','$700 *includes tax')
     //done
     cy.get('.col-sm-12 > .btn').click()
     cy.get(':nth-child(4) > .nav-link').click()
     cy.get('.col-lg-1 > .btn').click()
     cy.wait(2000)
     cy.get('#name').type('Suman')
     cy.get('#country').type('India')
     cy.get('#city').type('Raipur')
     cy.get('#card').type('123456789')
     cy.get('#month').type('August')
     cy.get('#year').type('2023')
     cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
     //cy.get('#name').should('have.text','Suman')
     cy.wait(2000)
     cy.get('.sweet-alert > h2').should('have.text','Thank you for your purchase!')
     cy.get('.confirm').click()
     cy.get('#logout2').click()
     cy.get('#signin2').should('have.text','Sign up')



      //cy.get('.search-keyword').type('ca')
      //cy.wait(2000)
     // cy.get('.product:visible').should('have.length',4)

      


    })

  

  })