class homePage{
    //This deals with the objects on the Home Page. Yayy!! POM started.
    travelToHomePage(){
        return cy.visit("http://www.qaclickacademy.com/") }

    getTitleBox(){
        return cy.get('.container > .text-center > h2') }

    getErrorBox(){
        return cy.get('.listbuilder-popup-field-error')  }

    getEmailInputBox(){
        return cy.get("input")  }

    getAlertBox(){
        return cy.get('.sumome-react-wysiwyg-move-handle') }

    getAlertBoxII(){
        return cy.get('.sumome-react-wysiwyg-move-handle > div > button')  }

    getNameBox(){
        return cy.get('input[name = "name"]:nth-child(2)') }

    getTwoWayDataBindingBox(){
        return cy.get(':nth-child(4) > .ng-untouched') }

    getSecondChild(){
        return cy.get('input[name = "name"]:nth-child(2)')  }

    getGenderBox(){
        return cy.get('select') }

    getEntrepreneurButton(){
        return cy.get('input[id = "inlineRadio3"]') }

    getShopLink(){
        return cy.get('a[href = "/angularpractice/shop"]') }
}

export default homePage;