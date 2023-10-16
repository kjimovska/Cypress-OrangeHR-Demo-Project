class loginPage {
    

    elements = {
        loginForm: () => cy.get('.orangehrm-login-form'),
        usernameField: () => cy.get('[name="username"]'),
        passwordField: () => cy.get('[name="password"]'),
        logInBtn: () => cy.get('button'),
        invalidCredMsg: () => cy.get('.oxd-alert-content > .oxd-text'),
        // requiredUsernameMsg: () => cy.get('.oxd-input-group > .oxd-text'),
        // requiredPasswordMsg: () => cy.get('.oxd-input-group > .oxd-text'),
    };

    insertUsername(username) {
        this.elements.usernameField().type(username);
      }

      insertPassword(password) {
        this.elements.passwordField().type(password);
      }

      clickLoginBtn() {
        this.elements.logInBtn().click();
      }

      getInvCredentialsMsg(){
        this.elements.invalidCredMsg().should('contain.text', "Invalid credentials");
      }

      getRequiredFieldMsg() {
        return cy.get('.oxd-input-group > .oxd-text');
      }

      




}
    
export default new loginPage();