describe("Running tests on the Automation Practice Page - Part II", function(){
    //Have a test which runs before all of these by opening the Automation Practice Page

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

    //This test is to check if Cypress can parse the Web Table
    it("Web Table Example: Part I", function(){
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

    //Here, we are trying to get the sum of costs of all courses which have Selenium in them
    //The expected value is '105'
    it("Web Table Example: Part II", function () {
        //Navigating to the automation practice page
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //Declaring a global variable called 'count'
        var count = 0;

        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text2 = $el.text();

            //Checking here for the Course column containing 'Selenium'
            if (text2.includes("Selenium")) {
                //Here we are shifting to the next column using the '.next()' function
                cy.get("tr td:nth-child(2)").eq(index).next().then(function (cost) {
                    //expect(cost.text()).to.equal("25");
                    // cy.log("The cost is: " + Number(cost.text()));
                    count = count + Number(cost.text());
                    // cy.log("The complete count value is " + count);
                })
            }
        }).then(function () {
            //Asserting that the value found is equal to the one which has been calculated
            assert.equal(count, 105)
        });
    })

    //This test is to check if Elements can be displayed or not
    it.only("Element Displayed Example", function() {
        //Navigating to the automation practice page
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //We are selecting the many titles and filtering the 'Switch To Alert Example' title out of them
        cy.get('legend').each(($el, index, $list) => {
            const suggestionClassTitle = $el.text();

            if (suggestionClassTitle.includes('Element Displayed Example')) {
                cy.log("Found the Element Displayed Example title bar");
            }
        })

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
})
