import Page from "./page";

export default new class AuthPage extends Page{
    get inputEmail(){return cy.get('#username')}
    get inputPassword(){return cy.get('#password')}
    get buttonSignIn(){return cy.get('[aria-label="Sign In"][type="button"]')}
    get alertMessage(){return  cy.get('[ng-bind-html="alert.message"]')}
    open(){
        super.open('/')
        cy.get('[href="https://account.interfolio.com/login"]').click()
    }

    signIn(email,password){
        this.inputEmail.type(email)
        this.inputPassword.type(password)
        this.buttonSignIn.click()

    }

}