Meteor.Router.add({
	
	'/login': {as: "login", to: function() {
		Session.set("currentPage", 'login');
		return 'login';
	}},

	'/signup': {as: "signup", to: function() {
		Session.set("currentPage", 'signup');
		return 'signup';
	}},

	'/logout': {as: "logout", to: function() {
		Meteor.logout(function(error) {
			if(error) {
				alert("Could not logout!")
			} else {
				Meteor.Router.to("/");        
				Session.set("companyId", undefined);
			}

		});
	}},

	'/reset-password': {as: "reset_password", to: function() {
		Session.set("currentPage", 'recover_email');
		return 'recover_email';
	}},

	'/reset-password/:token': {as: "reset_password_token", to: function(token) {
		Session.set("resetPassword", token);
		Session.set("currentPage", 'password_update');
		return 'password_update';
	}},

	'/enroll-account/:token': function(token) {
		Session.set("resetPassword", token);
		Session.set("currentPage", 'password_update');
		return 'password_update';
	},

	'/users/:id': function(id) {
		Session.set("currentPage", 'viewProfile');
		return 'viewProfile';
	},

	'/users/:id/edit': function(id) {
		Session.set("currentPage", 'editProfile');
		return 'editProfile';
	},

	'/dashboard': function() {
		Session.set("currentPage", 'dashboard');   
		return 'dashboard'
	},
});


Meteor.Router.filters({
	'hasCompanyId': function(page) {
		if(!Meteor.user()) {
			Meteor.Router.to("/login");
		} else if(!Session.get("companyId")) {
			Session.set("companyId", Meteor.user().profile.companyId);
		} else {
			return page;	
		}
	}
});

Meteor.Router.filter('hasCompanyId', { except: ["home", "static_pages", "login", "logout", "reset_password", "reset_password_token", "signup"]});

