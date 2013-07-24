Template.new_client.events({
	"submit form": function(e, t) {
		e.preventDefault();
		var form = t.find("form"),
			name = t.find(".name"),
			address = t.find(".address");

		Clients.insert({
			name: name.value,
			address: address.value,
			userId: Meteor.userId()
		});

		form.reset();

		Meteor.Router.to("/manage/clients");
	}
});