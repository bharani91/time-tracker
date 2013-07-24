Template.new_person.events({
	"submit form": function(e, t) {
		e.preventDefault();
		var form = t.find("form"),
			username = t.find(".username"),
			email = t.find(".email"),
			firstName = t.find(".firstName"),
			lastName = t.find(".lastName"),
			role = t.find(".role");


		Meteor.apply("addUser", [username.value, email.value, firstName.value,lastName.value, role.value, Session.get("companyId")]);

		form.reset();

		Meteor.Router.to("/manage/people");
	}
});