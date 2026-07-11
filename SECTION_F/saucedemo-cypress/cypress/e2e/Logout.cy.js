import LogoutPage from '../pages/LogoutPage'

const logout = new LogoutPage()

describe('SauceDemo Logout Feature', () => {

    beforeEach(() => {

        cy.login('standard_user', 'secret_sauce')

    })

    it('Should logout successfully', () => {

        logout.menuButton().click()

        logout.logoutLink().click()

        cy.url().should('eq', 'https://www.saucedemo.com/')

        logout.usernameField().should('be.visible')

        cy.screenshot('Logout Successful')

    })

})