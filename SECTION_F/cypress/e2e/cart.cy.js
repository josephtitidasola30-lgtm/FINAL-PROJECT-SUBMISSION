import CartPage from '../pages/CartPage'

const cart = new CartPage()

describe('SauceDemo Cart Feature', () => {

    beforeEach(() => {

        cy.login('standard_user', 'secret_sauce')

    })

    it('Should add a product to the cart', () => {

        cart.addBackpackButton().click()

        cart.cartBadge()
            .should('be.visible')
            .and('have.text', '1')

        cart.shoppingCart().click()

        cart.cartItems()
            .should('have.length', 1)

        cy.screenshot('Product Added To Cart')

    })

    it('Should remove a product from the cart', () => {

        cart.addBackpackButton().click()

        cart.shoppingCart().click()

        cart.removeBackpackButton().click()

        cart.cartItems()
            .should('have.length', 0)

        cy.screenshot('Product Removed From Cart')

    })

    it('Should update the cart badge when multiple products are added', () => {

        cart.addBackpackButton().click()

        cart.addBikeLightButton().click()

        cart.cartBadge()
            .should('have.text', '2')

        cy.screenshot('Multiple Products Added')

    })

})