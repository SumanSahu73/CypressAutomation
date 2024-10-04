/// <reference types="Cypress" />
 // We are mocking(modifing actual request) request here.
describe('My first InterceptApi Test Suite', function() 
{
 
it('My FirstTest case',function() {
 cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
 cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
 (req)=>
 {//intercept http request to check security bugs in our application
 req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=suman"
 req.continue((res)=>
 {
    //expect(res.statusCode).to.equal(403)  //make sure this passes if it's give 200 then the data is coming back and anyone can hack and it's a security bug.
    //here in this side it's failing means this sites have security bug issues

})
 }).as("dumyUrl")
 cy.get("button[class='btn btn-primary']").click()
cy.wait('@dumyUrl')


//length of the response array==rows of the table



})
 
 
})
 
 
 
