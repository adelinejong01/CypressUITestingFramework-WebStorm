describe("Testing Angular Page to check Cypress functionality", function () {
    //Have a test which opens the page before every test

    it("Angular Page Header", function () {
        //Navigating to the Angular Practice Page
        cy.visit("https://rahulshettyacademy.com/angularpractice/");

        //Checking the name of the page
        cy.get('.navbar-brand').should('contain', "ProtoCommerce");

        //Checking if there are Home and Shop subheaders
        cy.get(':nth-child(1) > .nav-link').should('contain', "Home");

        cy.get(':nth-child(2) > .nav-link').should('contain', "Shop")
    })

    it.only("Filling the form in the Home Page", function () {
        //Navigating to the Angular Practice Page
        cy.visit("https://rahulshettyacademy.com/angularpractice/");

        //Filling the name field of the form
        cy.get(':nth-child(1) > .form-control').click().type("Batman");

        //Filling the email form of the form
        cy.get(':nth-child(2) > .form-control').click().type("batman@gotham.com")

        //Filling the Password field of the form
        cy.get('#exampleInputPassword1').click().type("nananaP@ssword")

        //Selecting the Gender field in the form
        cy.get('#exampleFormControlSelect1').select("Male");

        //Checking the "Employed" option of the Employment Status section
        cy.get('#inlineRadio2').check();

        //Filling the Date of Birth field of the form
        //Facing struggles with this as I could not type the date
        //Neither could I
        //cy.get(':nth-child(8) > .form-control').click().type("10101990")
    })
})