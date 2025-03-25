class ReportProblemPage {
    selectorsList() {
        const selectors = {
            line: '[aria-labelledby="radix-:r7:"]',
            station: '[aria-labelledby="radix-:rm:"]',
            comboBox: "[type='button']",
            problemType: "[role='radio']",
            problemDetails: "[placeholder='Detalhes do problema...']",
        }

        return selectors

    }

    problemReportingInTheSubway(lineProblem) {
        cy.get(this.selectorsList().comboBox).eq(1).click()
        cy.get(this.selectorsList().line).click()
        cy.get(this.selectorsList().comboBox).eq(2).click()
        cy.get(this.selectorsList().station).click()
        cy.get(this.selectorsList().problemType).eq(0).click()
        cy.get(this.selectorsList().problemDetails).type(lineProblem)
    }
}

export default ReportProblemPage