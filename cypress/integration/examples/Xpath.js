/// <reference types="Cypress" />

describe('This Is My First Test Suite', function()
 {
    
    before(() => {
        // root-level hook
        // runs once before all tests
        cy.fixture('Locators/example').then(function(data)
        {
         this.data=data

        })
      })
      
    it('My firstTest case', function() {
      //expect(true).to.equal(true)
      cy.viewport('macbook-13')
      cy.visit("https://www.demoblaze.com/index.html")
      cy.wait(6000)
     // cy.get('#login2').click()
      cy.xpath("/html[1]/body[1]/nav[1]/div[1]/ul[1]/li[5]/a[1]").click()
     cy.wait(2000)
     cy.xpath('//body[1]/div[3]/div[1]/div[1]/div[2]/form[1]/div[1]/input[1]').type('aa')
     cy.xpath('//body[1]/div[3]/div[1]/div[1]/div[2]/form[1]/div[2]/input[1]').type('aa')
     cy.xpath(this.data.LoginBtn).click()
     cy.wait(2000)
     cy.xpath(this.data.Usernamebox).should('have.text','Welcome aa')
     cy.wait(2000)

    // cy.get('.list-group').find('#itemc').eq(1).contains('Laptops').click()

     
    cy.xpath(this.data.Laptop).click()
    // cy.get($("body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3)")).click()
     cy.wait(2000)
     cy.xpath(this.data.Macbook).click()
     cy.wait(2000)
     cy.xpath('//body[1]/div[5]/div[1]/div[2]/h2[1]').should('have.text','MacBook air')
     cy.xpath('//body[1]/div[5]/div[1]/div[2]/h3[1]').should('have.text','$700 *includes tax')
     //done
     cy.xpath('//body[1]/div[5]/div[1]/div[2]/div[2]/div[1]/a[1]').click()
     cy.xpath('//body[1]/nav[1]/div[1]/div[1]/ul[1]/li[4]/a[1]').click()
     cy.xpath('//body[1]/div[6]/div[1]/div[2]/button[1]').click()
     cy.wait(2000)
     cy.xpath('//body[1]/div[3]/div[1]/div[1]/div[2]/form[1]/div[1]/input[1]').type('Suman')
     cy.xpath('//body[1]/div[3]/div[1]/div[1]/div[2]/form[1]/div[2]/input[1]').type('India')
     cy.xpath('//body[1]/div[3]/div[1]/div[1]/div[2]/form[1]/div[3]/input[1]').type('Raipur')
     cy.xpath('//body[1]/div[3]/div[1]/div[1]/div[2]/form[1]/div[4]/input[1]').type('123456789')
     cy.xpath('//body[1]/div[3]/div[1]/div[1]/div[2]/form[1]/div[5]/input[1]').type('August')
     cy.xpath('//body[1]/div[3]/div[1]/div[1]/div[2]/form[1]/div[6]/input[1]').type('2023')
     cy.xpath('//body[1]/div[3]/div[1]/div[1]/div[3]/button[2]').click()
     //cy.get('#name').should('have.text','Suman')
     cy.wait(2000)
     cy.xpath('//body[1]/div[10]/h2[1]').should('have.text','Thank you for your purchase!')
     cy.xpath('//body[1]/div[10]/div[7]/div[1]/button[1]').click()
     cy.xpath('//body[1]/nav[1]/div[1]/ul[1]/li[6]/a[1]').click()
     cy.xpath('//body[1]/nav[1]/div[1]/ul[1]/li[8]/a[1]').should('have.text','Sign up')



   

    })

  

  })