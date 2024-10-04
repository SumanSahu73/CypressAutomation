/// <reference types="Cypress" />
/// <reference types="Cypress-downloadfile"/>
/// <reference types="Cy-verify-downloads"/>
import DownloadPdf from '../../fixtures/Locators/DownloadPdf.json'
class PODownloadPdf{
    DownloadAndVerify()
    {
        cy.visit("https://cyberleninka.org/article/n/398")
        cy.get(DownloadPdf.DownloadBtn).invoke("attr","href").then((href)=>
        {
         var Link= "https://cyberleninka.org" + href;
         cy.downloadFile(Link,'cypress/downloads','DemoFile.pdf')
        })
        cy.verifyDownload("DemoFile.pdf");
        
    }
    ReadFileContentAndVerify()
    {
        cy.readFile("cypress/downloads/DemoFile.pdf").should("not.be.empty");
  
        cy.readFile("cypress/downloads/DemoFile.pdf").should("contain", "Transplacental transfer of 2-naphthol in human");
      
    }
}
export default PODownloadPdf;