describe('sign up app', function() {
    beforeEach(function() {
        browser.get('http://localhost:8000');
    });

    it('must have the proper page title', function() {
        expect(browser.getTitle()).toEqual('Sign Up Form');
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
});