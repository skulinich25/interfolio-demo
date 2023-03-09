import Page from "./page";

export default new class LogInPage extends Page{
    get header (){return cy.get('h1').contains('Sign In')}
}