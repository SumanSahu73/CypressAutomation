/// <reference types="Cypress" />
const Ajv=require('ajv')
const objAvj= new Ajv()



describe('Schema Validation', function()
 {
    it('Schema validation against JSON response', function() {
        cy.request(
            {
                method: 'GET',
                url: "https://fakestoreapi.com/products"
            } ).then((response)=>
            {
                const schema= {
                    "$schema": "http://json-schema.org/draft-07/schema#",
                    "title": "Generated schema for Root",
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "number"
                        },
                        "title": {
                          "type": "string"
                        },
                        "price": {
                          "type": "number"
                        },
                        "description": {
                          "type": "string"
                        },
                        "category": {
                          "type": "string"
                        },
                        "image": {
                          "type": "string"
                        },
                        "rating": {
                          "type": "object",
                          "properties": {
                            "rate": {
                              "type": "number"
                            },
                            "count": {
                              "type": "number"
                            }
                          },
                          "required": [
                            "rate",
                            "count"
                          ]
                        }
                      },
                      "required": [
                        "id",
                        "title",
                        "price",
                        "description",
                        "category",
                        "image",
                        "rating"
                      ]
                    }
                  } //schema ended here

                  const validate= objAvj.compile(schema) // it returns the method for validate
                  const isValid=validate(response.body)
                  expect(isValid).to.be.true;

            })
     
    })

  

  })