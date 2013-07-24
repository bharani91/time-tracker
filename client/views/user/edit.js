Template.editProfile.user = function() {
    return Meteor.user();
};

Template.editProfile.rendered = function() {
    Validation.myValidation (Validation.editProfileRules, Validation.editProfileMessages, Validation.editProfileForm, Validation.messagePlacement, Validation.editProfileHandleSubmit);
};
