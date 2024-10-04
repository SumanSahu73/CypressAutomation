/// <reference types="Cypress" />
import POApi from "../POBJ_Add_Learning/POApi"


describe('Intercept/request Api Test Suite', function () {
    this.beforeEach(() => {
        // root-level hook
        // runs once before all tests
        cy.fixture('example').then(function (data) {
            this.data = data

        })

    })

    //first using intercept 

    it('Verify API GET response Using Intercept for check security bugs in our application', function () {

        cy.visit(this.data.ApiUrl)
        POApi.InterCept();
        POApi.clickGETbutton1()

    })


    // second using request
    it('API GET response verification using request', function () {
        cy.visit(this.data.ApiUrl)
        POApi.GETRequest()

    })


    it('API POST response verification using request', function () {
        cy.visit(this.data.ApiUrl)
        POApi.POSTRequest()
    })

    //last describe
})



