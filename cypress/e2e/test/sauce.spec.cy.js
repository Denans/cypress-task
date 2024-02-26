describe('Sauce Demo User Logins', () => {

  it('Successful Standard User Login', () => {
    cy.get('[data-test="username"]').should('be.visible').type('standard_user')
    cy.get('[data-test="password"]').should('be.visible').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('.header_secondary_container span').should('be.visible').and('contain', 'Products')
  })

  it('Unsuccessful Standard User Login', () => {
    cy.get('[data-test="username"]').should('be.visible').type('standard_user')
    cy.get('[data-test="password"]').should('be.visible').type('secret_sauces')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service')
  })

})