class CheckoutPage {

    addBackpackButton() {
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    }

    cartIcon() {
        return cy.get('.shopping_cart_link')
    }

    checkoutButton() {
        return cy.get('[data-test="checkout"]')
    }

    firstName() {
        return cy.get('[data-test="firstName"]')
    }

    lastName() {
        return cy.get('[data-test="lastName"]')
    }

    postalCode() {
        return cy.get('[data-test="postalCode"]')
    }

    continueButton() {
        return cy.get('[data-test="continue"]')
    }

    finishButton() {
        return cy.get('[data-test="finish"]')
    }

    completeHeader() {
        return cy.get('.complete-header')
    }

}
export default CheckoutPage