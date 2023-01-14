describe('Properties Overview Content', () => {
  it('finds the content "view"', () => {
    cy.visit('http://localhost:3000/properties')

    cy.contains('Login')
  })
})