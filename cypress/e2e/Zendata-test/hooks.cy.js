//Hooks -> Mocha


/* --
1. before() -> UNA VEZ, al principio
2. beforeEach() -> Antes de cada test
3. TEST EXECUTION
4. after each() -> Despues de cada test
5. before each()
6. TEST EXECUTION
7. aftereach()
8. after() UNA VEZ, al final
*/
//Skip - Only examble it.skip - it.only

describe ('Demo de hooks', function(){

    before(function(){
        cy.log('Before');
    })


    beforeEach(function(){
        cy.log('Before Each');
    })


    it ('shold be test #1', function(){
        console.log ('test #1')
    })
    it ('shold be test #2', function(){
        console.log ('test #2')
    })
    it ('shold be test #3', function(){
        console.log ('test #3')
    })

    afterEach(function(){
        cy.log('After Each')
    })


    after(function(){
        cy.log('After')
    })
})