import 'cypress-iframe'
import automationPage from "../../support/pageObjects/automationPage";
import automationPageII from "../../support/pageObjects/automationPageII";

describe("Running tests on the Automation Practice Page - Part II", function(){
    beforeEach(function () {
        cy.fixture('dataFile').then(function (data) {
            //here we are assigning the 'data' value to the 'details' which is a global variable and can be accessed from any part of the function
            this.details = data;
        })

        //We are calling the environmental variables from the 'cypress.json' file
        cy.visit(Cypress.env("automationPractice_url"));
    })

    //This test is to test Alert functionality - Alert Button
    it("Switch To Alert Functionality: Part I", function(){
        const autoPageVar = new automationPage();
        const autoPageVarII = new automationPageII();

        //We are selecting the many titles and filtering the 'Switch To Alert Example' title out of them
        autoPageVar.getLegend().each(($el, index, $list) => {
            const suggestionClassTitle = $el.text();

            if(suggestionClassTitle.includes('Switch To Alert Example')){
                cy.log("Found the Switch Tab Example title bar");
            }
        })

        //Checking that the text box where we enter the text for the alert exist.
        //Because checking the attribute of an element is not directly possible, at least to my knowledge, in Cypress, we have divided it into two parts
        autoPageVarII.getNameBox().should('have.attr', "placeholder");

        //Here is the second part where we are checking the placeholder text is "Enter Your Name" exists
        autoPageVarII.getNamePlaceholder().should('exist');

        //Entering the text in the Alert Box
        autoPageVarII.getNamePlaceholder().type("Batman");

        //Clicking the 'Alert' button
        autoPageVarII.getAlertButton().click();

        //Checking that the alert text is what it is supposed to be
        cy.on('window:alert', (alertString) => {
            //This is a Mocha assertion
            expect(alertString).to.equal("Hello Batman, share this practice page and share your knowledge");
        })
    })

    //This test is to test Alert functionality - Confirm Button
    it("Switch To Alert Functionality: Part II", function(){
        const autoPageVarII = new automationPageII();

        //Entering the text in the Alert Box
        autoPageVarII.getNamePlaceholder().type("Batman");

        //Clicking the 'Alert' button
        autoPageVarII.getConfirm().click();

        //Checking that the alert text is what it is supposed to be
        cy.on('window:confirm', (confirmString) => {
            //This is a Mocha assertion
            expect(confirmString).to.equal("Hello Batman, Are you sure you want to confirm?");
        })
    })

    //This test is to check if Cypress can parse the Web Table
    it("Web Table Example: Part I", function(){
        const autoPageVar = new automationPage();
        const autoPageVarII = new automationPageII();

        //We are selecting the many titles and filtering the 'Web Table Example Example' title out of them
        autoPageVar.getLegend().each(($el, index, $list) => {
            const suggestionClassTitle = $el.text();

            if(suggestionClassTitle.includes('Web Table Example')){
                cy.log("Found the Web Table Example title bar");
            }
        })

        //Checking if the Course column containing 'Python' has the Price value of '25'
        autoPageVarII.getSecondChildInTable().each(($el, index, $list) => {

            //Declaring a constant called 'text'
            const text = $el.text()

            //Checking here for the Course column containing 'Python'
            if(text.includes("Python")){
                //Here we are shifting to the next column using the '.next()' function
                autoPageVarII.getSecondChildInTable().eq(index).next().then(function(price){
                    expect(price.text()).to.equal("25");
                })
            }
        })
    })

    //Here, we are trying to get the sum of costs of all courses which have Selenium in them
    //The expected value is '105'
    it("Web Table Example: Part II", function () {
        const autoPageVarII = new automationPageII();

        //Declaring a global variable called 'count'
        let count = 0;

        autoPageVarII.getSecondChildInTable().each(($el, index, $list) => {
            const text2 = $el.text();

            //Checking here for the Course column containing 'Selenium'
            if (text2.includes("Selenium")) {
                //Here we are shifting to the next column using the '.next()' function
                autoPageVarII.getSecondChildInTable().eq(index).next().then(function (cost) {
                    count = count + Number(cost.text());
                })
            }
        }).then(function () {
            //Asserting that the value found is equal to the one which has been calculated
            assert.equal(count, 105)
        });
    })

    //This test is to check if Elements can be displayed or not
    it("Element Displayed Example", function() {
        const autoPageVar = new automationPage();
        const autoPageVarII = new automationPageII();

        //We are selecting the many titles and filtering the 'Switch To Alert Example' title out of them
        autoPageVar.getLegend().each(($el, index, $list) => {
            const suggestionClassTitle = $el.text();

            if (suggestionClassTitle.includes('Element Displayed Example')) {
                cy.log("Found the Element Displayed Example title bar");
            }
        })

        //Handling the 'Element Displayed Example'
        //Checking if the BOX is visible
        autoPageVarII.getDisplayedText().should('be.visible');

        //Clicking on the HIDE button
        autoPageVarII.getHideButton().click();

        //Checking if the BOX is invisible
        autoPageVarII.getDisplayedText().should('not.be.visible');

        //Clicking on the SHOW button
        autoPageVarII.getShowButton().click();

        //Checking if the BOX is visible
        autoPageVarII.getDisplayedText().should('be.visible');
    })

    //This test is to check the Mouse Hover Functionality
    it("Mouse Hover Example", function () {
        const autoPageVar = new automationPage();
        const autoPageVarII = new automationPageII();

        //We are selecting the many titles and filtering the 'Mouse Hover Example' title out of them
        autoPageVar.getLegend().each(($el, index, $list) => {
            const suggestionClassTitle = $el.text();

            if (suggestionClassTitle.includes('Mouse Hover Example')) {
                cy.log("Found the Mouse Hover Example title bar");
            }
        })

        //Here we cannot use Cypress commands to invoke mouse hover actions
        //So, we are using the DOM of the page to perform the hovering action
        autoPageVarII.getMouseHoverContent().invoke('show');
        cy.contains("Top").click();

        //Verifying that clicking on the button has taken to the TOP of the page
        cy.url().should('include', 'top');

        //Here we are trying to invoke the reload option
        autoPageVarII.getMouseHoverContent().invoke('show');
        cy.contains("Reload").click();

        //Verifying that clicking on the button has reloaded the page
        cy.url().should('not.contain', 'top');
    })

    it("Handling frames", function(){
        const autoPageVarII = new automationPageII();

        cy.log("Handling frames here")

        //Here we have entered the iframe using the id
        autoPageVarII.loadFrames()

        //To start working on the iframe, we need to use the 'cy.iframe()' command
        //To click on any command in the iframe, we need to use '.find()' and not '.get()'
        //Here, we clicked on one of the links in the header of the page
        autoPageVarII.frameMentorshipLink().eq(0).click()

        //We are now verifying if clicking on the link has opened the particular box
        autoPageVarII.frameInnerBox().should("contain", "Mentorship")

        //Finding if the number of packages are 2
        autoPageVarII.framePricingTitle().should('have.length', 2)
    })
})
