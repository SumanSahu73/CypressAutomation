/// <reference types="Cypress" />
import demoBlaze from '../../fixtures/Locators/demoBlaze.json'
import DBPlaceOrder from '../../fixtures/Locators/DBPlaceOrder.json'
import DBTestdata from '../../fixtures/TestData/DBTestdata.json'
class PlaceOrder
{

//
placeOrderwithAllDetails() {
    cy.get(DBPlaceOrder.getPlaceorder).click()
    cy.wait(2000)
    cy.get(DBPlaceOrder.getName).type(DBTestdata.name)
    cy.get(DBPlaceOrder.getCountry).type(DBTestdata.country)
    cy.get(DBPlaceOrder.getCity).type(DBTestdata.city)
    cy.get(DBPlaceOrder.getCreditCard).type(DBTestdata.creditCard)
    cy.get(DBPlaceOrder.getMonth).type(DBTestdata.month)
    cy.get(DBPlaceOrder.getYear).type(DBTestdata.year)
    cy.get(DBPlaceOrder.getPurchase).click()
    cy.wait(2000)
}
placeOrderwithoutDetails()
{
    cy.get(DBPlaceOrder.getPlaceorder).click()
    cy.wait(2000)
    cy.get(DBPlaceOrder.getPurchase).click()
    cy.wait(2000)
}
closePlaceOrderPop()
{
    cy.get(DBPlaceOrder.closePlaceOrderPop).click()
}
verifyOrder() {
    cy.get(DBPlaceOrder.verifyPurchase).should('have.text', 'Thank you for your purchase!')
    cy.get(DBPlaceOrder.getOk).click()
}



}
export default PlaceOrder;
