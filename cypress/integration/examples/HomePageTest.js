import angularPageII from "../../support/pageObjects/angularPage-II";

describe('Started testing the home page for the QA Click Academy page', function(){
    beforeEach(function () {
        const homePageVar = new angularPageII()
        //Navigating to the home page
        homePageVar.travelToHomePage();
    })

    //This TC is to test the functionality of closing the alert
    it("Closing Alert", function(){
        const homePageVar = new angularPageII()
        //Clicking on the NO THANKS button
        homePageVar.getAlertBox().contains('NO THANKS').click();
    })

    //This test is for validating that the text "Featured Courses" can be seen on the page
    it("Handling Title Text", function () {
        const homePageVar = new angularPageII()
        homePageVar.getTitleBox().contains("Featured Courses");
    })

    //This TC is to verify the error message after clicking 'Subscribe Now' without providing the email id
    it("Alert Subscription", function () {
        const homePageVar = new angularPageII()
        //Click on 'Subscribe Now' without entering an email-id
        homePageVar.getAlertBox().contains('Subscribe Now').click();

        //Capturing the error which gets generated and verifying the text
        //Finally, could verify this. Yayy!!
        homePageVar.getErrorBox().should('have.text', 'This field is required.');
    })

    //This test is to enter the email in the alert box and then click 'Subscribe Now'
    //We later close the alert box and verify that is absent on the DOM of the page
    it("Email Subscription Test", function () {
        const homePageVar = new angularPageII()
        //Verifying if the alert exists in the DOM of the page
        homePageVar.getAlertBox().should('exist');

        //Entering the email
        homePageVar.getEmailInputBox().type("batman@gotham.com");

        //Click on 'Subscribe Now' and verify if the 'Success' popup opens
        homePageVar.getAlertBox().contains('Subscribe Now').click();
        homePageVar.getAlertBox().should('contain', 'Success');

        //Clicking on the Continue button to close the alert
        homePageVar.getAlertBoxII().should('contain', 'Continue').click();

        //Verifying if the alert does not exist in the DOM of the page
        homePageVar.getAlertBox().should('not.exist');
    })
})