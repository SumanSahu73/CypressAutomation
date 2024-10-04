//import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";
/// <reference types="Cypress" />
import {
    DataTable,
    Given,
    Then,
    When,
    And
  } from "@badeball/cypress-cucumber-preprocessor";

//import HomePage from '../../../../support/pageObjects/HomePage'
import productPage from '../../../../support/pageObjects/productPage' //u can use from support folder also or
import HomePage from "../../../pageObjects/HomePage"; // u can use from your pageobject folder
import example from '../../../../support/pageObjects/example.json' //u can use json locator or data file from support folder also by example.keyname

//cypress run --spec cypress\integration\examples\BDD\*.feature --headed --browser chrome
//npx cypress run --env tags="@Regression" --headed --browser chrome
//npx cypress-tags run -e TAGS="@Smoke" --headed --browser chrome
//
// npx cypress run --spec cypress/integration/examples/BDD/*.feature --headed --browser chrome --env url="https://google.com"

const homePage1=new HomePage()
const ProductPage1=new productPage()
let name
Given('I open Ecommerce Page',()=>
{
    cy.visit("https://rahulshettyacademy.com/angularpractice/")
})

// When I add items to cart
When('I add items to cart',function()
{
    homePage1.getShopTab().click()

    //example.productName.forEach(function(element) { //u can use like this also- Json locator/data file from support folder
                 // or
    this.data.productName.forEach(function(element) {

    cy.selectProduct(element)

});
ProductPage1.checkOut().click()
})

// And Validate the total prices
When('Validate the total prices',()=>
{
    var sum=0
    cy.get('tr td:nth-child(4) strong').each(($e1, index, $list) => {
        const amount=$e1.text()  // amount= ₹. 85000
        var res=amount.split(" ") // it split the amount into 2 part depending upon the white space-> // res[0]=₹. , res[1]=85000
        res= res[1].trim() // trim will remove any space if u have before or after the res[1] i.e. 85000
        sum=Number(sum)+Number(res)
       
    
    
        }).then(function()
        {
            cy.log(sum)
    
    })
    
    cy.get('h3 strong').then(function(e1){
        const total=e1.text()
        var totalNum=total.split(" ")
        totalNum=totalNum[1].trim()
        //converting string to number
        var strToNum=Number(totalNum)
        expect(strToNum).to.equal(sum)
    })
})
// Then select the contry submit and verify Thankyou
Then('select the contry submit and verify Thankyou',()=>
{
cy.contains('Checkout').click()
cy.get('#country').type('India')

cy.get('.suggestions > ul > li > a').click()
cy.get('#checkbox2').click({force: true})
cy.get('.ng-untouched > .btn').click()
//cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
cy.get('.alert').then(function(e1)
{
   const actualText=e1.text()
   expect(actualText.includes('Success! Thank you!')).to.be.true
     
})

})

//When I fill the form details
When('I fill the form details',function(dataTable)
{
    name = dataTable.rawTable[1][0]
    homePage1.getEditBox().type(dataTable.rawTable[1][0])
    homePage1.getGender().select(dataTable.rawTable[1][1])
})
// Then validate the form behaviour
Then('validate the form behaviour',()=>
{
    homePage1.getTwoWayDatabinding().should('have.value',name)
    homePage1.getEditBox().should('have.attr','minlength',2)
    homePage1.getEnterpreneaur().should('be.disabled')
})
//And select the Shop Page
Then('select the Shop Page',()=>
{
    homePage1.getShopTab().click()
})