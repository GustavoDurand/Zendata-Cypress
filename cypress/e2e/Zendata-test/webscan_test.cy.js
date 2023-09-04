describe('Website Scan Test', function(){

    before(function(){
        cy.visit('https://app.zendata.dev/login'); // comando
        cy.get('[placeholder="johndoe@zendata.dev"]').type('gustavodurandd@gmail.com').should('be.visible'); //type user)
        cy.get('[placeholder="********"]').type('Gjde2112.{enter}').should('be.visible');//type password and login
    })

    it('Create a New Scan',() =>{
        cy.get('.jss147 > .MuiButtonBase-root > .MuiButton-label').click();


    })
})