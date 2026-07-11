import InventoryPage from '../pages/InventoryPage'

const inventory = new InventoryPage()

describe('SauceDemo Inventory Feature', () => {

    beforeEach(() => {

        cy.login('standard_user', 'secret_sauce')

    })

    it('Should load all products successfully', () => {

        inventory.pageTitle()
            .should('have.text', 'Products')

        inventory.products()
            .should('have.length', 6)

        cy.screenshot('Inventory Loaded')

    })

    it('Should validate product names', () => {

        inventory.productNames()
            .should('have.length', 6)

        inventory.productNames()
            .eq(0)
            .should('have.text', 'Sauce Labs Backpack')

        inventory.productNames()
            .eq(1)
            .should('have.text', 'Sauce Labs Bike Light')

        inventory.productNames()
            .eq(2)
            .should('have.text', 'Sauce Labs Bolt T-Shirt')

        inventory.productNames()
            .eq(3)
            .should('have.text', 'Sauce Labs Fleece Jacket')

        inventory.productNames()
            .eq(4)
            .should('have.text', 'Sauce Labs Onesie')

        inventory.productNames()
            .eq(5)
            .should('have.text', 'Test.allTheThings() T-Shirt (Red)')

        cy.screenshot('Inventory Product Names')

    })

})