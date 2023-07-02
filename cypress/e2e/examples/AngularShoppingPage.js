//Importing the page objects from the pageObjects folder
import angularPageII from "../../support/pageObjects/angularPage-II";
import checkoutPage from "../../support/pageObjects/checkoutPage";

describe("Framework 1: Framework Test Suite", function(){

    //This is the before hook in the function. It runs before all the tests in the 'describe' block
    before(function(){
        cy.fixture('dataFile').then(function (data) {
            //here we are assigning the 'data' value to the 'details' which is a global variable and can be accessed from any part of the function
            this.details = data;
        })

        //We are calling the environmental variables from the cypress.json file
        cy.visit(Cypress.env("angular_url"));
    })

    it("Home Page Verification", function () {
        const homePageVar = new angularPageII();

        //We call it using this.details or Cypress would not know what variable we are referring to
        homePageVar.getNameBox().type(this.details.name);
        homePageVar.getGenderBox().select(this.details.gender);

        //verifying the Two-Way Binding Example
        homePageVar.getTwoWayDataBindingBox().should('have.value', this.details.name);

        //verifying that the attribute 'min-length' is '2'
        homePageVar.getSecondChild().should('have.attr','minlength','2');

        //Verifying that the third option named 'Entrepreneur' is disabled
        homePageVar.getEntrepreneurButton().should('be.disabled');
    })

    it("Shopping Test", function () {
        const homePageVar = new angularPageII();
        homePageVar.getShopLink().click();

        //Using the customized command to click on the cellphone link - Blackberry
        cy.selectProduct("Blackberry");

        //We are also clicking on the Nokia Edge cellphone
        cy.selectProduct("Nokia Edge");

        //We can also use cy.debug() as the debugging command
        // cy.pause();

        //An iterative loop for selecting the items in the array of key-value pairs - NOT WORKING IN CYPRESS
        // this.details.cellphones.forEach(function(element) {
        //     cy.selectProduct(element);
        // })
    })

    it("Cart Item Verification", function () {
        let sum = 0;

        //Declare the home page POM object again
        const checkoutPageVar = new checkoutPage();

        //Clicking on the Checkout button
        checkoutPageVar.getCheckoutButton().click();

        //Verifying the values of the total cost and adding the individual costs
        checkoutPageVar.getIndividualItemsCost().each(($el, index, $list) => {
            cy.log($el.text());

            // const amountString = $el.text();
            // const splitter = $el.text().split(" ");
            const amount = parseInt($el.text().split(" ")[1], 10);
            sum = sum + amount;
        }).then(function () {
            cy.log("Total calculated sum: " + sum);
        })

        //Deriving the total cost amount from the webpage
        let totalCost = 0;
        checkoutPageVar.getTotalCartCost().then(function(totalCostString){
            totalCost = parseInt((totalCostString.text().split(" "))[1], 10);
            cy.log("Cart Cost: " + totalCost).then(function () {
                //Placing an assertion comparing the values
                assert.strictEqual(sum, totalCost, "The values are equal");
            })
        })

        // assert.strictEqual(sum, totalCost, "The values are equal");
    })

    it("Cart Checkout Test", function () {
        //Declare the home page POM object again
        const checkoutPageVar = new checkoutPage();

        //Clicking on the Checkout button again but this time in the CART page
        checkoutPageVar.getCartCheckoutButton().click();

        //Entering the Delivery Location
        checkoutPageVar.getDeliverySpace().type("India")

        //Selecting the first suggestion from the list of suggestions
        checkoutPageVar.getFirstSuggestion().click();

        //Waiting for 3 seconds
        checkoutPageVar.waitForThreeSeconds();

        //Click on the "Terms and Conditions" check box
        checkoutPageVar.getTermsConditionsCheckBox().click();

        //Click on the 'Purchase' button
        checkoutPageVar.getPurchaseButton().click();

        //Check the presence of the Success alert in the page
        checkoutPageVar.checkSuccessAlert().should('be.visible');

        //Checking the text of the alert
        checkoutPageVar.getAlert().should('contain', "Success! Thank you! Your order will be delivered in next few weeks :-).");
    })
})