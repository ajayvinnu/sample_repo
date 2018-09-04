var regPage = require("./RegsitrationPage.js")
describe("Registering a user", function() {

	beforeEach(function () {
		regPage.hitRegistrationURL()
		browser.driver.manage().window().maximize()
	})
	
	it("Verifies User Registration", function() {
		
		
		
		
		regPage.firstNameField.sendKeys("test")
		regPage.emailField.sendKeys("user")
		regPage.passwordField.sendKeys("shopinguser001@yopmail.com")
		regPage.termsCheckBox.click()
		regPage.genderList.click()
		element.all(by.css("input[name='inlineRadioOptions']")).first().click()
		element(by.buttonText("Submit")).click().then(function() {
			element(by.css("div[class*='alert-success']")).getText().then(function(text) {
				console.log(text)
			})
		})
		
		element(by.css("input[name='name']")).clear()
		element(by.css("input[name='name']")).sendKeys("m").then(function() {
			element(by.css("div[class='alert alert-danger']")).getText().then(function(text) {
				console.log(text)
			})
		})
		
	})
})