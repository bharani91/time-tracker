Meteor.methods({
	addUser: function(username, email, firstName, lastName, role, companyId) {

		var newUserId = Accounts.createUser({
			username: username, 
			email: email,
			password: "dummy",
			profile: {
				role: role,
				firstName: firstName,
				lastName: lastName,
				companyId: companyId
			}
		});
		
		if(email) {
			Accounts.sendEnrollmentEmail(newUserId);
		}
		
		return newUserId;
	},

	removeUser: function(userId) {
		if(Meteor.user()._id === userId)
			throw new Meteor.Error(401, "Admin can not be removed.");
		Meteor.users.remove(userId);
	},

	updateUser: function(userId, username, firstName, lastName, role) {

		Meteor.users.update(userId, {$set: {
			username: username,
			profile: {
				role: role,
				firstName: firstName,
				lastName: lastName
			}
		}});
		return userId;
	}
})