/// <reference types="Cypress" />

import HomePage from '../pageObjects/HomePage'
import productPage from '../pageObjects/productPage'
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
    //changing the default time out in spec level with overwrite whatever mention in config.js and in test runner setings
    Cypress.config("defaultCommandTimeout",9000)
    //Creating object for the class HomePage
 const homePage1=new HomePage()
 const ProductPage1=new productPage()

cy.visit("https://rahulshettyacademy.com/angularpractice/")

homePage1.getEditBox().type(this.data.name)
homePage1.getGender().select(this.data.gender)
homePage1.getTwoWayDatabinding().should('have.value',this.data.name)
homePage1.getEditBox().should('have.attr','minlength',2)
homePage1.getEnterpreneaur().should('be.disabled')
homePage1.getShopTab().click()

//cy.selectProduct('Blackberry')
//iphone X
//cy.selectProduct('iphone X')

this.data.productName.forEach(function(element) {

    cy.selectProduct(element)

});


ProductPage1.checkOut().click()
//validating total amount by adding each amount of item/element
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
/*
cy.get('#totalp').then(function(e1){
    const total=e1.text()
    //var totalNum=total.split(" ")
   // totalNum=totalNum[1].trim()
    //converting string to number
    var strToNum=Number(total)
    expect(strToNum).to.equal(sum)
})

*/
    
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
 
 
})
 
 
 
