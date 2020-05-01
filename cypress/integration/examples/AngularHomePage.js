import angularPage from "../../support/pageObjects/angularPage";
import angularPageII from "../../support/pageObjects/angularPage-II";

describe("Testing Angular Page to check Cypress functionality", function () {
    beforeEach(function () {
        const angPageVar = new angularPage();
        cy.log("Navigating to the Angular Practice Page")
        angPageVar.travelToAngularPage();
    })

    it("Angular Home Page: Header", function () {
        const angPageVar = new angularPage()
        cy.log("Checking the name of the page")
        angPageVar.getNavigationBar().should('contain', "ProtoCommerce");

        cy.log("Checking if there are Home and Shop subheaders")
        angPageVar.getHomeSubHeader().should('contain', "Home");

        angPageVar.getShopSubHeader().should('contain', "Shop")
    })

    it("Angular Home Page: Form", function () {
        const angPageVar = new angularPage()
        const homePageVar = new angularPageII();

        cy.log("Filling the name field of the form")
        homePageVar.getNameBox().click().type("Batman");

        cy.log("Filling the email form of the form")
        angPageVar.getEmailBox().click().type("batman@gotham.com")

        cy.log("Filling the Password field of the form")
        angPageVar.getPasswordBox().click().type("nananaP@ssword")

        cy.log("Selecting the Gender field in the form")
        angPageVar.getGenderBox().select("Male");

        cy.log("Checking the 'Employed' option of the Employment Status section")
        angPageVar.selectEmployed().check();

        //Filling the Date of Birth field of the form
        //Facing struggles with this as I could not type the date
        //cy.get(':nth-child(8) > .form-control').click().type("10101990")

        cy.log("Clicking on the submit button so that we can verify the form successfully being submitted notification in the page")
        angPageVar.getSubmitButton().click();

        cy.log("Verifying that the Submit Alert contains Success as its text")
        angPageVar.getAlertBox().contains("Success!");
    })
})