/// <reference types="Cypress" />

describe('Intercept/request Api Test Suite', function() 
{
 //first using intercept 
 
it('My FirstTest case for check security bugs in our application',function() {
 cy.visit("https://reqres.in/")
 cy.intercept('GET','https://reqres.in/api/users?page=2',
 (req)=>
 {//intercept http request to check security bugs in our application
 req.url="https://reqres.in/api/users?page=3"
 req.continue((res)=>
 {
    expect(res.statusCode).to.not.equal(403)  //make sure this passes if it's give 200 then the data is coming back and anyone can hack and it's a security bug.
    //here in this side it's failing means this sites have security bug issues

})
 }).as("dumyUrl")
 cy.get("div.container:nth-child(2) div.home-content div.wrap section.console.try-api-links:nth-child(4) div.endpoints ul:nth-child(1) > li.active:nth-child(1)").click()
cy.wait('@dumyUrl')
})


// second using request
it('API GET response verification using request',function() {
    cy.visit("https://reqres.in/")
    cy.request("https://reqres.in/api/unknown/2").then((res)=>{
        cy.log(res.body.data)
        expect(res.body.data.name).include("fuchsia rose")
    })
 })
 

 it('API POST response verification using request',function() {
    cy.visit("https://reqres.in/")
    cy.request("POST","https://reqres.in/api/users",{
        name: "morpheus",
        job: "leader",
    }).then((res)=>{
        const body=res.body;
        cy.log(res.body)
        expect(res.body.name).to.be.equal("morpheus");
        expect(res.status).to.eq(201)
        //expect(res.body.name).include("morpheus")
    })
 })
 
   //last describe
})
 
 
 
