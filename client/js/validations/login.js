var LoginErr;


/*==========  LOGIN  ==========*/

Validation.login = function () {
	var username = $("#usernameLogin").val();
	var password = $("#passwordLogin").val();
	Meteor.loginWithPassword(username, password, function (error){
		if (error) {

			if (LoginErr >= 1) {
				$("#main div.alert").fadeOut(100).fadeIn(100);
				LoginErr = LoginErr + 1;
			} else {
				$("form#loginForm").before("<div class='alert alert-error'>Wrong username or password!</div>");
				LoginErr = 1;
			}


			$("#login").button('reset');
		} else {
			Meteor.Router.to("/");
		}
	});
}



Validation.loginRules = {
	rules: {
		usernameLogin: {
			required: true,
			alphanumeric: true,
			minlength: 2
		},
		passwordLogin: {
			required: true,
			minlength: 2
		}
	}
};





Validation.loginMessages = {
	messages: {
		usernameLogin: {
			required: "<strong>Note!</strong> required",
			alphanumeric: "Must be alphanumerical",
			minlength: "must be at least 2 chars"
		}, 
		passwordLogin: {
			required: "<strong>Note!</strong> required",
			minlength: "Must be at least 2 chars"
		}
	}
};


Validation.loginForm = "#loginForm"



Validation.loginHandleSubmit = {
	submitHandler: function () {
		$("#login").button('loading');
		$("#loginForm div .alert").remove();
		Validation.login();
		return false;
	}
};

