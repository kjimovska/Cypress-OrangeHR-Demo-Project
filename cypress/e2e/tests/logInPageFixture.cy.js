import loginPage from "../page_objects/loginPage";
import dashboardPage from "../page_objects/dashboardPage";

const tests = require("../../fixtures/loginData.json");

describe("Login Page tests with valid & invalid log-in credentials", () => { // Fix the syntax here
  beforeEach(() => {
    cy.visit(Cypress.config("baseUrl"));
  });

  tests.forEach((test) => {
    it(test.name, () => {
      loginPage.insertUsername(test.username);
      loginPage.insertPassword(test.password);
      loginPage.clickLoginBtn();

      if (test.name === "Should log-in successfully, and land on the Dashboard page") { // Fix the test name here
        dashboardPage.verifyDashHeader();
      } else {
        loginPage.getInvCredentialsMsg();
      }
    });
  });
});
