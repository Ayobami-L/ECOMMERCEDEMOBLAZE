/// <reference types="Cypress" />​
/// <reference types="cypress-iframe" />​
import 'cypress-iframe';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import 'cypress-wait-until';
beforeEach(function () {
    cy.visit('https://www.demoblaze.com/')
    cy.fixture('example').then(function (data) {
        this.data = data
    });
});

Given('i navigate to Demobaze Website', function () {
    cy.url().should('include', 'demoblaze');
});

When('i click on sign up', function () {
    cy.get('#signin2').click({ force: true });
    cy.wait(1000) //waiting for the signup modal to appear
    cy.get('#signInModal').should('be.visible');
});
When('i entered a username and password', function () {
    cy.get('#sign-username').type(this.data.Username)
    cy.wait(2000)
    cy.get('#sign-password').type(this.data.Password)
});
When('i click on signup button', function () {
    cy.get("button[onclick='register()']").click({ force: true });
});
Then('user already exist pop up should appear', function () {
    cy.on('window:alert', (str) => {
        expect(str).to.equal('This user already exist.');
    });
});
Then('i leave the username and password fields empty', function () {
    cy.get('#sign-username').should('be.empty');
    cy.get('#sign-password').should('be.empty');

});
Then('a "Please fill out Username and Password." alert should appear', function () {
    cy.on('window:alert', (str) => {
        expect(str).to.equal('Please fill out Username and Password.');
    });
});
Then('i enter a username and leave the password field empty', function () {
    cy.get('#sign-username').type(this.data.Username)
    cy.get('#sign-password').should('be.empty');

});
Then('a "Please fill out Password." alert should appear', function () {
    cy.on('window:alert', (str) => {
        expect(str).to.equal('Please fill out Password.');
    });
});
Then('i leave the username field empty and enter a password', function () {
    cy.get('#sign-password').type(this.data.Password)
    cy.get('#sign-username').should('be.empty');

});
Then('a "Please fill out Username." alert should appear', function () {
    cy.on('window:alert', (str) => {
        expect(str).to.equal('Please fill out Username.');
    });
});
Then('i enter a username and password with special characters', function () {
    cy.get('#sign-username').type(this.data.SpecialCUsername)
    cy.wait(2000)
    cy.get('#sign-password').type(this.data.SpecialCPassword)
});
Then('a "Sign up successful." alert should appear', function () {
    cy.on('window:alert', (str) => {
        expect(str).to.equal('Sign up successful.');
    });
});
