/// <reference types ="cypress" />

import dashboardPage from "../page_objects/dashboardPage";
import changePasswordPage from "../page_objects/changePasswordPage";


describe("Change Password Tests", () => {
  beforeEach(() => {
    cy.visit(Cypress.config("baseUrl"));
  });

  describe("Positive test scenarios", () => {
    it("Verify user is logged in, and can change password successfully", () => {
      // Log-in automatically with the "login" command
      cy.login("Admin", "admin123");

      // Verify that the user is logged in, and the dashboard header is present
      dashboardPage.verifyDashHeader();

      // Click on the Drop-down user and change the password
      dashboardPage.clickUserDropDownBtn();
      cy.scrollTo(200);

      changePasswordPage.clickChangePassword();
     
      changePasswordPage.verifyUpdatePasswordHeader();
      changePasswordPage.insertCurrentPassword("admin123");
      changePasswordPage.insertNewPassword("new_password123");
      changePasswordPage.confirmNewPassword("new_password123");
      changePasswordPage.clickConfirmBtn();

      // Verify the "Success" pop-up message for successfully changed password
      cy.on("window:alert", (str) => {
        expect(str).to.equal("Success");
      });
    });
  });

// //   describe("Negative test scenarios ", () => {
// //     it('log-in with valid username and invalid username', () => {
// //       loginPage.insertUsername("inv_username");
// //       loginPage.insertPassword("admin");
// //       loginPage.clickLoginBtn();
// //       loginPage.getInvCredentialsMsg();
// //     });
//   });
});
