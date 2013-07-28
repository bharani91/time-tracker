Meteor.Router.add({
	'/': { 
		as: 'home', 
		to: function() {
			// var page = (Meteor.user() ? 'dashboard' : 'home');
			// Session.set("currentPage", page);
			// return page;

			Session.set("currentPage", "home");
			return "home";
		}
	},

	'/static_pages/:page': { 
		as: "static_pages",
		to: function(page) {
			Session.set("currentPage", page);
			return page;
		},
	}
});


Meteor.Router.filters({
	requireLogin: function(page) {
		if (Meteor.user()) {
			return page;
		} else {
			return 'login';
		}
	}
});
