/// <reference types="Cypress" />



describe('Authentication', function()
 {
    it('Basic Authentication', function() {
        cy.request(
            {
                method: 'GET',
                url: "https://postman-echo.com/basic-auth",
                auth: {
                    user: 'postman',  // passing username and password for sign in
                    pass: 'password'
                }
            } ).then((response)=>
            {
               
                  expect(response.status).to.eq(200);
                  expect(response.body.authenticated).to.eq(true);

            })
     
    })

    it('Digest Authentication', function() {
        cy.request(
            {
                method: 'GET',
                url: "https://postman-echo.com/basic-auth",
                auth: {
                    username: 'postman',  // passing username and password for sign in
                    password: 'password',
                    method: 'digest'
                }
            } ).then((response)=>
            {
               
                  expect(response.status).to.eq(200);
                  expect(response.body.authenticated).to.eq(true);

            })
     
    })
const token="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"
    it('Bearer token Authentication', function() {
        cy.request(
            {
                method: 'GET',
                url: "https://api.github.com/user/repos",
                headers:{
                    Authorization:'Bearer '+token
                }
            } ).then((response)=>
            {
               
                  expect(response.status).to.eq(200);
                 

            })
     
    })

    it('API Key Authentication', function() {
        cy.request(
            {
                method: 'GET',
                url: "api.openweathermap.org/data/2.5/forecast/daily?q=Delhi",
                qs:{
                    appid:'fe9c5cddb7e01d747b4611c3fc9eaf2c' //Api key value
                }
            } ).then((response)=>
            {
               
                  expect(response.status).to.eq(200);
                 

            })
     
    })


  

  })