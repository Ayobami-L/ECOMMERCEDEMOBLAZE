/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


// Before each scenario, ensure we visit the site and load the fixture data
beforeEach(function () {
    cy.visit('https://www.demoblaze.com/');
    cy.fixture('example').then(function (data) {
        this.data = data;
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Prevent Cypress from failing the test
        return false;
      });
});

//////////////////////////////////////////
// Scenario: Add Item to Cart Without Login
//////////////////////////////////////////

Given('I navigate to the Demoblaze website', function () {
    cy.url().should('include', 'demoblaze');
});

When('I click on a product', function () {
    cy.intercept('GET', '**/prod.html?idp_=1').as('productPage');
    cy.get('.hrefch').first().click({force: true}); // Click on the first product
    cy.wait('@productPage');
    cy.url().should('include', 'prod.html?idp_');

});

When('I click on "Add to cart"', function () {
    cy.intercept('POST', '**/addtocart').as('addToCart');
    cy.get('.btn-success').contains('Add to cart').click();
    cy.wait('@addToCart');
    cy.verifyAlert('Product added.');
});
Then('I should see a pop-up alert "Product added"', function () {
    cy.verifyAlert('Product added.');
});
Then('The item should be added to the cart', function () {
    cy.get('#cartur').click(); // Navigate to the cart
    cy.url().should('include', 'cart.html');
    cy.get('.success').should('be.visible'); // Check if the item is visible in the cart
});

// //////////////////////////////////////////
// // Scenario: Add Item to Cart After Login
// //////////////////////////////////////////
When('I log in with valid credentials', function () {
    cy.get('#login2').should('be.visible').click();
Then('i verify Login form is accessible', function () {
    cy.get('#logInModal').should('be.visible');
    cy.get('#logInModalLabel')
        .should('be.visible')
        .and('contain.text', 'Log in');
});
Then('i enter username and password', function () {
    cy.wait(3000)
    cy.get('#loginusername').should('be.visible').type(this.data.Username);
    cy.wait(3000)
    cy.get('#loginpassword').should('be.visible').type(this.data.Password);
});
When('i click on Login button', function () {
    cy.get("button[onclick='logIn()']").should('be.visible').click();
    cy.wait(3000)
});
Then('i Validate successful login', function () {
     cy.get('#nameofuser').should('contains.text', 'Welcome ' + this.data.Username);   
});
Then('i enter a valid username and an incorrect password', function () {
    cy.get('#loginusername').should('be.visible').clear().type(this.data.Username);
    cy.wait(3000)
    cy.get('#loginpassword').should('be.visible').clear().type(this.data.InvalidPassword);
});
});

