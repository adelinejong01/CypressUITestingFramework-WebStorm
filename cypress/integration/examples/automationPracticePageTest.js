describe("Test 2: Running tests on the Automation Practice Page", function(){
    //Have a test which runs before all of these by opening the Automation Practice Page

    //This test is to validate the header of the Automation Practice Page
    it("Automation Practice Page Header", function () {
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
                cy.log("Found the Radio Button Example title bar");
            }
        })

        //In here, we are first selecting radio1 option and then selecting radio2 option which will
        //de-select the radio1 option
        cy.get('input[class = "radioButton"]').check(['radio1', 'radio2']);

    })

    //This test is to test the Dropdown functionality: Dynamic Suggestions Example
    it("Dropdown Functionality: Suggestion Class Example", function () {
        //Navigating to the automation practice page
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //We are selecting the many titles and filtering the 'Suggestion Class Example' title out of them
        cy.get('legend').each(($el, index, $list) => {
            const suggestionClassTitle = $el.text();

            if(suggestionClassTitle.includes('Suggession Class')){
                cy.log("Found the Suggestion Class Example title bar");
            }
        })

        //Clicking on the Autocomplete button and typing 'Ven' and then selecting the 'Venezuela' option
        cy.get('#autocomplete').click().type("Ven");

        //Here we searched for the suggestions which had 'Venezuela' text in them & clicked on the option
        cy.get('.ui-menu-item-wrapper').each(($el, index, $list) => {
            const countryText = $el.text();
            if(countryText.includes('Venezuela')){
                $el.click();
            }
        })

        cy.get('#autocomplete').should('have.value', "Venezuela");
    })

    //This test is to test the Dropdown functionality with static dropdown options
    it("Dropdown Functionality: Dropdown Example", function(){
        //Navigating to the automation practice page
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //We are selecting the many titles and filtering the 'Dropdown Example' title out of them
        cy.get('legend').each(($el, index, $list) => {
            const suggestionClassTitle = $el.text();

            if(suggestionClassTitle.includes('Dropdown Example')){
                cy.log("Found the Dropdown Example title bar");
            }
        })

        //Select the dropdown example
        cy.get('#dropdown-class-example').select('Option1').should('have.value', "option1");
    })

    //This test is to test the checkbox functionality
    it("Checkbox Functionality", function () {
        //Navigating to the automation practice page
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //We are selecting the many titles and filtering the 'Checkbox Example' title out of them
        cy.get('legend').each(($el, index, $list) => {
            const suggestionClassTitle = $el.text();

            if(suggestionClassTitle.includes('Checkbox Example')){
                cy.log("Found the Checkbox Example title bar");
            }
        })

        //Clicking on the checkbox and validating that it is checked and also validating the value option
        cy.get("#checkBoxOption1").check().should('be.checked').and('have.checked', 'option1');

        //Un-checking the box and validating that it is unchecked
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

        //Selecting multiple checkboxes and selecting the ones which are needed out of them
        cy.get('input[type = "checkbox"]').check(['option2', 'option3']);
    })

    //This test is to test the buttons which navigate one to another window
    it("Switch Window Functionality", function () {
        //Navigating to the automation practice page
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //We are selecting the many titles and filtering the 'Switch Window Example' title out of them
        cy.get('legend').each(($el, index, $list) => {
            const suggestionClassTitle = $el.text();

            if(suggestionClassTitle.includes('Switch Window Example')){
                cy.log("Found the Switch Window Example title bar");
            }
        })

        //Here we are clicking on the "Open Window" button which opens a tab in a new window.
        //So, we need to check if the button has the appropriate attribute and then open the link in the same tab
        //We cannot check the 'href' attribute here as this button is linked to a function which handles which tab clicking on this should re-direct to
        //Hence we are just checking the function. Major discovery made here. yayy!!
        cy.get('#openwindow').contains('Open Window').invoke('attr', 'onclick').should('contain', "openWindow()");
    })

    //This test is to test Switch Tab functionality
    it("Switch Tab Functionality", function(){
        //Navigating to the automation practice page
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //We are selecting the many titles and filtering the 'Switch Window Example' title out of them
        cy.get('legend').each(($el, index, $list) => {
            const suggestionClassTitle = $el.text();

            if(suggestionClassTitle.includes('Switch Tab Example')){
                cy.log("Found the Switch Tab Example title bar");
            }
        })

        //Clicking on a link which redirects the operation to a child page
        //Here we are removing an attribute called target thus making the link open in the same parent window
        cy.get('#opentab').invoke('removeAttr', 'target').click();

        //Validating the URL fo the new page to which we travelled to
        cy.url().should('include',"https://www.rahulshettyacademy.com/#/index")

        //We now need to navigate back to the web page
        cy.go('back');
    })

    //This test is to test Alert functionality - Alert Button
    it("Switch To Alert Functionality: Part I", function(){
        //Navigating to the automation practice page
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //We are selecting the many titles and filtering the 'Switch To Alert Example' title out of them
        cy.get('legend').each(($el, index, $list) => {
            const suggestionClassTitle = $el.text();

            if(suggestionClassTitle.includes('Switch To Alert Example')){
                cy.log("Found the Switch Tab Example title bar");
            }
        })

        //Checking that the text box where we enter the text for the alert exist.
        //Because checking the attribute of an element is not directly possible, at least to my knowledge, in Cypress, we have divided it into two parts
        cy.get('input[name = "enter-name"]').should('have.attr', "placeholder");

        //Here is the second part where we are checking the placeholder text is "Enter Your Name" exists
        cy.get('input[placeholder = "Enter Your Name"]').should('exist');

        //Entering the text in the Alert Box
        cy.get('input[placeholder = "Enter Your Name"]').type("Batman");

        //Clicking the 'Alert' button
        cy.get('#alertbtn').click();

        //Checking that the alert text is what it is supposed to be
        cy.on('window:alert', (alertString) => {
            //This is a Mocha assertion
            expect(alertString).to.equal("Hello Batman, share this practice page and share your knowledge");
        })
    })

    //This test is to test Alert functionality - Confirm Button
    it("Switch To Alert Functionality: Part II", function(){
        //Navigating to the automation practice page
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //Entering the text in the Alert Box
        cy.get('input[placeholder = "Enter Your Name"]').type("Batman");

        //Clicking the 'Alert' button
        cy.get('input[value = "Confirm"]').click();

        //Checking that the alert text is what it is supposed to be
        cy.on('window:confirm', (confirmString) => {
            //This is a Mocha assertion
            expect(confirmString).to.equal("Hello Batman, Are you sure you want to confirm?");
        })
    })

    //This test is to test Alert functionality - Confirm Button
    it("Web Table Example", function(){
        //Navigating to the automation practice page
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //We are selecting the many titles and filtering the 'Switch To Alert Example' title out of them
        cy.get('legend').each(($el, index, $list) => {
            const suggestionClassTitle = $el.text();

            if(suggestionClassTitle.includes('Web Table Example')){
                cy.log("Found the Web Table Example title bar");
            }
        })

        //Checking if the Course column containing 'Python' has the Price value of '25'
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

            //Declaring a constant called 'text'
            const text = $el.text()

            //Checking here for the Course column containing 'Python'
            if(text.includes("Python")){
                //Here we are shifting to the next column using the '.next()' function
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price){
                    expect(price.text()).to.equal("25");
                })
            }
        })

    })
})