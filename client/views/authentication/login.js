Template.login.events({
    "keyup #password": function (event) {
        if (event.type == "keyup" && event.which == 13) {
            Validation.login();
        }
    },

    "click #login": function(event) {
        Validation.login();
    }
});

Template.login.rendered = function() {
    Validation.myValidation (Validation.loginRules, Validation.loginMessages, Validation.loginForm, Validation.messagePlacement, Validation.loginHandleSubmit);
};


