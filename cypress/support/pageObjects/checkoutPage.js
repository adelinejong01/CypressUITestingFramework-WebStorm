class checkoutPage{
    //This deals with the objects in the CART and similar functionality pages
    getCheckoutButton(){
        return cy.get('a.nav-link.btn.btn-primary') }

    getCartCheckoutButton(){
        return cy.contains('Checkout') }

    getDeliverySpace(){
        return cy.get('input[id = "country"]')  }

    getFirstSuggestion(){
        return cy.get('.suggestions > ul > li > a')  }

    getTermsConditionsCheckBox(){
        return cy.get('label[for = "checkbox2"]')  }

    getTotalCartCost(){
        return cy.get('h3 strong')  }

    getIndividualItemsCost(){
        return cy.get('tr td:nth-child(4) strong')  }

    getPurchaseButton(){
        return cy.get('input[value = "Purchase"]')  }

    checkSuccessAlert(){
        return cy.get('div.alert.alert-success.alert-dismissible')  }

    getAlert(){
        return cy.get('.alert')  }

    waitForThreeSeconds(){
        return cy.wait(3000)  }
}

export default checkoutPage;