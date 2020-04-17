class automationPageII{
    //This POM page deals with the elements in the automationPracticePage - I & II
    getNameBox(){
        return cy.get('input[name = "enter-name"]')  }

    getNamePlaceholder(){
        return cy.get('input[placeholder = "Enter Your Name"]') }

    getAlertButton(){
        return cy.get('#alertbtn')  }

    getConfirm(){
        return cy.get('input[value = "Confirm"]')  }

    getSecondChildInTable(){
        return cy.get('tr td:nth-child(2)')  }

    getDisplayedText(){
        return cy.get("#displayed-text")  }

    getHideButton(){
        return cy.get('input[value = "Hide"]')  }

    getShowButton(){
        return cy.get('input[value = "Show"]')  }

    getMouseHoverContent(){
        return cy.get('.mouse-hover-content')  }

    loadFrames(){
        return cy.frameLoaded("#courses-iframe")  }

    frameMentorshipLink(){
        return cy.iframe().find("a[href = '#/mentorship']")  }

    frameInnerBox(){
        return cy.iframe().find(".inner-box")  }

    framePricingTitle(){
        return cy.iframe().find(".pricing-title") }
}

export default automationPageII;