import Page from "./page";

export default new class ClientsPage extends Page{
    get header (){return cy.get('h1').contains('Our Clients')}
}