# Assertions in Cypress 

* Check existence of element:
```javascript
    .should("exists")
    .should("not.exists")
```
* Check for visibility of element:
```javascript
    .should("be.visible")
    .should("not.be.visible")
```
* Checking CSS class: 
```javascript
    .should('have.class', 'is-hidden')    
```
* Checking for style: 
```javascript
    .should('have.css', 'color', 'blue')    
```
* Checking text: 
```javascript
    .invoke('text')
    // For spans
    .should('contain')
    .should('not.contain')
```
* To make more than one assertions on an element:
```javascript
    cy.get('h1').should('contain', 'Course').should('contain', 'Registration')
    // OR
    cy.get('h1').should('contain', 'Course').and('contain', 'Registration')
```