
function RegistrationPageLocators() {
    
    this.firstNameField = element(by.css("input[name='name']"))
    this.emailField = element(by.css("input[name='email']"))
    this.passwordField = element(by.css("input[placeholder='Password']"))
    this.termsCheckBox = element(by.css("input[type='checkbox']"))
    this.genderList = element(by.cssContainingText("select[id='exampleFormControlSelect1'] option","Female"))

    this.hitRegistrationURL = function () {
        browser.get("https://qaclickacademy.github.io/protocommerce/")
    }

}

module.exports = new RegistrationPageLocators()