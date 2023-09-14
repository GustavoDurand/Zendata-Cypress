describe('Demo Reports Test', function(){

    beforeEach(function(){
        cy.visit('https://www.zendata.dev/website-scanner'); // comando
    })


//Demo Section
it('Demo Reports --Websites scans-- NY Times', () => {

cy.get(':nth-child(1) > .link-block-2 > .div-block-16 > .text-block-8').should('be.visible')//Button see results
cy.visit('https://app.zendata.dev/privacy-report?r=49058&c=web')
cy.wait(5000)
cy.get('.pdf-button-container > .MuiButtonBase-root > .MuiButton-label').should('exist')//Download button pdf report
cy.get('.complete').should('exist')//Final page of the report
})

it('Demo Reports --Websites scans-- NVidia', () => {

cy.get(':nth-child(2) > .link-block-2 > .div-block-16 > .text-block-8').should('be.visible')//Button see results
cy.visit('https://app.zendata.dev/privacy-report?r=49059&c=web')
cy.wait(5000)
cy.get('.pdf-button-container > .MuiButtonBase-root > .MuiButton-label').should('exist')//Download button pdf report
cy.get('.complete').should('exist')//Final page of the report
})

it('Demo Reports --Websites scans--LetsDeel', () => {

cy.get(':nth-child(3) > .link-block-2 > .div-block-16 > .text-block-8').should('be.visible')//Button see results
cy.visit('https://app.zendata.dev/privacy-report?r=48871&c=web')
cy.wait(5000)
cy.get('.pdf-button-container > .MuiButtonBase-root > .MuiButton-label').should('exist')//Download button pdf report
cy.get('.complete').should('exist')//Final page of the report
    })

})