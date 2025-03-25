import HomePage from '../pages/homePage';
import AdminPage from '../pages/adminPage';

const homePage = new HomePage
const adminPage = new AdminPage

describe('Metro Up Time', () => {

  it('Attempt to register password Admin', () => {
    homePage.acessHomePage()
    homePage.acessAdmin()
    adminPage.checkAdminPage()
    adminPage.enterAdminPassword("Admin123")
    homePage.buttonPages()
  })
})

  it('Login attempt without password', () => {
    homePage.acessHomePage()
    homePage.acessAdmin()
    adminPage.checkAdminPage()
    homePage.buttonPages()
  })
