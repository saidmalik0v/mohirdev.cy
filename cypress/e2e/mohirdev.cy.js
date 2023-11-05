import Registration from '../PageObject/registration'
function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

describe('Registrtaion', () => {

  it('Registration with correct data', () => {

    const registr = new Registration
    cy.viewport(1920, 1080)
    registr.visit()
    registr.loginbtn().click()
    registr.regbtn().click()
    registr.namefld().type("Muhammad")
    registr.surnamefld().type("Saidmalikov")
    registr.telfld().type("94 "+randomInteger(100, 999)+" 00 00")
    registr.passfld().type("muhammad1911")
    registr.confirmbtn().click()
    registr.codefld().type("123456")
    registr.confirmbtn().click()

  })

  it('Registration with incorrect data', () => {

    const registr = new Registration
    cy.viewport(1920, 1080)
    registr.visit()
    registr.loginbtn().click()
    registr.regbtn().click()
    registr.namefld().type("123456")
    registr.surnamefld().type("123456")
    registr.telfld().type("negative")
    registr.passfld().type("fail")
    registr.confirmbtn().should("be.disabled")
    registr.errpass().should("be.visible")
  })

  it('Registration with incorrect sms code', () => {

    const registr = new Registration
    cy.viewport(1920, 1080)
    registr.visit()
    registr.loginbtn().click()
    registr.regbtn().click()
    registr.namefld().type("Muhammad")
    registr.surnamefld().type("Saidmalikov")
    registr.telfld().type("94 "+randomInteger(100, 999)+" 00 00")
    registr.passfld().type("muhammad1911")
    registr.confirmbtn().click()
    registr.codefld().type("123456")
    registr.confirmbtn().click()
    registr.errsms().should("be.visible")
  })

  it('Registration with empty data', () => {

    const registr = new Registration
    cy.viewport(1920, 1080)
    registr.visit()
    registr.loginbtn().click()
    registr.regbtn().click()

    Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes("A text for parsing must be a string")) {
    return false;
    }
    return true;
    });

    registr.namefld().type("         ")
    registr.surnamefld().type("         ")
    registr.telfld().type("         ")
    registr.passfld().type("         ")
    registr.confirmbtn().click()

  })  

})