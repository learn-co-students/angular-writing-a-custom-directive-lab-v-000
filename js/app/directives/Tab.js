function Tab() {
  return {
    transclude: true,
    restrict: 'E',
    scope: {
      label: '@',
    },
    require: '^tabs',
    template: [
      '<div class="tabs__content" ng-if="tab.selected">',
      '<div ng-transclude></div>',
    '</div>'
    ].join(''),
    link: function ($scope,$element, $attrs, $ctrl) {
        $scope.tab = {
          label: $scope.label,
          selected: false
        }
        debugger;
        $ctrl.addTabs($scope.tab);
    }

  }
}
angular
  .module('app')
  .directive('tab', Tab)
