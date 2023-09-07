describe('URL Test and security', function(){
    beforeEach(function(){
        cy.visit('https://www.zendata.dev/');
    });

    it('Title Zenzata should be...', function(){
        cy.title().should('eq', 'Data Leakage and Exfiltration Protection')
    });

    it('URL www.zendata.dev',function(){
        cy.url().should('eq','https://www.zendata.dev/')

    });

    it('Should use https',function(){
        cy.location('protocol').should('contains','https')
        
    });
    
    it('Should have hostname www',function(){
        cy.location('hostname').should('eq','www.zendata.dev')
        
    });
    
    it('End of homepage test and begin login test with principal dashboard',function(){
        cy.visit('https://app.zendata.dev/login');
        cy.get('[placeholder="johndoe@zendata.dev"]').type('gustavodurandd@gmail.com').should('be.visible'); //type user)
        cy.get('[placeholder="********"]').type('Gjde2112.{enter}').should('be.visible');//type password and login
        cy.url().should('eq','https://app.zendata.dev/zen/scans')
        
    });



});