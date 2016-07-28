function Tab() {
  return {
    require: '^tabs',
    scope: {
      label: '@'
    },
    transclude: true,
    template: [
      '<div class="tabs_content" ng-if="tab.selected">',
        '<div ng-transclude></div>',
      '</div>'
    ].join(''),
    controllerAs: 'tabs',
    link: function (scope, element, attrs, ctrl) {
      scope.tab = {
        label: scope.label,
        selected: false
      };
      ctrl.addTab(scope.tab);
    }
  };
}

angular
  .module('app', [])
  .directive('tab', Tab)
  .component('tabs', Tabs)
