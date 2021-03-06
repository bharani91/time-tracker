Template.clients.clients = function() {
	return Clients.find({companyId: Session.get("companyId")});
};

Template.clients.editingClient = function() {
	return (Session.get("editingClient") && Session.equals("editingClient", this._id));
}

Template.clients.events({
	"click .edit": function(e, t) {
		Session.set("editingClient", this._id);
	},

	"click .revert": function(e, t) {
		Session.set("editingClient", false);
	},

	"click .done-editing, submit form.editForm": function(e, t) {
		e.preventDefault();
		var form = t.find("form"),
			name = t.find(".name"),
			address = t.find(".address");

		Clients.update({_id: this._id}, {$set: {
			name: name.value,
			address: address.value
		}});

		Session.set("editingClient", false);
	},

	"click .delete": function(e, t) {
		var resp = confirm("Are you sure?");
		if(resp) Clients.remove({_id: this._id});
	}
})