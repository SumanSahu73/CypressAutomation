// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('selectProduct', (productName) => {

    cy.get('h4.card-title').each(($e1, index, $list) => {
        if($e1.text().includes(productName))
        {
           cy.get('button.btn.btn-info').eq(index).click()
       
        }
       
       
       
       })
       
 })

 // for Demoblaze select product
 Cypress.Commands.add('selectProductDemoBlaze', (itemName) => {

    cy.get('.card div h4').each(($e1, index, $list) => {
        if($e1.text().includes(itemName))
        {
           cy.get('.card div h4').eq(index).click()
       
        }
       
       
       
       })
       
 })


 Cypress.Commands.add('selectProductSwagLabs', (SwagProductName) => {

    cy.get('.inventory_item_name').each(($e1, index, $list) => {
        if($e1.text().includes(SwagProductName))
        {
           cy.get('.inventory_item_description div:nth-child(2) button').eq(index).click()
       
        }
       
       
       
       })
       
 })
 
 Cypress.Commands.add('RemoveProduct', (RemoveItem) => {

   cy.get('.cart_item_label a').each(($e1, index, $list) => {
       if($e1.text().includes(RemoveItem))
       {
          cy.get('.cart_item_label > .item_pricebar button').eq(index).click()
      
       }
      
      
      
      })
      
})

 //
 Cypress.Commands.add('LoginAPI', () => {

      cy.request("POST", "https://rahulshettyacademy.com/api/ecom/auth/login",{"userEmail":"suman0703sahu@gmail.com","userPassword":"Nisha@0703"}).then(function(response){
         expect(response.status).to.eq(200)
         Cypress.env('token',response.body.token) //setting env variable as a globly from here itself, here token is keyvariable and response.body.token is value for token variable.
      })
 })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('cypress-downloadfile/lib/downloadFileCommand');
require('cy-verify-downloads').addCustomCommand();