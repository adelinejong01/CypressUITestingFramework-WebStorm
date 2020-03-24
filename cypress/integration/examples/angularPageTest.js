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

    // it("Fill Form using the Home Page form")
})