/**
 * Cypress Best Practices
 * Link: https://docs.cypress.io/guides/references/best-practices#Selecting-Elements
 */

const TESTING_ENV = 'http://localhost:3000/';

describe('main_thumbnails', () => {
  it('should have all thumbnails', () => {
    // Arrange
    cy.visit(TESTING_ENV);
    cy.get('[data-cy-thumbnail]').each(($img) => {
      // Act
      // Assert
      expect($img).to.have.prop('complete', true);
    });
  });
});

describe('main_illustrations', () => {
  it('should have all illustrations', () => {
    // Arrange
    cy.visit(TESTING_ENV);
    cy.get('[data-cy-thumbnail]').each(($img) => {
      // Act
      cy.wrap($img).click();
      // Assert
      // expect(cy.get('[data-cy-illustration]'))
      expect($img).to.have.prop('complete', true);
      // Clean up
      cy.get('[data-cy-close-button]').click();
    });
  });
});