describe('Login Zendata', function (){
    beforeEach(function(){
    cy.visit('https://app.zendata.dev/login');
  })
  it('Validar contenido del Login', () => {
    cy.visit('https://app.zendata.dev/login')
    cy.get('div > main > div > a').should('be.visible'); // Back to homepage button
    cy.get('div > main > div > div > a > svg').should('be.visible'); // Zendata icon
    cy.get('div > main > div > div > h1').should('be.visible'); // Welcome back title
    cy.get('div > main > div > div > p').should('be.visible'); // Title "Complete the following form to log in"
    cy.get('a[href="/reset-password"]').should('be.visible');// link forgot password
    cy.get('a[href="https://www.zendata.dev/pricing"]').should('be.visible'); // Link Sign Up
    cy.get('main >div  footer > p > a').should('be.visible');// Link Zendata footer
    cy.get('div > main > div > div button').should('be.visible');// Sign In button
    cy.get('[class="MuiGrid-root jss6 MuiGrid-item MuiGrid-grid-md-6"]').should('be.visible'); // body right
  })
  it('Validar acceso', () => {
    cy.get('[placeholder="johndoe@zendata.dev"]').type('gustavodurandd@gmail.com').should('be.visible'); //type user)
    cy.get('[placeholder="********"]').type('Gjde2112.').should('be.visible');//type password and login
    cy.get('div >  div  > form > button').click()//click on button "Sign In"
        
  })
  after(() => {

  });

})
