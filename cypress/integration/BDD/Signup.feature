Feature: Ecommerce Signup Functionality
Application Regression
@Performance

Scenario: Validate Successful Signup
        Given i navigate to Demobaze Website
        When i click on sign up 
        Then i entered a username and password
        When i click on signup button
        Then user already exist pop up should appear

Scenario: Validate empty username and password
        Given i navigate to Demobaze Website
        When i click on sign up
        Then i leave the username and password fields empty
        When i click on signup button
        Then a "Please fill out Username and Password." alert should appear

Scenario: Validate entering only username
        Given i navigate to Demobaze Website
        When i click on sign up
        Then i enter a username and leave the password field empty
        When i click on signup button
        Then a "Please fill out Password." alert should appear

 Scenario: Validate entering only password
        Given i navigate to Demobaze Website
        When i click on sign up
        Then i leave the username field empty and enter a password
        When i click on signup button
        Then a "Please fill out Username." alert should appear

 Scenario: Validate username and password with special characters
        Given i navigate to Demobaze Website
        When i click on sign up
        Then i enter a username and password with special characters
        When i click on signup button
        Then a "Sign up successful." alert should appear
        Then user already exist pop up should appear   