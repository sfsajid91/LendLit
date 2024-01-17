describe('Hero', () => {
    beforeEach(() => {
        cy.visit('/'); // Replace with the actual URL of your application
    });

    it('should display the logo, text, and button', () => {
        cy.contains('LendLit').should('be.visible'); // Check if the logo is visible
        cy.contains(
            'Explore, Share, Thrive. Your Hub for Book Adventures!'
        ).should('be.visible'); // Check if the text is visible
        // a link with the text 'Get Started' should have bg color #b93c5f
        cy.contains('Get Started').should(
            'have.css',
            'background-color',
            'rgb(185, 60, 95)'
        );

        cy.contains('Get Started').should('be.visible'); // Check if the button is visible
    });

    it('should navigate to the store page when the button is clicked', () => {
        cy.contains('Get Started').click(); // Click the button
        cy.url().should('include', '/store'); // Check if the URL contains '/store'
    });

    it('should display the hero image on larger screens', () => {
        cy.viewport('macbook-15'); // Set the viewport to a larger screen size
        cy.get('img[alt="Hero Image"]').should('be.visible'); // Check if the hero image is visible
    });

    it('should display the hero background image', () => {
        cy.get('img[alt="Hero Background Image"]').should('be.visible'); // Check if the hero background image is visible
    });
});
