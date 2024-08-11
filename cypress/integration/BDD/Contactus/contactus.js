/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach(function () {
    // cy.visit('https://www.demoblaze.com/')
    cy.fixture('example').then(function (data) {
        this.data = data
    });
});

//Scenario: Validate contact button is working
Given ('I Navigate to Demoblaze Website and login', function(){
    cy.visit(Cypress.env("url"))
    cy.get('#login2').click()
    cy.wait(2000)
    cy.get('#loginusername').type(Cypress.env('Username'))
    cy.get('#loginpassword').type(Cypress.env('Password'))
    cy.get("button[onclick='logIn()']").click()
    cy.wait(3000)
})
When ('I click the Contact button', function(){
    cy.get(':nth-child(2) > .nav-link').click()
    cy.wait(2000)
})
Then ('I verify Contact buton is working', function(){
    cy.get('.modal-title').contains('New message')
})

//Scenario: Validate Name, Email and Message field is present
Then ('I verify Name, Email and Message field is present', function(){
    cy.get("#recipient-email").then($button => {
        $button.is(':visible') ? console.log('Email field is visible') 
        : console.log('Email field is invisible')
    })
    cy.get("#recipient-name").then($button => {
        $button.is(':visible') ? console.log('Name field is visible') 
        : console.log('Name field is invisible')
    })
    cy.get("#message-text").then($button => {
        $button.is(':visible') ? console.log('Message field is visible') 
        : console.log('Message field is invisible')
    })
})
When ('I click send message button', function(){
    cy.get("button[onclick='send()']").click()

});


//Scenario: Verify successful submission of Contact with data in Name, Email and Message
Then ('I enter Name, Email and Message', function(){
    cy.get("#recipient-name").type(this.data.Username)
    cy.get("#recipient-email").type(this.data.ValidEmail)
    cy.get("#message-text").type(this.data.Message)
})
Then ('I verify successful Contact submission', function(){
    cy.on('window:alert', (str) => 
    {
        expect(str).to.equal('Thanks for the message!!')
    })
})


Given ('I Navigate to Demoblaze Website', function(){
    cy.visit(Cypress.env("url"))
    cy.wait(2000)
})