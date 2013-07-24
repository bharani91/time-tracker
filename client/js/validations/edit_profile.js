
/*==========  EDIT PROFILE  ==========*/

Validation.editUserAccount = function () {
	// get the values form the input elements 
	var firstName = $("#firstName").val();	
	var lastName = $("#lastName").val();	
	var bio = $("#bio").val();	

	Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.firstName": firstName, "profile.lastName": lastName, "profile.bio": bio}});
	$("#editProfileForm div.alert").remove();
	$("#saveEdit").button('reset');
	
	Meteor.Router.to("/users/" + Meteor.userId());
	
};


Validation.editProfileRules = {
	rules: {
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
	}
};


Validation.editProfileMessages = {
	messages: {
		firstName: {
			required: "What is your first name?",
			minlength: "At least 3 chars!",
			maxlength: "no longer then 50 chars!"
		},
		lastName: {
			required: "What is your last name?",
			minlength: "At least 3 chars!",
			maxlength: "no longer then 50 chars!"
		}
	}
};

Validation.editProfileForm = "#editProfileForm";


Validation.editProfileHandleSubmit = {
	submitHandler: function () {
		$("#saveEdit").button('loading');
		Validation.editUserAccount();
		return false;
	}
};

