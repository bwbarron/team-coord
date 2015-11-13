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
    })
});