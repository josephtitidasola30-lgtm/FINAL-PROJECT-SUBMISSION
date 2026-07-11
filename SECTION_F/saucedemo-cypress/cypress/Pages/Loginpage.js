class LoginPage {

    username() {
        return cy.get('[data-test="username"]')
    }

    password() {
        return cy.get('[data-test="password"]')
    }

    loginButton() {
        return cy.get('[data-test="login-button"]')
    }

    errorMessage() {
        return cy.get('[data-test="error"]')
    }

}

export default LoginPage