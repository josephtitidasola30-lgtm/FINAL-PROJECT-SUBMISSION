class LogoutPage {

    menuButton() {
        return cy.get('#react-burger-menu-btn')
    }

    logoutLink() {
        return cy.get('[data-test="logout-sidebar-link"]')
    }

    usernameField() {
        return cy.get('[data-test="username"]')
    }

}

export default LogoutPage