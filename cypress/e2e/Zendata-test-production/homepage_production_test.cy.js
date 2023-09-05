describe('Dashboard Test', function(){

    it('HomePage Test', () => {
        cy.visit('https://www.zendata.dev/');
        cy.get('.intercom-lightweight-app-launcher-icon-open').should('be.visible')//Chatboot
        cy.get('.cb-button').should('be.visible')//cookie button
        cy.get(':nth-child(1) > .dropdown-trigger > div.navigation-item').should('be.visible')//Products
        cy.get('.menu > :nth-child(2) > .navigation-item').should('be.visible')//Privacy Badges
        cy.get('.menu > :nth-child(3) > .navigation-item').should('be.visible')//Plans
        cy.get(':nth-child(5) > .dropdown-trigger > div.navigation-item').should('be.visible')//Resources
        cy.get('.menu > :nth-child(6) > .navigation-item').should('be.visible')//Get started
        cy.get('.text-login').should('be.visible')//Client Login
        cy.get('.div-block-10 > .green-button')//Try it button
        cy.get('#email-form').should('be.visible')//Form contac
        cy.get('.footer-menu > :nth-child(3) > .navigation-item').should('be.visible')//Privacy Police
        cy.get(':nth-child(7) > .navigation-item').should('be.visible')//Terms and conditions
        cy.get('.homa-image-container').should('be.visible')//Slide principal
})

    it('Examples of product --Websites scans--', () => {
        cy.visit('https://www.zendata.dev/');
        cy.get('body > div.home-header > div.navbar.w-nav > div.navigation-wrap > div > div:nth-child(1) > div > div.dropdown-content.product-dropdown.neo-dropdown > a.navigation-item.neo-navigation-item.mega-menu-item.ws-entry').click().should('be.visible')
        cy.get('.form-input-cover').should('be.visible')//Form demo
        cy.get('#protocol-2').should('be.visible')//Button of protocol
        cy.get('#wf-form-url > div > div.column-7.w-col.w-col-3.w-col-medium-3.w-col-small-small-stack > div > input').should('be.visible')//Send scan button
    // Text and images of the pages
        cy.get('.products-columns > :nth-child(1) > .home-h2').should('be.visible')
        cy.get('.products-columns > :nth-child(2) > :nth-child(1)').should('be.visible')
        cy.get('.products-columns > :nth-child(2) > :nth-child(2)').should('be.visible')
        cy.get('.products-columns > :nth-child(2) > :nth-child(3)').should('be.visible')
        cy.get('.products-columns > :nth-child(2) > :nth-child(4)').should('be.visible')
        cy.get('.monitors-section').should('be.visible')
        cy.get('.scan-features-section > ._1200-container').should('be.visible')

    //Demo Section
        cy.get('#Demos > ._1200-container').should('be.visible').should('be.visible')
        cy.get(':nth-child(1) > .link-block-2 > .div-block-16 > .text-block-8').should('be.visible')
        cy.get(':nth-child(1) > .link-block-2 > .div-block-16 > .text-block-8').should('be.visible')
        cy.get(':nth-child(1) > .link-block-2 > .div-block-16 > .text-block-8').should('be.visible')
    })
    it('Demo Reports --Websites scans-- NY Times', () => {
        cy.visit('https://www.zendata.dev/');
        cy.get('body > div.home-header > div.navbar.w-nav > div.navigation-wrap > div > div:nth-child(1) > div > div.dropdown-content.product-dropdown.neo-dropdown > a.navigation-item.neo-navigation-item.mega-menu-item.ws-entry').click().should('be.visible')
        cy.get(':nth-child(1) > .link-block-2 > .div-block-16 > .text-block-8').should('be.visible')//Button see results
        cy.visit('https://app.zendata.dev/privacy-report?r=49058&c=web').should('exist')//Report of demo NY Times
        cy.get('.pdf-button-container > .MuiButtonBase-root > .MuiButton-label').should('exist')//Download button pdf report
        cy.get('#weglot-language-en').should('exist')//Change Language
        cy.get('.intercom-lightweight-app-launcher-icon-open').should('be.visible')//Chat boot
        cy.get('.complete').should('exist')//Final page of the report

    })
    it('Demo Reports --Websites scans-- NVidia', () => {
        cy.visit('https://www.zendata.dev/');
        cy.get('body > div.home-header > div.navbar.w-nav > div.navigation-wrap > div > div:nth-child(1) > div > div.dropdown-content.product-dropdown.neo-dropdown > a.navigation-item.neo-navigation-item.mega-menu-item.ws-entry').click().should('be.visible')
        cy.get(':nth-child(2) > .link-block-2 > .div-block-16 > .text-block-8').should('be.visible')//Button see results
        cy.visit('https://app.zendata.dev/privacy-report?r=49059&c=web').should('exist')//Report of demo NVidia
        cy.get('.pdf-button-container > .MuiButtonBase-root > .MuiButton-label').should('exist')//Download button pdf report
        cy.get('#weglot-language-en').should('exist')//Change Language
        cy.get('.intercom-lightweight-app-launcher-icon-open').should('be.visible')//Chat boot
        cy.get('.complete').should('exist')//Final page of the report
    })
    it('Demo Reports --Websites scans-- NVidia', () => {
        cy.visit('https://www.zendata.dev/');
        cy.get('body > div.home-header > div.navbar.w-nav > div.navigation-wrap > div > div:nth-child(1) > div > div.dropdown-content.product-dropdown.neo-dropdown > a.navigation-item.neo-navigation-item.mega-menu-item.ws-entry').click().should('be.visible')
        cy.get(':nth-child(2) > .link-block-2 > .div-block-16 > .text-block-8').should('be.visible')//Button see results
        cy.visit('https://app.zendata.dev/privacy-report?r=49059&c=web').should('exist')//Report of demo NVidia
        cy.get('.pdf-button-container > .MuiButtonBase-root > .MuiButton-label').should('exist')//Download button pdf report
        cy.get('#weglot-language-en').should('exist')//Change Language
        cy.get('.intercom-lightweight-app-launcher-icon-open').should('be.visible')//Chat boot
        cy.get('.complete').should('exist')//Final page of the report
    })


})