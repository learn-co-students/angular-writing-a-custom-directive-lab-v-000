function Tab(){
  return {
    transclude: true,
    scope:{
      label:'@'
    },
    require: '^tabs',
    template: [
      '<div class="tabs__content" ng-if=tab.selected>',
        '<div ng-transclude></div>',
      '</div>'
    ].join(''),
    link: function($scope, elem, attrs, $ctrl){
      $scope.tab = {
        label: $scope.label,
        selected: false
      };
      $ctrl.addTab($scope.tab);
    }
  }
}

angular
  .module('app')
  .directive('tab', Tab)
