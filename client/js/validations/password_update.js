var recoverEmailError, passwordUpdateError;


/*==========  RECOVERY EMAIL  ==========*/

Validation.recoverEmailSubmit = function () {
	
	// get the values form the input elements 
	var email = $("#email").val();	
	Accounts.forgotPassword({email: email}, function(error){
		if (error) {
			$("#recoverEmail").button('reset');
			if (recoverEmailError >= 1) {
				$("#main div.alert:first").fadeOut(100).fadeIn(100);
			} else {
				$("form#recoverEmailForm").before("<div class='alert alert-error'>" + error.reason + "</div>");
				recoverEmailError = 1;
			}
		} else {
			Meteor.Router.to("/login");
		}
	});
	
};


Validation.recoverEmailRules = {
	rules: {
		email: {
			required: true,
			email: true
		}
	}
};


Validation.recoverEmailMessages = {
	messages: {
		email: {
			required: "We need your email adress to contact you",
			email: "Your email must be in the format of name@domain.com"
		}
	}
};

Validation.recoverEmailForm = "#recoverEmailForm";


Validation.recoverEmailHandleSubmit = {
	submitHandler: function () {
		$("#recoverEmail").button('loading');
		Validation.recoverEmailSubmit();
		return false;
	}
};




/*==========  PASSWORD UPDATE  ==========*/

Validation.passwordUpdateSubmit = function () {
	var password = $("#passwordUpdate").val();	
	Accounts.resetPassword(Session.get('resetPassword'), password, function(error){
		if (error) {
			$("#passwordUpdateBtn").button('reset');
			if (passwordUpdateError >= 1) {
				$("#main div.alert:first").fadeOut(100).fadeIn(100);
			} else {
				$("form#passwordUpdateForm").before("<div class='alert alert-error'>" + error.reason + "</div>");
				passwordUpdateError = 1;
			}
		} else {
			Meteor.Router.to("/login");
		}
	});
	
};


Validation.passwordUpdateRules = {
	rules: {
		passwordUpdate: {
			required: true,
			minlength: 3,
			maxlength: 12
		},
		password_againUpdate: {
			required: true,
			equalTo: "#passwordUpdate",
			minlength: 3,
			maxlength: 12
		},
	}
};


Validation.passwordUpdateMessages = {
	messages: {
		passwordUpdate: {
			required: "Please enter a valid password",
			minlength: "At least 3 chars!",
			maxlength: "No longer then 12 chars!"

		},
		password_againUpdate: {
			required: "Retype your password",
			equalTo: "The passwords have to match",
			minlength: "At least 3 chars!",
			maxlength: "No longer then 12 chars!"
		}
	}
};

Validation.passwordUpdateForm = "#passwordUpdateForm";


Validation.passwordUpdateHandleSubmit = {
	submitHandler: function () {
		$("#passwordUpdateBtn").button('loading');
		Validation.passwordUpdateSubmit();
		return false;
	}
};
