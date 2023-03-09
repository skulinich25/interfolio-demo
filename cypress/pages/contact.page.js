import Page from "./page";

export default new class ContactPage extends Page{
    get header (){return cy.get('h1').contains('Get in Touch')}
}