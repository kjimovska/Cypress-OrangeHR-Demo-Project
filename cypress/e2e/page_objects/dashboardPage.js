class dashboardPage {

    elements = {
        dashboardHeader: () => cy.get('.oxd-topbar-header-breadcrumb > .oxd-text'),
        userDropDownBtn: () => cy.get('.oxd-userdropdown-tab > .oxd-icon'),
    };

    verifyDashHeader(){
        this.elements.dashboardHeader().should('contain.text', "Dashboard");
      
    }

    clickUserDropDownBtn(){
        this.elements.userDropDownBtn().click();
    }

    
}

export default new dashboardPage();