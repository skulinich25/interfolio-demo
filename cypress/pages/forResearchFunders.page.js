import Page from "./page";

export default new class ForResearchFundersPage extends Page{
    get header (){return cy.contains('Researchfish')}
}