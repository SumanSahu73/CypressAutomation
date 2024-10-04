/// <reference types="Cypress" />

describe('Dtatbase Testing', function() 
{
 

it('Creating a Table',function() {
    cy.task('queryDb', "CREATE TABLE Employee (ID int, FirstName varchar(255), Address varchar(255), City varchar(255))")
})


it('Creating a Table',function() {
    cy.task('queryDb', 'INSERT INTO Employee (ID, FirstName, Address, City) VALUES("001", "John", "House No. 01", "Helsinki"),("002", "Pam", "House No. 02", "Espoo"),("003", "Dwight", "House No. 03", "Lapland"),("004", "Michael", "House No. 04", "Vantaa");').then((result) => {
     
    expect(result.affectedRows).to.equal(4)
    
})

})

it('Verify that there is only one row where the city is Espoo', function () {
 
    cy.task('queryDb', 'SELECT COUNT(*) as "rowCount" FROM Employee WHERE City="Espoo"').then((result) => { 
    expect(result[0].rowCount).to.equal(1)
})
})

it('Update an Entry into the table and verify', function () {
 
    cy.task('queryDb', 'UPDATE Employee SET FirstName = "Kevin" WHERE City="Vantaa"').then((result) => {
         expect(result.changedRows).to.equal(1)
    })
     
    cy.task('queryDb', 'SELECT FirstName FROM Employee WHERE City="Vantaa"').then((result) => { 
        expect(result[0].FirstName).to.equal('Kevin')
    })
})
/*


it('Delete a Table and Verify', function () {
 
    cy.task('queryDb', 'DROP TABLE Employee').then((result) => { 
    expect(result.message).to.equal("")
})

})

*/

})