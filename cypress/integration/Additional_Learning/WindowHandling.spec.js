/// <reference types="Cypress" />

import POWindHand from "../POBJ_Add_Learning/POWindHand"
describe('Demo window handling test suite', function () {
  this.beforeEach(() => {
    cy.viewport('macbook-13')
    Cypress.config("defaultCommandTimeout", 9000)
   
    POWindHand.LoadHomePage();

  })
  //First way to handling child window / child tab
  /*it('Handling new Tab by removing the target attr ', function () {

    POWindHand.RemoveAttr()
  })*/

  //second way by prop method
 it('Handling new Window by capturing href Attribute', function () {
    POWindHand.getClickButton()
    POWindHand.getHrefAttr()
  }) 

})