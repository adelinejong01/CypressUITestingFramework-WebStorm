import angularPageII from "../../support/pageObjects/angularPage-II";
import automationPage from "../../support/pageObjects/automationPage";

describe("Test 2: Running tests on the Automation Practice Page - Part I", function(){
    beforeEach(function () {
        const autoPageVar = new automationPage();
        cy.log("Navigating to the automation practice page")
        autoPageVar.travelToAutomationPracticePage();
    })

    //This test is to validate the header of the Automation Practice Page
    it("Automation Practice Page Header", function () {
        const autoPageVar = new automationPage();

        //Using a Chai assertion here to make sure that the blinking Text is visible
        autoPageVar.getBlinkingText().should('be.visible');

        //Inserting a Chai assertion which makes sure that the required text is present
        autoPageVar.getBlinkingText().should('have.text', 'Limited offer - FREE Core Java & QA Resume course');

        //Clicking the Home button, making sure that the link opens in the same browser and then navigating back
        autoPageVar.getHomeButton().contains('Home').click();
        cy.url().should('include', "https://www.rahulshettyacademy.com/#/index");
        autoPageVar.goBack();

        //Clicking the Practice button and making sure that it is visible
        autoPageVar.getPracticeButton().contains('Practice').should('be.visible');

        //Clicking the Login button and making sure that it is visible
        autoPageVar.getPracticeButton().contains('Login').should('be.visible');

        //Clicking the Signup button and making sure that it is visible
        autoPageVar.getPracticeButton().contains('Signup').should('be.visible');
    })

    //This test is to run on Radio Button Example in the Automation Practice Page
    it("Radio Button Example Functionality", function(){
        const autoPageVar = new automationPage();

        //We are selecting the many titles and filtering the 'Radio Button Example' title out of them
        autoPageVar.getLegend().each(($el, index, $list) => {
            const radioButtonTitle = $el.text();

            if(radioButtonTitle.includes('Radio Button')){
                cy.log("Found the Radio Button Example title bar");
            }
        })

        //In here, we are first selecting radio1 option and then selecting radio2 option which will
        //de-select the radio1 option
        autoPageVar.getRadioButton().check(['radio1', 'radio2']);
    })

    //This test is to test the Dropdown functionality: Dynamic Suggestions Example
    it("Dropdown Functionality: Suggestion Class Example", function () {
        const autoPageVar = new automationPage();

        //We are selecting the many titles and filtering the 'Suggestion Class Example' title out of them
        autoPageVar.getLegend().each(($el, index, $list) => {
            const suggestionClassTitle = $el.text();

        //The mistake here with 'Suggestion' being 'Suggession' is in the website
            if(suggestionClassTitle.includes('Suggession Class')){
                cy.log("Found the Suggestion Class Example title bar");
            }
        })

        //Clicking on the Autocomplete button and typing 'Ven' and then selecting the 'Venezuela' option
        autoPageVar.getAutoCompleteButton().click().type("Ven");

        //Here we searched for the suggestions which had 'Venezuela' text in them & clicked on the option
        autoPageVar.getSuggestionBox().each(($el, index, $list) => {
            const countryText = $el.text();
            if(countryText.includes('Venezuela')){
                $el.click();
            }
        })

        autoPageVar.getAutoCompleteButton().should('have.value', "Venezuela");
    })

    //This test is to test the Dropdown functionality with static dropdown options
    it("Dropdown Functionality: Dropdown Example", function(){
        const autoPageVar = new automationPage();

        //We are selecting the many titles and filtering the 'Dropdown Example' title out of them
        autoPageVar.getLegend().each(($el, index, $list) => {
            const suggestionClassTitle = $el.text();

            if(suggestionClassTitle.includes('Dropdown Example')){
                cy.log("Found the Dropdown Example title bar");
            }
        })

        //Select the dropdown example
        autoPageVar.getDropdown().select('Option1').should('have.value', "option1");
    })

    //This test is to test the checkbox functionality
    it("Checkbox Functionality", function () {
        const autoPageVar = new automationPage();

        //We are selecting the many titles and filtering the 'Checkbox Example' title out of them
        autoPageVar.getLegend().each(($el, index, $list) => {
            const suggestionClassTitle = $el.text();

            if(suggestionClassTitle.includes('Checkbox Example')){
                cy.log("Found the Checkbox Example title bar");
            }
        })

        //Clicking on the checkbox and validating that it is checked and also validating the value option
        autoPageVar.getCheckBoxOptionOne().check().should('be.checked').and('have.checked', 'option1');

        //Un-checking the box and validating that it is unchecked
        autoPageVar.getCheckBoxOptionOne().uncheck().should('not.be.checked');

        //Selecting multiple checkboxes and selecting the ones which are needed out of them
        autoPageVar.getCheckBoxButton().check(['option2', 'option3']);
    })

    //This test is to test the buttons which navigate one to another window
    it("Switch Window Functionality", function () {
        const autoPageVar = new automationPage()

        //We are selecting the many titles and filtering the 'Switch Window Example' title out of them
        autoPageVar.getLegend().each(($el, index, $list) => {
            const suggestionClassTitle = $el.text();

            if(suggestionClassTitle.includes('Switch Window Example')){
                cy.log("Found the Switch Window Example title bar");
            }
        })

        //Here we are clicking on the "Open Window" button which opens a tab in a new window.
        //So, we need to check if the button has the appropriate attribute and then open the link in the same tab
        //We cannot check the 'href' attribute here as this button is linked to a function which handles which tab clicking on this should re-direct to
        //Hence we are just checking the function. Major discovery made here. yayy!!
        autoPageVar.getOpenWindow().contains('Open Window').invoke('attr', 'onclick').should('contain', "openWindow()");
    })

    //This test is to test Switch Tab functionality
    it("Switch Tab Functionality", function(){
        const autoPageVar = new automationPage()

        //We are selecting the many titles and filtering the 'Switch Window Example' title out of them
        autoPageVar.getLegend().each(($el, index, $list) => {
            const suggestionClassTitle = $el.text();

            if(suggestionClassTitle.includes('Switch Tab Example')){
                cy.log("Found the Switch Tab Example title bar");
            }
        })

        //Clicking on a link which redirects the operation to a child page
        //Here we are removing an attribute called target thus making the link open in the same parent window
        autoPageVar.getOpenTab().invoke('removeAttr', 'target').click();

        //Validating the URL fo the new page to which we travelled to
        cy.url().should('include',"https://www.rahulshettyacademy.com/#/index")

        //We now need to navigate back to the web page
        autoPageVar.goBack()
    })
})