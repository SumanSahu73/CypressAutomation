/// <reference types="cypress" />

const neatCSV = require('neat-csv')

//import neatCSV from 'neat-csv';

let productName

describe('JWT Session', () => {

    it('is logged in through local storage', async () => {


        //LoginAPI is custom command which we hava made in command.js
        cy.LoginAPI().then(function () {
            // here before hitting the url we already provided/putted the token id and password it will directly open the items page without asking for login.
            cy.visit("https://rahulshettyacademy.com/client",

                {
                    // injecting the token in local storage before hitting the url.
                    onBeforeLoad: function (window) {

                        window.localStorage.setItem('token', Cypress.env('token')) //env is came from command.js LoginAPI

                    }



                })



        })

        cy.get(".card-body b").eq(0).then(function (ele) {

            productName = ele.text();

        })
        //cy.get(".card-body button:last-of-type").eq(1).click();

        cy.get(':nth-child(1) > .card > .card-body > .w-10').click()

        cy.get("[routerlink*='cart']").click();

        cy.contains("Checkout").click();

        cy.get("[placeholder*='Country']").type("ind")

        cy.get('.ta-results button').each(($e1, index, $list) => {



            if ($e1.text() === " India") {

                cy.wrap($e1).click()

            }

        })

        cy.get(".action__submit").click();


        cy.wait(5000)
        

        //cy.get(".order-summary button").click();
        cy.contains('Click To Download Order Details in Excel').click()
        // cy.log(Cypress.config("fileServerFolder"))

        //cy.readFile("C:\\BMS NL\\cypress\\downloads\\order-invoice_suman0703sahu.csv") // static path
      
        const filePath= Cypress.config("fileServerFolder")+"\\cypress\\downloads\\order-invoice_suman0703sahu.xlsx"
        cy.task('excelToJsonConverter',filePath).then(function(result)
        {
            cy.log(result);
            cy.log(result.data[1].A);// invoice ID
            expect(productName).to.equal(result.data[1].B) // product name
        })
        //extracting the all excel content as a text but it will not care about row column index no./ position
        cy.readFile(filePath).then(function(text)
        {
            //verifying the productName is present there on excel or not.
            expect(text).to.include(productName);
        })

    })

})

