import Page from "./page";

export default new class HomePage extends Page{
get profileAvatar(){return cy.get('.intf-profile-photo-wrap')}
}