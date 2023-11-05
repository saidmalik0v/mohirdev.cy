class Registration {
    visit(){
    return cy.visit('https://mohirdev.uz/blog') //website link
    }
    loginbtn(){ 
    return cy.get('#login') //login button
    }
    regbtn(){
    return cy.get('button[class="chakra-button css-8nerh7"]') //open registration page btn
    }
    namefld(){
    return cy.get('input[placeholder="Ismingizni yozing"]') //username field
    }
    surnamefld(){
    return cy.get('input[placeholder="Familiyangizni yozing"]') //surname field
    }
    telfld(){
    return cy.get('input[type="tel"') //phone number field
    }
    passfld(){
    return cy.get('input[type="password"]') //password field
    }
    confirmbtn(){
    return cy.get('button[type="submit"]') //confirm infos button
    }
    codefld(){
    return cy.get('input[name="code"]') //sms code field
    }
    errpass(){
    return cy.get('div[class="chakra-form__error-message css-502kp3"]') //password field error message
    }
    errsms(){
    return cy.get('div[role="alert"]') //incorrect sms code error message
    }
}
export default Registration