/// <reference types="Cypress" />

describe('This Dropdown and check box test Suite', function()
 {
    it('This my Dropdown and check box test case', function() {
      //expect(true).to.equal(true)
      cy.viewport('macbook-13')
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      
      //Check boxes check and uncheck single and multiple at a time
      cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1') //u can still use click and here we are using check and verifying with be.checked
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
      cy.get('input[type="checkbox"]').check(['option2','option3']) // selecting multiple checkbox at ones by targeting common property-- type()->(input[type="checkbox"]) and providing the argument to the check() method as a array of values.

      //Static Dropdown selection
      cy.get('select').select(['option2']).should('have.value','option2') // by providing the array argument value=option2 in select() method.
    
      //Dynamic Dropdown selection
      cy.get('#autocomplete').type('ind')
 
      cy.get('.ui-menu-item div').each(($e1, index, $list) => {
 
    if($e1.text()==="India")
    {
        cy.wrap($e1).click()
    }
 
 
})
cy.get('#autocomplete').should('have.value','India')

// element visible or not

cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')


//Radio button
cy.get('[value="radio2"]').check().should('be.checked')
cy.url().should('include','rahulshettyacademy')







    })

  

  })