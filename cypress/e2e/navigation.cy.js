import NavigationPage from "../pages/navigation.page";
import ForAcademicInstitutionsPage from "../pages/forAcademicInstitutions.page";
import ForResearchFundersPage from "../pages/forResearchFunders.page";
import ForApplicantsPage from "../pages/forApplicants.page";
import ServicesOverviewPage from "../pages/servicesOverview.page";
import ImplementationOverviewPage from "../pages/implementationOverview.page";
import OurCompanyPage from "../pages/ourCompany.page";
import ClientsPage from "../pages/clients.page";
import DataPage from "../pages/data.page";
import ClientCommitteesPage from "../pages/clientCommittees.page";
import CareersPage from "../pages/careers.page";
import ContactPage from "../pages/contact.page";
import ResourcesPage from "../pages/resources.page";
import NewsAndEventsPage from "../pages/newsAndEvents.page";
import GetADemoPage from "../pages/getADemo.page";
import LogInPage from "../pages/logIn.page";
import SearchPage from "../pages/search.page";

describe('Navigation', () => {

  beforeEach(()=>{
    NavigationPage.open()
  })

  it ('For Academic Institutions page opens', () => {
    NavigationPage.products.click()
    NavigationPage.forAcademicInstitutions.click()
    ForAcademicInstitutionsPage.path.should('include','faculty-information-system/')
    ForAcademicInstitutionsPage.header.should('be.visible')
  })
  it('For Research Funders page opens', () => {
    NavigationPage.products.click()
    NavigationPage.forResearchFunders.click()
    ForResearchFundersPage.path.should('include','researchfish/')
    ForResearchFundersPage.header.should('be.visible')
  })
  it('For Applicants page opens', () => {
    NavigationPage.products.click()
    NavigationPage.forApplicants.click()
    ForApplicantsPage.path.should('include','dossier/')
    ForApplicantsPage.header.should('be.visible')
  })
  it('Services overview page opens', () => {
    NavigationPage.services.click()
    NavigationPage.servicesOverview.click()
    ServicesOverviewPage.path.should('include','services/')
    ServicesOverviewPage.header.should('be.visible')
  })
  it('Implementation Overview page opens', () => {
    NavigationPage.services.click()
    NavigationPage.implementationOverview.click()
    ImplementationOverviewPage.path.should('include','services-implementation-overview/')
    ImplementationOverviewPage.header.should('be.visible')
  })
  it('Our Company page opens', () => {
    NavigationPage.aboutUs.click()
    NavigationPage.ourCompany.click()
    OurCompanyPage.path.should('include','company/')
    OurCompanyPage.header.should('be.visible')
  })
  it('Clients page opens', () => {
    NavigationPage.aboutUs.click()
    NavigationPage.clients.click()
    ClientsPage.path.should('include','clients/')
    ClientsPage.header.should('be.visible')
  })
  it('Data page opens', () => {
    NavigationPage.aboutUs.click()
    NavigationPage.data.click()
    DataPage.path.should('include','data/')
    DataPage.header.should('be.visible')
  })
  it('Client Committees page opens', () => {
    NavigationPage.aboutUs.click()
    NavigationPage.clientCommittees.click()
    ClientCommitteesPage.path.should('include','client-committees/')
    ClientCommitteesPage.header.should('be.visible')
  })
  it('Careers page opens', () => {
    NavigationPage.aboutUs.click()
    NavigationPage.careers.click()
    CareersPage.path.should('include','careers/')
    CareersPage.header.should('be.visible')
  })
  it('Contact page opens', () => {
    NavigationPage.aboutUs.click()
    NavigationPage.contact.click()
    ContactPage.path.should('include','contact-us/')
    ContactPage.header.should('be.visible')
  })
  it('All Resources page opens', () => {
    NavigationPage.resources.click()
    NavigationPage.allResources.click()
    ResourcesPage.path.should('include','resources/')
    ResourcesPage.header.should('be.visible')
  })
  it('Blog page opens', () => {
    NavigationPage.resources.click()
    NavigationPage.blog.click()
    ResourcesPage.path.should('include','resources/')
    ResourcesPage.header.should('be.visible')
  })
  it('Case Studies page opens', () => {
    NavigationPage.resources.click()
    NavigationPage.caseStudies.click()
    ResourcesPage.path.should('include','resources/')
    ResourcesPage.header.should('be.visible')
  })
  it('Research page opens', () => {
    NavigationPage.resources.click()
    NavigationPage.research.click()
    ResourcesPage.path.should('include','resources/')
    ResourcesPage.header.should('be.visible')
  })
  it('All News & Events page opens', () => {
    NavigationPage.newsAndEvents.click()
    NavigationPage.allNewsAndEvents.click()
    NewsAndEventsPage.path.should('include', 'news-and-events/')
    NewsAndEventsPage.header.should('be.visible')
  })
  it('Events page opens', () => {
    NavigationPage.newsAndEvents.click()
    NavigationPage.events.click()
    NewsAndEventsPage.path.should('include', 'news-and-events/')
    NewsAndEventsPage.header.should('be.visible')
  })
  it('Press page opens', () => {
    NavigationPage.newsAndEvents.click()
    NavigationPage.press.click()
    NewsAndEventsPage.path.should('include', 'news-and-events/')
    NewsAndEventsPage.header.should('be.visible')
  })
  it('Webinars page opens', () => {
    NavigationPage.newsAndEvents.click()
    NavigationPage.webinars.click()
    NewsAndEventsPage.path.should('include', 'news-and-events/')
    NewsAndEventsPage.header.should('be.visible')
  })
  it('Get a Demo page opens', () => {
    NavigationPage.getADemo.click()
    GetADemoPage.path.should('include', 'demo/')
    GetADemoPage.header.should('be.visible')
  })
  it('Log In page opens', () => {
    NavigationPage.logIn.click()
    LogInPage.path.should('include', '/login')
    LogInPage.header.should('be.visible')
  })
  it('Search page opens', () => {
    NavigationPage.search.click()
    SearchPage.searchInput.should('be.visible')
  })




})