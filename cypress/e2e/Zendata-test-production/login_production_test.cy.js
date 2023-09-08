describe('Login Zendata', function (){
  beforeEach(function(){
    cy.visit('https://app.zendata.dev/login')

    cy.fixture('fixtures')
    .then(credentials =>{
        this.credentials = credentials;
    })
});
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

  it('Correct User', function(){
    cy.get('[placeholder="johndoe@zendata.dev"]').type(this.credentials.email);
    cy.get('[placeholder="********"]').type(this.credentials.password);
    cy.get('div >  div  > form > button').click();

    cy.get('.jss130').should('exist');

})

it('Incorrect User', function(){
    cy.get('[placeholder="johndoe@zendata.dev"]').type(this.credentials.wrongemail);
    cy.get('[placeholder="********"]').type(this.credentials.wrongpassword);
    cy.get('div >  div  > form > button').click();

    cy.get('[class="MuiBox-root jss42"]').should('contains.text', 'Unable to log in with provided credentials.');//Message incorrect credentials
})

it('Reset Password', function(){
  cy.get(':nth-child(4) > .jss19').click();//forgot password button
  cy.get('.jss8').should('be.visible');//title Reset Password
  cy.get('.jss9').should('be.visible');//text description
  cy.get('.MuiInputBase-root').type(this.credentials.email);
  cy.get('[type="submit"]').should('be.visible').click();//button submit
  cy.get('.jss8').should('be.visible');//title and text
  cy.get('.jss9').should('be.visible');
  });

});
