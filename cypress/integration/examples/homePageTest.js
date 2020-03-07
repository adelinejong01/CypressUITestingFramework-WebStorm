///// <reference types="Cypress" />
describe('Started testing the home page for the QA Click Academy page', function(){
    //This TC is to test the functionality of closing the alert

    it("Closing the alert by clicking on 'NO THANKS'", function(){
        //Navigating to the home page
        cy.visit("http://www.qaclickacademy.com/");

        //Clicking on the NO THANKS button
        cy.get('.sumome-react-wysiwyg-move-handle').contains('NO THANKS').click();
    })

    //This test is for validating that the text "Featured Courses" can be seen on the page

    it("Handling the title text of the page", function () {
        //Navigating to the home page
        cy.visit("http://www.qaclickacademy.com/");

        cy.get('.container > .text-center > h2').contains("Featured Courses");
    })

    //This TC is to verify the error message after clicking 'Subscribe Now' without providing the email id

    // it("Handling the alert by subscribing to it", function () {
    //     //Navigating to the home page
    //     cy.visit("http://www.qaclickacademy.com/");
    //
    //     cy.get('.sumome-react-wysiwyg-move-handle').contains('Subscribe Now').click().
    //         then(cy.get('.listbuilder-popup-field-error').to.match("required"));
    // })

})