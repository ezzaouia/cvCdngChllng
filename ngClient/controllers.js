exports.SidebarController = function ($scope, $mdBottomSheet, $mdSidenav, $mdDialog, $location, $http, $rootScope) {

  // some global vars.
  $rootScope.selectedSection = null;
  $rootScope.motivationObj = null;

  // load data
  $http
    .get('./data.json').then(function (response) {
      $scope.sections = response.data.content;
      $rootScope.selectedSection = response.data.content[0];
      $rootScope.motivationObj = response.data.content[0];
    });


  // main navigation is handled here
  $scope.navigateTo = function (to, section) {
    $rootScope.selectedSection = section;
    $location.path(to);
  };
}

exports.ToolbarController = function ($scope, $mdSidenav, $rootScope) {
  $scope.toggleSidenav = function (menuId) {
    $mdSidenav(menuId).toggle();
  };
}

// home ctrl
exports.HomeController = function ($scope, $rootScope) {}

// other ctrl
exports.OtherController = function ($scope, $rootScope) {}

// profile ctrl
exports.ProfileController = function ($scope, $rootScope) {}

// educ. ctrl
exports.EducationController = function ($scope, $rootScope) {}

// expr. ctrl 
exports.ExperienceController = function ($scope, $rootScope) {}

// intern. ctrl
exports.InternshipController = function ($scope, $rootScope) {}

// comp. ctrl
exports.CompetenceController = function ($scope, $rootScope) {}