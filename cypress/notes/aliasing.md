# Aliasing in cypress

* Aliasing in cypress is a way in which we can assign an element to an aliased value. We do this like,
```javascript
    cy.get("[data-cy='course-id']").as('courseIdInput')  // Aliasing the the [data-cy='course-id'] as courseIdInput
    cy.get("@courseIdInput").type('SD001')
```
* However we cannot simply instead do something like 
```javascript
    let ele = cy.get("[data-cy='course-id']").as('courseIdInput');
```
* This wont work because cypress commands are asynchronous. But we cannot also put an await to try reolve the asynchronous command
```javascript
    let ele = await cy.get("[data-cy='course-id']").as('courseIdInput');
```
* Cypress commands are not actually promises.
* Cypress commands deal with asynchronous in their own way and we need to use the "then" keyword (like in promises but not the same) to resolve it.
```javascript
    cy.get("[data-cy='course-id']").as('courseIdInput');
    cy.get('@courseIdInput').then(...)
```
* However we cannot simply continue with cypress commands after that like
```javascript
    cy.get("[data-cy='course-id']").as('courseIdInput');
    cy.get('@courseIdInput').then(
        $courseIdInput => {
            $courseIdInput.invoke('text').should('equal', '15');
        }
    )

   ERROR $courseIdInput.invoke isn't a function... 
```
* `$courseIdInput` isnt the same thing like `cy.get('@courseIdInput')`
* We can use the chai assertion instead
```javascript
    cy.get("[data-cy='course-id']").as('courseIdInput');
    cy.get('@courseIdInput').then(
        $courseIdInput => {
            expect($courseIdInput.text()).to.equal('15')
        }
    )
```
* Ex:
```javascript
    it('Contains the correct title', () => {        
        cy.get("[data-cy='course-header-text']").as('courseHeaderText')
        cy.get('@courseHeaderText').then($courseHeaderText => {
            expect($courseHeaderText.text()).to.equal('Course Registration')
        })           
    })
```
* However, if we want to write/use cypress assertions inside the `then` block, we can use `cy.wrap()`
```javascript
    cy.get("[data-cy='course-id']").as('courseIdInput');
    cy.get('@courseIdInput').then(
        $courseIdInput => {
            cy.wrap($courseIdInput).should("be.visible")
        }
    )
```