describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://example.cypress.io')
    })
  })

  describe('baseUrl', () => {
    beforeEach(() => {
     cy.visit('https://example.cypress.io/todo')
    })
  
  })