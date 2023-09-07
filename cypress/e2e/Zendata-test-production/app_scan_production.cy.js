describe('APP Scan Test', function(){

    before(function(){
        cy.visit('https://app.zendata.dev/login'); // comando
        cy.get('[placeholder="johndoe@zendata.dev"]').type('gustavodurandd@gmail.com').should('be.visible'); //type user)
        cy.get('[placeholder="********"]').type('Gjde2112.{enter}').should('be.visible');//type password and login
    })

    it('Create a New APP Scan Test',() =>{
        cy.get('div > div > div > ul > a:nth-child(2)').should('be.visible').click(); //APP Scan
        cy.get('[aria-controls="scan-menu"]').should('be.visible').click();// Create a new scan button
        cy.get('.jss130').should('be.visible');// title "APP Scanner"
        cy.get('.MuiTypography-h2').should('be.visible');// Text mobile asset monitoring
        cy.wait(40000);
        cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .jss308').should('exist');//app type buttons
        cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiIconButton-label > .jss308').should('exist').click();
        cy.get('[placeholder="Type the name"]').should('be.visible').type("audible");//app to scan field
        cy.wait(8000);
        cy.get('.jss312 > :nth-child(1)').should('be.visible').click();//select from list
        cy.get('.MuiSelect-root').should('exist');//repeats
        cy.get('.jss151 > .MuiButton-label').should('be.visible');// Button "Go Back"
        cy.get('.intercom-lightweight-app-launcher-icon-open').should('be.visible');// chatbot
        cy.get('#weglot-language-en').should('be.visible');// Language
        cy.get(':nth-child(2) > .MuiBox-root > .MuiButtonBase-root > .MuiButton-label').should('be.visible').click();//create scan
    });

    after(() => {

    });

})