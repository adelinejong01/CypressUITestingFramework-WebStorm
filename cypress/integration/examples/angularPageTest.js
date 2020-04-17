describe("Testing Angular Page to check Cypress functionality", function () {
    beforeEach(function () {
        cy.log("Navigating to the Angular Practice Page")
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
    })

    it("Angular Page Header", function () {
        cy.log("Checking the name of the page")
        cy.get('.navbar-brand').should('contain', "ProtoCommerce");

        cy.log("Checking if there are Home and Shop subheaders")
        cy.get(':nth-child(1) > .nav-link').should('contain', "Home");

        cy.get(':nth-child(2) > .nav-link').should('contain', "Shop")
    })

    it("Filling the form in the Home Page", function () {
        cy.log("Filling the name field of the form")
        cy.get(':nth-child(1) > .form-control').click().type("Batman");

        cy.log("Filling the email form of the form")
        cy.get(':nth-child(2) > .form-control').click().type("batman@gotham.com")

        cy.log("Filling the Password field of the form")
        cy.get('#exampleInputPassword1').click().type("nananaP@ssword")

        cy.log("Selecting the Gender field in the form")
        cy.get('#exampleFormControlSelect1').select("Male");

        cy.log("Checking the 'Employed' option of the Employment Status section")
        cy.get('#inlineRadio2').check();

        //Filling the Date of Birth field of the form
        //Facing struggles with this as I could not type the date
        //cy.get(':nth-child(8) > .form-control').click().type("10101990")

        cy.log("Clicking on the submit button so that we can verify the form successfully being submitted notification in the page")
        cy.get('.btn').click();

        cy.log("Verifying that the Submit Alert contains Success as its text")
        cy.get('.alert').contains("Success!");
    })
})