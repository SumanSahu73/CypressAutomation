/// <reference types="Cypress" />

describe('Demo window handling test suite', function()
 {
    //First way to handling child window / child tab
   it('Handling new Tab by removing the target attr ', function() {
      
      cy.viewport('macbook-13')
      cy.visit("https://demo.automationtesting.in/Windows.html")
      cy.get('#Tabbed > a').invoke('removeAttr','target').click()
      cy.url()
      cy.url().should('include','https://www.selenium.dev/')
      cy.origin('https://www.selenium.dev/',()=>{
        cy.get('#navbarDropdown').click()
        cy.contains('About Selenium').click()
        cy.get('.-bg-selenium-cyan-20 > .card > .card-body > .card-title').then((element)=>{
          expect(element.text()).to.be.equal("History of Selenium")
        })

      })
    
      })

     //second way by prop method
      it('Handling new Window by capturing href Attribute', function() {
      
        cy.viewport('macbook-13')
        cy.visit("https://demo.automationtesting.in/Windows.html")
        cy.contains("Open New Seperate Window").click()
        
       // cy.get('button[onclick="newwindow()"]').then(function(e1)
       cy.get('#Tabbed > a').then(function(e1)
       {
         const url=e1.prop('href')
         cy.visit(url) //selenium.dev new url
         //cy.url()
         cy.url().should('include','https://www.selenium.dev/')
         cy.origin('https://www.selenium.dev/', ()=> 
         {
            cy.get('#navbarDropdown').click()
            cy.contains('About Selenium').click()
            cy.get('.-bg-selenium-cyan-20 > .card > .card-body > .card-title').then((element)=>{
              expect(element.text()).to.be.equal("History of Selenium")
            })
         })

        })

        
    })

  })