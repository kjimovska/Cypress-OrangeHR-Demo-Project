/// <reference types ="cypress" />

import loginPage from "../page_objects/loginPage";
import dashboardPage from "../page_objects/dashboardPage";

describe("Login Page Tests", () => {
  beforeEach(() => {
    cy.visit(Cypress.config("baseUrl"));
  });

  describe("Successful login scenarios", () => {
    it('verify that the login form is visible', () => {
      loginPage.elements
        .loginForm()
        .should('be.visible');
    });

    it('username field is visible', () => {
      loginPage.elements
        .usernameField()
        .should('be.visible')

    })

    it('password field is visible', () => {
      loginPage.elements
        .passwordField()
        .should('be.visible')

    })


    it("log-in with valid credentials", () => {
      loginPage.insertUsername("Admin");
      loginPage.insertPassword("admin123");
      loginPage.clickLoginBtn()
      dashboardPage.verifyDashHeader();

    })

  }) 

  describe("Negative login tests scenarios", () => {
    it('log-in with valid username and invalid username', () => {
      loginPage.insertUsername("inv_username");
      loginPage.insertPassword("admin");
      loginPage.clickLoginBtn();
      loginPage.getInvCredentialsMsg();
    
    })

    it('log-in with invalid username and valid username', () => {
      loginPage.insertUsername("Admin");
      loginPage.insertPassword("invalid_password");
      loginPage.clickLoginBtn();
      loginPage.getInvCredentialsMsg();
    
    })

    it('log-in with an empty username field, and valid password', () => {
      loginPage.insertUsername(" ");
      loginPage.insertPassword("admin123");
      loginPage.clickLoginBtn();
      
      loginPage.getRequiredFieldMsg()
      .should('be.visible')
      .should('have.text' , "Required")
      
    })

    it('log-in with an empty password field, and valid username',() => {
      loginPage.insertUsername("Admin");
      loginPage.insertPassword(" ");
      loginPage.clickLoginBtn();

      loginPage.getRequiredFieldMsg()
      .should('be.visible')
      .should('have.text' , "Required")
      
    })

  })

})