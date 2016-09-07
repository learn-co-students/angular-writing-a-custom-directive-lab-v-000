function Tab() {
  return {
    restrict: 'E',
    scope: {
      label: '@'
    },
    transclude: true,
    require: '^tabs',
    template:
    `
      <div>
        <div class="tabs__content" ng-transclude ng-if="tab.selected">
        </div>
      </div>
    `,
    link: function($scope, $element, $attrs, $ctrl) {
      $scope.tab = {
        label: $scope.label,
        selected: false
      };
      $ctrl.addTab($scope.tab)
    }
  };
}

angular
  .module('app')
  .directive('tab', Tab);