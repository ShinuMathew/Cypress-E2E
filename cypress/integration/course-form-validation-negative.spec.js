alert(Cypress.env("TEST_RUNID"))
describe('Page Layout', () => {

    const me = this

    before(() => {
        cy.visit('/');  // gets the base url from cypress.json
    })


    it('Contains the correct title', () => {        
        cy.get("[data-cy='course-header-text']").as('courseHeaderText')
        cy.get('@courseHeaderText').then($courseHeaderText => {
            expect($courseHeaderText.text()).to.equal('Course Registration')
        })           
    })

    it('Should be able to add Course ID', () => {
        cy.get("[data-cy='course-id']").as('courseIdInput')  // Aliasing the the [data-cy='course-id'] as courseIdInput
        cy.get("@courseIdInput").type('SD001')        
    })

    it('Should be able to add Course Name', () => {
        cy.get("[data-cy='course-name']").as('courseNameInput')  // Aliasing the the [data-cy='course-name'] as courseNameInput
        cy.get("@courseNameInput").type('Django')        
    })

    it('Should be able to select Course Type', () => {
        cy.get('#courseType').select('Automation').debug()
        // cy.get('#courseType').find('option:selected').should('have-text', 'Automation')
        // .should('equal', 'Automation')
    })

    it('Should be able to check consent checkbox', () => {        
        cy.get('[data-cy="consent-checkbox"]').as('courseFormConsent')
        cy.get('@courseFormConsent').check()
    })

    it('Should be able to submit the form', () => {
        cy.get('.form-group>.btn').click()
    })

    it('Should show success message when form is added', () => {
        cy.get('.updateFailed').should('be.visible')
    })

})