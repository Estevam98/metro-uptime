class DetailsLinePage {
    selectorsList() {
        const selectors = {
            userReport: "[role='tab']",
            checkUserReport: ".tracking-tight",
        }

        return selectors

    }

    enterReports() {
        cy.get(this.selectorsList().userReport).eq(2).click()
    }

    checkDetailsPage() {
        cy.get(this.selectorsList().checkUserReport)
    }
}

export default DetailsLinePage