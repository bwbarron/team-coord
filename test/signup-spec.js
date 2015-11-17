describe('sign up app', function() {
    var emailRequiredMessage = $('.email-required-error');
    var emailInvalidMessage = $('.email-invalid-error');
    var emailInput = element(by.model('user.email'));
    beforeEach(function() {
        browser.get('http://localhost:8000');
    });

    function fillInValidForm() {
        emailInput.sendKeys('johnsmith123@gmail.com');
        var name = element(by.model('user.lname'));
        name.sendKeys('Smith');
        var bday = element(by.model('user.birthdate'));
        bday.sendKeys('05/12/1995');
        var passwordInp = element(by.model("user.pass"));
        passwordInp.sendKeys('123');
        var passConfInp = element(by.model("user.pass_conf"));
        passConfInp.sendKeys('123');
    }

    it('must have the proper page title', function() {
        expect(browser.getTitle()).toEqual('Sign Up Form');
    });

    it('must show required validation error', function() {
        expect(emailRequiredMessage.isPresent()).toEqual(false);
        emailInput.sendKeys('abc');
        emailInput.clear();
        expect(emailRequiredMessage.isPresent()).toEqual(true);
        emailInput.sendKeys('abc');
        expect(emailRequiredMessage.isPresent()).toEqual(false);
    });

    it('must show invalid email error', function() {
        expect(emailInvalidMessage.isPresent()).toEqual(false);
        emailInput.sendKeys('johnsmith123gmailcom');
        expect(emailInvalidMessage.isPresent()).toEqual(true);
        emailInput.clear();
        emailInput.sendKeys('johnsmith123gmail.com');
        expect(emailInvalidMessage.isPresent()).toEqual(true);
        emailInput.clear();
        emailInput.sendKeys('johnsmith123@gmail.com');
        expect(emailInvalidMessage.isPresent()).toEqual(false);
        emailInput.clear();
    });

    it('must show last name required error', function() {
        var requiredMsg = $('.validation-error');
        var name = element(by.model('user.lname'));
        expect(requiredMsg.isPresent()).toEqual(false);
        name.sendKeys('Johnson');
        name.clear();
        expect(requiredMsg.isPresent()).toEqual(true);
        name.sendKeys('Johnson');
        expect(requiredMsg.isPresent()).toEqual(false);
    });

    it("must display missing password error message", function () {
        var passwordInp = element(by.model("user.pass"));
        var passErrorMsg = $("#missing-pass");
        passwordInp.sendKeys("a");
        expect(passErrorMsg.isPresent()).toEqual(false);
        passwordInp.clear();
        expect(passErrorMsg.isPresent()).toEqual(true);
    });

    it("must display missing password confirmation error message", function () {
        var passConfInp = element(by.model("user.pass_conf"));
        var passConfMissingMsg = $("#missing-pass-conf");
        passConfInp.sendKeys("a");
        expect(passConfMissingMsg.isPresent()).toEqual(false);
        passConfInp.clear();
        expect(passConfMissingMsg.isPresent()).toEqual(true);
    });

    it("must display not matching error", function () {
        var passwordInp = element(by.model("user.pass"));
        var passConfInp = element(by.model("user.pass_conf"));
        var passNotMatchingMsg = $("#pass-matching-error");

        passwordInp.sendKeys("asdf");
        passConfInp.sendKeys("qwerty");
        expect(passNotMatchingMsg.isPresent()).toEqual(true);
    });

    it('must show birthday required validation error', function() {
        var birthdayRequired = $('.validation-error');
        var bday = element(by.model('user.birthdate'));
        expect(birthdayRequired.isPresent()).toEqual(false);
        bday.sendKeys('04/18/1990');
        bday.clear();
        expect(birthdayRequired.isPresent()).toEqual(true);
        bday.sendKeys('07/19/2014');

    });

    it('must show invalid birthday validation error', function() {
       var invalidBdayMessage = $('.bday-invalid-error');
       var bdayInput = element(by.model('user.birthdate'));
       expect(invalidBdayMessage.isPresent()).toEqual(false);
       bdayInput.sendKeys('8/456/48862');
       expect(invalidBdayMessage.isPresent()).toEqual(true);
       bdayInput.clear();
       bdayInput.sendKeys('02/23/1994');
       expect(invalidBdayMessage.isPresent()).toEqual(false);
       bdayInput.clear();
       bdayInput.sendKeys('09/18/2015');
       expect(invalidBdayMessage.isPresent()).toEqual(true);

    });

    it('must disable submit on invalid form', function() {
        var submitButton = element(by.buttonText('Submit'));
        expect(submitButton.getAttribute('disabled')).toEqual('true');
        fillInValidForm();
        expect(submitButton.getAttribute('disabled')).toBe(null);
        emailInput.clear();
        expect(submitButton.getAttribute('disabled')).toEqual('true');
    });

    it('must show confirmation message', function() {
        var confirmationMessage = $('.alert-success');
        expect(confirmationMessage.isDisplayed()).toEqual(false);
        fillInValidForm();
        element(by.buttonText('Submit')).click();
        expect(confirmationMessage.isPresent()).toEqual(true);
    })
});