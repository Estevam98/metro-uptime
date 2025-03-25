class HomePage {
    selectorsList() {
        const selectors = {
            adminButton: "[href='/admin']",
            viewDetails: "[href='/line/line4']",
            reportProblem: "[data-state='closed']",
            checkHomePage: ".text-3xl",
            genericButton: "[type='submit']"
        }

        return selectors

    }

    acessHomePage() {
        cy.visit('https://metro-uptime-sbw5.vercel.app/')
    }

    acessAdmin() {
        cy.get(this.selectorsList().adminButton).click()
    }

    acessDetailsLine() {
        cy.get(this.selectorsList().viewDetails).click()
    }

    acessReportProblemLine() {
        cy.get(this.selectorsList().reportProblem).click()
    }

    checkPage() {
        cy.get(this.selectorsList().checkHomePage)
    }

    buttonPages() {
        cy.get(this.selectorsList().genericButton).click()
    }
}

export default HomePage