describe('URL Test and security', function(){
    beforeEach(function(){
        cy.visit('https://app.zendata.dev/login');
    });

    it('Title Zenzata', function(){
        cy.title().should('eq', 'zendata')
    })


});