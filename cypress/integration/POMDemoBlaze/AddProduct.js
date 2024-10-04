/// <reference types="Cypress" />
import LoginPage from '../POMDemoBlaze/LoginPage'
import Login from '../../fixtures/TestData/Login.json'
import demoBlaze from '../../fixtures/Locators/demoBlaze.json'
import DBAddProduct from '../../fixtures/Locators/DBAddProduct.json'
const loginPage1 = new LoginPage()
var sum = 0
class AddProduct {
    LoginDB()
    {
        cy.visit("https://www.demoblaze.com/index.html");
        cy.wait(2000)
        loginPage1.GoToLoginPage()
        cy.wait(2000)
        loginPage1.getUserName().type(Cypress.env('username'))
        loginPage1.getPassword().type(Cypress.env('password'))
        loginPage1.Login()
        cy.wait(3000)
        //verify login page with Welcome Username
        loginPage1.ValidLoginVerify()
       
      
    }

    getCategories() {
        return cy.get('a[id="itemc"]:nth-child(3)').click()
    }
    getCategories2() {
        return cy.get('a[id="itemc"]:nth-child(2)')
    }
    getCategories3() {
        return cy.get('a[id="itemc"]:nth-child(4)')
    }
    getItem() {
        return cy.get(DBAddProduct.getItem)
    }
    getTextItem() {
        return cy.get(DBAddProduct.getTextItem)
    }
    AddToCart() {
        return cy.get(DBAddProduct.AddToCart).click()
    }
    Cart() {
        return cy.get(DBAddProduct.Cart).click()
    }
    Home() {
        return cy.get(DBAddProduct.Home).click()
    }
    selectCategories(categoriesName) {
        cy.get(demoBlaze.getCategoriesBtn).each(($e1, index, $list) => {
            if ($e1.text().includes(categoriesName)) {
                cy.get(demoBlaze.getCategoriesBtn).eq(index).click()

            }
        })
    }
    selectProductDB(itemName) {
        cy.get('.card div h4').each(($e1, index, $list) => {
            if ($e1.text().includes(itemName)) {
                cy.get('.card div h4').eq(index).click()

            }
        })

    }
    RemoveProduct(RemoveItem) {

        cy.get(demoBlaze.removeItemBox).each(($e1, index, $list) => {
            if ($e1.text().includes(RemoveItem)) {
                cy.get(demoBlaze.deleteBtn).eq(index).click()

            }
        })
    }
    calculateSumOfAllAmount() {
        cy.get('tr td:nth-child(3)').each(($e1, index, $list) => {
            const amount = $e1.text()
            // var res=amount.split(" ")
            // res= res[1].trim()
            sum = Number(sum) + Number(amount)
        }).then(function () {
            cy.log(sum)

        })
    }
    verifyActualTotalAmount() {
        cy.get('#totalp').then(function (e1) {
            const total = e1.text()

            //converting string to number
            var strToNum = Number(total)
            expect(strToNum).to.equal(sum)
        })
    }
}
export default AddProduct;
