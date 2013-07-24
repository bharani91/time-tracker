Template.new_person.events({
	"submit form": function(e, t) {
		e.preventDefault();
		var form = t.find("form"),
			firstName = t.find(".firstName"),
			lastName = t.find(".lastName"),
			email = t.find(".email"),
			department = t.find(".department"),
			role = t.find(".role");

		People.insert({
			firstName: firstName.value,
			lastName: lastName.value,
			email: email.value,
			department: department.value,
			role: role.value,
			userId: Meteor.userId()
		});

		form.reset();

		Meteor.Router.to("/manage/people");
	}
});