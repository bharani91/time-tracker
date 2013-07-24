Template.projects.projects = function() {
	return Projects.find({companyId: Session.get("companyId")});
};

Template.viewProject.memberCount = function() {
	return this.team && this.team.length;
}

Template.projects.editingProject = function() {
	return (Session.get("editingProject") && Session.equals("editingProject", this._id));
}

Template.projects.events({
	"click .edit": function(e, t) {
		Session.set("editingProject", this._id);
	},

	"click .revert": function(e, t) {
		Session.set("editingProject", false);
	},

	"click .done-editing, submit form.editForm": function(e, t) {
		e.preventDefault();
		var form = t.find("form"),
			name = t.find(".name").value,
			notes = t.find(".notes").value,
			client = t.find(".client").value,
			team = $(".team").val();

		Projects.update({_id: this._id}, {
			client: client,
			name: name,
			notes: notes,
			team: team,
			companyId: Session.get("companyId")
		});

		form.reset();
		Session.set("editingProject", false);
	},

	"click .delete": function(e, t) {
		Projects.remove({_id: this._id});
	}
});




// Duplication - refactor
Template.editProject.clients = function() {
	return Clients.find({companyId: Session.get("companyId")});
}

Template.editProject.people = function() {
	return Meteor.users.find({companyId: Session.get("companyId")});
}

Template.editProject.addingClient = function() {
	return Session.get("addingClient");
}

Template.editProject.events({
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
	}
});

Template.editProject.rendered = function() {
	$(".team").chosen();
	$(".team").val(this.data.team).trigger("liszt:updated");

}