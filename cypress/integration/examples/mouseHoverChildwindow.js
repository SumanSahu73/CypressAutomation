/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 
//handling mousehover event using cypress using jquvery show() function
 //targetting on hidden elements of parent element
//cy.get('div.mouse-hover-content').invoke('show')
//or

//if u want to click force fully for any hidden element using click command then->

cy.contains('Top').click({force: true})
cy.url().should('include','top')

// child window or child tab 2nd way without removing target attribute
cy.get('#opentab').then(function(e1)
{
    const url=e1.prop('href')
    cy.visit(url) //qaclickacademy new url
    cy.origin(url, ()=> 
    {
        cy.get("div.sub-menu-bar a[href*='about']").click()

    })

})







 
})
 
 
})
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 