describe('Propwerty Infromation', () => {
  it('finds the content "About this property"', () => {
    cy.visit('http://localhost:3000/Property/2')
    cy.contains('About this property')
  })
})