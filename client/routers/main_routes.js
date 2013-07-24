Meteor.Router.add({
	'/': function() {
		var page = (Meteor.user() ? 'dashboard' : 'home');
		Session.set("currentPage", page);
		return page;
	},

	'/static_pages/:page': function(page) {
		Session.set("currentPage", page);
		return page;
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
