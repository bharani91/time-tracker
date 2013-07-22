Meteor.Router.add({
    '/': function() {
        var page = (Meteor.user() ? 'dashboard' : 'home');
        Session.set("currentPage", page);
        return page;
    },

    '/static_pages/:page': function(page) {
        Session.set("currentPage", page);
        return page;
    },

    '/login': function() {
        Session.set("currentPage", 'login');
        return 'login';
    },

    '/signup': function() {
        Session.set("currentPage", 'signup');
        return 'signup';
    },

    '/logout': function() {
        Meteor.logout(function(error) {
            if(error) {
                alert("Could not logout!")
            } else {
                Meteor.Router.to("/");        
            }

        });
    },

    '/reset-password': function() {
        Session.set("currentPage", 'recover_email');
        return 'recover_email';
    },

    '/reset-password/:token': function(token) {
        Session.set("resetPassword", token);
        Session.set("currentPage", 'password_update');
        return 'password_update';
    },

    '/users/:id': function(id) {
        Session.set("currentPage", 'viewProfile');
        return 'viewProfile';
    },

    '/users/:id/edit': function(id) {
        Session.set("currentPage", 'editProfile');
        return 'editProfile';
    },

    '/dashboard': function() {
        Session.set("currentPage", 'dashboard');   
        return 'dashboard'
    },

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



});


Meteor.Router.filters({
    requireLogin: function(page) {
        if (Meteor.user()) {
            return page;
        } else {
            return 'login';
        }
    }
});



// Meteor.Router.filter('requireLogin', {except: ['home', 'signin', 'signup', 'about', 'terms']});