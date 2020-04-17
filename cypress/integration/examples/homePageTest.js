describe('Started testing the home page for the QA Click Academy page', function(){
    beforeEach(function () {
        //Navigating to the home page
        cy.visit("http://www.qaclickacademy.com/");
    })

    //This TC is to test the functionality of closing the alert
    it("Closing the alert by clicking on 'NO THANKS'", function(){
        //Clicking on the NO THANKS button
        cy.get('.sumome-react-wysiwyg-move-handle').contains('NO THANKS').click();
    })

    //This test is for validating that the text "Featured Courses" can be seen on the page
    it("Handling the title text of the page", function () {
        cy.get('.container > .text-center > h2').contains("Featured Courses");
    })

    //This TC is to verify the error message after clicking 'Subscribe Now' without providing the email id
    it("Handling the alert by subscribing to it", function () {
        //Click on 'Subscribe Now' without entering an email-id
        cy.get('.sumome-react-wysiwyg-move-handle').contains('Subscribe Now').click();

        //Capturing the error which gets generated and verifying the text
        //Finally, could verify this. Yayy!!
        cy.get('.listbuilder-popup-field-error').should('have.text', 'This field is required.');
    })

    //This test is to enter the email in the alert box and then click 'Subscribe Now'
    //We later close the alert box and verify that is absent on the DOM of the page
    it("Entering the email and Subscribing for the email", function () {
        //Verifying if the alert exists in the DOM of the page
        cy.get('.sumome-react-wysiwyg-move-handle').should('exist');

        //Entering the email
        cy.get("input").type("batman@gotham.com");

        //Click on 'Subscribe Now' and verify if the 'Success' popup opens
        cy.get('.sumome-react-wysiwyg-move-handle').contains('Subscribe Now').click();
        cy.get('.sumome-react-wysiwyg-move-handle').should('contain', 'Success');

        //Clicking on the Continue button to close the alert
        cy.get('.sumome-react-wysiwyg-move-handle > div > button').should('contain', 'Continue').click();

        //Verifying if the alert does not exist in the DOM of the page
        cy.get('.sumome-react-wysiwyg-move-handle').should('not.exist');
    })
})