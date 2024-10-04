/// <reference types="Cypress" />
/// <reference types="Cypress-downloadfile"/>
describe('My File download Test Suite', function() 
{
 
it('Download file test case',function() {
   cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','test2File.jpg')
    cy.readFile('mydownloads/demoFile.jpg')
 
})
 
 
})