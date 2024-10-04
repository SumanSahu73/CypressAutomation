/// <reference types="cypress" />



describe('JWT Session', () => {

  it('is logged in through local storage', async() => {


//LoginAPI is custom command which we have made in command.js
    cy.LoginAPI().then(function()

    {  
         // here before hitting the url we already provided/putted the token id and password it will directly open the items page without asking for login.
        cy.visit("https://rahulshettyacademy.com/client",

        {
            // injecting the token in local storage before hitting the url.
            onBeforeLoad :function(window)

            {

                window.localStorage.setItem('token',Cypress.env('token')) //env is came from command.js LoginAPI

            }



        })       


    })
   

    //cy.get(".card-body button:last-of-type").eq(1).click();
    cy.get(':nth-child(1) > .card > .card-body > .w-10').click()

    cy.get("[routerlink*='cart']").click();

    cy.contains("Checkout").click();

    cy.get("[placeholder*='Country']").type("ind")

    cy.get('.ta-results button').each(($e1, index, $list) => {



      if($e1.text()===" India")

      {

          cy.wrap($e1).click()

      }

  })

    cy.get(".action__submit").click();
    

    cy.wait(5000)

    //cy.get(".order-summary button").click();
    cy.contains('Click To Download Order Details in CSV').click()

   


  })

  })

