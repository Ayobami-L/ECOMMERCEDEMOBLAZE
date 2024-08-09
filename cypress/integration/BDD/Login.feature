Feature: Ecommerce Login Functionality
Application Regression
@Performance

Scenario: Validate Login page is accessible
        Given i navigate to Demobaze Website
        When i click on Login
        Then i verify Login form is accessible

Scenario: Validate Successful Login
        Given i navigate to Demobaze Website
        When i click on Login
        Then i enter username and password
        When i click on Login button
        Then i Validate successful login

Scenario: Validate Login with Incorrect Password
        Given i navigate to Demobaze Website
        When i click on Login
        Then i enter a valid username and an incorrect password
        When i click on Login button
        Then an "Wrong password." alert should appear
        
Scenario: Validate Login with Incorrect Username
        Given i navigate to Demobaze Website
        When i click on Login
        Then i enter a valid password and an incorrect username
        When i click on Login button
        Then an "Wrong password." alert should appear

Scenario: Validate Login with Non-Existent Username
        Given i navigate to Demobaze Website
        When i click on Login
        Then i enter a non-existent username and any password
        When i click on Login button
        Then a "User does not exist." alert should appear

Scenario: Validate Login with Empty Fields
        Given i navigate to Demobaze Website
        When i click on Login
        Then i leave the username and password fields empty
        When i click on Login button
        Then a "Please fill out Username and Password." alert should appear

Scenario: Validate Login with Only Username Entered
        Given i navigate to Demobaze Website
        When i click on Login
        Then i enter a username and leave the password field empty
        When i click on Login button
        Then a "Please fill out Username and Password." alert should appear

Scenario: Validate Login with Only Password Entered
        Given i navigate to Demobaze Website
        When i click on Login
        Then i leave the username field empty and enter a password
        When i click on Login button
        Then a "Please fill out Username and Password." alert should appear

