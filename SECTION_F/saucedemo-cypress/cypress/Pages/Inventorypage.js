class InventoryPage {

    pageTitle() {
        return cy.get('.title')
    }

    products() {
        return cy.get('.inventory_item')
    }

    productNames() {
        return cy.get('.inventory_item_name')
    }

}

export default InventoryPage