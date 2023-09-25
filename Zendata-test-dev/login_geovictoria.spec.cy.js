describe(' Login GeoVictoria', function(){

    beforeEach(function(){
        cy.visit('https://clients.geovictoria.com/'); // comando
    })

    it(' Home Principal', () => {
        cy.get('#user').type("255251627")
        cy.get('#password').type("2552")
        cy.get('#btnLogin').click()
        cy.wait(10000)
        cy.get('body > web-punch-widget').shadow().find('#web-punch-container > div.web-punch-content > web-punch-content').shadow()
    })
})