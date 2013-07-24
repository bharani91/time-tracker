Template.viewProfile.user = function() {
    return Meteor.user();
};


Template.viewProfile.companyName = function() {
	return Company.find({_id: Session.get("companyId")}).fetch()[0]['name'];
}
