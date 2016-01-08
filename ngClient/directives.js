exports.acmeMalarkey = function (malarkey) {
  var directive = {
    restrict: 'E',
    scope: {
      extraValues: '='
    },
    template: '&nbsp;',
    link: linkFunc
  };

  return directive;

  function linkFunc(scope, el) {
    var watcher;
    var typist = malarkey(el[0], {
      typeSpeed: 40,
      deleteSpeed: 40,
      pauseDelay: 800,
      loop: true,
      postfix: ' '
    });

    el.addClass('acme-malarkey');

    angular.forEach(scope.extraValues, function (value) {

      typist.type(value).pause().delete();
    });
  }
};

exports.experienceHeadline = function () {
  return {
    controller: 'ExperienceController',
    templateUrl: './templates/experience_headline_directive.html'
  };
};