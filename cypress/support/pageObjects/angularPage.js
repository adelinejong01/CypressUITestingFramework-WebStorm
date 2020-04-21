class angularPage {
    //This POM deals with objects on the Angular Page
    travelToAngularPage() {
        return cy.visit("https://rahulshettyacademy.com/angularpractice/")
    }

    getNavigationBar() {
        return cy.get('.navbar-brand')
    }

    getHomeSubHeader() {
        return cy.get(':nth-child(1) > .nav-link')
    }

    getShopSubHeader() {
        return cy.get(':nth-child(2) > .nav-link')
    }

    getEmailBox() {
        return cy.get(':nth-child(2) > .form-control')
    }

    getPasswordBox() {
        return cy.get('#exampleInputPassword1')
    }

    getGenderBox() {
        return cy.get('#exampleFormControlSelect1')
    }

    selectEmployed() {
        return cy.get('#inlineRadio2')  }

    getSubmitButton(){
        return cy.get('.btn')  }

    getAlertBox(){
        return cy.get('.alert')  }
}

export default angularPage;