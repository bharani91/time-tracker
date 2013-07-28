Meteor.Router.add({
	'/manage': { as: 'manage', to: function() {
		Session.set("currentPage", 'manage');   
		Session.set("currentTab", 'projects'); 
		return 'manage'
	}},



	'/manage/clients': { as: 'manage', to: function() {
		Session.set("currentPage", 'manage');   
		Session.set("currentTab", 'clients');   
		return 'manage'
	}},

	'/manage/clients/new': { as: 'manage', to: function() {
		Session.set("currentPage", 'manage');   
		Session.set("currentTab", 'clients');   
		return 'new_client'
	}},




	'/manage/projects': { as: 'manage', to: function() {
		Session.set("currentPage", 'manage');   
		Session.set("currentTab", 'projects');   
		return 'manage'
	}},
	'/manage/projects/new': { as: 'manage', to: function() {
		Session.set("currentPage", 'manage');   
		Session.set("currentTab", 'projects');   
		return 'new_project'
	}},




	'/manage/people': { as: 'manage', to: function() {
		Session.set("currentPage", 'manage');   
		Session.set("currentTab", 'people');   
		return 'manage'
	}},

	'/manage/people/new': { as: 'manage', to: function() {
		Session.set("currentPage", 'manage');   
		Session.set("currentTab", 'people');   
		return 'new_person'
	}},

})