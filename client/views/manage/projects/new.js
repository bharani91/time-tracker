Handlebars.registerHelper('selectedClient', function (client) {
    return Session.equals("selectedClient", client) ? "selected='true'" : ""
});


Template.new_project.events({
	"submit form, click .submit-btn": function(e, t) {
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

		form.reset();
		Meteor.Router.to("/manage/projects")

	}
})