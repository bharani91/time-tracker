Template.project_form.clients = function() {
	return Clients.find({companyId: Session.get("companyId")});
}

Template.project_form.people = function() {
	return Meteor.users.find({companyId: Session.get("companyId")});
}

Template.project_form.addingClient = function() {
	return Session.get("addingClient");
}

Template.project_form.created = function() {
	Session.set("addingClient", false);
}

Template.project_form.events({
	"click .show-client-form": function(e, t) {
		e.preventDefault();
		Session.set("addingClient", true);
	},

	"click .hide-client-form": function(e, t) {
		e.preventDefault();
		Session.set("addingClient", false);
	},

	"click .add-client": function(e, t) {
		e.preventDefault();
		var client_name = t.find(".client_name");

		Clients.insert({
			name: client_name.value,
			companyId: Session.get("companyId")
		});

		Session.set("selectedClient", client_name.value);
		Session.set("addingClient", false);
	}
});

Template.project_form.rendered = function() {
	$(".team").chosen();
}