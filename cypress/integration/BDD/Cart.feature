Feature: Ecommerce Cart Functionality
Application Regression
@Performance

Scenario: Add Item to Cart Without Login
    Given I navigate to the Demoblaze website
    When I click on a product
    When I click on "Add to cart"
    Then I should see a pop-up alert "Product added"
    Then The item should be added to the cart
    
