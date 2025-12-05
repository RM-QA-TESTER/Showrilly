class LoginPage {
  getEmailInput() {
    return cy.get('#user_email');
  }

  getPasswordInput() {
    return cy.get('#user_password');
  }

  getLoginButton() {
    return cy.get('[name="commit"]');
  }

  getErrorMessage() {
    return cy.get('.toast-error');
  }

  performLogin(email, password) {
    this.getEmailInput().clear().type(email);
    this.getPasswordInput().clear().type(password);
    this.getLoginButton().click();
  }
}

export default new LoginPage();
