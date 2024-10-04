/// <reference types="Cypress" />
/// <reference types="Cypress-downloadfile"/>
/// <reference types="Cy-verify-downloads"/>

import PODownloadPdf from "../POBJ_Add_Learning/PODownloadPdf"
const PODownload1=new PODownloadPdf();
describe('My File download Test Suite', function() 
{
  
it('Download file test case',function() {
  PODownload1.DownloadAndVerify();
  PODownload1.ReadFileContentAndVerify();
 
})
})




 /*
it('Download file test case',function() {
   cy.visit("https://cyberleninka.org/article/n/398")
   cy.wait(3000)
   cy.get("#btn-download").invoke("attr","href").then((href)=>
   {
    var Link= "https://cyberleninka.org" + href;
    cy.downloadFile(Link,'cypress/downloads','DemoFile.pdf')
   })
   cy.verifyDownload("DemoFile.pdf");
   cy.readFile("cypress/downloads/DemoFile.pdf").should("not.be.empty");
  
  cy.readFile("cypress/downloads/DemoFile.pdf").should("contain", "Transplacental transfer of 2-naphthol in human");

})*/
