function Tab () {
  return {
    restrict: 'E',
    scope: {
      label: '@'
    },
    require: '^^tabs',
    transclude: true,
    template: [
      '<div class="tab-content" ng-if="tab.active">',
        '<div ng-transclude></div>',
      '</div>'
    ].join(''),
    link: function (scope, element, attrs, tabsCtrl) {
      scope.tab = {
        label: scope.label,
        active: false
      };
      tabsCtrl.addTab(scope.tab);
    }
  }
}


angular
  .module('app')
  .directive('tab', Tab);