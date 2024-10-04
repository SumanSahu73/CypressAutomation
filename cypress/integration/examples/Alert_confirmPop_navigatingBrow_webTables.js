/// <reference types="Cypress" />

describe('This Dropdown and check box test Suite', function()
 {
   it('This my Dropdown and check box test case', function() {
      //expect(true).to.equal(true)
      cy.viewport('macbook-13')
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      cy.url()
      cy.get('#alertbtn').click()
      cy.get('[value="Confirm"]').click()
      cy.on('window:alert',(str)=>
      {
        expect(str).to.equal('Hello , share this practice page and share your knowledge')

      })
      cy.on('window:confirm',(str)=>
      {
        expect(str).to.equal('Hello , Are you sure you want to confirm?')

      })
    })
    

      // hadling child tab in same window by removing target attribute.
    // cy.get('#opentab').invoke('removeAttr','target').click()
     //varifying current url
    /* cy.wait(6000)
     cy.url()
    // cy.url().should('include','https://www.qaclickacademy.com/ademy')
     //for going back again
     cy.go('back')
*/
// it will open the tab in same windows

it('Handling Child tab by Removing target attribute', function() {
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('#opentab').invoke('removeAttr','target').click()
cy.origin("https://www.qaclickacademy.com",()=>
{
  cy.get("#navbarSupportedContent a[href*='about']").click()
  cy.get(".mt-50 h2").should('contain', 'QAClick Academy')
}
)
})

/*
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
*/
  
 //
 //verifying url
//cy.url().should('include','rahulshettyacademy')
 
//cy.go('back')




   

  

  })