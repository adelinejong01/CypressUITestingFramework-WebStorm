# CypressUITestingFramework-WebStorm :tangerine:#
---------------
:octocat: A Cypress testing framework which runs few tests which put to test different UI aspects of the following websites:
https://rahulshettyacademy.com/angularpractice/  
https://rahulshettyacademy.com/AutomationPractice/  
http://www.qaclickacademy.com/  

## DESCRIPTION ##
The test scripts were not built based on a set of specific test cases. They were designed to learn and to test specific aspects of the websites, giving ample scope to leverage the multiple features of Cypress.

Because Cypress can be used both HTML and Angular pages, we have taken into consideration both the websites and build the test scripts accordingly.

The framework has used the following tools for handling the many aspects of testing and reporting:
* Cypress
* GitHub
* Jenkins
* jQuery
* Cypress Dashboard
* WebStorm
* JavaScript
* Chai
* Mocha

The testing framework tests of 5 pages of different websites. They are:
1. AngularHomePage
2. AngularShoppingPage
3. Automation Practice Page Test I
4. Automation Practice Page Test II
5. Home Page Test

The Automation Practice Page aspect of the respective website contains a lot of test information and hence, it was decided to split it into two different test scripts.

We will deep-dive into what the respective page files test below:

#### 1. AngularHomePage ####
This complete test file consists of two tests on the https://rahulshettyacademy.com/angularpractice/ webpage which is referred to as the Angular Home Page:
* ***Angular Home Page: Header***
This test script verifies if the header of the webpage consists of "ProtoCommerce", "Home" and "Shop" links
* ***Angular Home Page: Form***
This test script fills the form in the webpage with the required information and verifies if submitting the information throws an alert saying "Success"

#### 2. AngularShoppingPage ####
This complete test file consists of two tests on the https://rahulshettyacademy.com/angularpractice/ webpage, but because this test script is mostly concerned with testing the shopping aspect of the webpage, this is referred to as the Angular Shopping Page:
* ***Home Page Verification***
This test script also verifies the form in the Home Page. But what this does is it uses abstraction to handle the data present in the test script. The test finally verifies that the Entrepreneur button is disabled in the page
* ***Shopping Test***
This test script selects the 'Blackberry' and 'Nokia Edge' phones from the shopping catalog and adds them to the cart. The selection is made by saving the logic of adding the phones to cart by using a function called "selectProduct()". This function is called and the names of the phone brands are given as the input.
* ***Cart Item Verification***
This test script verifies that the items in the cart are present and that the individual costs of the items in the cart are adding up to the Total Cost calculated in the webpage
* ***Cart Checkout Test***
This test script enters the delivery location, makes the purchase and verifies the Success Alert message

#### 3. Automation Practice Page Test I ####
* ***Automation Practice Page Header***
* ***Radio Button Example Functionality***
* ***Dropdown Functionality: Suggestion Class Example***
* ***Dropdown Functionality: Dropdown Example***
* ***Checkbox Functionality***
* ***Switch Window Functionality***
* ***Switch Tab Functionality***

#### 4. Automation Practice Page Test II ####
* ***Switch To Alert Functionality: Part I***
* ***Switch To Alert Functionality: Part II***
* ***Web Table Example: Part I***
* ***Web Table Example: Part II***
* ***Element Displayed Example***
* ***Mouse Hover Example***
* ***Handling frames***

#### 5. Home Page Test ####
* ***Closing Alert***
* ***Handling Title Text***
* ***Alert Subscription***
* ***Email Subscription Test***
