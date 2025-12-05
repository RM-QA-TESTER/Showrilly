
describe('', () => {
    beforeEach(() => {
        cy.visit("/");
        cy.login(); 
    });

    it('should display the client dashboard upon successful login.', () => {
        cy.url().should('eq', 'https://staging.showrilly.com/');
        cy.get('.slate-main-section', { timeout: 10000 }).should('be.visible');
    });

    it('should display the slate bottom card.', () => {
        cy.get('turbo-frame.concept--creator-card.w-100', { timeout: 10000 }).should('be.visible');
    });

    it('should display the "New Concept" button in dashboard.', () => {
       cy.get('form.button_to button.btn-new-concept')
        .should('be.visible')
        .and('contain.text', 'New Concept');
    });

    it('should display "My Dashboard" button in sidebar.', () => {
       cy.contains('a.nav-link', 'My Dashboard',{ timeout: 10000 }).should('be.visible').click();
    });  

    it('should display "Resources" button in sidebar.', () => {
        cy.contains('a.nav-link', 'Resources',{ timeout: 10000 }).should('be.visible').click();
    });   

    it('should display "Message" button in sidebar.', () => {
        cy.contains('a.nav-link', 'Message',{ timeout: 10000 }).should('be.visible').click();
    });   

    it('should display "Billing" button in sidebar.', () => {
        cy.contains('a.nav-link', 'Billing',{ timeout: 10000 }).should('be.visible').click();
    });   

    it('should display "Profile + Settings" button in sidebar.', () => {
        cy.get('div.user-info')
        .should('be.visible')
        .within(() => {
            cy.get('p.full-name').should('not.be.empty');
            cy.contains('a.view-profile', 'Profile + Settings').should('be.visible').click();
        });
    });   

    it('should log out successfully from the dashboard.', () => {
        cy.get('a[data-action="banner#logout"]').should('be.visible').click();
        cy.url().should('eq', 'https://staging.showrilly.com/sign_in');
    });

    it('"New Concept" button should open the new concept form and should be visible.', () => {
       cy.get('button.btn.btn-accent').should('be.visible').contains('New Concept').click();
       cy.url().should('eq', 'https://staging.showrilly.com/concepts/project_details');
    });  

    it('Publish is visible on dashboard', () => {
        cy.get('div.tab-button-name',{ timeout: 10000 })
        .contains('Published')
        .should('be.visible');
    }); 

    it('Drafts is visible on dashboard', () => {
        cy.get('div.tab-button-name',{ timeout: 10000 })
        .contains('Drafts')
        .should('be.visible');
    }); 

    it('Reads is visible on dashboard', () => {
        cy.get('div.tab-button-name',{ timeout: 10000 })
        .contains('Reads')
        .should('be.visible');
    });
    
    it('Saves is visible on dashboard', () => {
        cy.get('div.tab-button-name',{ timeout: 10000 })
        .contains('Saves')
        .should('be.visible');
    }); 

    it('Connections is visible on dashboard', () => {
        cy.get('div.tab-button-name',{ timeout: 10000 })
        .contains('Connections')
        .should('be.visible');
    }); 

    it('Footer should be visible on dashboard', () => {
        cy.get('div.footer-info',{ timeout: 10000 }).should('be.visible').within(() => {
        cy.get('p.link a')
            .eq(0)
            .should('have.attr', 'href', 'https://www.showrilly.com/about-us')
            .and('be.visible')
            .and('contain.text', 'About Us');

        cy.get('p.link a')
            .eq(1)
            .should('have.attr', 'href', 'https://www.showrilly.com/legal')
            .and('be.visible')
            .and('contain.text', 'Legal');

        cy.get('p.link a')
            .eq(2)
            .should('have.attr', 'href', 'https://www.showrilly.com/accessibility')
            .and('be.visible')
            .and('contain.text', 'Accessibility');

        cy.get('div.copyright p')
            .should('be.visible')
                .and('contain.text', '© 2025 Showrilly. All rights reserved.');
            });
    });                
});