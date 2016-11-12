function tab() {
  return {
      transclude: true,
      require:  '^tabs' ,
      scope: {
        label: '@'
      },
      link: function (scope, element, attrs, ctrl) {
         ctrl.addTab(scope);
       },
      template: [
        '<div class="tabs__content" ng-if="selected">',
        '<div ng-transclude></div>',
        '</div>'
      ].join('')

    };
  }
  angular
  .module('app')
  .directive('tab', tab);
