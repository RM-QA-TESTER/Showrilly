describe('', () => {
        beforeEach(() => {
        cy.visit("/");
        cy.login('producer'); 
    });

    it('should display the producer dashboard upon successful login.', () => {
        cy.url().should('eq', 'https://staging.showrilly.com/');
        cy.get('.slate-main-section', { timeout: 10000 }).should('be.visible');
    });

    it('should display the "Scout Concepts" button in dashboard.', () => {
        cy.get('form.button_to button.btn.btn-accent', { timeout: 10000 })
            .should('be.visible')
            .and('contain.text', 'Scout Concepts');
    });

    it('should display the "Win Button" in dashboard.', () => {
        cy.get('form.button_to button.btn.btn-light', { timeout: 10000 })
        .should('be.visible')
        .and('contain.text', 'Win Button');
    })
    it('should display "Scout Concepts" in the sidebar', () => {
        cy.get('form.button_to button.btn-new-concept', { timeout: 10000 })
        .should('be.visible')
        .and('contain.text', 'Scout Concepts');
    })
    it('"My Dashboard" is visible in the sidebar', () => {
        cy.contains('a.nav-link', 'My Dashboard',{ timeout: 10000 }).should('be.visible').click();
    })
    it('"Message" is visible in the sidebar', () => {
        cy.contains('a.nav-link', 'Message',{ timeout: 10000 }).should('be.visible').click();
    })
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
    it('should display the My Shortlist section', () => {
        cy.get('turbo-frame#producer_concept_list')
        .find('h4.title')
        .should('contain.text', 'My shortlist');
    });
    it('New Arrivals is visible on dashboard', () => {
        cy.get('div.tab-button-name',{ timeout: 10000 })
        .contains('New Arrivals')
        .should('be.visible');
    }); 
    it('Viewed is visible on dashboard', () => {
        cy.get('div.tab-button-name',{ timeout: 10000 })
        .contains('Viewed')
        .should('be.visible');
    }); 
    it('Shortlisted is visible on dashboard', () => {
        cy.get('div.tab-button-name',{ timeout: 10000 })
        .contains('Shortlisted')
        .should('be.visible');
    }); 
    it('Feedback rate is visible on dashboard', () => {
        cy.get('div.tab-button-name',{ timeout: 10000 })
        .contains('Feedback rate')
        .should('be.visible');
    });
 })