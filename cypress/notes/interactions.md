# Interactions with elements in cypress

* Double Clicking:
```javascript
    cy.get("[data-cy='header-profile-dropdown'] > :nth-child(2)").dblclick()
```
* Get text:
```javascript
    cy.get("[data-cy='header-name']").invoke('text').should('equal', 'Option Two')
```
* Check and Uncheck commands:
```javascript
    cy.get('[data-cy="consent-checkbox"]').as('courseFormConsent')
    cy.get('@courseFormConsent').check()
```
* Select and check the name:
```javascript
    cy.get('#courseType').select('Automation')
```
* Mouse interaction:
```javascript
    cy.get('#courseType').trigger('mouseover');
```
    * We can pass x an y args as well
```javascript
        cy.get('#courseType').trigger('mouseover', 10, 20);
```