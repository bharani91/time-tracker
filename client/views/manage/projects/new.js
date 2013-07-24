Handlebars.registerHelper('selectedClient', function (client) {
    return Session.equals("selectedClient", client) ? "selected='true'" : ""
});



Template.new_project.clients = function() {
	return Clients.find({companyId: Session.get("companyId")});
}

Template.new_project.people = function() {
	return Meteor.users.find({companyId: Session.get("companyId")});
}

Template.new_project.addingClient = function() {
	return Session.get("addingClient");
}

Template.new_project.events({
	"click .show-client-form": function(e, t) {
		Session.set("addingClient", true);
	},

	"click .hide-client-form": function(e, t) {
		Session.set("addingClient", false);
	},

	"click .add-client": function(e, t) {
		e.preventDefault();
		var client_name = t.find(".client_name");

		Clients.insert({
			name: client_name.value,
			companyId: Session.get("companyId")
		})
		Session.set("selectedClient", client_name.value);
		Session.set("addingClient", false);
	},
	"submit form": function(e, t) {
		e.preventDefault();
		var form = t.find("form"),
			name = t.find(".name").value,
			notes = t.find(".notes").value,
			client = t.find(".client").value,
			team = $(".team").val();

		Projects.insert({
			client: client,
			name: name,
			notes: notes,
			team: team,
			companyId: Session.get("companyId")
		});

		// Clients.insert({
		// 	name: name.value,
		// 	address: address.value,
		// 	companyId: Session.get("companyId")
		// });

		form.reset();
		Meteor.Router.to("/manage/projects")

	}
});

Template.new_project.rendered = function() {
	$(".team").chosen();
}