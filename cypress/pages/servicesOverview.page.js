import Page from "./page";

export default new class ServicesOverviewPage extends Page{
    get header (){return cy.contains('Interfolio Professional Services')}
}