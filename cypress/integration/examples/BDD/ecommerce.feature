Feature: End to end Ecommerce validation

    Application regression feature file description
    @Regression
    Scenario: Ecommerce products delivery
    Given I open Ecommerce Page
    When I add items to cart
    And Validate the total prices
    Then select the contry submit and verify Thankyou

    @Smoke
    Scenario: Filling the form to shop
    Given I open Ecommerce Page
    When I fill the form details
    |name | gender |
    |bobz | Male   |
    Then validate the form behaviour
    And select the Shop Page
    