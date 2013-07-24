var createUserError;


/*==========  SIGNUP  ==========*/


Validation.createUserAccount = function () {
	
	// get the values form the input elements 
	var username = $("#usernameSignup").val().toLowerCase();
	var email = $("#email").val().toLowerCase();	
	var password = $("#passwordSignup").val();
	var companyName = $("#companyName").val();	
	var firstName = $("#firstName").val();	
	var lastName = $("#lastName").val();	

	Accounts.createUser({
		username: username, 
		password: password, 
		email: email, 
		profile: {
			role: "admin",
			firstName: firstName, 
			lastName: lastName,
			companyName: companyName
		}
	}, function(error) {
		if (error) {
			//$("#signupForm div .alert").remove();
			$("#createUser").button('reset');
			if (createUserError >= 1) {
				$("#main div.alert:first").fadeOut(100).fadeIn(100);
			} else {
				$("form#signupForm").before("<div class='alert alert-error'>" + error.reason + "</div>");
				createUserError = 1;
			}
		} else {
			Meteor.Router.to("/");
		}
	});
	
};


Validation.signupRules = {
	rules: {
		usernameSignup: {
			required: true,
			alphanumeric: true,
			minlength: 2
		},
		email: {
			required: true,
			email: true
		},
		passwordSignup: {
			required: true
		},
		password_againSignup: {
			required: true,
			equalTo: "#passwordSignup",
			minlength: 3,
			maxlength: 12
		},
		firstName: {
			required: true,
			minlength: 3,
			maxlength: 50
		},
		lastName: {
			required: true,
			minlength: 3,
			maxlength: 50
		},
		companyName: {
			required: true,
			minlength: 3,
			maxlength: 50
		},
	}
};


Validation.signupMessages = {
	messages: {
		usernameSignup: {
			required: "<strong>Note!</strong> required *",
			alphanumeric: "Must be alphanumerical",
			minlength: "must be at least 2 chars"
		},
		email: {
			required: "We need your email adress to contact you",
			email: "Your email must be in the format of name@domain.com"
		},
		password_againSignup: {
			required: "Retype your password",
			equalTo: "The passwords have to match",
			minlength: "At least 3 chars!",
			maxlength: "No longer then 12 chars!"
		},
		firstName: {
			required: "What is your first name?",
			minlength: "At least 3 chars!",
			maxlength: "no longer then 50 chars!"
		},
		lastName: {
			required: "What is your last name?",
			minlength: "At least 3 chars!",
			maxlength: "no longer then 50 chars!"
		},
		companyName: {
			required: "What is your company's name?",
			minlength: "At least 3 chars!",
			maxlength: "no longer then 50 chars!"	
		}
	}
};

Validation.signupForm = "#signupForm";

Validation.messagePlacement = {
	onkeyup: false,
	debug: true,
	errorElement: "div",
	success: function(label) {
		label.html("<strong>Ok!</strong>");
		label.parent("div.alert").removeClass("alert-info alert-error").addClass("alert-success");
	},
	errorPlacement: function(error, element) {
		if (element.parent().children("div.alert").length < 1) {
			var help_block = element.parent().children("div.help-block");
			if(help_block.length < 1) {
				element.parent().append("<div class='alert alert-error'>&nbsp;</div>");
			} else {
				help_block.removeClass("help-block muted").addClass("alert alert-error");
			}
			element.next("div.alert").html(error);
		} else {
			element.next("div.alert").html(error);
		}
	},
	highlight: function(element, errorClass, validClass) {
		$(element).next("div.alert").removeClass("alert-info alert-success").addClass("alert-error");
	},
	unhighlight: function(element, errorClass, validClass) {
		$(element).next("div.alert").removeClass("alert-error alert-info").addClass("alert-success");
	}
};

Validation.signupHandleSubmit = {
	submitHandler: function () {
		$("#createUser").button('loading');
		Validation.createUserAccount();
		return false;
	}
};
