import Page from "./page";

export default new class ForApplicantsPage extends Page{
    get header (){return cy.contains('Dossier')}
}