Template.timer_list.timers = function() {
	return Timers.find({date: Session.get("date"), user: Meteor.user()});
}

Template.timer_item.isTracking = function() {
	return Session.equals("isTracking", this._id);
}
Template.timer_item.currentTime = function() {
	return Session.get("currentTime");
}

Template.timer_item.events({
	"click .start": function(e, t) {
		e.preventDefault();

		if(Session.get("currentTime") && Session.get("isTracking")) {
			Timers.update({_id: Session.get("isTracking")}, { $set: { time: Session.get("currentTime") }});
			Session.set("isTracking", undefined);
			Session.set("currentTime", undefined);
		}


		Session.set("currentTime", t.data.time);
		$(t.find(".clock")).timer("start");
		Session.set("isTracking", t.data._id);
		
	},

	"click .stop": function(e, t) {
		e.preventDefault();
		$(t.find(".clock")).timer("pause");

		Timers.update({_id: t.data._id}, { 
			$set: { 
				time: Session.get("currentTime") 
			}
		});


		Session.set("isTracking", undefined);
		Session.set("currentTime", undefined);
	},

	"click .remove-timer-item": function(e, t) {
		var response = confirm("Are you sure?")
		if(response) Timers.remove({_id: t.data._id});
	}
})