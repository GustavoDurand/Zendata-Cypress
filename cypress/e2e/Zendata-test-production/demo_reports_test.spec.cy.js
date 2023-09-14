describe('Dashboard Test', function(){

    beforeEach(function(){
        cy.visit('https://www.zendata.dev/'); // comando
    })


//Demo Section
it('Demo Reports --Websites scans-- NY Times', () => {
cy.get('body > div.home-header > div.navbar.w-nav > div.navigation-wrap > div > div:nth-child(1) > div > div.dropdown-content.product-dropdown.neo-dropdown > a.navigation-item.neo-navigation-item.mega-menu-item.ws-entry').click().should('be.visible')
cy.get(':nth-child(1) > .link-block-2 > .div-block-16 > .text-block-8').should('be.visible')//Button see results
cy.visit('https://app.zendata.dev/privacy-report?r=49058&c=web').should('exist')//Report of demo NY Times
cy.wait(5000)
cy.get('.pdf-button-container > .MuiButtonBase-root > .MuiButton-label').should('exist')//Download button pdf report
cy.get('#weglot-language-en').should('exist')//Change Language
cy.get('.intercom-lightweight-app-launcher-icon-open').should('be.visible')//Chat boot
cy.get('.complete').should('exist')//Final page of the report
})

it('Demo Reports --Websites scans-- NVidia', () => {
cy.get('body > div.home-header > div.navbar.w-nav > div.navigation-wrap > div > div:nth-child(1) > div > div.dropdown-content.product-dropdown.neo-dropdown > a.navigation-item.neo-navigation-item.mega-menu-item.ws-entry').click().should('be.visible')
cy.get(':nth-child(2) > .link-block-2 > .div-block-16 > .text-block-8').should('be.visible')//Button see results
cy.visit('https://app.zendata.dev/privacy-report?r=49059&c=web').should('exist')//Report of demo NVidia
cy.wait(5000)
cy.get('.pdf-button-container > .MuiButtonBase-root > .MuiButton-label').should('exist')//Download button pdf report
cy.get('#weglot-language-en').should('exist')//Change Language
cy.get('.intercom-lightweight-app-launcher-icon-open').should('be.visible')//Chat boot
cy.get('.complete').should('exist')//Final page of the report
})

it('Demo Reports --Websites scans--LetsDeel', () => {

cy.get('body > div.home-header > div.navbar.w-nav > div.navigation-wrap > div > div:nth-child(1) > div > div.dropdown-content.product-dropdown.neo-dropdown > a.navigation-item.neo-navigation-item.mega-menu-item.ws-entry').click().should('be.visible')
cy.get(':nth-child(3) > .link-block-2 > .div-block-16 > .text-block-8').should('be.visible')//Button see results
cy.visit('https://app.zendata.dev/privacy-report?r=48871&c=web').should('exist')//Report of demo LetsDeel
cy.wait(5000)
cy.get('.pdf-button-container > .MuiButtonBase-root > .MuiButton-label').should('exist')//Download button pdf report
cy.get('#weglot-language-en').should('exist')//Change Language
cy.get('.intercom-lightweight-app-launcher-icon-open').should('be.visible')//Chat boot
cy.get('.complete').should('exist')//Final page of the report
    })

})