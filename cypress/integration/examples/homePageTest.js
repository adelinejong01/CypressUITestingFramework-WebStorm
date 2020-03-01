/// <reference types="Cypress" />
describe('Started testing the home page for the QA Click Academy page', function(){
    it("Closing the alert by clicking on 'NO THANKS'", function(){
        cy.visit("http://www.qaclickacademy.com/");
        //
        // var alerted = false;
        // cy.on('window:alert', msg => alerted = msg);

        cy.get('.sumome-react-wysiwyg-move-handle').contains('NO THANKS').click();
            // .then( () => expect(alerted).to.match(/clicked!/));
        //
        //         //     (alertString) => {
        //         //     //Mocha assertion
        //         //     expect(alertString).to.equal("Join Our Newsletter!");
        //         // })
        //
        //         // cy.on('window:confirm', (confirmString) => {
        //         //     expect(confirmString).to.equal("Hello , Are you sure you want to confirm?");
        // })

        })
})