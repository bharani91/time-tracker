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

		Session.set("editingProject", false);
	},

	"click .delete": function(e, t) {
		Projects.remove({_id: this._id});
	}
});


Template.editProject.rendered = function() {
	$(".team").chosen();
	$(".team").val(this.data.team).trigger("liszt:updated");

	$(".notes").val(this.data.notes);
}