describe("Test 3: Handing advanced functionalities of Cypress", function(){

    it("Handling web tables", function(){
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

            const text = $el.text()
            if(text.includes("Python")){
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price){
                    //const priceText = price.text()
                    expect(price.text()).to.equal("25");
                })
            }
        })
    })

    it("Mouse hover functionality", function () {
        //Here we cannot use Cypress commands to invoke mouse hover actions
        cy.get('.mouse-hover-content').invoke('show');    //'button[id="mousehover"]'
        cy.contains("Top").click();

        //Verifying that clicking on the button has taken to the TOP of the page
        cy.url().should('include', 'top');
    })

    it("Opening a Child Tab", function(){
        //here, we are trying to open a tab using 'href' attribute and prop() method
        cy.get('#opentab').then(function(element){
            const urlText = element.prop('href');
            cy.log(urlText);

            //visit() method cannot be used to access browsers from other domains
            cy.visit(urlText);
        })
    })
})
