import Page from "./page";

export default new class DataPage extends Page{
    get header (){return cy.get('h1').contains('Interfolio and Academic Data')}
}