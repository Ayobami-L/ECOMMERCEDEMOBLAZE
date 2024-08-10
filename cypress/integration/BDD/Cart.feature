Feature: Ecommerce Cart Functionality
Application Regression
@Performance

Scenario: Add Item to Cart Without Login
    Given I navigate to the Demoblaze website
    When I click on a product
    When I click on "Add to cart"
    Then I should see a pop-up alert "Product added"
    Then The item should be added to the cart
    

Scenario: Add Item to Cart With Login
    Given I navigate to the Demoblaze website
    When I log in with valid credentials
    When I click on a product
    When I click on "Add to cart"
    Then I should see a pop-up alert "Product added"
    Then The item should be added to the cart
    Then I should see the product in the cart
    And The cart should be associated with my user account

Scenario: Remove Item from Cart Without Login
    Given I navigate to the Demoblaze website
    When I add a product to the cart
    And I navigate to the cart page
    And I click on "Delete" next to the product
    Then The product should be removed from the cart
    And The cart should be empty

Scenario: Remove Item from Cart With Login
    Given I navigate to the Demoblaze website
    When I log in with valid credentials
    And I add a product to the cart
    And I navigate to the cart page
    And I click on "Delete" next to the product
    Then The product should be removed from the cart
    And The cart should be empty

Scenario: View Cart Without Login
    Given I navigate to the Demoblaze website
    When I click on the "Cart" link
    Then I should see the items in the cart (if any)
    And The cart should display the total price of the items

Scenario: View Cart With Login
    Given I navigate to the Demoblaze website
    When I log in with valid credentials
    And I click on the "Cart" link
    Then I should see the items in the cart associated with my account
    And The cart should display the total price of the items

Scenario: Checkout Without Login
    Given I navigate to the Demoblaze website
    When I add a product to the cart
    And I navigate to the cart page
    And I click on "Place Order"
    Then I should be prompted to enter my details (Name, Country, City, Credit Card, etc.)
    When I complete the form and click on "Purchase"
    Then I should see a confirmation message
    And The cart should be emptied

Scenario: Checkout With Login
    Given I navigate to the Demoblaze website
    When I log in with valid credentials
    And I add a product to the cart
    And I navigate to the cart page
    And I click on "Place Order"
    Then I should be prompted to enter my details (Name, Country, City, Credit Card, etc.)
    When I complete the form and click on "Purchase"
    Then I should see a confirmation message
    And The cart should be emptied
    And The order should be associated with my account

Scenario: Verify Cart Persistence After Logout and Login
    Given I navigate to the Demoblaze website
    When I log in with valid credentials
    And I add a product to the cart
    And I log out
    And I log back in
    Then The cart should still contain the product added before logging out

Scenario: Verify Cart Is Empty After Purchase
    Given I navigate to the Demoblaze website
    When I log in with valid credentials
    And I add a product to the cart
    And I complete the checkout process
    Then The cart should be empty after the purchase
    And No items should be displayed when I navigate to the cart page