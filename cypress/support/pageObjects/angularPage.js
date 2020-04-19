class angularPage{
    //This POM deals with objects on the Angular Page
    travelToAngularPage(){
        return cy.visit("https://rahulshettyacademy.com/angularpractice/")  }

    getNavigationBar(){
        return cy.get('.navbar-brand') }

    getHomeSubHeader(){
        return cy.get(':nth-child(1) > .nav-link')}

    getShopSubHeader(){
        return cy.get(':nth-child(2) > .nav-link') }


}

export default angularPage;