describe('Website Scan Test', function(){

    before(function(){
        cy.visit('https://app.zendata.dev/login'); // comando
        cy.typeLogin('gustavodurandd@gmail.com', 'Gjde2112.');
    })

    it('Create a New Scan',() =>{

        cy.get('.jss147 > .MuiButtonBase-root > .MuiButton-label').click({force: true});//Create a new scan button
        cy.get('.MuiTypography-h2').should('exist'); //Title Website Scanner
        cy.get('.jss260 > .MuiBox-root > :nth-child(2)').should('be.visible');// text #1
        cy.get('.jss260 > .MuiBox-root > :nth-child(3)').should('be.visible');// text #2
        cy.get(':nth-child(2) > .jss231 > .MuiTypography-root').should('be.visible');// text of selection
        cy.get('.MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .jss265').should('exist');//button no
        cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiIconButton-label > .jss265').should('exist')//button yes
        cy.get('.jss230 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('https://www.zendata.dev/').should('be.visible');//Type the URL to Scan
        cy.get('.jss259 > :nth-child(4)').should('exist');//search sub pages button
        cy.get(':nth-child(5) > .jss231 > .MuiTypography-root').should('exist');//repeats text
        cy.get('#root > div > main > div > div > div.MuiBox-root.jss141.empty-overlay-container.jss136 > div > div > div.MuiBox-root.jss155.jss116 > div > div > form > div > div:nth-child(5) > div.jss230 > div').should('be.visible');//List of times
        cy.get('.-with-margin > .jss231 > .MuiTypography-root').should('exist');//text countries
        cy.get('.MuiAutocomplete-endAdornment > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click().should('be.visible');//List of countries
        cy.contains('United States').click({force: true});//select a countrie
        cy.get('.jss288 > .MuiButtonBase-root > .MuiButton-label').should('be.visible');//button send scan
        cy.get('.jss151 > .MuiButton-label').should('exist').should('be.visible');
        //cy.get('.jss288 > .MuiButtonBase-root > .MuiButton-label').click({force: true});// send scan
    });
})