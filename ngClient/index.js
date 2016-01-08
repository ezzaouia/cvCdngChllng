var
  controllers = require('./controllers'),
  directives = require('./directives'),
  _ = require('underscore');

var components = angular.module('cvCodingSpeakPlus.components', ['ng']).constant('malarkey', malarkey);

_.each(controllers, function (controller, name) {
  components.controller(name, controller);
});

_.each(directives, function (directive, name) {
  components.directive(name, directive);
});


var app = angular.module('cvCodingSpeakPlus', ['cvCodingSpeakPlus.components', 'ngMaterial', 'ngRoute', 'ngMdIcons', 'ui.materialize', 'ngAnimate']);

app.config(function ($routeProvider, $mdThemingProvider, $mdIconProvider) {
  $routeProvider
    .when('/', {
      controller: 'HomeController',
      templateUrl: './templates/home.html'
    })
    .when('/profile', {
      controller: 'ProfileController',
      templateUrl: './templates/profile.html'
    })
    .when('/education', {
      controller: 'EducationController',
      templateUrl: './templates/education.html'
    })
    .when('/experience', {
      controller: 'ExperienceController',
      templateUrl: './templates/experience.html'
    })
    .when('/internship', {
      controller: 'InternshipController',
      templateUrl: './templates/internship.html'
    })
    .when('/competence', {
      controller: 'CompetenceController',
      templateUrl: './templates/competence.html'
    })
    .when('/other', {
      controller: 'OtherController',
      templateUrl: './templates/other.html'
    })
    .otherwise('/');

  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('indigo')
    .warnPalette('red')
    .backgroundPalette('grey');
});