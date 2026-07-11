import LoginPage from '../pages/LoginPage'

const loginPage = new LoginPage()

describe('SauceDemo Login Feature', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('Should login successfully with valid credentials', () => {

        loginPage.username().type('standard_user')
        loginPage.password().type('secret_sauce')
        loginPage.loginButton().click()

        cy.url().should('include', '/inventory.html')
        cy.get('.title').should('have.text', 'Products')

        cy.screenshot('Valid Login')

    })

    it('Should not login with invalid credentials', () => {

        loginPage.username().type('standard_user')
        loginPage.password().type('wrong_password')
        loginPage.loginButton().click()

        loginPage.errorMessage()
            .should('be.visible')
            .and('contain', 'Username and password do not match any user in this service')

        cy.screenshot('Invalid Login')

    })

    it('Should display an error when username and password are empty', () => {

        loginPage.loginButton().click()

        loginPage.errorMessage()
            .should('be.visible')
            .and('contain', 'Username is required')

        cy.screenshot('Empty Fields')

    })

})