/// <reference types="Cypress" />
 // We are mocking(modifing actual response) response here.
describe('My first InterceptApi Test Suite', function() 
{
 
it('My FirstTest case',function() {
 cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
 // We are mocking(modifing actual response) response here.
cy.intercept({
    method: 'GET',
    url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
    },
    
    {
      statusCode: 200,
      body: [{
        "book_name":"RestAssured with Java",
        "isbn":"RSU",
        "aisle":"2301"
        }]
    }).as('bookretrievals')
cy.get("button[class='btn btn-primary']").click()
cy.wait('@bookretrievals').then(({request,response})=>
{
   cy.get('tr').should('have.length',response.body.length+1)//+1 for header row
    
}
)
cy.get('p').should('have.text','Oops only 1 Book available')

//length of the response array==rows of the table



})
 
 
})
 
 
 
