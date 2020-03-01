/// <reference types="Cypress" />
describe('Started testing the home page for the QA Click Academy page', function(){
    it("Handling alert page", function(){
        cy.visit("http://www.qaclickacademy.com/");

        var alerted = false;
        cy.on('window:alert', msg => alerted = msg);

        cy.get('button').contains('Subscribe Now').click()
            .then( () => expect(alerted).to.match(/clicked!/));

        //     (alertString) => {
        //     //Mocha assertion
        //     expect(alertString).to.equal("Join Our Newsletter!");
        // })

        // cy.on('window:confirm', (confirmString) => {
        //     expect(confirmString).to.equal("Hello , Are you sure you want to confirm?");
        // })

        })
})