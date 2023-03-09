import Page from "./page";

export default new class SearchPage extends Page{
    get searchInput (){return cy.get('[class="search-input"]')}
}