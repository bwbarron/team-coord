describe('sign up app', function() {
    beforeEach(function() {
        browser.get('http://localhost:8000');
    });

    it('must have the proper page title', function() {
        expect(browser.getTitle()).toEqual('Sign Up Form');
    });

    it('must show last name validation error', function() {
        var requiredMsg = $('.validation-error');
        var name = element.(by.model('user.lname'));
        expect(requiredMsg.isPresent()).toEqual(false);
        name.sendKeys('Johnson');
        name.clear();
        expect(requiredMsg.isPresent()).toEqual(true);
        name.sendKeys('Johnson');
        expect(requiredMsg.isPresent()).toEqual(false);

    });
});