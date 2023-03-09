import Page from "./page";

export default new class GetADemoPage extends Page{
    get header (){return cy.get('h1').contains('Get a Demo for Your College or University')}
}