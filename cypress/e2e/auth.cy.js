import AuthPage from "../pages/auth.page";
import HomePage from "../pages/home.page";


describe('Authentication',()=>{
    beforeEach(()=>{
       AuthPage.open()
    })
    it('Login with valid credentials', ()=>{
        AuthPage.signIn(Cypress.env('email'),Cypress.env('password'))
        HomePage.profileAvatar.should('be.visible')
    })
    it('Login with invalid credentials', ()=>{
        AuthPage.signIn(Cypress.env('email'),'123456')
        AuthPage.alertMessage.should('be.visible')
            .should('have.text', 'Your email or password is incorrect.')
    })

})