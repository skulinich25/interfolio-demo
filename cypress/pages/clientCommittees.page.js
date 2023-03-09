import Page from "./page";

export default new class ClientCommitteesPage extends Page{
    get header (){return cy.get('h1').contains('Client Committees')}
}