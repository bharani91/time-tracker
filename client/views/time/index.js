Template.timer_header.helpers({
	day: function() {
		return Session.get("day");
	},

	date: function() {
		return Session.get("date");
	}
})


Template.timer.rendered = function() {
	if(Session.get("currentTime") && Session.get("isTracking")) {
		$(window).on('beforeunload', function(){
			return 'You have a timer running.';
			Session.set("isTracking", undefined);
			Session.set("isTracking", undefined);
		});
	}
}

Template.timer_header.rendered = function() {
	$('.calendar').datepicker();
}