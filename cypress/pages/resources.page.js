import Page from "./page";

export default new class ResourcesPage extends Page{
    get header (){return cy.get('h1').contains('Interfolio Resources')}
}