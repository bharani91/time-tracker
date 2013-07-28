Template.timer.helpers({
	day: function() {
		return Session.get("day");
	},

	date: function() {
		return Session.get("date");
	}
})