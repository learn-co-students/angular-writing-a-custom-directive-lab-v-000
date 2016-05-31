function Tab(){
  return {
    restrict: 'E',
    transclude: true, 
    require: '^tabs',
    scope: {
      label: '@'
    },
    template: `
        <div class="tabs__content" ng-if="tab.selected">
          <div ng-transclude></div>
        </div>`,
    link: function($scope, $element, $attrs, $ctrl){
      $scope.tab={
        label: $scope.label,
        selected: false
      }
      $ctrl.addTab($scope.tab)
    }

  }

}


angular 
    .module('app')
    .directive('tab', Tab)