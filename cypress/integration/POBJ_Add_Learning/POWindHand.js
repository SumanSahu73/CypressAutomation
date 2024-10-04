/// <reference types="Cypress" />
import WindowH from '../../fixtures/Locators/WindowH.json'
class POWindHand{
    static LoadHomePage()
    {
        cy.visit(WindowH.url)
    }
    static RemoveAttr()
    {
      //cy.get(WindowH.DownloadBtn).click()
     cy.get(WindowH.DownloadBtn).invoke('removeAttr','target').click()
     cy.url()
     cy.url().should('include',WindowH.RequestUrl)
     
     cy.origin('https://www.selenium.dev/',()=>{
        cy.get('#navbarDropdown').click()
        cy.contains('About Selenium').click()
        cy.get('.-bg-selenium-cyan-20 > .card > .card-body > .card-title').then((element)=>{
          expect(element.text()).to.be.equal("History of Selenium")
        })

      }) 
    }
    static getClickButton()
    {
        cy.contains("Open New Seperate Window").click()
    }
    static getHrefAttr()
    {
        cy.get(WindowH.DownloadBtn).then(function(e1)
        {
          const url=e1.prop('href')
          cy.visit(url) //selenium.dev new url
          //cy.url()
          cy.url().should('include',WindowH.RequestUrl)
          //cy.url().should('include','www.selenium.dev/')
          cy.origin('https://www.selenium.dev/', ()=> 
          {
             cy.get('#navbarDropdown').click()
             cy.contains('About Selenium').click()
             cy.get('.-bg-selenium-cyan-20 > .card > .card-body > .card-title').then((element)=>{
               expect(element.text()).to.be.equal("History of Selenium")
             })
          })
 
         }) 
         //
       /* cy.get(WindowH.DownloadBtn).then(function(e1)
         { 
         const url=e1.prop('href')
         cy.visit(url) //qaclickacademy new url
         cy.origin(url, ()=> 
         {
         cy.get('#navbarDropdown').click()
         cy.contains('About Selenium').click()
         cy.get('.-bg-selenium-cyan-20 > .card > .card-body > .card-title').then((element)=>{
          expect(element.text()).to.be.equal("History of Selenium")
        })
         })

         })
         */
    }
}
export default POWindHand;