import Page from "./page";

export default new class NewsAndEventsPage extends Page{
    get header (){return cy.get('h1').contains('News & Events')}
}