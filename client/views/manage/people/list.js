Template.people.people = function() {
	return People.find({userId: Meteor.userId()});
};

Template.people.editingPerson = function() {
	return (Session.get("editingPerson") && Session.equals("editingPerson", this._id));
}

Template.people.events({
	"click .edit": function(e, t) {
		Session.set("editingPerson", this._id);
	},

	"click .revert": function(e, t) {
		Session.set("editingPerson", false);
	},

	"click .done-editing, submit form.editForm": function(e, t) {
		e.preventDefault();
		var form = t.find("form"),
			firstName = t.find(".firstName"),
			lastName = t.find(".lastName"),
			email = t.find(".email"),
			department = t.find(".department"),
			role = t.find(".role");

		People.update({_id: this._id}, {$set: {
			firstName: firstName.value,
			lastName: lastName.value,
			email: email.value,
			department: department.value,
			role: role.value
		}});

		Session.set("editingPerson", false);
	},

	"click .delete": function(e, t) {
		People.remove({_id: this._id});
	}
})