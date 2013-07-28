Template.recover_email.rendered = function() {
    
        // password reset email form
        Validation.myValidation (Validation.recoverEmailRules, Validation.recoverEmailMessages, Validation.recoverEmailForm, Validation.messagePlacement, Validation.recoverEmailHandleSubmit);    
    
    
};
