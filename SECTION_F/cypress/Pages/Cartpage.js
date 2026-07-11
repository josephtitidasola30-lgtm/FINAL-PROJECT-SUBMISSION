class CartPage {

    addBackpackButton() {
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    }

    addBikeLightButton() {
        return cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')
    }

    removeBackpackButton() {
        return cy.get('[data-test="remove-sauce-labs-backpack"]')
    }

    shoppingCart() {
        return cy.get('.shopping_cart_link')
    }

    cartBadge() {
        return cy.get('.shopping_cart_badge')
    }

    cartItems() {
        return cy.get('.cart_item')
    }

}

export default CartPage