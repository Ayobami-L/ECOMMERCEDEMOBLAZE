Feature: Ecommerce Contact Us Functionality
Application Regression
@Performance



Scenario: Validate contact button is working when user is logged in
    Given I Navigate to Demoblaze Website and login
    When I click the Contact button
    Then I verify Contact buton is working

Scenario: Validate Name, Email and Message field is present when user is logged in
    Given I Navigate to Demoblaze Website and login
    Given I click the Contact button
    Then I verify Name, Email and Message field is present

Scenario: Verify successful submission of Contact with data in Name, Email and Message when user is logged in
    Given I Navigate to Demoblaze Website and login
    When I click the Contact button
    Then I enter Name, Email and Message
    When I click send message button
    Then I verify successful Contact submission

Scenario: Verify app display success message confirming message sent when user is logged in
    Given I Navigate to Demoblaze Website and login
    When I click the Contact button
    Then I enter Name, Email and Message
    When I click send message button
    Then I verify successful Contact submission
    
Scenario: Validate contact button is working when user is not logged in
    Given I Navigate to Demoblaze Website
    When I click the Contact button
    Then I verify Contact buton is working

Scenario: Validate Name, Email and Message field is present when user is not logged in
    Given I Navigate to Demoblaze Website
    Given I click the Contact button
    Then I verify Name, Email and Message field is present

