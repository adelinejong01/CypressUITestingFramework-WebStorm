describe("Test 2: Running tests on the Automation Practice Page", function(){

    //This test is to validate the header of the Automation Practice Page
    it.only("Automation Practice Page Header", function () {
        //Navigating to the automation practice page
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //Using a Chai assertion here to make sure that the blinking Text is visible
        cy.get('.blinkingText').should('be.visible');

        //Inserting a Chai assertion which makes sure that the required text is present
        cy.get('.blinkingText').should('have.text', 'Limited offer - FREE Core Java & QA Resume course');

        //Clicking the Home button, making sure that the link opens in the same browser and then navigating back
        cy.get('a > .btn').contains('Home').click();
        cy.url().should('include', "https://www.rahulshettyacademy.com/#/index");
        cy.go('back');

        //Clicking the Practice button and making sure that it is visible
        cy.get("button[class = 'btn btn-primary']").contains('Practice').should('be.visible');

        //Clicking the Login button and making sure that it is visible
        cy.get("button[class = 'btn btn-primary']").contains('Login').should('be.visible');

        //Clicking the Signup button and making sure that it is visible
        cy.get("button[class = 'btn btn-primary']").contains('Signup').should('be.visible');
    })

    //This test is to run on Radio Button Example in the Automation Practice Page
    it("Radio Button Example Functionality", function(){
        //Navigating to the automation practice page
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //We are selecting the many titles and filtering the 'Radio Button Example' title out of them
        cy.get('legend').each(($el, index, $list) => {
            const radioButtonTitle = $el.text();

            if(radioButtonTitle.includes('Radio Button')){
                cy.log("Found the Radio Button Example");
            }
        })

        //In here, we are first selecting radio1 option and then selecting radio2 option which will
        //de-select the radio1 option
        cy.get('input[class = "radioButton"]').check(['radio1', 'radio2']);

    })

    it("Dropdown functionality", function () {
        //STATIC DROPDOWN
        //Selecting the dropdown option to be option2 and validating the value to be so
        cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2');

        //DYNAMIC DROPDOWN
        cy.get('#autocomplete').type("Ind");

        //For each of the suggestion box, we need the required option
        cy.get('.ui-menu-item-wrapper').each(($el, index, $list) => {

            const countryText = $el.text();
            if(countryText.includes('India')){
                $el.click();
            }
        })

        //Validating that we have the required option in the selection with an assertion
        cy.get('#autocomplete').should('have.value', "India");
    })

    it("Handling visible and invisible elements", function(){
        //Handling the 'Element Displayed Example'
        //Checking if the BOX is visible
        cy.get("#displayed-text").should('be.visible');

        //Clicking on the HIDE button
        cy.get('input[value = "Hide"]').click();

        //Checking if the BOX is invisible
        cy.get("#displayed-text").should('not.be.visible');

        //Clicking on the SHOW button
        cy.get('input[value = "Show"]').click();

        //Checking if the BOX is visible
        cy.get("#displayed-text").should('be.visible');
    })

    it("Radio Button Functionality", function () {
        //Clicking on the checkbox and validating that it is checked and also validating the value option
        cy.get("#checkBoxOption1").check().should('be.checked').and('have.checked', 'option1');

        //Un-checking the box and validating that it is unchecked
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

        //Selecting multiple checkboxes and selecting the ones which are needed out of them
        cy.get('input[type = "checkbox"]').check(['option2', 'option3']);
    })

})