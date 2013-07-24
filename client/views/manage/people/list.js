// Handlebars.registerHelper('emailAddress', function(user) {
// 	console.log(user);
// 	if(user && user.emails)
// 		return user.emails[0].address;
// });

Handlebars.registerHelper('selectedRole', function (role) {
    
    return this.role == role ? "selected='true'" : ""
});


Template.people.people = function() {
	return Meteor.users.find({companyId: Session.get("companyId")});
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
			username = t.find(".username"),
			firstName = t.find(".firstName"),
			lastName = t.find(".lastName"),
			role = t.find(".role");


		Meteor.apply("updateUser", [Session.get("editingPerson"), username.value, firstName.value, lastName.value, role.value]);


		Session.set("editingPerson", false);
	},

	"click .delete": function(e, t) {
		Meteor.call("removeUser", this._id);
	}
})