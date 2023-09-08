describe('APP Scan Test', function(){

    beforeEach(function(){
        cy.visit('https://app.zendata.dev/login'); // comando
        cy.typeLogin('gustavodurandd@gmail.com', 'Gjde2112.')
        cy.request({
        method: 'GET',
        url: 'https://api.zendata.dev/scans/?isDemo=true&pageSize=6&page=1&status=succesfully&environment=web',
        timeout: 10000,
    }).then((response) => {
        expect(response.status).to.equal(200);
        // Puedes continuar con tus aserciones o acciones de prueba aquí
    });

    })

    it('Create a New APP Scan Test',() =>{
        cy.get('div > div > div > ul > a:nth-child(2)').should('be.visible').click(); //APP Scan
        cy.get('[aria-controls="scan-menu"]').should('be.visible').click();// Create a new scan button
        cy.wait(10000)
        cy.get('.jss130').should('be.visible');// title "APP Scanner"
        cy.get('.MuiTypography-h2').should('be.visible');// Text mobile asset monitoring
        cy.get('.MuiFormGroup-root > :nth-child(1) > .MuiTypography-root').should('exist');//app type buttons
        cy.get('.MuiFormGroup-root > :nth-child(2) > .MuiTypography-root',{ timeout: 8000 }).should('exist').click();//IPA button
        cy.get('.MuiSelect-root').should('exist');//repeats
        cy.get('.jss151 > .MuiButton-label').should('be.visible');// Button "Go Back"
        cy.get('.intercom-lightweight-app-launcher-icon-open').should('be.visible');// chatbot
        cy.get('#weglot-language-en').should('be.visible');// Language
        cy.get('[placeholder="Type the name"]').should('be.visible').type("audible");//app to scan field
        cy.wait(4000);
        cy.get('[class^=jss]').eq(25).should('be.visible').click();
        cy.get(':nth-child(2) > .MuiBox-root > .MuiButtonBase-root > .MuiButton-label').should('be.visible').click();//create scan
    });

})