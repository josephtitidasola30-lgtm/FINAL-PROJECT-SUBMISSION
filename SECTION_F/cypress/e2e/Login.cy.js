import LoginPage from '../Pages/LoginPage'

const loginPage = new LoginPage()

describe('SauceDemo Login Feature', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Should login successfully with valid credentials', () => {

        // Intercept all network requests
        cy.intercept('**').as('networkRequest')

        loginPage.username().type(Cypress.env('username'))
        loginPage.password().type(Cypress.env('password'))
        loginPage.loginButton().click()

        // Wait for the first network request
        cy.wait('@networkRequest')

        cy.url().should('include', '/inventory.html')
        cy.get('.title').should('have.text', 'Products')

        cy.screenshot('Valid Login')

    })

    it('Should not login with invalid credentials', () => {

        loginPage.username().type(Cypress.env('username'))
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