describe('Website Scan Test', function(){

    before(function(){
        cy.visit('https://develop.zendata.dev/login'); // comando
        cy.typeLogin('gustavodurandd@gmail.com', 'Gjde2112.');
    })

    it('Create a New Scan',() =>{
        cy.get('.jss147 > .MuiButtonBase-root > .MuiButton-label').click();//Create a new scan button
        cy.get('.MuiTypography-h2').should('exist'); //Title Website Scanner
        cy.get('.jss260 > .MuiBox-root > :nth-child(2)').should('be.visible');// text #1
        cy.get('.jss260 > .MuiBox-root > :nth-child(3)').should('be.visible');// text #2
        cy.get(':nth-child(2) > .jss231 > .MuiTypography-root').should('be.visible');// text of selection
        cy.get('.MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .jss265').should('exist');//button no
        cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiIconButton-label > .jss265').should('exist')//button yes
        cy.get('.jss230 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('https://www.zendata.dev/').should('be.visible');//Type the URL to Scan
        cy.get('.jss259 > :nth-child(4)').should('exist');//search sub pages button
        cy.get(':nth-child(5) > .jss231 > .MuiTypography-root').should('exist');//repeats text
        cy.get('.MuiSelect-root').click().should('be.visible');//List of times
        cy.get('.Mui-selected').click().should('be.visible');//Select never
        cy.get('.-with-margin > .jss231 > .MuiTypography-root').should('exist');//text countries
        cy.get('.MuiAutocomplete-endAdornment > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click().should('be.visible');//List of countries
        cy.contains('United States').click();//select a countrie
        cy.get('.jss288 > .MuiButtonBase-root > .MuiButton-label').should('be.visible');//button send scan
        cy.get('.jss151 > .MuiButton-label').should('exist').should('be.visible');
        cy.get('.jss288 > .MuiButtonBase-root > .MuiButton-label').click();// send scan
    });
})