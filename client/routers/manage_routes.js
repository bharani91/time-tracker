Meteor.Router.add({
	'/manage': function() {
		Session.set("currentPage", 'manage');   
		Session.set("currentTab", 'projects'); 
		return 'manage'
	},

	'/manage/clients': function() {
		Session.set("currentPage", 'manage');   
		Session.set("currentTab", 'clients');   
		return 'manage'
	},

	'/manage/clients/new': function() {
		Session.set("currentPage", 'manage');   
		Session.set("currentTab", 'clients');   
		return 'new_client'
	},


	'/manage/projects': function() {
		Session.set("currentPage", 'manage');   
		Session.set("currentTab", 'projects');   
		return 'manage'
	},




	'/manage/people': function() {
		Session.set("currentPage", 'manage');   
		Session.set("currentTab", 'people');   
		return 'manage'
	},

	'/manage/people/new': function() {
		Session.set("currentPage", 'manage');   
		Session.set("currentTab", 'people');   
		return 'new_person'
	},

})