import CheckoutPage from '../pages/CheckoutPage'

const checkout = new CheckoutPage()

describe('SauceDemo Checkout Feature', () => {

    beforeEach(() => {

        cy.login('standard_user', 'secret_sauce')

    })

    it('Should complete checkout successfully', () => {

        checkout.addBackpackButton().click()

        checkout.cartIcon().click()

        checkout.checkoutButton().click()

        checkout.firstName().type('Joseph')

        checkout.lastName().type('Titilayo')

        checkout.postalCode().type('100001')

        checkout.continueButton().click()

        checkout.finishButton().click()

        checkout.completeHeader()
            .should('have.text', 'Thank you for your order!')

        cy.screenshot('Checkout Successful')

    })

    it('Should validate successful order', () => {

        checkout.addBackpackButton().click()

        checkout.cartIcon().click()

        checkout.checkoutButton().click()

        checkout.firstName().type('Joseph')

        checkout.lastName().type('Titilayo')

        checkout.postalCode().type('100001')

        checkout.continueButton().click()

        checkout.finishButton().click()

        checkout.completeHeader()
            .should('contain', 'Thank you for your order!')

        cy.url().should('include', 'checkout-complete.html')

        cy.screenshot('Order Completed')

    })

})