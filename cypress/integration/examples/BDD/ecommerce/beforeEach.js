beforeEach(()=>
{
    cy.fixture('Locators/example').then(function(data)
    {
this.data=data
    })
});