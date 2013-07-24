Handlebars.registerHelper('InnerTabActive', function (route) {
    return (route == Session.get("currentTab")) ? "active" : "";
});


Template.manage.helpers({
	currentTab: function() {
		return Session.get("currentTab") || 'clients' ;
	},
});

