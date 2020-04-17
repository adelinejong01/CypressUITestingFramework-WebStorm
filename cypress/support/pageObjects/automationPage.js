class automationPage{
    //This POM page deals with the elements in the automationPracticePage - I & II
    travelToAutomationPracticePage(){
        return cy.visit("https://rahulshettyacademy.com/AutomationPractice/")  }

    getBlinkingText(){
        return cy.get('.blinkingText') }

    getHomeButton(){
        return cy.get('a > .btn')  }

    goBack(){
        return cy.go('back')  }

    getPracticeButton(){
        return cy.get("button[class = 'btn btn-primary']") }

    getRadioButton(){
        return cy.get('input[class = "radioButton"]') }

    getAutoCompleteButton(){
        return cy.get('#autocomplete') }

    getSuggestionBox(){
        return cy.get('.ui-menu-item-wrapper') }

    getLegend(){
        return cy.get('legend') }

    getCheckBoxButton(){
        return cy.get('input[type = "checkbox"]')   }

    getCheckBoxOptionOne(){
        return cy.get("#checkBoxOption1") }

    getDropdown(){
        return cy.get('#dropdown-class-example') }

    getOpenWindow(){
        return cy.get('#openwindow')  }

    getOpenTab(){
        return cy.get('#opentab')  }
}

export default automationPage;