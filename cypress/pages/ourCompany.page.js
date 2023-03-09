import Page from "./page";

export default new class OurCompanyPage extends Page{
    get header (){return cy.get('h1').contains('Our Company')}

}