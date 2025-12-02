import LoginPage from "../support/pageObjects/LoginPage";

describe('', () => { 
    beforeEach(() => {
        cy.visit("/");
    });

    it('should allow a user to successfully log in with valid credentials.', () => {
        LoginPage.performLogin('clarice@swareco.com', 'Password@123111');
        cy.get('.toast-success').should('be.visible');
    });

    it('should redirect the user to the default dashboard page upon successful login.', () => {
        LoginPage.performLogin('clarice@swareco.com', 'Password@123111');
        cy.url().should('eq', 'https://staging.showrilly.com/');
    });

    it('should successfully log in after user is redirected from a protected page.', () => {
        LoginPage.performLogin('clarice@swareco.com', 'Password@123111');
        cy.url().should('eq', 'https://staging.showrilly.com/');
    });

    it('should allow login using cached credentials when Remember Me is selected.', () => {
        LoginPage.performLogin('clarice@swareco.com', 'Password@123111');
        cy.url().should('eq', 'https://staging.showrilly.com/');
    });
    it('should display the correct username/profile after successful login.', () => {
        LoginPage.performLogin('clarice@swareco.com', 'Password@123111');
        cy.url().should('eq', 'https://staging.showrilly.com/');
        cy.get('.full-name').should('contain', 'Clarice Pacana');
    });

    // Negative Scenarios 
    it('should display an error message for invalid password and valid username.', () => {
        LoginPage.performLogin('claraise@swareco.com', 'Password@123111');
        cy.get('#toast-container .toast-error')
        .should('be.visible')
        .within(() => {
        cy.get('.toast-title').should('contain.text', 'Error');
        cy.get('.toast-message').should('contain.text', 'Invalid Email or password.');
        });
    });
    it('sign in button should be disabled when invalid username/email format.', () => {
       cy.get('[name="user[email]"]').type("clarice");
       cy.get('[name="user[password]"]').type("Password1");
       cy.get('input[name="commit"][type="submit"]').should('be.disabled');
    });
    it.only('sign in button should be disabled when both username and password fields are empty.', () => {
        cy.get('input[name="commit"][type="submit"]').should('be.disabled');    
    });
    it('sign in button should be disabled when only the password field is left empty.', () => {
        cy.get('[name="user[password]"]').type("Password1");
        cy.get('input[name="commit"][type="submit"]').should('be.disabled');
    });
    it('sign in button should be disabled when only the username/email field is left empty.', () => {
        cy.get('[name="user[email]"]').type("clarice");
        cy.get('input[name="commit"][type="submit"]').should('be.disabled');
    });
    it('should display a locked account message after too many failed login attempts (lockout mechanism).', () => {
        
    });
    it('should prevent login with credentials of a disabled/deactivated user account.', () => {
        cy.get('');
    });

    // UI/Functionality Scenarios
    // it('should verify the visibility and functionality of the Forgot Password link.', () => {
        
    // });
    // it('should verify the visibility and functionality of the Sign Up/Register link.', () => {
        
    // });
    // it('should check if the password field is masked (type=password).', () => {
        
    // });
    // it('should clear input fields when the page is refreshed.', () => {
        
    // });
    // it('should verify the ability to log in using an external provider (e.g., Google, social login).', () => {
        
    // });

    // Boundary/Edge Cases
    // it('should verify that leading/trailing spaces in username or password are correctly trimmed/rejected.', () => {
        
    // });
    // it('should successfully log in with the maximum allowed character length for both username and password (if applicable).', () => {
        
    // });
    // it('should handle case sensitivity correctly for the username/email field (if applicable).', () => {
        
    // });
 })