class changePasswordPage {

elements = {
        changePassword: () => cy.get(':nth-child(3) > .oxd-userdropdown-link'),
        updatePasswordHeader: () => cy.get('.orangehrm-card-container > .oxd-text--h6'),
        currentPasswordField: () => cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        updatePasswordField: () => cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input'),
        confirmNewPasswordField: () => cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        confirmBtn: () => cy.get('.oxd-button--secondary'),
        succesPopUpMsg: () => cy.get('.oxd-toast'),
};


        clickChangePassword(){
            this.elements.changePassword().click();
        }

        verifyUpdatePasswordHeader() {
            this.elements.updatePasswordHeader()
             .should('be.visible')
             .and('contain.text', "Update Password");
         }   

         insertCurrentPassword() {
            this.elements.currentPasswordField()
              .type("admin123");
          }
        
          insertNewPassword() {
            this.elements.updatePasswordField()
              .type("NewPassword123");
          }

          confirmNewPassword() {
            this.elements.confirmNewPasswordField()
              .type("NewPassword123");
          }

    
        clickConfirmBtn(){
            this.elements.confirmBtn().click();
        }
    
        verifySuccessPopUpMsg() {
            cy.get(this.elements.succesPopUpMsg()).should('be.visible', { timeout: 10000 }).and('contain.text', 'Success');
          }
    
        
        
    }

    export default new changePasswordPage();