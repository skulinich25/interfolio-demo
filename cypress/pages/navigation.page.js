import Page from "./page";

export default new class NavigationPage extends Page{
    get products(){return  cy.get('#menu-item-dropdown-14412')}
    get forAcademicInstitutions (){return cy.get('[title="For Academic Institutions"]')}
    get forResearchFunders (){return cy.get('[title="For Research Funders"]')}
    get forApplicants (){return cy.get('[title="For Applicants"]')}
    get services(){return cy.get('#menu-item-dropdown-14099')}
    get servicesOverview(){return cy.get('[title="Services Overview"]')}
    get implementationOverview(){return cy.get('[title="Implementation Overview"]')}
    get aboutUs (){return cy.get('#menu-item-dropdown-108')}
    get ourCompany(){return cy.get('[title="Our Company"]')}
    get clients(){return cy.get('[title="Clients"]')}
    get data(){return cy.get('[title="Data"]')}
    get clientCommittees (){return cy.get('[title="Client Committees"]')}
    get careers(){return cy.get('[title="Careers"]')}
    get contact(){return cy.get('[title="Contact"]')}
    get resources(){return cy.get('#menu-item-dropdown-21158')}
    get allResources(){return cy.get('[title="All Resources"]')}
    get blog(){return cy.get('[title="Blog"]')}
    get caseStudies(){return cy.get('[title="Case Studies"]')}
    get research(){return cy.get('[title="Research"]')}
    get newsAndEvents(){return cy.get('#menu-item-dropdown-21167')}
    get allNewsAndEvents(){return cy.get('[title="All News & Events"]')}
    get events(){return cy.get('[title="Events"]')}
    get press(){return cy.get('[title="Press"]')}
    get webinars(){return cy.get('[title="Webinars"]')}
    get getADemo(){return cy.get('.interfolio-button')}
    get logIn(){return cy.get('[href="https://account.interfolio.com/login"]')}
    get search(){return cy.get('[class="interfolio-search-button"]')}
    open(){
        return super.open('/')
    }
}