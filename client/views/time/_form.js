Template.timer_form.helpers({
	date: function() {
		return Session.get("date");
	}
})


Template.timer_form.projects = function() {
	return Projects.find({companyId: Session.get("companyId")});
}

Template.timer_form.addingProject = function() {
	return Session.get("addingProject");
}

Template.timer_form.created = function() {
	Session.set("addingProject", false);
}

Template.timer_form.events({
	"click .show-project-form": function(e, t) {
		e.preventDefault();
		Session.set("addingProject", true);
	},

	"click .hide-project-form": function(e, t) {
		e.preventDefault();
		Session.set("addingProject", false);
	},

	"click .add-project": function(e, t) {
		e.preventDefault();
		var project_name = t.find(".project_name");
		// Projects.insert({
		// 	name: project_name.value,
		// 	companyId: Session.get("companyId")
		// });

		Session.set("selectedProject", project_name.value);
		Session.set("addingProject", false);
	},

	"submit .add_timer_form": function(e, t) {
		e.preventDefault();

		var form = t.find(".add_timer_form"),
			projectId = $(".project"),
			task = t.find(".task"),
			notes = t.find(".notes"),
			time = t.find(".time");

		var project = Projects.findOne({_id: projectId.val()}),
			client = Clients.findOne({_id: project.clientId});

		Timers.insert({
			project: project,
			client: client,
			user: Meteor.user(),
			task: task.value,
			notes: notes.value,
			time: time.value,
			date: Session.get("date")
		})
	}
});

Template.timer_form.rendered = function() {
	$(".project").chosen();
}

Template.projectModal.rendered = function() {
	$(".team").chosen();
}