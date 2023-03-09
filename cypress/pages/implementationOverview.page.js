import Page from "./page";

export default new class ImplementationOverviewPage extends Page{
    get header (){return cy.contains('Implementation Methodology')}
}