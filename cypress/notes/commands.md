# To get cypress intellisense in the editor, start the file with `/// <reference types="Cypress" />`

# Cypress commands:

## filter: 
    * To get a list of childs which are of specific type, we can use `filter`
```javascript
        cy.get('#content').filter('p')
```
## not: 
    * To get a list of childs which are NOT of specific type, we can use `not`
```javascript
        cy.get('#content').not('p')
```
## Working with special key events like tab, enter or click
```javascript
        cy.get('#courseId').type('SD098 {enter}')  
        // THis would type SD098 and press enter
```