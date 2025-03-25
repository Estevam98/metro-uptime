class AdminPage {
    selectorsList() {
        const selectors = {
            checkAdminDashboard: ".font-bold",
            adminPassword: ".bg-background[type='password']",
        }

        return selectors

    }

    enterAdminPassword(password) {
        cy.get(this.selectorsList().adminPassword).type(password)
    }

    checkAdminPage() {
        cy.get(this.selectorsList().checkAdminDashboard)
    }
}

export default AdminPage