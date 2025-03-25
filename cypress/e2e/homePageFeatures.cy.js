import HomePage from '../pages/homePage';
import DetailsLinePage from '../pages/detailsLinePage';
import ReportProblemPage from '../pages/reportProblemPage';

const homePage = new HomePage
const detailsLinePage = new DetailsLinePage
const reportProblemPage = new ReportProblemPage

describe('Metro Up Time', () => {

  it('Line Details', () => {
    homePage.acessHomePage()
    homePage.acessDetailsLine()
    detailsLinePage.enterReports()
    detailsLinePage.checkDetailsPage()
  })

  it('Reporting problems', () => {
    homePage.acessHomePage()
    homePage.acessReportProblemLine()
    reportProblemPage.problemReportingInTheSubway("O trem está apagado dentro do túnel.")
    homePage.buttonPages()
    homePage.checkPage()
  })
})
