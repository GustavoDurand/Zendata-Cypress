beforeEach(function(){
    cy.visit('https://develop.zendata.dev/login'); // comando
    cy.get('[placeholder="johndoe@zendata.dev"]').type('gustavodurandd@gmail.com').should('be.visible'); //type user)
    cy.get('[placeholder="********"]').type('Gjde2112.{enter}').should('be.visible');//type password and login
})

it('Validar aplicaciones en el menú',()=>{
    cy.get('#root > div > div > div > ul > a.MuiButtonBase-root.MuiListItem-root.jss64.-reports.-active.MuiListItem-gutters.MuiListItem-button.active > div.MuiListItemText-root.jss65 > span'); //Icon Zendata principal
    cy.get('div > div > div > ul > a:nth-child(1)').should('be.visible');//Website scanner
    cy.get('div > div > div > ul > a:nth-child(2)').should('be.visible');//App Scanner
    cy.get('div > div > div > ul > a:nth-child(3)').should('be.visible');//Security Scanner
    cy.get('div > div > div > ul > a:nth-child(4)').should('be.visible');//Code Scanner
    cy.get('div > div > div > ul > a:nth-child(5)').should('be.visible');//Repository Scanner
    cy.get('div > div > div > ul > a:nth-child(6)').should('be.visible');//Device Scanner
    cy.get('div > div > div > ul > a:nth-child(7)').should('be.visible');//Local DB Scanner
    cy.get('div > div > div > ul > a:nth-child(8)').should('be.visible');//DB Scanner
    cy.get('div > div > div > ul > a:nth-child(9)').should('be.visible');//Privacy Badges
    cy.get('div > div > div > ul > a:nth-child(11)').should('be.visible');//Account
});

it('Validar contenido dashboard principal',()=>{
    cy.get('[class="jss112 -selected"]').should('be.visible');// Sub menu Reports
    cy.get('div > div> div>div>div>button:nth-child(2)').should('be.visible');//New Scan
    cy.get('div > div> div>div>div>button:nth-child(3)').should('be.visible');//Scheduled Scans
    cy.get('div > div> div>div>div>button:nth-child(4)').should('be.visible');//Single-run Scans
    cy.get('[class="jss130"]').should('be.visible');// Title "Website Scanner"
    cy.get('[class="MuiButton-label jss149"]').should('be.visible');//Button "Create a new scan"
    cy.get('[class="MuiButton-label"]').should('be.visible').click();//User - Logout
    cy.get('div >div>ul>li').should('be.visible');//User - Logout
    cy.get('#user-menu > div:nth-child(1)').click();//User - Logout
})
after(() => {

});
