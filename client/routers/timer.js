Meteor.Router.add({
	'/time': { 
		as: 'timer', 
		to: function() {
			Session.set("currentPage", "timer");
			Session.set("date", "28 Jul");
			Session.set("day", "Sunday");
			return "timer";
		}
	},

	'/time/date/:date/:month/:year': { 
		as: 'timer', 
		to: function(date, month, year) {
			Session.set("currentPage", "timer");
			//parse date
			// Session.set("date", "");
			// Session.set("day", "Sunday");
			return "timer";
		}
	}
});
