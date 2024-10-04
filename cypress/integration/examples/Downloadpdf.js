/// <reference types="Cypress" />
/// <reference types="Cypress-downloadfile"/>
/// <reference types="Cy-verify-downloads"/>
describe('My File download Test Suite', function() 
{
 
it('Download file test case',function() {
   cy.visit("https://cyberleninka.org/article/n/398")
   cy.get("#btn-download").invoke("attr","href").then((href)=>
   {
    var Link= "https://cyberleninka.org" + href;
    cy.downloadFile(Link,'cypress/downloads','DemoFile.pdf')
   })
   cy.verifyDownload("DemoFile.pdf");
 // cy.readFile("downloads/DemoFile.pdf").should("not.be.empty");
  cy.task('getPdfContent', 'DemoFile.pdf').then((content) => 
            console.log(content)
          )
   cy.readFile("./downloads/DemoFile.pdf").should("contain", "Transplacental transfer of 2-naphthol in human");

})
})