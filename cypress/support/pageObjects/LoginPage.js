class LoginPage {
  getEmailInput() {
    return cy.get('[name="user[email]"]')
  }

  getPasswordInput() {
    return cy.get('[name="user[password]"]')
  }

  getLoginButton() {
    return cy.get('[name="commit"]')
  }

  getErrorMessage() {
    return cy.get('.toast-error')
  }

  performLogin(email, password) {
    this.getEmailInput().type(email)
    this.getPasswordInput().type(password)
    this.getLoginButton().click()
  }
}

export default new LoginPage()