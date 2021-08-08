describe('Page Layout', () => {

    const me = this
    let courseId = ""
    let courseName = ""

    before(() => {
        courseId = `SD${Math.floor(Math.random()*1000)}`
        courseName = `Course - SD${Math.floor(Math.random()*1000)}`

        // cy.visit('http://localhost:4200');
        cy.visit('/');  // gets the base url from cypress.json
    })


    it('Contains the correct title', () => {        
        cy.get('h2').invoke('text').should('equal', 'Course Registration');
    })

    it('Should be able to add Course ID', () => {        
        cy.get('input').eq(0).type(courseId)
    })

    it('Should be able to add Course Name', () => {        
        cy.get('input').eq(1).type(courseName)
    })

    it('Should be able to select Course Type', () => {
        cy.get('#courseType').select('Automation')
    })

    it('Should be able to check consent checkbox', () => {        
        cy.get('input').eq(2).click()
    })

    it('Should be able to submit the form', () => {
        cy.get('.form-group>.btn').click()
    })

    it('Should show success message when form is added', () => {
        cy.get('.updateSuccess').should('be.visible')
    })

    it('Added course should be displayed in course list', () => {
        cy.get('table').contains('td', courseId);
    })

    it('Should be able to delete the added course', () => {
        cy.get('td').contains(courseId).siblings('.delete').click()
        cy.get('.course-delete-success').contains(courseName).should('be.visible')        
    })
})