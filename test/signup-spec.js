describe('sign up app', function() {
    var emailRequiredMessage = $('.email-required-error');
    var emailInvalidMessage = $('.email-invalid-error');
    var emailInput = element(by.model('user.email'));
    beforeEach(function() {
        browser.get('http://localhost:8000');
    });

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
});