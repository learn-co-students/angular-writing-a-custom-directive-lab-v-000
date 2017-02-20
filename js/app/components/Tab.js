var Tab = {
    require: {
      parent: '^tabs'
    },
    bindings: {
      label: '@'
    },
    transclude: true,
    template: [
      '<div class="tabs__content" ng-if="tab.selected">',
        '<div ng-transclude></div>',
      '</div>'
    ].join(''),
    controller: function($scope) {
      this.tabsCtrl = $scope.$parent.$parent.tabs;

      $scope.tab = {
        label: $scope.tab.label,
        selected: false
      };
      this.tabsCtrl.addTab($scope.tab);
      this.tabsCtrl.selectTab(0);
      debugger;
    }
}

angular
  .module('app')
  .component('tab', Tab)
