import Page from "./page";

export default new class CareersPage extends Page{
    get header (){return cy.get('h1').contains('Careers')}
}