Template.password_update.rendered = function() {
    if(Session.get("resetPassword")) {
        // update password
        Validation.myValidation (Validation.passwordUpdateRules, Validation.passwordUpdateMessages, Validation.passwordUpdateForm, Validation.messagePlacement, Validation.passwordUpdateHandleSubmit);    
    } 
};