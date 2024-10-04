/// <reference types="Cypress" />
class POApi
{
    static InterCept() {
        cy.intercept('GET', 'https://reqres.in/api/users?page=2',
            (req) => {//intercept http request to check security bugs in our application
                req.url = "https://reqres.in/api/users?page=3"
                req.continue((res) => {
                    expect(res.statusCode).to.not.equal(403)  //make sure this passes if it's give 200 then the data is coming back and anyone can hack and it's a security bug.
                    //here in this side it's failing means this sites have security bug issues

                })
            }).as("dumyUrl")
    }
    static clickGETbutton1()
    {
        cy.get("div.container:nth-child(2) div.home-content div.wrap section.console.try-api-links:nth-child(4) div.endpoints ul:nth-child(1) > li.active:nth-child(1)").click()
        cy.wait('@dumyUrl')
    }
    static GETRequest()
    {
        cy.request("https://reqres.in/api/unknown/2").then((res)=>{
            cy.log(res.body.data)
            expect(res.body.data.name).include("fuchsia rose")
        })
    }
    static POSTRequest()
    {
        cy.request("POST","https://reqres.in/api/users",{
        name: "morpheus",
        job: "leader",
    }).then((res)=>{
        const body=res.body;
        cy.log(res.body)
        expect(res.body.name).to.be.equal("morpheus");
        expect(res.status).to.eq(201)
        
    })
    }
}
export default POApi;