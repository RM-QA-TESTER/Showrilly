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

    it.only('should display the "Win Button" in dashboard.', () => {
        cy.get('form.button_to button.btn.btn-light', { timeout: 10000 })
        .should('be.visible')
        .and('contain.text', 'Win Button');
    })
    it('should display "Scout Concepts', () => {
       
    })
    it('', () => {
       
    })
    it('', () => {
       
    })
    it('', () => {
       
    })
    it('', () => {
       
    })
 })