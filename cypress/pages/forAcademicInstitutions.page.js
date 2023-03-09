import Page from "./page";

export default new class ForAcademicInstitutionsPage extends Page{
get header(){return cy.contains('Modernize Faculty Affairs Processes')}
}